import React, { useEffect, useState, useContext, useRef } from "react";
import { FiCheck } from "react-icons/fi";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { ThemeContext } from "../../theme/ThemeContext";

export type CheckboxProps = {
  checkboxLabel?: string;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
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

export function Checkbox({
  checkboxLabel,
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  nudgeText,
  id,
  ariaLabel,
  onFocus,
  onBlur,
  nudgeVisible = true,
  nudgePosition = "bottom",
  renderNudge,
}: CheckboxProps) {
  const theme = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const nudgeId = id ? `${id}-nudge` : undefined;

  const nudgeElement =
    renderNudge && nudgeVisible ? (
      <div id={nudgeId} style={theme.checkbox.nudgeText}>
        {renderNudge(isChecked)}
      </div>
    ) : nudgeVisible && nudgeText ? (
      <div id={nudgeId} style={theme.checkbox.nudgeText}>
        <span>{nudgeText}</span>
      </div>
    ) : null;

  // Touch handler to simulate focus events on mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e as unknown as React.FocusEvent<HTMLInputElement>);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

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

  const checkboxInput = (
    <label
      htmlFor={id}
      style={theme.checkbox.container}
      role="checkbox"
      aria-checked={isChecked}
      onKeyDown={(e) => {
        if (!disabled && e.key === "Enter") handleChange();
      }}
    >
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onTouchStart={handleTouchStart}
        aria-label={ariaLabel ?? label}
        style={theme.checkbox.input}
        disabled={disabled}
      />
      <span
        style={{
          ...theme.checkbox.checkBox,
          ...(isChecked ? theme.checkbox.checked : {}),
        }}
      >
        {isChecked && <FiCheck style={theme.checkbox.checkIcon} />}
      </span>
      <span style={theme.checkbox.label}>{label}</span>
    </label>
  );

  let content;
  if (nudgeVisible && (nudgePosition === "left" || nudgePosition === "right")) {
    content = (
      <div style={{ display: "flex", alignItems: "center" }}>
        {nudgePosition === "left" && (
          <div style={theme.checkbox.nudgeLeft}>{nudgeElement}</div>
        )}
        {checkboxInput}
        {nudgePosition === "right" && (
          <div style={theme.checkbox.nudgeRight}>{nudgeElement}</div>
        )}
      </div>
    );
  } else {
    content = (
      <>
        {nudgeVisible && nudgePosition === "top" && (
          <div style={theme.checkbox.nudgeTop}>{nudgeElement}</div>
        )}
        {checkboxInput}
        {nudgeVisible && nudgePosition === "bottom" && (
          <div style={theme.checkbox.nudgeBottom}>{nudgeElement}</div>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        ...theme.checkbox.wrapper,
        ...(disabled ? theme.checkbox.disabled : {}),
      }}
      ref={containerRef}
    >
      {checkboxLabel && (
        <div style={theme.checkbox.checkboxLabel}>{checkboxLabel}</div>
      )}
      {content}
    </div>
  );
}
