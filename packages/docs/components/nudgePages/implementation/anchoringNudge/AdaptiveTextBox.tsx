import React, { useState } from "react";
import { TextBox } from "nudge-library";

export default function AdaptiveTextBox() {
  // Determine default duration based on the current time of day.
  const currentHour = new Date().getHours();
  let defaultDuration: string;
  let initialNudgeText: string;

  if (currentHour < 12) {
    defaultDuration = "30";
    initialNudgeText =
      "Good morning! Start your day with a focused 30-minute study session.";
  } else if (currentHour < 18) {
    defaultDuration = "60";
    initialNudgeText =
      "Good afternoon! A 60-minute study session can help maintain your momentum.";
  } else {
    defaultDuration = "90";
    initialNudgeText =
      "Good evening! Consider a 90-minute study session to dive deeper into your material.";
  }

  // Local state to track the current duration input and adaptive nudge text.
  const [duration, setDuration] = useState(defaultDuration);
  const [adaptiveNudgeText, setAdaptiveNudgeText] = useState(initialNudgeText);

  // Update the duration as the user types, only allowing numeric input.
  const handleChange = (value: string): void => {
    // Allow empty value or value containing only digits.
    if (value === "" || /^\d*$/.test(value)) {
      setDuration(value);
      const numericValue = Number(value);
      if (value !== "" && !isNaN(numericValue)) {
        if (numericValue < 20) {
          setAdaptiveNudgeText(
            "A very short study session. Consider increasing study time for better results."
          );
        } else if (numericValue > 120) {
          setAdaptiveNudgeText(
            "That is a long session! Make sure to take breaks to avoid burnout."
          );
        } else {
          setAdaptiveNudgeText(
            "That is an appropriate duration for a study session. Keep it up!"
          );
        }
      }
    }
  };

  // When the user commits the change (on blur), only commit if the value is a valid number.
  const handleCommit = (value: string): void => {
    const numericValue = Number(value);
    if (value.trim() === "" || isNaN(numericValue)) return;
    setAdaptiveNudgeText(
      `Study duration successfully set to ${value} minutes. Good luck!`
    );
  };

  return (
    <div>
      <TextBox
        textBoxLabel="Study Duration (minutes)"
        value={duration}
        onChange={handleChange}
        onCommit={handleCommit}
        renderNudge={() => <span>{adaptiveNudgeText}</span>}
      />
      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        This adaptive text box sets its default study duration based on the time
        of day, such as morning, afternoon, or evening. The nudge message is
        adjusted based on provided input. The value is confirmed when the text
        box loses focus. Additionally, non-numeric values and empty entries are
        not committed.
      </p>
    </div>
  );
}
