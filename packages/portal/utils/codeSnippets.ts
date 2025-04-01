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
            ? "It's after 18:00. Dark Mode is active to reduce eye strain at night."
            : "It's before 18:00. Dark Mode is off, but can be activated."
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

export const popupSnippet = `import React, { useState } from "react";
import { Popup, ThemeProvider, defaultTheme } from "nudge-library";

export default function StaticPopupExample() {
  const [showPopupDefault, setShowPopupDefault] = useState(false);
  const [showPopupCustom, setShowPopupCustom] = useState(false);

  const customTheme = {
    ...defaultTheme,
    popup: {
      ...defaultTheme.popup,
      actionButton: {
        ...defaultTheme.popup.actionButton,
        backgroundColor: "white",
        border: "2px solid #fb8500",
        color: "#002952",
        padding: "5px 16px",
        fontWeight: "500",
      },
      closeButton: {
        ...defaultTheme.popup.closeButton,
        fontSize: "0.875rem",
        border: "1px solid #f7f7f7",
        padding: "0.3rem",
        borderRadius: "50%",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
    },
  };

  return (
    <div>
      <button onClick={() => setShowPopupDefault(true)}>Show Default Popup</button>
      <Popup
        id="study-default-popup"
        ariaLabel="study-default-popup"
        title="Study Break Reminder"
        message="Taking short, regular breaks helps increase focus. Consider a quick stretch or a walk before continuing."
        buttonText="Take a Break"
        onButtonClick={() => setShowPopupDefault(false)}
        visible={showPopupDefault}
        onClose={() => setShowPopupDefault(false)}
      />

      <button onClick={() => setShowPopupCustom(true)}>Show Custom Popup</button>
      <ThemeProvider theme={customTheme}>
        <Popup
          id="study-custom-popup"
          ariaLabel="study-custom-popup"
          message="Taking short, regular breaks helps increase focus. Consider a quick stretch or a walk before continuing."
          buttonText="Take a Break"
          onButtonClick={() => setShowPopupCustom(false)}
          visible={showPopupCustom}
          onClose={() => setShowPopupCustom(false)}
          animationType="slide"
          position="top-right"
          animationDuration={800}
        />
      </ThemeProvider>
    </div>
  );
}`;

export const popupDynamicSnippet =
  `import { useState, useEffect } from "react";
import { Popup } from "nudge-library";

export default function DynamicPopup() {
  const [popupState, setPopupState] = useState({ type: null, visible: false });
  const [countdown, setCountdown] = useState(5);
  const [notificationMessage, setNotificationMessage] = useState("");
  const animationDuration = 300;
  const autoCloseDelay = 5000;

  useEffect(() => {
    let intervalId;
    if (popupState.visible) {
      intervalId = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [popupState.visible]);

  const handleShowReminder = (type) => {
    if (popupState.visible && popupState.type !== type) {
      setPopupState((prev) => ({ ...prev, visible: false }));
      setTimeout(() => {
        setCountdown(5);
        setPopupState({ type, visible: true });
      }, animationDuration);
    } else if (!popupState.visible) {
      setCountdown(5);
      setPopupState({ type, visible: true });
    }
  };

  return (
    <div>
      <button onClick={() => handleShowReminder("doctor")}>Doctor Appointment</button>
      <button onClick={() => handleShowReminder("dentist")}>Dentist Appointment</button>
      {popupState.type && (
        <Popup
          key={popupState.type}
          visible={popupState.visible}
          onOpen={() => setNotificationMessage("Reminder open for selected appointment.")}
          onClose={() => setPopupState((prev) => ({ ...prev, visible: false }))}
          autoClose={true}
          autoCloseDelay={autoCloseDelay}
          animationType="slide"
          animationDuration={animationDuration}
          closeOutside={true}
          title={` +
  "`" +
  "${popupState.type === 'doctor' ? 'Doctor' : 'Dentist'} Appointment Reminder" +
  "`" +
  `}
          renderContent={() => (
            <div>
              <p>{popupState.type === "doctor" ? "Please bring your medical records." : "Please bring your dental records."}</p>
              <p>The reminder will close in <strong>{countdown}</strong> seconds.</p>
            </div>
          )}
        />
      )}
    </div>
  );
}`;

