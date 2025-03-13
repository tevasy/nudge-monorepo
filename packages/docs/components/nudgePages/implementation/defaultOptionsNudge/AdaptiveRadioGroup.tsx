import React, { useEffect, useState } from "react";
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

  // When the user changes format, update local state & store it
  const handleFormatChange = (newFormat: string) => {
    setSelectedFormat(newFormat);
    localStorage.setItem("preferredExportFormat", newFormat);
  };

  const exportOptions = [
    { label: "PDF", value: "pdf", nudgeText: "Best for quick printing" },
    { label: "CSV", value: "csv", nudgeText: "Lightweight and flexible" },
    { label: "XLS", value: "xls", nudgeText: "Ideal for spreadsheets" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p style={{ fontWeight: "500" }}>
        Select preferred export format for reports:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {exportOptions.map((option) => (
          <RadioGroup
            id={`exportFormat-${option.value}`}
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
      <p style={{ fontSize: "0.875rem" }}>
        This selection will be saved and applied automatically for future
        report. The nudge text appears when an option is selected, controlled by
        the <code style={{ fontSize: "0.813rem" }}>nudgeVisible</code> property.
      </p>
    </div>
  );
}
