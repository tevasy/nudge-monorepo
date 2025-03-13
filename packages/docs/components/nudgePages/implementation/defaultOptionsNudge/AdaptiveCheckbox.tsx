import React, { useState } from "react";
import { Checkbox } from "nudge-library/default-options";

export default function DarkModeCheckbox() {
  const hour = new Date().getHours();
  const [isDarkMode, setIsDarkMode] = useState(hour >= 18);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <Checkbox
        checkboxLabel="Adaptive Dark Mode"
        id="dark-mode-checkbox"
        ariaLabel="Enable dark mode"
        checked={isDarkMode}
        label="Enable Dark Mode"
        renderNudge={(isDarkMode) =>
          isDarkMode
            ? "It's after 6 PM. Dark Mode is active to reduce eye strain at night."
            : "It's before 6 PM. Dark Mode is off, but can be activated."
        }
        onChange={(checked: boolean) => setIsDarkMode(checked)}
      />
      <p style={{ fontSize: "0.875rem" }}>
        After 6 PM, this box is checked by default, encouraging the use of Dark
        Mode in the evening to reduce eye strain and promote better relaxation.
        It can be manually toggled if desired.
      </p>
    </div>
  );
}