export const popupAdaptiveSnippet = `import { useState, useEffect } from "react";
import { Popup } from "nudge-library";

export default function AdaptivePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [lastResponse, setLastResponse] = useState(null);
  const [hasRespondedThisSession, setHasRespondedThisSession] = useState(false);
  const [hasEverInteracted, setHasEverInteracted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hydration-last-response");
    if (stored === "acknowledged" || stored === "dismissed") {
      setLastResponse(stored);
      setHasEverInteracted(true);
    }
  }, []);

  useEffect(() => {
    if (lastResponse) {
      localStorage.setItem("hydration-last-response", lastResponse);
      setHasEverInteracted(true);
    }
  }, [lastResponse]);

  const handleAcknowledge = () => {
    setHasRespondedThisSession(true);
    setShowPopup(false);
    setTimeout(() => {
      setLastResponse("acknowledged");
    }, 300);
  };

  const handleDismiss = () => {
    if (!hasRespondedThisSession && hasEverInteracted) {
      setLastResponse("dismissed");
    }
    setShowPopup(false);
  };

  const getAdaptiveMessage = () => {
    if (lastResponse === "dismissed") return "Don't forget to hydrate. Skipping water can affect your focus.";
    if (lastResponse === "acknowledged") return "Great job staying hydrated! Keep it up!";
    return "Staying hydrated helps your brain and body.";
  };

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Check Hydration</button>
      <Popup
        id="hydration-popup"
        visible={showPopup}
        autoClose={true}
        autoCloseDelay={6000}
        animationType="fade"
        animationDuration={300}
        position="bottom-left"
        title="Hydration Reminder"
        message={getAdaptiveMessage()}
        buttonText="I drank water"
        onButtonClick={handleAcknowledge}
        closeOutside={true}
        onClose={handleDismiss}
        ariaLabel="hydration-reminder"
      />
    </div>
  );
}`;

export const ratingSnippet = `import { Rating, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  rating: {
    ...defaultTheme.rating,
    star: {
      ...defaultTheme.rating.star,
      fontSize: "1.85rem",
      color: "#1b8dff",
      strokeWidth: "1.5",
    },
    filledStar: {
      color: "#1b8dff",
    },
  },
};

export default function RatingExample() {
  return (
    <div>
      <Rating
        id="rating-default"
        rating={3}
        ariaLabel="Default rating"
        ratingLabel="Default version"
        nudgeText="Share the rating to support better experiences for everyone."
        nudgePosition="bottom"
      />
      <ThemeProvider theme={customTheme}>
        <Rating
          id="rating-custom"
          rating={4}
          ariaLabel="Custom rating"
          ratingLabel="Custom version"
          nudgeText="Share the rating to support better experiences for everyone."
          nudgePosition="bottom"
        />
      </ThemeProvider>
      <Rating
        id="rating-disabled"
        rating={2}
        ariaLabel="Disabled rating"
        ratingLabel="Disabled version"
        nudgeText="Share the rating to support better experiences for everyone."
        nudgePosition="top"
        disabled={true}
      />
    </div>
  );
}`;

