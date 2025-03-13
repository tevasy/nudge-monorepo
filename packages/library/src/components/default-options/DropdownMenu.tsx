import React, { useState, useRef, useEffect, useContext } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { ThemeContext } from "../../theme/ThemeContext";
import styles from "./DropdownMenu.module.css";

export type DropdownMenuProps = {
  // Label for the dropdown
  dropdownLabel?: string;

  // Array of options to display in the dropdown.
  options: { label: string; value: string; nudgeText?: string }[];

  // Controlled selected value.
  selected?: string;

  // Default selected value when uncontrolled.
  defaultSelected?: string;

  // Callback fired when an option is selected.
  onChange?: (value: string) => void;

  // Placeholder text to show when no option is selected.
  placeholder?: string;

  // Whether the dropdown is disabled.
  disabled?: boolean;

  // Accessibility enhancements:
  id?: string;
  ariaLabel?: string;

  // Interaction handlers:
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onCommit?: (value: string) => void;

  // Adaptive nudge customization:
  nudgeVisible?: boolean;
  nudgePosition?: "top" | "bottom" | "left" | "right";
  renderNudge?: (
    option: { label: string; value: string; nudgeText?: string } | undefined
  ) => React.ReactNode;
};

export function DropdownMenu({
  dropdownLabel,
  options,
  selected,
  defaultSelected,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  id,
  ariaLabel,
  onFocus,
  onBlur,
  onCommit,
  nudgeVisible = true,
  nudgePosition = "bottom",
  renderNudge,
}: DropdownMenuProps) {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState(
    defaultSelected || ""
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine the currently selected value (controlled vs. uncontrolled).
  const selectedValue = selected !== undefined ? selected : internalSelected;

  // Find the selected option.
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  // Toggle dropdown open/close.
  const toggleOpen = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  // Handle selection.
  const handleSelect = (value: string) => {
    if (!disabled) {
      setInternalSelected(value);
      onChange?.(value);
      onCommit?.(value);
      setIsOpen(false);
    }
  };

  // Close dropdown on outside click.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{
        ...theme.dropdown.wrapper,
        ...(disabled ? theme.dropdown.disabled : {}),
      }}
    >
      {dropdownLabel && (
        <div style={theme.dropdown.dropdownLabel}>{dropdownLabel}</div>
      )}

      <button
        id={id}
        aria-label={ariaLabel || placeholder}
        style={
          {
            ...theme.dropdown.button,
            "--base-border": theme.dropdown.button.baseBorder,
            "--hover-border": theme.dropdown.hover.hoverBorder,
          } as React.CSSProperties
        }
        onClick={toggleOpen}
        onFocus={onFocus}
        onBlur={(e) => {
          onBlur?.(e);
          onCommit?.(selectedValue);
        }}
        className={styles.dropdownButton}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <FiChevronDown
          style={{
            ...theme.dropdown.chevron,
            ...(isOpen ? theme.dropdown.chevronOpen : {}),
          }}
        />
      </button>

      {isOpen && (
        <ul style={theme.dropdown.list}>
          {options.map((option) => {
            const isOptionSelected = option.value === selectedValue;

            // Compute nudge text.
            let optionNudgeElement: React.ReactNode = null;
            if (nudgeVisible) {
              if (renderNudge) {
                optionNudgeElement = (
                  <div
                    id={id ? `${id}-${option.value}-nudge` : undefined}
                    style={theme.dropdown.nudgeText}
                  >
                    {renderNudge(option)}
                  </div>
                );
              } else if (option.nudgeText) {
                optionNudgeElement = (
                  <div
                    id={id ? `${id}-${option.value}-nudge` : undefined}
                    style={theme.dropdown.nudgeText}
                  >
                    <span>{option.nudgeText}</span>
                  </div>
                );
              }
            }

            // Arrange option content with nudge.
            let optionContent: React.ReactNode;
            if (nudgePosition === "top") {
              optionContent = (
                <>
                  {optionNudgeElement}
                  <div style={theme.dropdown.content}>
                    <span style={theme.dropdown.label}>{option.label}</span>
                    {isOptionSelected && (
                      <FiCheck
                        style={theme.dropdown.checkIcon}
                        strokeWidth={2.5}
                      />
                    )}
                  </div>
                </>
              );
            } else if (nudgePosition === "bottom") {
              optionContent = (
                <>
                  <div style={theme.dropdown.content}>
                    <span style={theme.dropdown.label}>{option.label}</span>
                    {isOptionSelected && (
                      <FiCheck
                        style={theme.dropdown.checkIcon}
                        strokeWidth={2.5}
                      />
                    )}
                  </div>
                  {optionNudgeElement}
                </>
              );
            } else if (nudgePosition === "left" || nudgePosition === "right") {
              optionContent = (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {nudgePosition === "left" && optionNudgeElement}
                  <div style={theme.dropdown.content}>
                    <span style={theme.dropdown.label}>{option.label}</span>
                    {isOptionSelected && (
                      <FiCheck
                        style={theme.dropdown.checkIcon}
                        strokeWidth={2.5}
                      />
                    )}
                  </div>
                  {nudgePosition === "right" && optionNudgeElement}
                </div>
              );
            } else {
              // Default to bottom.
              optionContent = (
                <>
                  <div style={theme.dropdown.content}>
                    <span style={theme.dropdown.label}>{option.label}</span>
                    {isOptionSelected && (
                      <FiCheck
                        style={theme.dropdown.checkIcon}
                        strokeWidth={2.5}
                      />
                    )}
                  </div>
                  {optionNudgeElement}
                </>
              );
            }

            return (
              <li
                key={option.value}
                style={
                  {
                    ...theme.dropdown.option,
                    "--item-hover-bg": theme.dropdown.optionHover.background,
                    ...(isOptionSelected ? theme.dropdown.optionSelected : {}),
                  } as React.CSSProperties
                }
                onClick={() => handleSelect(option.value)}
                className={styles.dropdownItem}
              >
                {optionContent}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
