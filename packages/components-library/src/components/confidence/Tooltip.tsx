import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { ThemeContext } from "../../theme/ThemeContext";
import { FiX } from "react-icons/fi";
import styles from "./Tooltip.module.css";

export type TooltipProps = {
  id?: string;
  text?: string;
  visible?: boolean;
  defaultVisible?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  position?: "top" | "bottom" | "left" | "right" | "dynamic";
  autoClose?: boolean;
  autoCloseDelay?: number;
  renderContent?: () => React.ReactNode;
  children?: React.ReactNode;
  ariaLabel?: string;
  dismissible?: boolean;
  animationType?: "fade" | "slide" | "none";
  animationDuration?: number;
  closeOnHover?: boolean;
  openOnHover?: boolean;
  closeOutside?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
};

export function Tooltip({
  id,
  text,
  visible,
  defaultVisible = false,
  onOpen,
  onClose,
  position = "top",
  autoClose = false,
  autoCloseDelay = 3000,
  renderContent,
  children,
  ariaLabel,
  dismissible = false,
  animationType = "fade",
  animationDuration = 300,
  closeOnHover = true,
  openOnHover = true,
  closeOutside = false,
  buttonText,
  onButtonClick,
  icon,
}: TooltipProps) {
  const theme = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(defaultVisible);
  const [finalPosition, setFinalPosition] = useState<
    "top" | "bottom" | "left" | "right"
  >("top");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible !== undefined) {
      if (visible) {
        setShouldRender(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
        onOpen?.();
      } else {
        setIsVisible(false);
        const timer = setTimeout(() => {
          setShouldRender(false);
          onClose?.();
        }, animationDuration);
        return () => clearTimeout(timer);
      }
    }
  }, [visible, animationDuration, onOpen, onClose]);

  // Auto-close logic
  useEffect(() => {
    if (autoClose && isVisible) {
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, autoCloseDelay);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [autoClose, autoCloseDelay, isVisible, onClose]);

  // Close when clicking outside
  useEffect(() => {
    if (closeOutside && isVisible) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          handleClose(event as unknown as React.MouseEvent);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [closeOutside, isVisible]);

  // Hover/focus handlers
  const handleOpen = (event: React.MouseEvent | React.FocusEvent) => {
    if (visible === undefined) {
      setShouldRender(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
    onOpen?.();
  };

  const handleClose = (event: React.MouseEvent | React.FocusEvent) => {
    if (visible === undefined) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        onClose?.();
      }, animationDuration);
      return () => clearTimeout(timer);
    }
    onClose?.();
  };

  useLayoutEffect(() => {
    if (position === "dynamic" && containerRef.current && tooltipRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const margin = 8;
      if (containerRect.top >= tooltipRect.height + margin) {
        setFinalPosition("top");
      } else if (
        window.innerHeight - containerRect.bottom >=
        tooltipRect.height + margin
      ) {
        setFinalPosition("bottom");
      } else if (containerRect.left >= tooltipRect.width + margin) {
        setFinalPosition("left");
      } else if (
        window.innerWidth - containerRect.right >=
        tooltipRect.width + margin
      ) {
        setFinalPosition("right");
      } else {
        setFinalPosition("top");
      }
    }
  }, [position, isVisible]);

  const pos = position === "dynamic" ? finalPosition : position;

  const animationStyle = {
    "--animation-duration": `${animationDuration}ms`,
  } as React.CSSProperties;

  const positionClass = (() => {
    switch (pos) {
      case "top":
        return styles.tooltipTop;
      case "bottom":
        return styles.tooltipBottom;
      case "left":
        return styles.tooltipLeft;
      case "right":
        return styles.tooltipRight;
      default:
        return "";
    }
  })();

  const animationClass = animationType === "fade" ? styles.fade : styles.slide;
  const visibilityClass = isVisible ? styles.visible : styles.hidden;

  return (
    <div ref={containerRef} className={styles.tooltipDisplayContainer} id={id}>
      <div
        onMouseEnter={openOnHover ? handleOpen : undefined}
        onFocus={openOnHover ? handleOpen : undefined}
        onMouseLeave={closeOnHover ? handleClose : undefined}
        onBlur={closeOnHover ? handleClose : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </div>
      {shouldRender && (
        <div
          ref={tooltipRef}
          className={`${styles.tooltipContainer} ${positionClass} ${animationClass} ${visibilityClass}`}
          role="tooltip"
          style={{ ...animationStyle, ...theme.tooltip?.container }}
        >
          <div
            className={`${styles.tooltipContentContainer} ${
              icon ? styles.gridWithIcon : ""
            }`}
            style={theme.tooltip?.content}
          >
            {icon && (
              <div
                className={styles.tooltipIconContainer}
                style={theme.tooltip?.icon}
              >
                {icon}
              </div>
            )}
            <div
              className={styles.tooltipTextContainer}
              style={theme.tooltip?.message}
            >
              {renderContent ? renderContent() : <span>{text}</span>}
              {buttonText && !renderContent && (
                <button
                  className={styles.tooltipActionButton}
                  style={theme.tooltip?.actionButton}
                  onClick={onButtonClick}
                >
                  {buttonText}
                </button>
              )}
            </div>
            {dismissible && (
              <div
                className={styles.tooltipCloseButtonContainer}
                style={theme.tooltip?.closeButtonContainer}
              >
                <button
                  onClick={handleClose}
                  aria-label="Close tooltip"
                  style={theme.tooltip?.closeButton}
                >
                  <FiX />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
