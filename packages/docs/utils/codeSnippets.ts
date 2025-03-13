export const checkboxSnippet = `import { Checkbox, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  checkbox: {
    ...defaultTheme.checkbox,
    label: { ...defaultTheme.checkbox.label, fontWeight: "500" },
    checked: {
      ...defaultTheme.checkbox.checked,
      backgroundColor: "#fb8500",
      border: "#fb8500"
    },
    nudgeText: { ...defaultTheme.checkbox.nudgeText, backgroundColor: "#ffe5cf" }
  }
};

export default function CheckboxExample() {
  return (
    <div>
      <Checkbox
        checkboxLabel="Default version"
        id="bedtimeReminderDefault"
        defaultChecked={true}
        ariaLabel="Set bedtime reminder"
        label="Set bedtime reminder"
        nudgeText="Good sleep supports mental and physical well-being."
      />
      <ThemeProvider theme={customTheme}>
        <Checkbox
          checkboxLabel="Custom version"
          id="bedtimeReminderCustom"
          defaultChecked={true}
          ariaLabel="Set bedtime reminder"
          label="Set bedtime reminder"
          nudgeText="Good sleep supports mental and physical well-being."
        />
      </ThemeProvider>
      <Checkbox
        checkboxLabel="Disabled version"
        defaultChecked={true}
        label="Set bedtime reminder"
        nudgeText="Good sleep supports mental and physical well-being."
        disabled
      />
    </div>
  );
}`;

export const checkboxAdaptivitySnippet = `import React, { useState } from "react";
import { Checkbox } from "nudge-library";

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
    </div>
  );
}`;

export const checkboxDynamicSnippet = `import { useState } from "react";
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
        ...(isAudioFocused ? { fontWeight: "500" } : {})
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
          nudgeText="Improve your learning by receiving supplementary materials."
        />
      </div>
    </div>
  );
}`;

export const RadioGroupSnippet = `import { useState } from "nudge-library";
import { RadioGroup, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  radio: {
    ...defaultTheme.radio,
    radioCircleChecked: {
      backgroundColor: "#fb8500",
      border: "2px solid #fb8500"
    }
  }
};

export default function RadioGroupExample() {
  const [selectedWorkout, setSelectedWorkout] = useState("high-intensity");

  return (
    <div>
      <RadioGroup
        radioLabel="Default version"
        label="High-intensity workout (30 mins)"
        value="high-intensity"
        checked={selectedWorkout === "high-intensity"}
        onChange={setSelectedWorkout}
        name="workout"
        nudgeText="Best for quick calorie burning!"
      />
      <ThemeProvider theme={customTheme}>
        <RadioGroup
          radioLabel="Custom version"
          id="yogaStretchingWorkout"
          defaultChecked={true}
          ariaLabel="Yoga and stretching"
          label="Yoga and stretching (45 mins)"
          value="yoga"
          checked={selectedWorkout === "yoga"}
          onChange={setSelectedWorkout}
          name="workout"
        />
      </ThemeProvider>
      <RadioGroup
        radioLabel="Disabled version"
        label="Standard cardio session (60 mins)"
        value="cardio"
        checked={selectedWorkout === "cardio"}
        onChange={setSelectedWorkout}
        name="workout"
        disabled={true}
      />
    </div>
  );
}`;

export const radioGroupDynamicSnippet = `import { useState } from "react";
import { RadioGroup, ThemeProvider, defaultTheme } from "nudge-library";
import { FiCheck } from "react-icons/fi";

export default function DynamicRadioGroup() {
  const [selectedQuality, setSelectedQuality] = useState("medium");
  const [focusedOption, setFocusedOption] = useState<string | null>(null);

  const radioOptions = [
    { value: "low", label: "Low Quality" },
    { value: "medium", label: "Medium Quality" },
    { value: "high", label: "High Quality" }
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
              fontWeight: focusedOption === option.value ? "500" : "400"
            },
            nudgeText: {
              ...defaultTheme.radio.nudgeText,
              fontWeight: focusedOption === option.value ? "500" : "400"
            }
          }
        };
        return (
          <ThemeProvider key={option.value} theme={customTheme}>
            <RadioGroup
              id={\`quality-\${option.value}\`}
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
                    <FiCheck style={{ marginRight: "0.125rem", strokeWidth: "2.5" }} />
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
    </div>
  );
}`;

