import React, { useState } from "react";
import { Slider } from "nudge-library";

export default function DynamicSlider() {
  const [savingsPercent, setSavingsPercent] = useState(10);
  const [showNudge, setShowNudge] = useState(false);

  // When the user focuses on the slider, show the nudge
  const handleFocus = () => {
    setShowNudge(true);
  };

  // When the slider loses focus, hide the nudge
  const handleBlur = () => {
    setShowNudge(false);
  };

  // When the user finishes adjusting the slider, update the savings percentage
  const handleCommit = (value: number) => {
    setSavingsPercent(value);
  };

  return (
    <div>
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
      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        When the slider is focused, a nudge message appears below it, changing
        dynamically as the slider is adjusted. Once the slider loses focus, the
        new value is committed and stored.
      </p>
    </div>
  );
}