export const ratingDynamicSnippet = `import React, { useState } from "react";
import { Rating } from "nudge-library";

export default function DynamicRating() {
  const [courseRating, setCourseRating] = useState<number>(4);
  const [showAfterRatingHint, setShowAfterRatingHint] = useState<boolean>(false);

  const handleRatingChange = (newRating: number) => {
    setCourseRating(newRating);
  };

  const renderCustomNudge = (rating: number) => {
    const completionText =
      rating >= 4
        ? "Highly rated. Over 2,300 students completed this course!"
        : rating >= 2
        ? "Popular. Many learners found this course useful."
        : "This course is still gathering reviews.";
    return <span style={{ fontSize: "0.9rem" }}>{completionText}</span>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ fontWeight: "500", marginBottom: "1.5rem" }}>
        Select a rating for a dynamic feedback:
      </p>

      <Rating
        rating={courseRating}
        max={5}
        id="courseRating"
        ariaLabel="CourseRating"
        onChange={handleRatingChange}
        nudgeVisible={true}
        nudgePosition="bottom"
        renderNudge={renderCustomNudge}
        onFocus={() => setShowAfterRatingHint(false)}
        onBlur={() => setShowAfterRatingHint(true)}
      />

      <div
        style={{
          color: "#555",
          opacity: showAfterRatingHint ? 1 : 0,
          maxHeight: showAfterRatingHint ? "50px" : "0px",
          overflow: "hidden",
          transition: "opacity 0.5s ease-in-out, max-height 0.5s ease-in-out",
          marginTop: "0.9rem",
        }}
      >
        The rating can be updated anytime.
      </div>
    </div>
  );
}`;

export const ratingAdaptiveSnippet = `import React, { useState, useEffect } from "react";
import { Rating, DropdownMenu } from "nudge-library";

export default function AdaptiveRating() {
  const [userExperience, setUserExperience] = useState("intermediate");
  const [userRating, setUserRating] = useState(0);
  const [adaptiveNudgeText, setAdaptiveNudgeText] = useState("");

  const experienceOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" }
  ];

  useEffect(() => {
    const fetchNudgeText = () => {
      switch (userExperience) {
        case "beginner":
          return "85% of beginners value clear documentation!";
        case "intermediate":
          return "75% of intermediate developers rate this project highly!";
        case "advanced":
          return "90% of experts endorse its code quality!";
        default:
          return "See how your peers are rating this project!";
      }
    };

    const timeoutId = setTimeout(() => {
      setAdaptiveNudgeText(fetchNudgeText());
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [userExperience]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <DropdownMenu
        dropdownLabel="Select the experience level:"
        id="experienceDropdown"
        ariaLabel="Experience Dropdown"
        options={experienceOptions}
        selected={userExperience}
        onChange={(value) => setUserExperience(value)}
        placeholder="Select experience level"
      />

      <Rating
        ratingLabel="Rating of the project:"
        defaultRating={userRating}
        max={5}
        onChange={(newRating) => setUserRating(newRating)}
        nudgeText={adaptiveNudgeText}
        nudgePosition="bottom"
        renderNudge={(rating) => (
          <div style={{ fontSize: "0.9rem", marginTop: "4px" }}>
            {adaptiveNudgeText} {rating > 0 && <span>(Rating: {rating})</span>}
          </div>
        )}
      />
    </div>
  );
}`;

export const badgeSnippet = `import { Badge, ThemeProvider, defaultTheme } from "nudge-library";
import { FaBolt } from "react-icons/fa";

const customTheme = {
  ...defaultTheme,
  badge: {
    ...defaultTheme.badge,
    container: {
      ...defaultTheme.badge.container,
      border: "none",
      boxShadow: "rgba(0, 0, 0, 0.42) 0px 1px 4px",
    },
    count: {
      ...defaultTheme.badge.count,
      background: "#ffe5cf",
    },
    icon: {
      ...defaultTheme.badge.icon,
      color: "#fb8500",
    },
    nudgeText: {
      ...defaultTheme.badge.nudgeText,
      background: "#ffe5cf",
    },
  },
};

export default function BadgeExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <Badge
        id="default-badge"
        badgeLabel="Default Version"
        label="Archived Feedback"
        count={120}
        nudgeText="Teams are encouraged to review shared feedback regularly."
        nudgePosition="bottom"
        ariaLabel="Default feedback badge"
      />
      <ThemeProvider theme={customTheme}>
        <Badge
          id="custom-badge"
          badgeLabel="Custom Version"
          label="Archived Feedback"
          count={120}
          icon={<FaBolt />}
          nudgeText="Teams are encouraged to review shared feedback regularly."
          nudgePosition="bottom"
          ariaLabel="Custom feedback badge"
        />
      </ThemeProvider>
      <Badge
        id="disabled-badge"
        badgeLabel="Disabled Version"
        label="Archived Feedback"
        nudgeText="Teams are encouraged to review shared feedback regularly."
        nudgePosition="top"
        ariaLabel="Disabled feedback badge"
        disabled={true}
      />
    </div>
  );
}`;