export const radioGroupAdaptiveSnippet = `import React, { useEffect, useState } from "react";
import { RadioGroup } from "nudge-library";

export default function AdaptiveRadioGroup() {
  // Manage which format is currently selected
  const [selectedFormat, setSelectedFormat] = useState<string>("pdf");

  // On mount, load the user's preferred export format from localStorage (if it exists)
  useEffect(() => {
    const storedFormat = localStorage.getItem("preferredExportFormat");
    if (storedFormat) {
      setSelectedFormat(storedFormat);
    }
  }, []);

  // When the user changes format, update local state and store it
  const handleFormatChange = (newFormat: string) => {
    setSelectedFormat(newFormat);
    localStorage.setItem("preferredExportFormat", newFormat);
  };

  const exportOptions = [
    { label: "PDF", value: "pdf", nudgeText: "Best for quick printing" },
    { label: "CSV", value: "csv", nudgeText: "Lightweight and flexible" },
    { label: "XLS", value: "xls", nudgeText: "Ideal for spreadsheets" }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p style={{ fontWeight: "500" }}>
        Select preferred export format for reports:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {exportOptions.map((option) => (
          <RadioGroup
            id={\`exportFormat-\${option.value}\`}
            ariaLabel={option.label}
            key={option.value}
            label={option.label}
            value={option.value}
            name="exportFormat"
            checked={selectedFormat === option.value}
            onChange={handleFormatChange}
            nudgeText={option.nudgeText}
            nudgeVisible={selectedFormat === option.value}
          />
        ))}
      </div>
    </div>
  );
}`;

export const dropdownMenuSnippet = `import { useState } from "react";
import { DropdownMenu, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  dropdown: {
    ...defaultTheme.dropdown,
    hover: {
      hoverBorder: "2px solid #fb8500"
    },
    button: {
      ...defaultTheme.dropdown.button,
      baseBorder: "2px solid #dfe2e4"
    },
    list: {
      ...defaultTheme.dropdown.list,
      border: "2px solid #ffe5cf"
    },
    itemHover: {
      background: "#fffaf6"
    }
  }
};

export default function DropdownMenuExample() {
  const [selectedCourseType, setSelectedCourseType] = useState("online");
  const [selectedDifficulty, setSelectedDifficulty] = useState("intermediate");

  return (
    <div>
      <DropdownMenu
        dropdownLabel="Default version"
        id="courseFormat"
        ariaLabel="Select course format"
        options={[
          {
            label: "Online Course",
            value: "online",
            nudgeText: "Great for flexible and self-paced learning."
          },
          { label: "Hybrid Course", value: "hybrid" },
          { label: "In-person Course", value: "in-person" }
        ]}
        selected={selectedCourseType}
        onChange={setSelectedCourseType}
        placeholder="Select course format"
      />
      <ThemeProvider theme={customTheme}>
        <DropdownMenu
          dropdownLabel="Custom version"
          options={[
            {
              label: "Beginner Level",
              value: "beginner",
              nudgeText: "Suitable for learners with no prior experience."
            },
            {
              label: "Intermediate Level",
              value: "intermediate",
              nudgeText: "Great for learners with foundational knowledge."
            },
            {
              label: "Advanced Level",
              value: "advanced",
              nudgeText: "Suited for experienced learners seeking in-depth knowledge."
            }
          ]}
          selected={selectedDifficulty}
          onChange={setSelectedDifficulty}
          placeholder="Select course difficulty"
        />
      </ThemeProvider>
      <DropdownMenu
        dropdownLabel="Disabled version"
        options={[
          { label: "Mathematics", value: "math" },
          { label: "Science", value: "science" },
          { label: "History", value: "history" },
          { label: "Literature", value: "literature" }
        ]}
        selected="science"
        placeholder="Select subject area"
        disabled={true}
      />
    </div>
  );
}`;

