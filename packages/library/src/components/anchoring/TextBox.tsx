import React, { useEffect, useState, useContext, useRef } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import styles from "./TextBox.module.css";

// Common props shared by both controlled and uncontrolled versions.
type CommonTextBoxProps = {
  // Label for the textbox.
  textBoxLabel?: string;

  // Callback fired when the value changes.
  onChange?: (value: string) => void;

  // Whether the textbox is disabled.
  disabled?: boolean;

  // Static nudge message to display as guidance.
  nudgeText?: string;

  // Accessibility enhancements:
  // Unique identifier for the textbox (links label and input).
  id?: string;
  // Accessible label for screen readers.
  ariaLabel?: string;

  // Interaction handlers for dynamic behavior:
  // Called when the textbox gains focus.
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  // Called when the textbox loses focus.
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  // Called when the user commits the input (e.g. on blur).
  onCommit?: (value: string) => void;

  // Adaptive nudge customization:
  // Controls whether the nudge is visible.
  nudgeVisible?: boolean;
  // Determines the placement of the nudge relative to the textbox.
  nudgePosition?: "top" | "bottom" | "left" | "right";
  // A render prop for dynamically generating the nudge content based on the textbox's value.
  renderNudge?: (value: string) => React.ReactNode;
};

// Controlled usage: value is required, defaultValue is disallowed.
type ControlledTextBoxProps = {
  value: string;
  defaultValue?: never;
};

// Uncontrolled usage: defaultValue is required, value is disallowed.
type UncontrolledTextBoxProps = {
  defaultValue: string;
  value?: never;
};

export type TextBoxProps = (ControlledTextBoxProps | UncontrolledTextBoxProps) &
  CommonTextBoxProps;

export function TextBox({
  textBoxLabel,
  value,
  defaultValue,
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
}: TextBoxProps) {
  const theme = useContext(ThemeContext);
  const [text, setText] = useState(value !== undefined ? value : defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync internal state when a controlled value is provided.
  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  // When the textbox is focused or clicked, select all text.
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
    onFocus?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  // Handle input changes.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setText(newValue);
    onChange?.(newValue);
  };

  // Prepare a nudge ID for accessibility if an id is provided.
  const nudgeId = id ? `${id}-nudge` : undefined;

  // Determine the nudge element.
  const nudgeElement =
    renderNudge && nudgeVisible ? (
      <div id={nudgeId} style={theme.textBox.nudgeText}>
        {renderNudge(text)}
      </div>
    ) : nudgeVisible && nudgeText ? (
      <div id={nudgeId} style={theme.textBox.nudgeText}>
        {nudgeText}
      </div>
    ) : null;

  // Build the input element.
  const inputElement = (
    <input
      type="text"
      id={id}
      ref={inputRef}
      value={text}
      onChange={handleChange}
      onFocus={handleFocus}
      onClick={handleClick}
      onBlur={(e) => {
        onBlur?.(e);
        onCommit?.(e.target.value);
      }}
      aria-label={ariaLabel ?? textBoxLabel}
      style={
        {
          ...theme.textBox.input,
          "--base-border": theme.textBox.input.baseBorder,
          "--hover-border": theme.textBox.hover.hoverBorder,
        } as React.CSSProperties
      }
      disabled={disabled}
      className={styles.inputTextBox}
    />
  );

  // Layout the input and nudge based on the nudgePosition prop.
  let content;
  if (nudgeVisible && (nudgePosition === "left" || nudgePosition === "right")) {
    content = (
      <div style={{ display: "flex", alignItems: "center" }}>
        {nudgePosition === "left" && (
          <div style={theme.textBox.nudgeLeft}>{nudgeElement}</div>
        )}
        {inputElement}
        {nudgePosition === "right" && (
          <div style={theme.textBox.nudgeRight}>{nudgeElement}</div>
        )}
      </div>
    );
  } else {
    content = (
      <>
        {nudgeVisible && nudgePosition === "top" && (
          <div style={theme.textBox.nudgeTop}>{nudgeElement}</div>
        )}
        {inputElement}
        {nudgeVisible && nudgePosition === "bottom" && (
          <div style={theme.textBox.nudgeBottom}>{nudgeElement}</div>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        ...theme.textBox.wrapper,
        ...(disabled ? theme.textBox.disabled : {}),
      }}
    >
      <div style={theme.slider.sliderLabel}>
        <label htmlFor={id}>{textBoxLabel}</label>
      </div>

      {content}
    </div>
  );
}
