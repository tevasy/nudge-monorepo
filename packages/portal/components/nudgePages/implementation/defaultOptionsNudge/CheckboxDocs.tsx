import { Checkbox, ThemeProvider, defaultTheme } from "nudge-library";

import CodeContainer from "../CodeContainer";
import {
  checkboxAdaptivitySnippet,
  checkboxDynamicSnippet,
  checkboxSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import AdaptiveCheckbox from "./AdaptiveCheckbox";
import DynamicCheckbox from "./DynamicCheckbox";

const customTheme = {
  ...defaultTheme,
  checkbox: {
    ...defaultTheme.checkbox,
    label: {
      ...defaultTheme.checkbox.label,
      fontWeight: "500",
    },
    checked: {
      ...defaultTheme.checkbox.checked,
      backgroundColor: "#fb8500",
      border: "#fb8500",
    },
    nudgeText: {
      ...defaultTheme.checkbox.nudgeText,
      backgroundColor: "#ffe5cf",
    },
  },
};

export default function CheckboxDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-8 bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
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
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={checkboxSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <DynamicCheckbox />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={checkboxDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <AdaptiveCheckbox />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={checkboxAdaptivitySnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
