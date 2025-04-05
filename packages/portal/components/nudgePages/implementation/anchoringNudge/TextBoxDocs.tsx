import { TextBox, ThemeProvider, defaultTheme } from "nudge-library";

import CodeContainer from "../CodeContainer";
import {
  textBoxSnippet,
  textBoxDynamicSnippet,
  textBoxAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import DynamicTextBox from "./DynamicTextBox";
import AdaptiveTextBox from "./AdaptiveTextBox";

const customTheme = {
  ...defaultTheme,
  textBox: {
    ...defaultTheme.textBox,
    nudgeText: {
      ...defaultTheme.textBox.nudgeText,
      backgroundColor: "#ffe5cf",
    },
    hover: {
      hoverBorder: "2px solid #fb8500",
    },
  },
};

export default function TextBoxDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-8 bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
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
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={textBoxSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <DynamicTextBox />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={textBoxDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <AdaptiveTextBox />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={textBoxAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
