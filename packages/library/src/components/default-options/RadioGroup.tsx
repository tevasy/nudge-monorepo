import React, { useEffect, useState, useContext, useRef } from "react";
import "../../styles/globals.css";
import { ThemeContext } from "../../theme/ThemeContext";
import "../../styles/tokens.css";
import "../../styles/globals.css";

export type RadioGroupProps = {
  radioLabel?: string; // Label for individual radio options
  label: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
  name: string;
  disabled?: boolean;
  nudgeText?: string;
  id?: string;
  ariaLabel?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  nudgeVisible?: boolean;
  nudgePosition?: "top" | "bottom" | "left" | "right";
  renderNudge?: (checked: boolean) => React.ReactNode;
};

export function RadioGroup({
  radioLabel,
  label,
  value,
  checked,
  defaultChecked = false,
  onChange,
  name,
  disabled = false,
  nudgeText,
  id,
  ariaLabel,
  onFocus,
  onBlur,
  nudgeVisible = true,
  nudgePosition = "bottom",
  renderNudge,
}: RadioGroupProps) {
  const theme = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const nudgeId = id ? `${id}-nudge` : undefined;

  const nudgeElement =
    renderNudge && nudgeVisible ? (
      <div id={nudgeId} style={theme.radio.nudgeText}>
        {renderNudge(isChecked)}
      </div>
    ) : nudgeVisible && nudgeText ? (
      <div id={nudgeId} style={theme.radio.nudgeText}>
        <span>{nudgeText}</span>
      </div>
    ) : null;

  // Define touch handler to simulate focus on mobile.
  const handleTouchStart = (e: React.TouchEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e as unknown as React.FocusEvent<HTMLInputElement>);
    }
  };

  // Create a ref for the container to detect touches outside.
  const containerRef = useRef<HTMLDivElement>(null);

  // Document-level touch listener to simulate blur when touching outside.
  useEffect(() => {
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
      }
    };
    document.addEventListener("touchstart", handleTouchOutside);
    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [onBlur]);

  const radioInput = (
    <label
      htmlFor={id}
      style={theme.radio.container}
      role="radio"
      aria-checked={isChecked}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) =>
        !disabled && (e.key === "Enter" || e.key === " ") && handleChange()
      }
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked !== undefined ? checked : undefined}
        defaultChecked={checked === undefined ? defaultChecked : undefined}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onTouchStart={handleTouchStart}
        aria-label={ariaLabel ?? label}
        aria-describedby={nudgeVisible ? nudgeId : undefined}
        style={theme.radio.input}
        disabled={disabled}
      />
      <span
        style={{
          ...(isChecked
            ? { ...theme.radio.radioCircle, ...theme.radio.radioCircleChecked }
            : theme.radio.radioCircle),
        }}
      >
        {isChecked && <span style={theme.radio.radioDot} />}
      </span>
      <span style={theme.radio.label}>{label}</span>
    </label>
  );

  let content;
  if (nudgeVisible && (nudgePosition === "left" || nudgePosition === "right")) {
    content = (
      <div style={{ display: "flex", alignItems: "center" }}>
        {nudgePosition === "left" && (
          <div style={theme.radio.nudgeLeft}>{nudgeElement}</div>
        )}
        {radioInput}
        {nudgePosition === "right" && (
          <div style={theme.radio.nudgeRight}>{nudgeElement}</div>
        )}
      </div>
    );
  } else {
    content = (
      <>
        {nudgeVisible && nudgePosition === "top" && (
          <div style={theme.radio.nudgeTop}>{nudgeElement}</div>
        )}
        {radioInput}
        {nudgeVisible && nudgePosition === "bottom" && (
          <div style={theme.radio.nudgeBottom}>{nudgeElement}</div>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        ...theme.radio.wrapper,
        ...(disabled ? theme.radio.disabled : {}),
      }}
      ref={containerRef}
    >
      {radioLabel && <div style={theme.radio.radioLabel}>{radioLabel}</div>}
      {content}
    </div>
  );
}