export const badgeDynamicSnippet = `import React, { useState } from "react";
import { Badge, ThemeProvider, defaultTheme } from "nudge-library";
import { FiThumbsUp } from "react-icons/fi";

const Icon = FiThumbsUp as React.ElementType;

const customTheme = {
  ...defaultTheme,
  badge: {
    ...defaultTheme.badge,
    nudgeText: {
      ...defaultTheme.badge.nudgeText,
      padding: "0",
    },
  },
};

export default function DynamicBadge() {
  const [endorsements, setEndorsements] = useState<number>(78);
  const [hasEndorsed, setHasEndorsed] = useState<boolean>(false);
  const [showEndorsedNudge, setShowEndorsedNudge] = useState<boolean>(true);

  const handleEndorse = () => {
    if (!hasEndorsed) {
      setEndorsements((prev) => prev + 1);
      setHasEndorsed(true);
      setShowEndorsedNudge(true);
      setTimeout(() => {
        setShowEndorsedNudge(false);
      }, 5000);
    }
  };

  const renderCustomNudge = ({ count }: { count?: number }) => {
    if (!count) return null;

    const fadeStyle: React.CSSProperties = {
      fontSize: "0.875rem",
      opacity: hasEndorsed && !showEndorsedNudge ? 0 : 1,
      maxHeight: hasEndorsed && !showEndorsedNudge ? 0 : "auto",
      padding: hasEndorsed && !showEndorsedNudge ? 0 : "8px 12px",
      overflow: "hidden",
      transition: "opacity 0.5s ease, max-height 0.5s ease, padding 0.5s ease",
    };

    if (hasEndorsed) {
      return <div style={fadeStyle}>You endorsed this document.</div>;
    }

    return (
      <div style={fadeStyle}>
        {count > 50
          ? "Widely endorsed! A favorite among collaborators."
          : count > 10
          ? "Trusted by many, a useful document to reuse."
          : "Just starting to get attention. Be one of the first to endorse it!"}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <p style={{ fontWeight: "500" }}>Endorse a shared document:</p>
      <ThemeProvider theme={customTheme}>
        <Badge
          id="strategy-doc-badge"
          label="Endorsed"
          count={endorsements}
          icon={<Icon />}
          ariaLabel="Document endorsement badge"
          nudgeVisible={true}
          nudgePosition="bottom"
          renderNudge={renderCustomNudge}
        />
      </ThemeProvider>
      <button
        onClick={handleEndorse}
        disabled={hasEndorsed}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          backgroundColor: hasEndorsed ? "#ccc" : "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: hasEndorsed ? "not-allowed" : "pointer",
        }}
      >
        {hasEndorsed ? "Endorsed" : "Endorse this Document"}
      </button>
    </div>
  );
}`;

export const badgeAdaptiveSnippet = `import React, { useState } from "react";
import { Badge } from "nudge-library";

export default function AdaptiveBadgeExample() {
  const [userProfile, setUserProfile] = useState({
    skillLevel: "Intermediate",
    favoriteTopic: "React",
    coursesCompleted: 2,
    recentActivity: "",
  });

  const dynamicNudgeMessage = (): string => {
    if (userProfile.recentActivity) {
      return userProfile.recentActivity;
    }
    if (userProfile.coursesCompleted < 3) {
      return "Keep going! 80% of learners have completed more than 3 courses.";
    }
    if (userProfile.coursesCompleted < 7) {
      return \`Great progress! As an \${userProfile.skillLevel} learner, consider exploring advanced \${userProfile.favoriteTopic} courses, endorsed by 60% of learners.\`;
    }
    return "Outstanding performance! Join the community challenges to put new skills to the test.";
  };

  const completeCourse = () => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      coursesCompleted: prevProfile.coursesCompleted + 1,
      recentActivity: "The new course is completed!",
    }));

    setTimeout(() => {
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        recentActivity: "",
      }));
    }, 3000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontWeight: "500", marginBottom: "1.5rem" }}>
        Click to complete a course:
      </div>
      <Badge
        label="Courses Completed"
        count={userProfile.coursesCompleted}
        renderNudge={() => <p>{dynamicNudgeMessage()}</p>}
        nudgePosition="bottom"
      />
      <button
        onClick={completeCourse}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Complete Course
      </button>
    </div>
  );
}`;