export const dropdownMenuDynamicSnippet = `import { useState } from "react";
import { DropdownMenu, ThemeProvider, defaultTheme } from "nudge-library";

export default function DynamicDropdownMenu() {
  const [learningPreference, setLearningPreference] = useState("video");
  const [isFocused, setIsFocused] = useState(false);

  const learningOptions = [
    {
      label: "Video Tutorials",
      value: "video",
      nudgeText: "Ideal for visual learners."
    },
    {
      label: "Interactive Quizzes",
      value: "quiz",
      nudgeText: "Engage actively with your content."
    },
    {
      label: "Reading",
      value: "reading",
      nudgeText: "Best for detailed study sessions."
    },
    {
      label: "Podcasts",
      value: "podcast",
      nudgeText: "Convenient for learning on-the-go."
    }
  ];

  const customTheme = {
    ...defaultTheme,
    dropdown: {
      ...defaultTheme.dropdown,
      button: {
        ...defaultTheme.dropdown.button,
        fontWeight: isFocused ? "500" : "400",
        color: isFocused ? "#1b8dff" : "#002952"
      }
    }
  };

  return (
    <div>
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
    </div>
  );
}`;

export const dropdownMenuAdaptiveSnippet = `import React, { useState, useEffect } from "react";
import { DropdownMenu } from "nudge-library";

export default function LanguageSelector() {
  const ALL_LANGUAGES = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Russian", value: "ru" },
    { label: "Norwegian", value: "no" },
    { label: "Chinese", value: "zh" },
    { label: "Japanese", value: "ja" }
  ];

  // Local state for the currently selected language and dropdown options
  const [selectedLang, setSelectedLang] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState<
    { label: string; value: string; nudgeText?: string }[]
  >([]);

  useEffect(() => {
    // Get the user's preferred languages from the browser
    const userLanguages = navigator.languages.map(
      (lang) => lang.toLowerCase().split("-")[0]
    );

    // Filter available languages to find recommended ones
    const recommendedOptions = ALL_LANGUAGES.filter((lang) =>
      userLanguages.includes(lang.value.toLowerCase())
    ).map((lang) => ({ ...lang, nudgeText: "Recommended" }));

    // Get the rest of the languages
    const otherOptions = ALL_LANGUAGES.filter(
      (lang) => !userLanguages.includes(lang.value.toLowerCase())
    );

    const combinedOptions = [...recommendedOptions, ...otherOptions];
    setDropdownOptions(combinedOptions);

    // Set the initial selected language:
    // If any recommended language is found, pick the first one
    // otherwise, default to English
    if (recommendedOptions.length > 0) {
      setSelectedLang(recommendedOptions[0].value);
    } else {
      setSelectedLang("en");
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DropdownMenu
        dropdownLabel="Select preferred language:"
        id="languageSelectorDropdown"
        ariaLabel="Select preferred language"
        options={dropdownOptions}
        selected={selectedLang}
        onChange={(value) => setSelectedLang(value)}
        placeholder="Choose a language"
      />
    </div>
  );
}`;

