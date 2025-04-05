import React, { useEffect, useState, useContext, useRef } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import styles from "./TextBox.module.css";

type CommonTextBoxProps = {
  textBoxLabel?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  nudgeText?: string;
  id?: string;
  ariaLabel?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onCommit?: (value: string) => void;
  nudgeVisible?: boolean;
  nudgePosition?: "top" | "bottom" | "left" | "right";
  renderNudge?: (value: string) => React.ReactNode;
};

type ControlledTextBoxProps = {
  value: string;
  defaultValue?: never;
};

type UncontrolledTextBoxProps = {
  defaultValue: string;
  value?: never;
};

export type TextBoxProps = (ControlledTextBoxProps | UncontrolledTextBoxProps) &
  CommonTextBoxProps;

export function TextBox({
  textBoxLabel,
  placeholder,
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
    onFocus?.(e);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e as unknown as React.FocusEvent<HTMLInputElement>);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setText(newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (onBlur) {
          const dummyEvent = {
            target: { value: text },
          } as unknown as React.FocusEvent<HTMLInputElement>;
          onBlur(dummyEvent);
        }
        onCommit?.(text);
      }
    };
    document.addEventListener("touchstart", handleTouchOutside);
    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [onBlur, onCommit, text]);

  const nudgeId = id ? `${id}-nudge` : undefined;

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

  const inputElement = (
    <input
      type="text"
      id={id}
      ref={inputRef}
      value={text}
      onChange={handleChange}
      onFocus={handleFocus}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      onBlur={(e) => {
        onBlur?.(e);
        onCommit?.(e.target.value);
      }}
      placeholder={placeholder}
      aria-label={ariaLabel ?? textBoxLabel}
      style={
        {
          ...theme.textBox.input,
          "--base-border": theme.textBox.input.baseBorder,
          "--hover-border": theme.textBox.hover.hoverBorder,
          "--placeholder-color": theme.textBox.input.placeholderColor,
          "--placeholder-font-size": theme.textBox.input.placeholderFontSize,
        } as React.CSSProperties
      }
      disabled={disabled}
      className={styles.inputTextBox}
    />
  );

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
      ref={containerRef}
    >
      <div style={theme.slider.sliderLabel}>
        <label htmlFor={id}>{textBoxLabel}</label>
      </div>
      {content}
    </div>
  );
}
