import CodeContainer from "../CodeContainer";
import { Badge, ThemeProvider, defaultTheme } from "nudge-components-library";
import {
  badgeSnippet,
  badgeDynamicSnippet,
  badgeAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import { FaBolt } from "react-icons/fa6";
import DynamicBadge from "./DynamicBadge";
import AdaptiveBadge from "./AdaptiveBadge";

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

export default function BadgeDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-8 bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
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
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={badgeSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <DynamicBadge />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={badgeDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-40 rounded-b-2xl">
                  <AdaptiveBadge />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={badgeAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
