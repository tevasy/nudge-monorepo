import React, { useState, useEffect } from "react";
import { Tooltip } from "nudge-library";

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
      <p className="font-medium">Select the answer:</p>
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
            padding: "0.6rem 1.2rem",
            fontSize: "0.875rem",
            border: "2px solid #1b8dff",
            boxShadow: "#1b8dff45 0px 2px 8px 0px",
            borderRadius: "10px",
            backgroundColor: "white",
            cursor: "pointer",
            width: "100%",
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
          <button
            onClick={handleWrongAnswer}
            style={{
              padding: "0.6rem 1.2rem",
              fontSize: "0.875rem",
              border: "2px solid #fb8500",
              boxShadow: "#fb850045 0px 2px 8px 0px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Wrong Answer
          </button>
        </Tooltip>
      </div>
      <p style={{ fontSize: "0.875rem" }}>
        Pressing the "Wrong Answer" button triggers a tooltip that encourages to
        review the selected answer. The tooltip remains visible until dismissed
        via the "Retry" button, close icon, or clicking outside. Clicking the
        "Correct Answer" button changes its text for 5 seconds.
      </p>
    </div>
  );
}
