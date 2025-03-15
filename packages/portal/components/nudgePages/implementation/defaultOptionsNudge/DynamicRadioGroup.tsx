import { useState } from "react";
import { RadioGroup, ThemeProvider, defaultTheme } from "nudge-library";
import { FiCheck } from "react-icons/fi";

export default function DynamicRadioGroup() {
  const [selectedQuality, setSelectedQuality] = useState("medium");
  const [focusedOption, setFocusedOption] = useState<string | null>(null);

  const radioOptions = [
    { value: "low", label: "Low Quality" },
    { value: "medium", label: "Medium Quality" },
    { value: "high", label: "High Quality" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p style={{ fontWeight: "500" }}>Select preferred quality:</p>
      {radioOptions.map((option) => {
        const customTheme = {
          ...defaultTheme,
          radio: {
            ...defaultTheme.radio,
            label: {
              ...defaultTheme.radio.label,
              fontWeight: focusedOption === option.value ? "500" : "400",
            },
            nudgeText: {
              ...defaultTheme.radio.nudgeText,
              fontWeight: focusedOption === option.value ? "500" : "400",
            },
          },
        };
        return (
          <ThemeProvider key={option.value} theme={customTheme}>
            <RadioGroup
              id={`quality-${option.value}`}
              name="quality"
              label={option.label}
              value={option.value}
              checked={selectedQuality === option.value}
              onChange={setSelectedQuality}
              onFocus={() => setFocusedOption(option.value)}
              onBlur={() => setFocusedOption(null)}
              nudgePosition="bottom"
              renderNudge={(checked) =>
                checked ? (
                  <>
                    <FiCheck
                      style={{ marginRight: "0.125rem", strokeWidth: "2.5" }}
                    />
                    The {option.label.toLowerCase()} is selected.
                  </>
                ) : (
                  <>
                    {option.value === "high"
                      ? "High quality the best experience."
                      : option.value === "medium"
                      ? "Medium quality balance and performance."
                      : "Low quality optimal performance."}
                  </>
                )
              }
            />
          </ThemeProvider>
        );
      })}
      <p style={{ fontSize: "0.875rem" }}>
        Selecting an option triggers{" "}
        <code style={{ fontSize: "0.813rem" }}>renderNudge</code> with nudge
        text confirming the choice. If not selected, the nudge text highlights
        its benefits. Focusing on the option makes label bolder with{" "}
        <code style={{ fontSize: "0.813rem" }}>onFocus</code> to make the
        interaction state clear. Clicking outside removes the focus with{" "}
        <code style={{ fontSize: "0.813rem" }}>onBlur</code>.
      </p>
    </div>
  );
}
