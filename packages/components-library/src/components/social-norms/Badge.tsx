import React, { useContext } from "react";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { ThemeContext } from "../../theme/ThemeContext";
import styles from "./Badge.module.css";

export type BadgeProps = {
  badgeLabel?: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
  nudgeText?: string;
  id?: string;
  ariaLabel?: string;
  disabled?: boolean;
  nudgeVisible?: boolean;
  nudgePosition?: "top" | "bottom" | "left" | "right";
  renderNudge?: (badgeData: {
    label?: string;
    count?: number;
  }) => React.ReactNode;
};

export function Badge({
  badgeLabel,
  label,
  count,
  icon,
  nudgeText,
  id,
  ariaLabel = badgeLabel || "",
  disabled = false,
  nudgeVisible = true,
  nudgePosition = "bottom",
  renderNudge,
}: BadgeProps) {
  const theme = useContext(ThemeContext);

  const badgeContent = (
    <div className={styles.badgeContent} style={theme.badge?.container}>
      {icon && (
        <span className={styles.icon} style={theme.badge?.icon}>
          {icon}
        </span>
      )}
      {label && <span style={theme.badge?.label}>{label}</span>}
      {typeof count === "number" && (
        <span className={styles.count} style={theme.badge?.count}>
          {count}
        </span>
      )}
    </div>
  );

  const nudgeId = id ? `${id}-nudge` : undefined;
  const nudgeElement = nudgeVisible ? (
    renderNudge ? (
      <div id={nudgeId} style={theme.badge?.nudgeText}>
        {renderNudge({ label, count })}
      </div>
    ) : (
      nudgeText && (
        <div id={nudgeId} style={theme.badge?.nudgeText}>
          <span>{nudgeText}</span>
        </div>
      )
    )
  ) : null;

  const isHorizontal =
    nudgeVisible && (nudgePosition === "left" || nudgePosition === "right");

  const baseWrapperStyle: React.CSSProperties = {
    ...(theme.badge?.wrapper as React.CSSProperties),
    flexDirection: isHorizontal ? "row" : "column",
  };

  const wrapperStyle: React.CSSProperties = disabled
    ? { ...baseWrapperStyle, ...theme.badge?.disabled }
    : baseWrapperStyle;

  let content;
  if (isHorizontal) {
    content = (
      <div className={styles.badgeContainer}>
        {nudgePosition === "left" && (
          <div style={theme.badge?.nudgeLeft}>{nudgeElement}</div>
        )}
        {badgeContent}
        {nudgePosition === "right" && (
          <div style={theme.badge?.nudgeRight}>{nudgeElement}</div>
        )}
      </div>
    );
  } else {
    content = (
      <>
        {nudgeVisible && nudgePosition === "top" && (
          <div style={theme.badge?.nudgeTop}>{nudgeElement}</div>
        )}
        {badgeContent}
        {nudgeVisible && nudgePosition === "bottom" && (
          <div style={theme.badge?.nudgeBottom}>{nudgeElement}</div>
        )}
      </>
    );
  }

  return (
    <div style={wrapperStyle} id={id} aria-label={ariaLabel}>
      {badgeLabel && <div style={theme.badge?.badgeLabel}>{badgeLabel}</div>}

      {content}
    </div>
  );
}
