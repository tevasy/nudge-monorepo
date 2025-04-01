import React, { useState } from "react";
import { MoodSlider } from "nudge-library";

const workoutMoodDefinitions = [
  { id: "exhausted", icon: "😫", label: "Exhausted", threshold: 20 },
  { id: "tired", icon: "😓", label: "Tired", threshold: 40 },
  { id: "energized", icon: "💪", label: "Energized", threshold: 60 },
  { id: "refreshed", icon: "🤩", label: "Refreshed", threshold: 80 },
  { id: "amazing", icon: "😁", label: "Amazing", threshold: 100 },
];

export const DynamicMoodSlider: React.FC = () => {
  const [moodValue, setMoodValue] = useState<number>(50);
  const [selectedMood, setSelectedMood] = useState<string>("energized");

  const handleMoodChange = (moodId: string) => {
    setSelectedMood(moodId);
  };

  const handleSliderChange = (value: number) => {
    setMoodValue(value);
  };

  const renderNudge = (value: number) => {
    const currentMood =
      workoutMoodDefinitions.find((m) => m.id === selectedMood) ||
      workoutMoodDefinitions[0];

    let baseText = "";
    if (value < 20) baseText = "Rest up.";
    else if (value < 40) baseText = "Slow down next time.";
    else if (value < 60) baseText = "Keep it up!";
    else if (value < 80) baseText = "Good progress!";
    else baseText = "Great job!";
    return `Feeling ${currentMood.label}? ${baseText}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <MoodSlider
        sliderLabel="Post-workout mood"
        moodDefinitions={workoutMoodDefinitions}
        value={moodValue}
        onChange={handleSliderChange}
        onCommit={handleSliderChange}
        onMoodChange={handleMoodChange}
        tooltipMode="text"
        showIcon={true}
        renderNudge={renderNudge}
      />
      <p style={{ fontSize: "0.875rem" }}>
        This mood slider reflects how a user feels after a workout. As the
        slider is adjusted, a dynamic nudge message appears beneath it,
        combining mood-specific feedback with a motivational message. The mood
        icon and label update based on the slider value.
      </p>
    </div>
  );
};

export default DynamicMoodSlider;
