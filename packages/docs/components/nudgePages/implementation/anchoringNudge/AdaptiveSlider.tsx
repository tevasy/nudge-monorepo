import React, { useState } from "react";
import { Slider } from "nudge-library/anchoring";

export default function AdaptiveSlider() {
  // Retrieve the previous volume from localStorage.
  // If no previous value exists, default to 50.
  const storedVolume = Number(localStorage.getItem("preferredVolume"));
  const initialVolume = isNaN(storedVolume) ? 50 : storedVolume;

  // Local state to track the current volume selection.
  const [volume, setVolume] = useState<number>(initialVolume);
  // Keep track of the previous volume to compare changes.
  const [previousVolume, setPreviousVolume] = useState<number>(initialVolume);

  // When the slider value changes, update the state and local storage.
  const handleVolumeChange = (value: number): void => {
    setVolume(value);
    localStorage.setItem("preferredVolume", value.toString());
  };

  // When the slider loses focus, update the previousVolume to the current value.
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const newValue = Number(event.target.value);
    setPreviousVolume(newValue);
  };

  // Compute the adaptive nudge text based on the current and previous volume.
  const adaptiveNudgeText: string =
    volume < previousVolume
      ? `The volume tends to be higher with value ${previousVolume}%. Current setting: ${volume}%.`
      : volume > previousVolume
      ? `Lower volume is typically set at ${previousVolume}%. Current setting: ${volume}%.`
      : `Volume is set at ${volume}%.`;

  return (
    <div>
      <Slider
        sliderLabel="Volume Control"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
        onBlur={handleBlur}
        renderNudge={() => adaptiveNudgeText}
      />
      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        This slider adjusts based on the previous selection. Once adjustment is
        complete and the slider loses focus, the selection is saved as the new
        anchor for future adjustments. Dynamic nudge text informs the user if
        the volume increased, decreased, or remained the same.
      </p>
    </div>
  );
}
