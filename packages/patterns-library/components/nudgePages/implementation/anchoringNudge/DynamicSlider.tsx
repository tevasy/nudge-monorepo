import React, { useState } from "react";
import { Slider } from "nudge-components-library";

export default function DynamicSlider() {
  const [savingsPercent, setSavingsPercent] = useState(10);
  const [showNudge, setShowNudge] = useState(false);

  const handleFocus = () => {
    setShowNudge(true);
  };

  const handleBlur = () => {
    setShowNudge(false);
  };

  const handleCommit = (value: number) => {
    setSavingsPercent(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Slider
        id="savings-slider"
        ariaLabel="Savings Percentage slider"
        sliderLabel="Set the savings goal:"
        min={0}
        max={100}
        step={1}
        value={savingsPercent}
        onChange={(val) => setSavingsPercent(val)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCommit={handleCommit}
        nudgeVisible={showNudge}
        nudgePosition="bottom"
        renderNudge={(value) => (
          <div>
            {value < 20
              ? "Consider increasing your savings for a better future."
              : value < 50
              ? "A good balance! Keep it up."
              : "Great job! You're saving a lot."}
          </div>
        )}
      />
      <p style={{ fontSize: "0.875rem" }}>
        When the slider is focused, a nudge message appears below it, changing
        dynamically as the slider is adjusted. Once the slider loses focus, the
        new value is committed and stored.
      </p>
    </div>
  );
}
