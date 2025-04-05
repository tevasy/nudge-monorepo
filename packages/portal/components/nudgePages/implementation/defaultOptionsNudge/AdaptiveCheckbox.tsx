import React, { useState } from "react";
import { Checkbox } from "nudge-library";

export default function AdaptiveCheckbox() {
  const hour = new Date().getHours();
  const [isDarkMode, setIsDarkMode] = useState(hour >= 18);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Checkbox
        checkboxLabel="Adaptive Dark Mode"
        id="dark-mode-checkbox"
        ariaLabel="Enable dark mode"
        checked={isDarkMode}
        label="Enable Dark Mode"
        renderNudge={(isDarkMode) =>
          isDarkMode
            ? "It's after 18:00. Dark Mode is active to reduce eye strain at night."
            : "It's before 18:00. Dark Mode is off, but can be activated."
        }
        onChange={(checked: boolean) => setIsDarkMode(checked)}
      />
      <p style={{ fontSize: "0.875rem" }}>
        After 18:00, this box is checked by default, encouraging the use of Dark
        Mode in the evening to reduce eye strain and promote better relaxation.
        It can be manually toggled if desired.
      </p>
    </div>
  );
}
