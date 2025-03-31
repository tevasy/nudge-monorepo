import React, { useState } from "react";
import { Tooltip, DropdownMenu } from "nudge-library";

const AdaptiveTooltip = () => {
  const [performance, setPerformance] = useState("neutral");
  const [context, setContext] = useState("onboarding");

  const contextOptions = [
    { label: "Onboarding", value: "onboarding" },
    { label: "Skill Building", value: "skillBuilding" },
  ];

  const performanceOptions = [
    { label: "Struggling", value: "struggling" },
    { label: "Neutral", value: "neutral" },
    { label: "Successful", value: "excelling" },
  ];

  const getTooltipMessage = () => {
    if (context === "onboarding") {
      if (performance === "struggling") {
        return "Starting something can feel overwhelming. Take it one step at a time.";
      } else if (performance === "excelling") {
        return "Great job! Feel free to seek more information if needed.";
      } else {
        return "Welcome! Begin at a comfortable pace.";
      }
    } else if (context === "skillBuilding") {
      if (performance === "struggling") {
        return "Every challenge builds a stronger foundation, continue and see improvement!";
      } else if (performance === "excelling") {
        return "Amazing work! The progress is impressive, keep going!";
      } else {
        return "Consistent practice leads to noticeable progress.";
      }
    }
    return "";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <DropdownMenu
        dropdownLabel="Choose Context:"
        id="experienceDropdown"
        ariaLabel="experienceDropdown"
        options={contextOptions}
        selected={context}
        onChange={(value) => setContext(value)}
        placeholder="Select the context"
      />

      <DropdownMenu
        dropdownLabel="Choose Performance:"
        id="performanceDropdown"
        ariaLabel="performanceDropdown"
        options={performanceOptions}
        selected={performance}
        onChange={(value) => setPerformance(value)}
        placeholder="Select performance level"
      />

      <Tooltip
        text={getTooltipMessage()}
        defaultVisible={true}
        position="dynamic"
        animationType="slide"
        animationDuration={300}
      >
        <button
          style={{
            display: "block",
            padding: "0.6rem 1.2rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "white",
            background: "#007fff",
            borderRadius: "10px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Hover here
        </button>
      </Tooltip>

      <p style={{ fontSize: "0.875rem" }}>
        This adaptive tooltip changes its message based on the selected context
        (onboarding or skill building) and simulated user performance
        (struggling, neutral, or excelling). In a real-world application, this
        data could be sourced from user analytics or backend APIs.
      </p>
    </div>
  );
};

export default AdaptiveTooltip;
