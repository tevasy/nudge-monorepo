import React, { useState, useEffect } from "react";
import { Tooltip } from "nudge-components-library";

export default function DynamicTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [correctClicked, setCorrectClicked] = useState(false);

  const handleWrongAnswer = () => {
    setShowTooltip(true);
  };

  const handleCorrectAnswer = () => {
    setShowTooltip(false);
    setCorrectClicked(true);
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (correctClicked) {
      timer = setTimeout(() => {
        setCorrectClicked(false);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [correctClicked]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <p style={{ fontWeight: "500" }}>Select the answer:</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <button
          onClick={handleCorrectAnswer}
          style={{
            width: "100%",
            padding: "10px 20px",
            fontSize: "0.875rem",
            fontWeight: 500,
            border: "2px solid #1b8dff",
            boxShadow: "#1b8dff45 0px 2px 8px 0px",
            borderRadius: "5px",
            backgroundColor: "white",
            cursor: "pointer",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
          }}
        >
          {correctClicked ? "Well done!" : "Correct Answer"}
        </button>

        <Tooltip
          visible={showTooltip}
          onClose={handleTooltipClose}
          onButtonClick={handleTooltipClose}
          text="Take a moment to double-check the answer. Try again, almost there!"
          position="bottom"
          dismissible
          closeOutside
          closeOnHover={false}
          ariaLabel="Wrong answer tooltip"
          buttonText="Retry"
        >
          <button onClick={handleWrongAnswer} className="button-popup">
            Wrong Answer
          </button>
        </Tooltip>
      </div>
      <p style={{ fontSize: "0.875rem" }}>
        Pressing the &quot;Wrong Answer&quot; button triggers a tooltip that
        encourages to review the selected answer. The tooltip remains visible
        until dismissed via the &quot;Retry&quot; button, close icon, or
        clicking outside. Clicking the &quot;Correct Answer&quot; button changes
        its text for 5 seconds.
      </p>
    </div>
  );
}
