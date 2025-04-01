import React, { useState } from "react";
import { MoodSlider } from "nudge-library";

const moodDefinitions = [
  { id: "confused", icon: "😕", label: "Confused", threshold: 33 },
  { id: "reflective", icon: "🤔", label: "Reflective", threshold: 66 },
  { id: "enlightened", icon: "🤩", label: "Enlightened" },
];

function getMoodLabel(value: number): string {
  for (let mood of moodDefinitions) {
    if (mood.threshold !== undefined && value <= mood.threshold) {
      return mood.label;
    }
  }
  return moodDefinitions[moodDefinitions.length - 1].label;
}

export default function AdaptiveMoodSlider() {
  const storedMoodStr = localStorage.getItem("preferredLessonMood");
  const initialMood = storedMoodStr === null ? 50 : Number(storedMoodStr);

  const [currentMood, setCurrentMood] = useState<number>(initialMood);
  const [previousMood, setPreviousMood] = useState<number>(initialMood);

  const handleMoodChange = (value: number): void => {
    setCurrentMood(value);
    localStorage.setItem("preferredLessonMood", value.toString());
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const newValue = Number(event.target.value);
    setPreviousMood(newValue);
  };

  const currentMoodLabel = getMoodLabel(currentMood);
  const previousMoodLabel = getMoodLabel(previousMood);

  const adaptiveNudgeText: string =
    currentMoodLabel === previousMoodLabel
      ? `Self-assessment remains at ${currentMoodLabel}. Take moment to summarize key takeaways from the lesson.`
      : currentMood < previousMood
      ? `Self-assessment dropped from ${previousMoodLabel} to ${currentMoodLabel}. Consider revisiting challenging concepts for greater clarity.`
      : `Self-assessment increased from ${previousMoodLabel} to ${currentMoodLabel}. Great progress!`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <MoodSlider
        sliderLabel="Reflect on the lesson:"
        moodDefinitions={moodDefinitions}
        min={0}
        max={100}
        value={currentMood}
        onChange={handleMoodChange}
        onBlur={handleBlur}
        renderNudge={() => adaptiveNudgeText}
        tooltipMode="text"
      />
      <p style={{ fontSize: "0.875rem" }}>
        This slider adjusts based on the previous self-assessed mood. Once the
        slider loses focus, the new value is saved and used as a reference point
        for future comparisons. Dynamic nudge text indicates whether
        understanding has improved, declined, or stayed consistent.
      </p>
    </div>
  );
}
