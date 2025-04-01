import React, { useState } from "react";
import { TextArea } from "nudge-library";

export default function DynamicTextArea() {
  const originalNudge = "Small steps lead to big changes!";
  const [reflection, setReflection] = useState<string>("");
  const [nudgeMessage, setNudgeMessage] = useState<string>(originalNudge);

  const handleReflectionChange = (value: string): void => {
    setReflection(value);
  };

  const handleCommit = (): void => {
    setNudgeMessage("Reflection saved!");
    setTimeout(() => {
      setNudgeMessage(originalNudge);
    }, 5000);
  };

  const handleBlur = (): void => {
    handleCommit();
  };

  const renderNudge = () => {
    return <span>{nudgeMessage}</span>;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <TextArea
        textAreaLabel="Daily Reflection"
        placeholder="Share the thoughts on today's progress and any target adjustments..."
        value={reflection}
        onChange={handleReflectionChange}
        onBlur={handleBlur}
        renderNudge={renderNudge}
        nudgePosition="bottom"
      />
      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        This text area allows to write daily reflections. When the text area
        loses focus, the reflection is committed. The motivational nudge below
        then updates to a confirmation message. After a short delay, the
        original nudge is restored.
      </p>
    </div>
  );
}
