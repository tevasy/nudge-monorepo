import React, { useState, useEffect } from "react";
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
    { label: "Japanese", value: "ja" },
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

    // Combine the recommended options first, then the others
    const combinedOptions = [...recommendedOptions, ...otherOptions];
    setDropdownOptions(combinedOptions);

    // Set the initial selected language:
    // If any recommended language is found, pick the first one;
    // otherwise, default to English ("en")
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
      <p style={{ fontSize: "0.875rem" }}>
        The language recommendation in the dropdown menu is based on the browser
        settings, communicated with nudge text.
      </p>
    </div>
  );
}
