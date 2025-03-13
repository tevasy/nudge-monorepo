import { useState } from "react";
import { DropdownMenu, ThemeProvider, defaultTheme } from "nudge-library";
import CodeContainer from "../CodeContainer";
import {
  dropdownMenuSnippet,
  dropdownMenuDynamicSnippet,
  dropdownMenuAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import AdaptiveDropdownMenu from "./AdaptiveDropdownMenu";
import DynamicDropdownMenu from "./DynamicDropdownMenu";

const customTheme = {
  ...defaultTheme,
  dropdown: {
    ...defaultTheme.dropdown,
    hover: {
      hoverBorder: "2px solid #fb8500",
    },
    button: {
      ...defaultTheme.dropdown.button,
      baseBorder: "2px solid #dfe2e4",
    },
    list: {
      ...defaultTheme.dropdown.list,
      border: "2px solid #ffe5cf",
    },
    itemHover: {
      background: "#fffaf6",
    },
  },
};

export default function DropdownMenuDocs() {
  const [selectedCourseType, setSelectedCourseType] = useState("online");
  const [selectedDifficulty, setSelectedDifficulty] = useState("intermediate");

  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-4 bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <DropdownMenu
                    dropdownLabel="Default version"
                    id="courseFormat"
                    ariaLabel="Select course format"
                    options={[
                      {
                        label: "Online Course",
                        value: "online",
                        nudgeText:
                          "Great for flexible and self-paced learning.",
                      },
                      { label: "Hybrid Course", value: "hybrid" },
                      { label: "In-person Course", value: "in-person" },
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
                          nudgeText:
                            "Suitable for learners with no prior experience.",
                        },
                        {
                          label: "Intermediate Level",
                          value: "intermediate",
                          nudgeText:
                            "Great for learners with foundational knowledge.",
                        },
                        {
                          label: "Advanced Level",
                          value: "advanced",
                          nudgeText:
                            "Suited for experienced learners seeking in-depth knowledge.",
                        },
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
                      { label: "Literature", value: "literature" },
                    ]}
                    selected="science"
                    placeholder="Select subject area"
                    disabled={true}
                  />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={dropdownMenuSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <DynamicDropdownMenu />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={dropdownMenuDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <AdaptiveDropdownMenu />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={dropdownMenuAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
