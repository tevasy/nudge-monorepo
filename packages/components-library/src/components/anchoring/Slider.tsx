import React, { useLayoutEffect, useState, useContext, useRef } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import styles from "./Slider.module.css";

export type SliderProps = {
  sliderLabel?: string;
  min?: number;
  max?: number;
  value?: number;
  defaultValue?: number;
  step?: number;
  showValueTooltip?: boolean;
  onChange?: (value: number) => void;
  disabled?: boolean;
  nudgeText?: string;
  id?: string;
  ariaLabel?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onCommit?: (value: number) => void;
  nudgeVisible?: boolean;
  nudgePosition?: "top" | "bottom" | "left" | "right";
  renderNudge?: (value: number) => React.ReactNode;
  renderValueTooltip?: (value: number) => React.ReactNode;
  tooltipContainerStyle?: React.CSSProperties;
  alwaysShowTooltip?: boolean;
};

export function Slider({
  sliderLabel,
  min = 0,
  max = 100,
  value,
  defaultValue,
  step = 1,
  showValueTooltip = true,
  onChange,
  disabled = false,
  nudgeText,
  id,
  ariaLabel,
  onFocus,
  onBlur,
  onCommit,
  nudgeVisible = true,
  nudgePosition = "bottom",
  renderNudge,
  renderValueTooltip,
  tooltipContainerStyle,
  alwaysShowTooltip,
}: SliderProps) {
  const theme = useContext(ThemeContext);
  const sliderRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState(defaultValue ?? min);
  const [thumbCenter, setThumbCenter] = useState(0);

  const currentValue = value ?? sliderValue;

  const percentage = ((currentValue - min) / (max - min)) * 100;
  const filledPercentage = Math.min(percentage, 100);

  useLayoutEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const thumbWidthStr = theme.slider.thumb.width
        ? theme.slider.thumb.width.toString()
        : "20";
      const thumbWidth = parseInt(thumbWidthStr, 7);
      const pos =
        ((sliderWidth - thumbWidth) * (currentValue - min)) / (max - min) +
        thumbWidth / 2;
      setThumbCenter(pos);
    }
  }, [currentValue, min, max, theme.slider.thumb.width]);

  React.useEffect(() => {
    if (value !== undefined) {
      setSliderValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue !== undefined) {
      const clampedValue = Math.min(Math.max(defaultValue, min), max);
      setSliderValue(clampedValue);
    }
  }, [defaultValue, min, max]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (value === undefined) {
      setSliderValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    onCommit?.(Number(event.target.value));
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    onCommit?.(Number(event.currentTarget.value));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e as unknown as React.FocusEvent<HTMLInputElement>);
    }
  };

  React.useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (onBlur) {
          const dummyEvent = {
            target: containerRef.current,
          } as unknown as React.FocusEvent<HTMLInputElement>;
          onBlur(dummyEvent);
        }
        onCommit?.(currentValue);
      }
    };

    document.addEventListener("touchstart", handleTouchOutside);
    return () => document.removeEventListener("touchstart", handleTouchOutside);
  }, [onBlur, onCommit, currentValue]);

  const nudgeId = id ? `${id}-nudge` : undefined;

  const sliderInputElement = (
    <div style={theme.slider.container} className={styles.sliderContainer}>
      <input
        ref={sliderRef}
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={handleBlur}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        aria-label={ariaLabel ?? sliderLabel}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        aria-describedby={nudgeVisible ? nudgeId : undefined}
        style={{
          ...theme.slider.input,
          background: `linear-gradient(to right, ${theme.slider.input.filledColor} 0%, ${theme.slider.input.filledColor} ${filledPercentage}%, ${theme.slider.input.emptyColor} ${filledPercentage}%, ${theme.slider.input.emptyColor} 100%)`,
        }}
        disabled={disabled}
        className={styles.inputSlider}
      />
      <div
        className={styles.customThumb}
        style={{
          ...theme.slider.thumb,
          left: thumbCenter,
        }}
      />
      {showValueTooltip && (
        <div
          className={`${styles.sliderTooltip} ${
            alwaysShowTooltip ? styles.alwaysVisible : ""
          }`}
          style={
            {
              left: thumbCenter,
              ...theme.slider.tooltip,
              ...tooltipContainerStyle,
              "--tooltip-triangle-color": theme.slider.tooltip.triangleColor,
              "--tooltip-triangle-width": theme.slider.tooltip.triangleWidth,
            } as React.CSSProperties
          }
        >
          {renderValueTooltip ? renderValueTooltip(currentValue) : currentValue}
        </div>
      )}
    </div>
  );

  const nudgeElement =
    renderNudge && nudgeVisible ? (
      <div id={nudgeId} style={theme.slider.nudgeText}>
        {renderNudge(currentValue)}
      </div>
    ) : nudgeVisible && nudgeText ? (
      <div id={nudgeId} style={theme.slider.nudgeText}>
        {nudgeText}
      </div>
    ) : null;

  return (
    <div
      style={{
        ...theme.slider.wrapper,
        ...(disabled ? theme.slider.disabled : {}),
      }}
      className={styles.wrapper}
      ref={containerRef}
    >
      {sliderLabel && (
        <div style={theme.slider.sliderLabel}>
          <label htmlFor={id}>{sliderLabel}</label>
        </div>
      )}
      {nudgeVisible && nudgePosition === "top" && (
        <div style={theme.slider.nudgeTop}>{nudgeElement}</div>
      )}
      {nudgeVisible &&
      (nudgePosition === "left" || nudgePosition === "right") ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          {nudgePosition === "left" && (
            <div style={theme.slider.nudgeLeft}>{nudgeElement}</div>
          )}
          {sliderInputElement}
          {nudgePosition === "right" && (
            <div style={theme.slider.nudgeRight}>{nudgeElement}</div>
          )}
        </div>
      ) : (
        sliderInputElement
      )}
      {nudgeVisible && nudgePosition === "bottom" && (
        <div style={theme.slider.nudgeBottom}>{nudgeElement}</div>
      )}
    </div>
  );
}

export default Slider;
