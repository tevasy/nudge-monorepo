import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
  memo,
} from "react";
import { FiStar } from "react-icons/fi";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { ThemeContext } from "../../theme/ThemeContext";
import styles from "./Rating.module.css";

export type RatingProps = {
  ratingLabel?: string;
  rating?: number;
  defaultRating?: number;
  max?: number;
  onChange?: (rating: number) => void;
  disabled?: boolean;
  nudgeText?: string;
  id?: string;
  ariaLabel?: string;
  onFocus?: React.FocusEventHandler<HTMLSpanElement>;
  onBlur?: React.FocusEventHandler<HTMLSpanElement>;
  nudgeVisible?: boolean;
  nudgePosition?: "top" | "bottom" | "left" | "right";
  renderNudge?: (rating: number) => React.ReactNode;
};

const Star = memo(
  ({
    index,
    currentRating,
    hoverRating,
    disabled,
    handleRating,
    setHoverRating,
    ariaLabel,
    onFocus,
  }: {
    index: number;
    currentRating: number;
    hoverRating: number | null;
    disabled: boolean;
    handleRating: (rating: number) => void;
    setHoverRating: React.Dispatch<React.SetStateAction<number | null>>;
    ariaLabel: string;
    onFocus?: React.FocusEventHandler<HTMLSpanElement>;
  }) => {
    const isFilled = index <= (hoverRating ?? currentRating);
    const theme = useContext(ThemeContext);
    return (
      <span
        key={index}
        className={`${styles.star} ${isFilled ? styles.filled : ""}`}
        onClick={() => !disabled && handleRating(index)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            handleRating(index);
          }
        }}
        onMouseEnter={() => !disabled && setHoverRating(index)}
        onMouseLeave={() => !disabled && setHoverRating(null)}
        onTouchStart={() => !disabled && setHoverRating(index)}
        onTouchEnd={() => !disabled && setHoverRating(null)}
        onTouchCancel={() => !disabled && setHoverRating(null)}
        onFocus={onFocus}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={`${ariaLabel} - ${index} star${index > 1 ? "s" : ""}`}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
          ...(theme.rating?.star || {}),
        }}
      >
        <FiStar
          style={{
            stroke: isFilled ? "var(--filled-star-color)" : "var(--star-color)",
            fill: isFilled ? "var(--filled-star-color)" : "transparent",
            strokeWidth: theme.rating?.star?.strokeWidth,
            transition: "fill 0.2s ease-in-out, stroke 0.2s ease-in-out",
          }}
        />
      </span>
    );
  }
);

export function Rating({
  ratingLabel,
  rating,
  defaultRating = 0,
  max = 5,
  onChange,
  disabled = false,
  nudgeText,
  id,
  ariaLabel = ratingLabel || "",
  onFocus,
  onBlur,
  nudgeVisible = true,
  nudgePosition = "bottom",
  renderNudge,
}: RatingProps) {
  const theme = useContext(ThemeContext);
  const [currentRating, setCurrentRating] = useState<number>(defaultRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // focus/blur tracking
  const isFocusingWithin = useRef(false);
  const blurTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleFocusCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!isFocusingWithin.current) {
      isFocusingWithin.current = true;
      onFocus?.(e as unknown as React.FocusEvent<HTMLSpanElement>);
    }
    if (blurTimeout.current) clearTimeout(blurTimeout.current);
  };

  const handleBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    blurTimeout.current = setTimeout(() => {
      if (isFocusingWithin.current) {
        isFocusingWithin.current = false;
        onBlur?.(e as unknown as React.FocusEvent<HTMLSpanElement>);
      }
    }, 100);
  };

  useEffect(() => {
    if (rating !== undefined) {
      setCurrentRating(rating);
    }
  }, [rating]);

  const handleRating = useCallback(
    (newRating: number) => {
      if (disabled) return;
      setCurrentRating(newRating);
      onChange?.(newRating);
    },
    [disabled, onChange]
  );

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      const targetNode = event.target as Node;
      const container = containerRef.current;

      if (!container) return;

      const touchedInside = container.contains(targetNode);

      if (touchedInside) {
        if (!isFocusingWithin.current) {
          isFocusingWithin.current = true;
          onFocus?.({
            target: container,
          } as unknown as React.FocusEvent<HTMLSpanElement>);
        }
      } else {
        if (isFocusingWithin.current) {
          isFocusingWithin.current = false;
          onBlur?.({
            target: container,
          } as unknown as React.FocusEvent<HTMLSpanElement>);
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [onFocus, onBlur]);

  const nudgeId = id ? `${id}-nudge` : undefined;
  const nudgeElement = nudgeVisible ? (
    renderNudge ? (
      <div id={nudgeId} style={theme.rating?.nudgeText}>
        {renderNudge(currentRating)}
      </div>
    ) : (
      nudgeText && (
        <div id={nudgeId} style={theme.rating?.nudgeText}>
          <span>{nudgeText}</span>
        </div>
      )
    )
  ) : null;

  const stars = Array.from({ length: max }, (_, i) => {
    const index = max - i;
    return (
      <Star
        key={index}
        index={index}
        currentRating={currentRating}
        hoverRating={hoverRating}
        disabled={disabled}
        handleRating={handleRating}
        setHoverRating={setHoverRating}
        ariaLabel={ariaLabel}
        onFocus={onFocus}
      />
    );
  });

  const content =
    nudgeVisible && (nudgePosition === "left" || nudgePosition === "right") ? (
      <div style={{ display: "flex", alignItems: "center" }}>
        {nudgePosition === "left" && (
          <div style={theme.rating?.nudgeLeft}>{nudgeElement}</div>
        )}
        <div className={styles.ratingContainer}>{stars}</div>
        {nudgePosition === "right" && (
          <div style={theme.rating?.nudgeRight}>{nudgeElement}</div>
        )}
      </div>
    ) : (
      <>
        {nudgeVisible && nudgePosition === "top" && (
          <div style={theme.rating?.nudgeTop}>{nudgeElement}</div>
        )}
        <div className={styles.ratingContainer}>{stars}</div>
        {nudgeVisible && nudgePosition === "bottom" && (
          <div style={theme.rating?.nudgeBottom}>{nudgeElement}</div>
        )}
      </>
    );

  return (
    <div
      style={
        {
          ...theme.rating?.wrapper,
          ...(disabled ? theme.rating?.disabled || {} : {}),
          "--star-color": theme.rating?.star?.color,
          "--filled-star-color": theme.rating?.filledStar?.color,
        } as React.CSSProperties
      }
      ref={containerRef}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      {ratingLabel && (
        <div style={theme.rating?.ratingLabel}>{ratingLabel}</div>
      )}
      <div style={theme.rating?.container}>{content}</div>
    </div>
  );
}
