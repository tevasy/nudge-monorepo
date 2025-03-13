import React, { useEffect, useState, useContext } from "react";
import { FiCheck } from "react-icons/fi";
import { ThemeContext } from "../../theme/ThemeContext";

// Define props for the Checkbox component.
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
  // Internal state for the checkbox (used when uncontrolled)
  const [isChecked, setIsChecked] = useState(defaultChecked);

  // Sync internal state when a controlled checked prop is provided.
  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  // Handle checkbox toggling.
  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  // Prepare a nudge ID for aria-describedby if an id is provided.
  const nudgeId = id ? `${id}-nudge` : undefined;

  // Determine the nudge element, now with disabled styling if applicable.
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

  // Build the checkbox input element along with its label.
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

  // Layout the checkbox input and nudge based on nudgePosition.
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
    >
      {checkboxLabel && (
        <div style={theme.checkbox.checkboxLabel}>{checkboxLabel}</div>
      )}
      {content}
    </div>
  );
}
