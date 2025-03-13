import { useState } from "react";
import { RadioGroup, ThemeProvider, defaultTheme } from "nudge-library";
import CodeContainer from "../CodeContainer";
import AdaptiveRadioGroup from "./AdaptiveRadioGroup";
import {
  RadioGroupSnippet,
  radioGroupDynamicSnippet,
  radioGroupAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import DynamicRadioGroup from "./DynamicRadioGroup";

const customTheme = {
  ...defaultTheme,
  radio: {
    ...defaultTheme.radio,
    radioCircleChecked: {
      backgroundColor: "#fb8500",
      border: "2px solid #fb8500",
    },
  },
};

export default function RadioDocs() {
  const [selectedWorkout, setSelectedWorkout] = useState("high-intensity");

  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-4 bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
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
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={RadioGroupSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <DynamicRadioGroup />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={radioGroupDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <AdaptiveRadioGroup />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={radioGroupAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