export const tooltipSnippet = `import { Tooltip, ThemeProvider, defaultTheme } from "nudge-library";
import { FaBolt } from "react-icons/fa";

const customTheme = {
  ...defaultTheme,
  tooltip: {
    ...defaultTheme.tooltip,
    message: {
      ...defaultTheme.tooltip.message,
      fontWeight: "500",
    },
    icon: {
      ...defaultTheme.tooltip.icon,
      color: "#fb8500",
    },
  },
};

export default function TooltipExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <p className="font-medium -mb-3">Default Version</p>
      <Tooltip
        id="default-tooltip"
        text="Great effort, keep going!"
        position="dynamic"
        dismissible={false}
        ariaLabel="Default tooltip"
      >
        <button
          style={{
            background: "linear-gradient(135deg, #2492ff, #1675d5)",
            color: "white",
            width: "100%",
            padding: "10px 20px",
            fontSize: "0.875rem",
            fontWeight: "500",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          role="button"
        >
          Hover or Press Button
        </button>
      </Tooltip>

      <p className="font-medium -mb-3">Custom Version</p>
      <ThemeProvider theme={customTheme}>
        <Tooltip
          id="custom-tooltip"
          text="Great effort, keep going!"
          position="bottom"
          dismissible={false}
          ariaLabel="Custom tooltip"
          animationType="slide"
          animationDuration={400}
          icon={<FaBolt />}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #2492ff, #1675d5)",
              color: "white",
              width: "100%",
              padding: "10px 20px",
              fontSize: "0.875rem",
              fontWeight: "500",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            role="button"
          >
            Hover or Press Button
          </button>
        </Tooltip>
      </ThemeProvider>
    </div>
  );
}`;

export const tooltipDynamicSnippet = `import React, { useState, useEffect } from "react";
import { Tooltip } from "nudge-library";

export default function DynamicTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [correctClicked, setCorrectClicked] = useState(false);

  const handleWrongAnswer = () => {
    setShowTooltip(true);
  };

  const handleCorrectAnswer = () => {
    setShowTooltip(false);
    setCorrectClicked(true);
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (correctClicked) {
      timer = setTimeout(() => {
        setCorrectClicked(false);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [correctClicked]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <p className="font-medium">Select the answer:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button
          onClick={handleCorrectAnswer}
          style={{
            padding: "0.6rem 1.2rem",
            fontSize: "0.875rem",
            border: "2px solid #1b8dff",
            boxShadow: "#1b8dff45 0px 2px 8px 0px",
            borderRadius: "10px",
            backgroundColor: "white",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {correctClicked ? "Well done!" : "Correct Answer"}
        </button>

        <Tooltip
          visible={showTooltip}
          onClose={handleTooltipClose}
          onButtonClick={handleTooltipClose}
          text="Take a moment to double-check the answer. Try again, almost there!"
          position="bottom"
          dismissible
          closeOutside
          closeOnHover={false}
          ariaLabel="Wrong answer tooltip"
          buttonText="Retry"
        >
          <button
            onClick={handleWrongAnswer}
            style={{
              padding: "0.6rem 1.2rem",
              fontSize: "0.875rem",
              border: "2px solid #fb8500",
              boxShadow: "#fb850045 0px 2px 8px 0px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Wrong Answer
          </button>
        </Tooltip>
      </div>
    </div>
  );
}`;