export const sliderSnippet = `import { Slider, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  slider: {
    ...defaultTheme.slider,
    input: {
      ...defaultTheme.slider.input,
      filledColor: "#fb8500",
      emptyColor: "#fffaf6"
    },
    thumb: {
      ...defaultTheme.slider.thumb,
      background: "#fb8500"
    },
    tooltip: {
      ...defaultTheme.slider.tooltip,
      backgroundColor: "#ffe5cf",
      triangleColor: "#ffe5cf"
    },
    nudgeText: {
      ...defaultTheme.slider.nudgeText,
      backgroundColor: "#ffe5cf"
    }
  }
};

export default function SliderExample() {
  return (
    <div>
      <Slider
        sliderLabel="Default version"
        defaultValue={50}
        step={1}
        nudgeText="The default value is set to 50."
        id="defaultValueSlider"
        ariaLabel="Slider with default value"
      />
      <ThemeProvider theme={customTheme}>
        <Slider
          sliderLabel="Custom version"
          min={20}
          max={80}
          defaultValue={30}
          step={10}
          showValueTooltip={true}
          nudgeText="The min value is 20, max value is 80, with step value 10."
          id="minMaxSlider"
          ariaLabel="Slider with min and max values"
        />
      </ThemeProvider>
      <Slider
        sliderLabel="Disabled version"
        defaultValue={60}
        step={1}
        disabled={true}
        nudgeText="This slider is disabled with nudge text on top."
        id="disabledSlider"
        ariaLabel="Disabled Slider"
        nudgePosition="top"
      />
    </div>
  );
}`;

export const sliderDynamicSnippet = `import React, { useState } from "react";
import { Slider } from "nudge-library";

export default function DynamicSlider() {
  const [savingsPercent, setSavingsPercent] = useState(10);
  const [showNudge, setShowNudge] = useState(false);

  // When the user focuses on the slider, show the nudge
  const handleFocus = () => {
    setShowNudge(true);
  };

  // When the slider loses focus, hide the nudge
  const handleBlur = () => {
    setShowNudge(false);
  };

  // When the user finishes adjusting the slider, update the savings percentage
  const handleCommit = (value: number) => {
    setSavingsPercent(value);
  };

  return (
    <div>
      <Slider
        id="savings-slider"
        ariaLabel="Savings Percentage slider"
        sliderLabel="Set the savings goal:"
        min={0}
        max={100}
        step={1}
        value={savingsPercent}
        onChange={(val) => setSavingsPercent(val)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCommit={handleCommit}
        nudgeVisible={showNudge}
        nudgePosition="bottom"
        renderNudge={(value) => (
          <div>
            {value < 20
              ? "Consider increasing your savings for a better future."
              : value < 50
              ? "A good balance! Keep it up."
              : "Great job! You're saving a lot."}
          </div>
        )}
      />
    </div>
  );
}`;

export const sliderAdaptiveSnippet = `import React, { useState } from "react";
import { Slider } from "nudge-library";

export default function AdaptiveSlider() {
  // Retrieve the previous volume from localStorage.
  // If no previous value exists, default to 10.
  const storedVolumeStr = localStorage.getItem("preferredVolume");
  const initialVolume = storedVolumeStr === null ? 10 : Number(storedVolumeStr);

  // Local state to track the current volume selection.
  const [volume, setVolume] = useState<number>(initialVolume);
  // Keep track of the previous volume to compare changes.
  const [previousVolume, setPreviousVolume] = useState<number>(initialVolume);

  // When the slider value changes, update the state and local storage.
  const handleVolumeChange = (value: number): void => {
    setVolume(value);
    localStorage.setItem("preferredVolume", value.toString());
  };

  // When the slider loses focus, update the previousVolume to the current value.
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const newValue = Number(event.target.value);
    setPreviousVolume(newValue);
  };

  // Compute the adaptive nudge text based on the current and previous volume.
  const adaptiveNudgeText: string =
    volume < previousVolume
      ? \`The volume tends to be higher with value \${previousVolume}%. Current setting: \${volume}%.\`
      : volume > previousVolume
      ? \`Lower volume is typically set at \${previousVolume}%. Current setting: \${volume}%.\`
      : \`Volume is set at \${volume}%.\`;

  return (
    <div>
      <Slider
        sliderLabel="Volume Control"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
        onBlur={handleBlur}
        renderNudge={() => adaptiveNudgeText}
      />
    </div>
  );
}`;

