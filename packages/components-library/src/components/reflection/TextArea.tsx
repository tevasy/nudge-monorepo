import React, { useEffect, useState, useContext, useRef } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import styles from "./TextArea.module.css";

type CommonTextAreaProps = {
  textAreaLabel?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  nudgeText?: string;
  id?: string;
  ariaLabel?: string;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onCommit?: (value: string) => void;
  nudgeVisible?: boolean;
  nudgePosition?: "top" | "bottom" | "left" | "right";
  renderNudge?: (value: string) => React.ReactNode;
  rows?: number;
};

type ControlledTextAreaProps = {
  value: string;
  defaultValue?: never;
};

type UncontrolledTextAreaProps = {
  defaultValue: string;
  value?: never;
};

export type TextAreaProps = (
  | ControlledTextAreaProps
  | UncontrolledTextAreaProps
) &
  CommonTextAreaProps;

export function TextArea({
  textAreaLabel,
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
  rows = 4,
}: TextAreaProps) {
  const theme = useContext(ThemeContext);
  const [text, setText] = useState(value !== undefined ? value : defaultValue);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setText(value);
    }
  }, [value]);

  // When the textarea is focused or clicked, select all text
  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.target.select();
    onFocus?.(e);
  };

  // Simulate focus on touch devices
  const handleTouchStart = (e: React.TouchEvent<HTMLTextAreaElement>) => {
    if (onFocus) {
      onFocus(e as unknown as React.FocusEvent<HTMLTextAreaElement>);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
    }
  };

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setText(newValue);
    onChange?.(newValue);
  };

  // Listen for touches outside the component to simulate blur
  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (onBlur) {
          const dummyEvent = {
            target: { value: text },
          } as unknown as React.FocusEvent<HTMLTextAreaElement>;
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
      <div id={nudgeId} style={theme.textArea?.nudgeText}>
        {renderNudge(text)}
      </div>
    ) : nudgeVisible && nudgeText ? (
      <div id={nudgeId} style={theme.textArea?.nudgeText}>
        {nudgeText}
      </div>
    ) : null;

  // Build the textarea element
  const textAreaElement = (
    <textarea
      id={id}
      ref={textAreaRef}
      value={text}
      onChange={handleChange}
      onFocus={handleFocus}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      onBlur={(e) => {
        onBlur?.(e);
        onCommit?.(e.target.value);
      }}
      aria-label={ariaLabel ?? textAreaLabel}
      placeholder={placeholder}
      rows={rows}
      style={
        {
          ...theme.textArea?.input,
          "--base-border": theme.textArea?.input?.baseBorder,
          "--hover-border": theme.textArea?.hover?.hoverBorder,
          "--placeholder-color": theme.textArea?.input?.placeholderColor,
          "--placeholder-font-size": theme.textArea?.input?.placeholderFontSize,
        } as React.CSSProperties
      }
      disabled={disabled}
      className={styles.textArea}
    />
  );

  let content;
  if (nudgeVisible && (nudgePosition === "left" || nudgePosition === "right")) {
    content = (
      <div style={{ display: "flex", alignItems: "center" }}>
        {nudgePosition === "left" && (
          <div style={theme.textArea?.nudgeLeft}>{nudgeElement}</div>
        )}
        {textAreaElement}
        {nudgePosition === "right" && (
          <div style={theme.textArea?.nudgeRight}>{nudgeElement}</div>
        )}
      </div>
    );
  } else {
    content = (
      <>
        {nudgeVisible && nudgePosition === "top" && (
          <div style={theme.textArea?.nudgeTop}>{nudgeElement}</div>
        )}
        {textAreaElement}
        {nudgeVisible && nudgePosition === "bottom" && (
          <div style={theme.textArea?.nudgeBottom}>{nudgeElement}</div>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        ...theme.textArea?.wrapper,
        ...(disabled ? theme.textArea?.disabled : {}),
      }}
      ref={containerRef}
    >
      <div style={theme.slider?.sliderLabel}>
        <label htmlFor={id}>{textAreaLabel}</label>
      </div>
      {content}
    </div>
  );
}
