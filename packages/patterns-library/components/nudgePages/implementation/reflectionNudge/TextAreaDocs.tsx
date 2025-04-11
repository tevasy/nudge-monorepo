import {
  TextArea,
  ThemeProvider,
  defaultTheme,
} from "nudge-components-library";

import CodeContainer from "../CodeContainer";
import {
  textAreaSnippet,
  textAreaDynamicSnippet,
  textAreaAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import DynamicTextArea from "./DynamicTextArea";
import AdaptiveTextArea from "./AdaptiveTextArea";

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

export default function TextAreaDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-8 bg-white py-10 px-8 md:px-24 lg:px-28 rounded-b-2xl">
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
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={textAreaSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 md:px-24 lg:px-28 rounded-b-2xl">
                  <DynamicTextArea />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={textAreaDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 md:px-24 lg:px-28 rounded-b-2xl">
                  <AdaptiveTextArea />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={textAreaAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
