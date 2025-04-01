import React from "react";
import CodeContainer from "../CodeContainer";
import {
  moodSliderAdaptiveSnippet,
  moodSliderDynamicSnippet,
  moodSliderSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import { MoodSlider, ThemeProvider, defaultTheme } from "nudge-library";
import DynamicMoodSlider from "./DynamicMoodSlider";
import AdaptiveMoodSlider from "./AdaptiveMoodSlider";

const customTheme = {
  ...defaultTheme,
  moodSlider: {
    ...defaultTheme.moodSlider,
    tooltip: {
      ...defaultTheme.moodSlider.tooltip,
      backgroundColor: "#ffe5cf",
      triangleColor: "#ffe5cf",
    },
    icon: {
      ...defaultTheme.tooltip.icon,
      fontSize: "20px",
    },
  },
  slider: {
    ...defaultTheme.slider,
    input: {
      ...defaultTheme.slider.input,
      filledColor: "#fb8500",
      emptyColor: "#fffaf6",
    },
    thumb: {
      ...defaultTheme.slider.thumb,
      background: "#fb8500",
    },
    tooltip: {
      ...defaultTheme.slider.tooltip,
      backgroundColor: "#ffe5cf",
      triangleColor: "#ffe5cf",
    },
    nudgeText: {
      ...defaultTheme.slider.nudgeText,
      backgroundColor: "#ffe5cf",
    },
  },
};

export default function MoodSliderDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-8 bg-white py-10 px-8 md:px-24 lg:px-28 rounded-b-2xl">
                  <MoodSlider
                    id="defaultMoodSlider"
                    ariaLabel="default Mood Slider"
                    sliderLabel="Default version"
                    defaultValue={60}
                    min={0}
                    max={100}
                    tooltipMode="icon"
                    alwaysShowTooltip
                  />
                  <ThemeProvider theme={customTheme}>
                    <MoodSlider
                      id="customMoodSlider"
                      ariaLabel="custom Mood Slider"
                      sliderLabel="Custom version"
                      defaultValue={80}
                      min={0}
                      max={100}
                      tooltipMode="text"
                      nudgeText="Reflect on the mood to improve self-awareness."
                    />
                  </ThemeProvider>
                  <MoodSlider
                    id="disabledMoodSlider"
                    ariaLabel="disabled Mood Slider"
                    sliderLabel="Disabled version"
                    disabled
                    defaultValue={30}
                    min={0}
                    max={100}
                    showValueTooltip={false}
                    tooltipMode="text"
                  />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={moodSliderSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 md:px-24 lg:px-28 rounded-b-2xl">
                  <DynamicMoodSlider />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={moodSliderDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 md:px-24 lg:px-28 rounded-b-2xl">
                  <AdaptiveMoodSlider />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={moodSliderAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
