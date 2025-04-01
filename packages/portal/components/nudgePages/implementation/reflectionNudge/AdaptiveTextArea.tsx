import React, { useState } from "react";
import { TextArea } from "nudge-library";

export default function AdaptiveTextArea() {
  const getTimeBasedGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    else if (hour < 18) return "Good afternoon!";
    else return "Good evening!";
  };

  const initialNudgeText = `${getTimeBasedGreeting()} Reflect on today's lesson: what are the key takeaways?`;

  const [reflection, setReflection] = useState<string>("");
  const [adaptiveNudgeText, setAdaptiveNudgeText] =
    useState<string>(initialNudgeText);
  const [reflectionCount, setReflectionCount] = useState<number>(0);

  const handleChange = (value: string): void => {
    setReflection(value);
    const len = value.trim().length;
    if (len === 0) {
      setAdaptiveNudgeText("The reflection is empty. Summarize the takeaways.");
    } else if (len < 30) {
      setAdaptiveNudgeText(
        "Consider adding more details to capture the thoughts."
      );
    } else if (len < 100) {
      setAdaptiveNudgeText(
        "Good start! Maybe elaborate a bit more on the lesson."
      );
    } else {
      setAdaptiveNudgeText("Great detailed reflection!");
    }
  };

  const handleCommit = (value: string): void => {
    if (value.trim() === "") return;
    const newCount = reflectionCount + 1;
    setReflectionCount(newCount);
    setAdaptiveNudgeText(`Reflection #${newCount} saved!`);
    setReflection("");
    setTimeout(() => {
      setAdaptiveNudgeText(
        `${getTimeBasedGreeting()} Reflect on today's lesson: what are the key takeaways?`
      );
    }, 5000);
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    setAdaptiveNudgeText("Take a time to reflect. What was learned today?");
    e.target.select();
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    if (e.target.value.trim() !== "") {
      handleCommit(e.target.value);
    }
  };

  const renderNudge = (_value: string) => {
    return <span>{adaptiveNudgeText}</span>;
  };

  return (
    <div>
      <TextArea
        textAreaLabel="Daily Lesson Reflection"
        placeholder="Summarize key takeaways from today's lesson"
        value={reflection}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCommit={handleCommit}
        renderNudge={renderNudge}
        nudgePosition="bottom"
      />
      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        This adaptive text area adjusts nudge message based on the reflection's
        length, the number of reflections submitted, and the time of day. As
        text is entered, the message evolves. A time-appropriate greeting
        appears when the component loads or resets after a reflection is saved.
        When the text area is focused, it selects existing text, and a nudge
        message invites to reflect. Any present text is automatically committed
        upon losing focus.
      </p>
    </div>
  );
}
