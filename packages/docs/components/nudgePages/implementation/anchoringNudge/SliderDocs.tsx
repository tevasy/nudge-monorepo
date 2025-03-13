import CodeContainer from "../CodeContainer";
import {
  sliderAdaptiveSnippet,
  sliderDynamicSnippet,
  sliderSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import { Slider, ThemeProvider, defaultTheme } from "nudge-library";
import DynamicSlider from "./DynamicSlider";
import AdaptiveSlider from "./AdaptiveSlider";

const customTheme = {
  ...defaultTheme,
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

export default function SliderDocs() {
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-4 bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <Slider
                    sliderLabel="Default version"
                    defaultValue={50}
                    step={1}
                    nudgeText="The default value is set to 50."
                    id="defaultValueSlider"
                    ariaLabel="Slider with default value"
                  />
                  <ThemeProvider theme={customTheme}>
                    <Slider
                      sliderLabel="Custom version"
                      min={20}
                      max={80}
                      defaultValue={30}
                      step={10}
                      showValueTooltip={true}
                      nudgeText="The min value is 20, max value is 80, with step value 10."
                      id="minMaxSlider"
                      ariaLabel="Slider with min and max values"
                    />
                  </ThemeProvider>
                  <Slider
                    sliderLabel="Disabled version"
                    defaultValue={60}
                    step={1}
                    disabled={true}
                    nudgeText="This slider is disabled with nudge text on top."
                    id="disabledSlider"
                    ariaLabel="Disabled Slider"
                    nudgePosition="top"
                  />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={sliderSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <DynamicSlider />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={sliderDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-10 md:px-24 lg:px-28 rounded-b-2xl">
                  <AdaptiveSlider />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={sliderAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
