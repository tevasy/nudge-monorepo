import { useState } from "react";
import {
  DropdownMenu,
  ThemeProvider,
  defaultTheme,
} from "nudge-components-library";

export default function DynamicDropdownMenu() {
  const [learningPreference, setLearningPreference] = useState("video");
  const [isFocused, setIsFocused] = useState(false);

  const learningOptions = [
    {
      label: "Video Tutorials",
      value: "video",
      nudgeText: "Ideal for visual learners.",
    },
    {
      label: "Interactive Quizzes",
      value: "quiz",
      nudgeText: "Engage actively with your content.",
    },
    {
      label: "Reading",
      value: "reading",
      nudgeText: "Best for detailed study sessions.",
    },
    {
      label: "Podcasts",
      value: "podcast",
      nudgeText: "Convenient for learning on-the-go.",
    },
  ];

  const customTheme = {
    ...defaultTheme,
    dropdown: {
      ...defaultTheme.dropdown,
      button: {
        ...defaultTheme.dropdown.button,
        fontWeight: isFocused ? "500" : "400",
        color: isFocused ? "#1b8dff" : "#002952",
      },
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ThemeProvider theme={customTheme}>
        <DropdownMenu
          dropdownLabel="Select preferred learning method:"
          id="learningPreferenceDropdown"
          ariaLabel="Select your preferred learning method"
          options={learningPreference ? learningOptions : []}
          selected={learningPreference}
          onChange={(selectedOption) => setLearningPreference(selectedOption)}
          placeholder="Select learning preference"
          renderNudge={(option) =>
            option?.value !== learningPreference ? option?.nudgeText : undefined
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </ThemeProvider>
      <p style={{ fontSize: "0.875rem" }}>
        Nudge text via <code style={{ fontSize: "0.813rem" }}>renderNudge</code>{" "}
        guides decisions for unselected options. When the dropdown is focused,
        the label inside dropdown changes its color with{" "}
        <code style={{ fontSize: "0.813rem" }}>onFocus</code>. It reverts back
        with <code style={{ fontSize: "0.813rem" }}>onBlur</code> by clicking
        outside the dropdown.
      </p>
    </div>
  );
}
