import React, { useState, useEffect } from "react";
import { DropdownMenu } from "nudge-components-library";

export default function AdaptiveDrowpdownMenu() {
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

  const [selectedLang, setSelectedLang] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState<
    { label: string; value: string; nudgeText?: string }[]
  >([]);

  useEffect(() => {
    const userLanguages = navigator.languages.map(
      (lang) => lang.toLowerCase().split("-")[0]
    );

    const recommendedOptions = ALL_LANGUAGES.filter((lang) =>
      userLanguages.includes(lang.value.toLowerCase())
    ).map((lang) => ({ ...lang, nudgeText: "Recommended" }));

    const otherOptions = ALL_LANGUAGES.filter(
      (lang) => !userLanguages.includes(lang.value.toLowerCase())
    );

    const combinedOptions = [...recommendedOptions, ...otherOptions];
    setDropdownOptions(combinedOptions);

    if (recommendedOptions.length > 0) {
      setSelectedLang(recommendedOptions[0].value);
    } else {
      setSelectedLang("en");
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
