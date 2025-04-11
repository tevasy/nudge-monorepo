import React, { useState } from "react";
import { Slider } from "nudge-components-library";

export default function AdaptiveSlider() {
  const storedVolumeStr = localStorage.getItem("preferredVolume");
  const initialVolume = storedVolumeStr === null ? 10 : Number(storedVolumeStr);

  const [volume, setVolume] = useState<number>(initialVolume);
  const [previousVolume, setPreviousVolume] = useState<number>(initialVolume);

  const handleVolumeChange = (value: number): void => {
    setVolume(value);
    localStorage.setItem("preferredVolume", value.toString());
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const newValue = Number(event.target.value);
    setPreviousVolume(newValue);
  };

  const adaptiveNudgeText: string =
    volume < previousVolume
      ? `The volume tends to be higher with value ${previousVolume}%. Current setting: ${volume}%.`
      : volume > previousVolume
      ? `Lower volume is typically set at ${previousVolume}%. Current setting: ${volume}%.`
      : `Volume is set at ${volume}%.`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Slider
        sliderLabel="Volume Control"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
        onBlur={handleBlur}
        renderNudge={() => adaptiveNudgeText}
      />
      <p style={{ fontSize: "0.875rem" }}>
        This slider adjusts based on the previous selection. Once adjustment is
        complete and the slider loses focus, the selection is saved as the new
        anchor for future adjustments. Dynamic nudge text informs the user if
        the volume increased, decreased, or remained the same.
      </p>
    </div>
  );
}
