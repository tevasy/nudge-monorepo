import React, { useContext } from "react";
import { Slider, SliderProps } from "../anchoring/Slider";
import { ThemeContext } from "../../theme/ThemeContext";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import styles from "./MoodSlider.module.css";

export type MoodDefinition = {
  id: string;
  icon: React.ReactNode;
  label: string;
  threshold?: number;
};

export type MoodSliderProps = SliderProps & {
  moodDefinitions?: MoodDefinition[];
  onMoodChange?: (moodId: string) => void;
  tooltipMode?: "value" | "text" | "icon";
  showIcon?: boolean;
};

export function MoodSlider({
  moodDefinitions,
  onMoodChange,
  tooltipMode = "value",
  showIcon = true,
  min = 0,
  max = 100,
  value,
  onChange,
  onCommit,
  ...restProps
}: MoodSliderProps) {
  const theme = useContext(ThemeContext);
  const definitions: MoodDefinition[] =
    moodDefinitions && moodDefinitions.length > 0
      ? moodDefinitions
      : [
          { id: "bad", icon: "😐", label: "Bad" },
          { id: "okay", icon: "🙂", label: "Okay" },
          { id: "good", icon: "😊", label: "Good" },
        ];

  const getMoodDefinition = (currentValue: number): MoodDefinition => {
    const hasThresholds = definitions.some(
      (def) => def.threshold !== undefined
    );
    if (!hasThresholds) {
      const count = definitions.length;
      const segment = (max - min) / count;
      const index = Math.min(
        Math.floor((currentValue - min) / segment),
        count - 1
      );
      return definitions[index];
    } else {
      for (let i = 0; i < definitions.length; i++) {
        if (
          definitions[i].threshold !== undefined &&
          currentValue <= definitions[i].threshold!
        ) {
          return definitions[i];
        }
      }
      return definitions[definitions.length - 1];
    }
  };

  const handleChange = (newValue: number) => {
    const moodDef = getMoodDefinition(newValue);
    onMoodChange?.(moodDef.id);
    onChange?.(newValue);
  };

  const handleCommit = (newValue: number) => {
    const moodDef = getMoodDefinition(newValue);
    onMoodChange?.(moodDef.id);
    onCommit?.(newValue);
  };

  const effectiveTooltipMode =
    tooltipMode === "icon" && !showIcon ? "value" : tooltipMode;

  const moodTooltipStyles: React.CSSProperties =
    theme.moodSlider && theme.moodSlider.tooltip
      ? theme.moodSlider.tooltip
      : theme.slider.tooltip;

  const moodIconStyles: React.CSSProperties =
    theme.moodSlider && theme.moodSlider.icon ? theme.moodSlider.icon : {};

  const renderValueTooltip = (currentValue: number) => {
    const moodDef = getMoodDefinition(currentValue);
    const iconElement = showIcon ? (
      <span style={moodIconStyles}>{moodDef.icon}</span>
    ) : null;

    switch (effectiveTooltipMode) {
      case "text":
        return (
          <div className={styles.tooltipContainer}>
            {iconElement}
            <span>{moodDef.label}</span>
          </div>
        );
      case "icon":
        return showIcon ? <>{iconElement}</> : null;
      case "value":
      default:
        return (
          <div className={styles.valueTooltip}>
            {iconElement}
            <span>{currentValue}</span>
          </div>
        );
    }
  };

  return (
    <Slider
      value={value}
      min={min}
      max={max}
      {...restProps}
      onChange={handleChange}
      onCommit={handleCommit}
      renderValueTooltip={renderValueTooltip}
      tooltipContainerStyle={moodTooltipStyles}
    />
  );
}

export default MoodSlider;
