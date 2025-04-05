import { useState } from "react";
import { Checkbox, ThemeProvider, defaultTheme } from "nudge-library";

export default function DynamicCheckbox() {
  const [audioDescriptions, setAudioDescriptions] = useState(true);
  const [courseMaterials, setCourseMaterials] = useState(false);
  const [isAudioFocused, setIsAudioFocused] = useState(false);

  const customTheme = {
    ...defaultTheme,
    checkbox: {
      ...defaultTheme.checkbox,
      label: {
        ...defaultTheme.checkbox.label,
        ...(isAudioFocused ? { fontWeight: "500" } : {}),
      },
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <ThemeProvider theme={customTheme}>
          <Checkbox
            checkboxLabel="Dynamic Audio Descriptions"
            id="audioDescriptions"
            ariaLabel="Enable audio descriptions"
            label="Audio Descriptions"
            checked={audioDescriptions}
            onChange={setAudioDescriptions}
            onFocus={() => setIsAudioFocused(true)}
            onBlur={() => setIsAudioFocused(false)}
            renderNudge={(checked) =>
              checked
                ? "Audio descriptions are active."
                : "Enable audio descriptions for improved accessibility."
            }
          />
        </ThemeProvider>
        <p style={{ fontSize: "0.875rem", marginTop: "1rem" }}>
          The label is bolder onFocus and returns to normal onBlur. When
          checked, the nudge confirms audio descriptions are active. When
          unchecked, it suggests enabling them for better accessibility. Each
          nudge is rendered using renderNudge.
        </p>
      </div>
      <div>
        <Checkbox
          checkboxLabel="Dynamic Course Materials"
          id="courseMaterials"
          ariaLabel="Receive additional course materials"
          label="Receive Additional Course Materials"
          checked={courseMaterials}
          onChange={setCourseMaterials}
          nudgeVisible={!courseMaterials}
          nudgeText={
            "Improve your learning by receiving supplementary materials."
          }
        />
        <p style={{ fontSize: "0.875rem", marginTop: "1rem" }}>
          When unchecked, this checkbox displays a nudge text suggesting
          additional materials for learning. Once checked, the nudge disappears
          using <code style={{ fontSize: "0.813rem" }}>nudgeVisible</code> to
          keep the interface clean.
        </p>
      </div>
    </div>
  );
}
