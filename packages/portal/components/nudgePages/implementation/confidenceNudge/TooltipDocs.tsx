import {
  ThemeProvider,
  defaultTheme,
} from "../../../../../library/src/theme/ThemeContext";
import CodeContainer from "../CodeContainer";
import { Tooltip } from "nudge-library";
import {
  tooltipSnippet,
  tooltipDynamicSnippet,
  tooltipAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import { FaBolt } from "react-icons/fa";
import DynamicTooltip from "./DynamicTooltip";
import AdaptiveTooltip from "./AdaptiveTooltip";

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

export default function TooltipDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-6 bg-white py-10 px-8 sm:px-24 md:px-40 lg:px-56 rounded-b-2xl">
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
                          background:
                            "linear-gradient(135deg, #2492ff, #1675d5)",
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
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={tooltipSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-40 lg:px-56 rounded-b-2xl">
                  <DynamicTooltip />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={tooltipDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-40 lg:px-48 rounded-b-2xl">
                  <AdaptiveTooltip />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={tooltipAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