export const tooltipAdaptiveSnippet = `import React, { useState } from "react";
import { Tooltip, DropdownMenu } from "nudge-library";

export default function AdaptiveTooltip() {
  const [performance, setPerformance] = useState("neutral");
  const [context, setContext] = useState("onboarding");

  const contextOptions = [
    { label: "Onboarding", value: "onboarding" },
    { label: "Skill Building", value: "skillBuilding" }
  ];

  const performanceOptions = [
    { label: "Struggling", value: "struggling" },
    { label: "Neutral", value: "neutral" },
    { label: "Successful", value: "excelling" }
  ];

  const getTooltipMessage = () => {
    if (context === "onboarding") {
      if (performance === "struggling") {
        return "Starting something can feel overwhelming. Take it one step at a time.";
      } else if (performance === "excelling") {
        return "Great job! Feel free to seek more information if needed.";
      } else {
        return "Welcome! Begin at a comfortable pace.";
      }
    } else if (context === "skillBuilding") {
      if (performance === "struggling") {
        return "Every challenge builds a stronger foundation, continue and see improvement!";
      } else if (performance === "excelling") {
        return "Amazing work! The progress is impressive, keep going!";
      } else {
        return "Consistent practice leads to noticeable progress.";
      }
    }
    return "";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <DropdownMenu
        dropdownLabel="Choose Context:"
        id="contextDropdown"
        ariaLabel="Context Dropdown"
        options={contextOptions}
        selected={context}
        onChange={(value) => setContext(value)}
        placeholder="Select the context"
      />

      <DropdownMenu
        dropdownLabel="Choose Performance:"
        id="performanceDropdown"
        ariaLabel="Performance Dropdown"
        options={performanceOptions}
        selected={performance}
        onChange={(value) => setPerformance(value)}
        placeholder="Select performance level"
      />

      <Tooltip
        text={getTooltipMessage()}
        defaultVisible={true}
        position="dynamic"
        animationType="slide"
        animationDuration={300}
      >
        <button
          style={{
            display: "block",
            padding: "0.6rem 1.2rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "white",
            background: "#007fff",
            borderRadius: "10px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Hover here
        </button>
      </Tooltip>
    </div>
  );
}`;

export const moodSliderSnippet = `import { MoodSlider, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  moodSlider: {
    ...defaultTheme.moodSlider,
    tooltip: {
      ...defaultTheme.moodSlider.tooltip,
      backgroundColor: "#ffe5cf",
      triangleColor: "#ffe5cf",
    },
    icon: {
      ...defaultTheme.tooltip.icon,
      fontSize: "20px",
    },
  },
  slider: {
    ...defaultTheme.slider,
    input: {
      ...defaultTheme.slider.input,
      filledColor: "#fb8500",
      emptyColor: "#fffaf6",
    },
    thumb: {
      ...defaultTheme.slider.thumb,
      background: "#fb8500",
    },
    tooltip: {
      ...defaultTheme.slider.tooltip,
      backgroundColor: "#ffe5cf",
      triangleColor: "#ffe5cf",
    },
    nudgeText: {
      ...defaultTheme.slider.nudgeText,
      backgroundColor: "#ffe5cf",
    },
  },
};

export default function MoodSliderExample() {
  return (
    <div>
      <MoodSlider
        id="defaultMoodSlider"
        ariaLabel="default Mood Slider"
        sliderLabel="Default version"
        defaultValue={60}
        min={0}
        max={100}
        tooltipMode="icon"
        alwaysShowTooltip
      />
      <ThemeProvider theme={customTheme}>
        <MoodSlider
          id="customMoodSlider"
          ariaLabel="custom Mood Slider"
          sliderLabel="Custom version"
          defaultValue={80}
          min={0}
          max={100}
          tooltipMode="text"
          nudgeText="Reflect on the mood to improve self-awareness."
        />
      </ThemeProvider>
      <MoodSlider
        id="disabledMoodSlider"
        ariaLabel="disabled Mood Slider"
        sliderLabel="Disabled version"
        disabled
        defaultValue={30}
        min={0}
        max={100}
        showValueTooltip={false}
        tooltipMode="text"
      />
    </div>
  );
}`;