export const textBoxSnippet = `import { TextBox, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  textBox: {
    ...defaultTheme.textBox,
    nudgeText: {
      ...defaultTheme.textBox.nudgeText,
      backgroundColor: "#ffe5cf"
    },
    hover: {
      hoverBorder: "2px solid #fb8500"
    }
  }
};

export default function TextBoxExample() {
  return (
    <div>
      <TextBox
        textBoxLabel="Default version"
        defaultValue={"30"}
        nudgeText="Enter a value here, the default value is 30."
        id="defaultTextBox"
        ariaLabel="Default Text Box"
        nudgePosition="bottom"
      />
      <ThemeProvider theme={customTheme}>
        <TextBox
          textBoxLabel="Custom version"
          defaultValue={"30"}
          nudgeText="Enter a value here, the default value is 30."
          id="customTextBox"
          ariaLabel="Custom Text Box"
          nudgePosition="bottom"
        />
      </ThemeProvider>
      <TextBox
        textBoxLabel="Disabled version"
        disabled={true}
        defaultValue={"30"}
        nudgeText="Enter a value here, the default value is 30."
        id="disabledTextBox"
        ariaLabel="Disabled Text Box"
        nudgePosition="top"
      />
    </div>
  );
}`;

export const textBoxDynamicSnippet = `import React, { useState } from "react";
import { TextBox } from "nudge-library";

export default function DonationSettings() {
  // Predefined suggested donation amount.
  const [suggestedDonation, setSuggestedDonation] = useState("25");
  const [showPreview, setShowPreview] = useState(false);
  const [finalMessage, setFinalMessage] = useState("");

  // Show the preview when the textbox gains focus.
  const handleFocus = () => {
    setShowPreview(true);
    setFinalMessage("");
  };

  // Hide the preview when the textbox loses focus.
  const handleBlur = () => {
    setShowPreview(false);
  };

  // Update state as the user types, only allow numeric input.
  const handleChange = (newValue: string) => {
    if (newValue === "" || /^\\d*\\.?\\d*$/.test(newValue)) {
      setSuggestedDonation(newValue);
    }
  };

  // Capture and display the final donation amount upon commit.
  // Prevent committing an empty or invalid numeric value.
  const handleCommit = (newValue: string) => {
    const numericValue = parseFloat(newValue);
    if (newValue.trim() === "" || isNaN(numericValue)) return;
    setFinalMessage(
      \`Thank you for choosing to donate \${newValue}! Your generosity can make a real difference.\`
    );
  };

  // Render a dynamic preview based on the entered donation amount.
  const renderDonationPreview = (value: string) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      return <div>Please enter a valid donation amount.</div>;
    }
    if (numericValue < 20) {
      return (
        <div>
          Even a small increase can make a big difference, consider donating a bit more!
        </div>
      );
    } else if (numericValue < 50) {
      return (
        <div>
          Great choice! A slightly higher donation could increase your impact.
        </div>
      );
    } else {
      return (
        <div>
          Fantastic! Your generous donation has the power to change lives.
        </div>
      );
    }
  };

  return (
    <div>
      <TextBox
        id="donationAmount"
        ariaLabel="Donation Amount"
        textBoxLabel="Donation Amount"
        value={suggestedDonation}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCommit={handleCommit}
        nudgeVisible={showPreview}
        renderNudge={renderDonationPreview}
      />
      {finalMessage && (
        <div style={{ marginTop: "10px", fontSize: "1rem" }}>
          {finalMessage}
        </div>
      )}
    </div>
  );
}`;

export const textBoxAdaptiveSnippet = `import React, { useState } from "react";
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
    if (value === "" || /^\\d*$/.test(value)) {
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

  // When the user commits the change (on blur), only commit if the value is a number.
  const handleCommit = (value: string): void => {
    const numericValue = Number(value);
    if (value.trim() === "" || isNaN(numericValue)) return;
    setAdaptiveNudgeText(
      \`Study duration successfully set to \${value} minutes. Good luck!\`
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
    </div>
  );
}`;