export const moodSliderDynamicSnippet = `import React, { useState } from "react";
import { MoodSlider } from "nudge-library";

const workoutMoodDefinitions = [
  { id: "exhausted", icon: "😫", label: "Exhausted", threshold: 20 },
  { id: "tired", icon: "😓", label: "Tired", threshold: 40 },
  { id: "energized", icon: "💪", label: "Energized", threshold: 60 },
  { id: "refreshed", icon: "🤩", label: "Refreshed", threshold: 80 },
  { id: "amazing", icon: "😁", label: "Amazing", threshold: 100 },
];

export default function DynamicMoodSlider() {
  const [moodValue, setMoodValue] = useState(50);
  const [selectedMood, setSelectedMood] = useState("energized");

  const handleMoodChange = (moodId) => {
    setSelectedMood(moodId);
  };

  const handleSliderChange = (value) => {
    setMoodValue(value);
  };

  const renderNudge = (value) => {
    const currentMood =
      workoutMoodDefinitions.find((m) => m.id === selectedMood) ||
      workoutMoodDefinitions[0];

    let baseText = "";
    if (value < 20) baseText = "Rest up.";
    else if (value < 40) baseText = "Slow down next time.";
    else if (value < 60) baseText = "Keep it up!";
    else if (value < 80) baseText = "Good progress!";
    else baseText = "Great job!";
    
    return \`Feeling \${currentMood.label}? \${baseText}\`;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <MoodSlider
        sliderLabel="Post-workout mood"
        moodDefinitions={workoutMoodDefinitions}
        value={moodValue}
        onChange={handleSliderChange}
        onCommit={handleSliderChange}
        onMoodChange={handleMoodChange}
        tooltipMode="text"
        showIcon={true}
        renderNudge={renderNudge}
      />
    </div>
  );
}`;

export const moodSliderAdaptiveSnippet = `import React, { useState } from "react";
import { MoodSlider } from "nudge-library";

const moodDefinitions = [
  { id: "confused", icon: "😕", label: "Confused", threshold: 33 },
  { id: "reflective", icon: "🤔", label: "Reflective", threshold: 66 },
  { id: "enlightened", icon: "🤩", label: "Enlightened" },
];

function getMoodLabel(value) {
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

  const [currentMood, setCurrentMood] = useState(initialMood);
  const [previousMood, setPreviousMood] = useState(initialMood);

  const handleMoodChange = (value) => {
    setCurrentMood(value);
    localStorage.setItem("preferredLessonMood", value.toString());
  };

  const handleBlur = (event) => {
    const newValue = Number(event.target.value);
    setPreviousMood(newValue);
  };

  const currentMoodLabel = getMoodLabel(currentMood);
  const previousMoodLabel = getMoodLabel(previousMood);

  const adaptiveNudgeText =
    currentMoodLabel === previousMoodLabel
      ? \`Self-assessment remains at \${currentMoodLabel}. Take moment to summarize key takeaways from the lesson.\`
      : currentMood < previousMood
      ? \`Self-assessment dropped from \${previousMoodLabel} to \${currentMoodLabel}. Consider revisiting challenging concepts for greater clarity.\`
      : \`Self-assessment increased from \${previousMoodLabel} to \${currentMoodLabel}. Great progress!\`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
    </div>
  );
}`;

export const textAreaSnippet = `import { TextArea, ThemeProvider, defaultTheme } from "nudge-library";

const customTheme = {
  ...defaultTheme,
  textArea: {
    ...defaultTheme.textArea,
    input: {
      ...defaultTheme.textArea.input,
      placeholderColor: "#c3c4c5",
    },
    nudgeText: {
      ...defaultTheme.textArea.nudgeText,
      backgroundColor: "#ffe5cf",
    },
    hover: {
      hoverBorder: "2px solid #fb8500",
    },
  },
};

export default function TextAreaExample() {
  return (
    <div>
      <TextArea
        defaultValue=""
        placeholder="Enter daily habits here"
        textAreaLabel="Default version"
        nudgeText="Log daily habits to monitor physical and mental well-being."
        id="defaultTextArea"
        ariaLabel="Default Text Box"
        nudgePosition="bottom"
      />
      <ThemeProvider theme={customTheme}>
        <TextArea
          rows={5}
          defaultValue=""
          placeholder="Enter daily habits here"
          textAreaLabel="Custom version"
          nudgeText="Log daily habits to monitor physical and mental well-being."
          id="customTextArea"
          ariaLabel="Custom Text Area"
          nudgePosition="bottom"
        />
      </ThemeProvider>
      <TextArea
        defaultValue="Walked 8,000 steps and slept 7 hours."
        textAreaLabel="Disabled version"
        nudgeText="Log daily habits to monitor physical and mental well-being."
        id="disabledTextArea"
        ariaLabel="Disabled Text Area"
        nudgePosition="top"
        disabled={true}
      />
    </div>
  );
}`;

export const textAreaDynamicSnippet = `import React, { useState } from "react";
import { TextArea } from "nudge-library";

export default function DynamicTextArea() {
  const originalNudge = "Small steps lead to big changes!";
  const [reflection, setReflection] = useState("");
  const [nudgeMessage, setNudgeMessage] = useState(originalNudge);

  const handleReflectionChange = (value) => {
    setReflection(value);
  };

  const handleCommit = () => {
    setNudgeMessage("Reflection saved!");
    setTimeout(() => {
      setNudgeMessage(originalNudge);
    }, 5000);
  };

  const handleBlur = (e) => {
    handleCommit();
  };

  const renderNudge = () => {
    return <span>{nudgeMessage}</span>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <TextArea
        textAreaLabel="Daily Reflection"
        placeholder="Share the thoughts on today's progress and any target adjustments..."
        value={reflection}
        onChange={handleReflectionChange}
        onBlur={handleBlur}
        renderNudge={renderNudge}
        nudgePosition="bottom"
      />
    </div>
  );
}`;

export const textAreaAdaptiveSnippet = `import React, { useState } from "react";
import { TextArea } from "nudge-library";

export default function AdaptiveTextArea() {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    else if (hour < 18) return "Good afternoon!";
    else return "Good evening!";
  };

  const initialNudgeText = \`\${getTimeBasedGreeting()} Reflect on today's lesson: what are the key takeaways?\`;

  const [reflection, setReflection] = useState("");
  const [adaptiveNudgeText, setAdaptiveNudgeText] = useState(initialNudgeText);
  const [reflectionCount, setReflectionCount] = useState(0);

  const handleChange = (value) => {
    setReflection(value);
    const len = value.trim().length;
    if (len === 0) {
      setAdaptiveNudgeText("The reflection is empty. Summarize the takeaways.");
    } else if (len < 30) {
      setAdaptiveNudgeText("Consider adding more details to capture the thoughts.");
    } else if (len < 100) {
      setAdaptiveNudgeText("Good start! Maybe elaborate a bit more on the lesson.");
    } else {
      setAdaptiveNudgeText("Great detailed reflection!");
    }
  };

  const handleCommit = (value) => {
    if (value.trim() === "") return;
    const newCount = reflectionCount + 1;
    setReflectionCount(newCount);
    setAdaptiveNudgeText(\`Reflection #\${newCount} saved!\`);
    setReflection("");
    setTimeout(() => {
      setAdaptiveNudgeText(\`\${getTimeBasedGreeting()} Reflect on today's lesson: what are the key takeaways?\`);
    }, 5000);
  };

  const handleFocus = (e) => {
    setAdaptiveNudgeText("Take a time to reflect. What was learned today?");
    e.target.select();
  };

  const handleBlur = (e) => {
    if (e.target.value.trim() !== "") {
      handleCommit(e.target.value);
    }
  };

  const renderNudge = () => {
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
    </div>
  );
}`;
