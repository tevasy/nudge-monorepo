import React, {
  useState,
  useContext,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { FiX } from "react-icons/fi";
import styles from "./Popup.module.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { ThemeContext } from "../../theme/ThemeContext";
import defaultImage from "../../assets/message.png";

type BasePopupProps = {
  id?: string;
  title?: string;
  message?: string;
  visible?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  renderContent?: () => React.ReactNode;
  ariaLabel?: string;
  animationType?: "fade" | "slide" | "none";
  animationDuration?: number;
  dismissible?: boolean;
  closeOutside?: boolean;
  image?: string | false | null | { src: string; [key: string]: any };
  buttonText?: string;
  onButtonClick?: () => void;
};

type AutoCloseProps =
  | { autoClose?: false; autoCloseDelay?: never }
  | { autoClose: true; autoCloseDelay: number };

export type PopupProps = BasePopupProps & AutoCloseProps;

export function Popup({
  id,
  title,
  message,
  visible = false,
  onClose,
  onOpen,
  autoClose = false,
  autoCloseDelay,
  position = "bottom-right",
  renderContent,
  ariaLabel,
  animationType = "fade",
  animationDuration = 300,
  dismissible = true,
  closeOutside = false,
  image: providedImage,
  buttonText,
  onButtonClick,
}: PopupProps) {
  const theme = useContext(ThemeContext);

  const image = providedImage === undefined ? defaultImage : providedImage;
  const imageUrl =
    image != null && typeof image === "object" ? image.src : image;
  const hasImage = !!(imageUrl && imageUrl !== "");

  const [isMobile, setIsMobile] = useState(false);
  const [shouldRender, setShouldRender] = useState(visible);
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 570);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mounting logic with animation
  useLayoutEffect(() => {
    if (visible) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
      onOpen?.();
    } else {
      setIsVisible(false);
      const timeout = setTimeout(() => {
        setShouldRender(false);
        onClose?.();
      }, animationDuration);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  // Auto-close
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoClose && shouldRender) {
      timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setShouldRender(false);
          onClose?.();
        }, animationDuration);
      }, autoCloseDelay);
    }
    return () => clearTimeout(timer);
  }, [autoClose, autoCloseDelay, shouldRender]);

  // Outside click to close
  useEffect(() => {
    if (!closeOutside) return;
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath?.() || [];
      if (popupRef.current && !path.includes(popupRef.current)) {
        setIsVisible(false);
        setTimeout(() => {
          setShouldRender(false);
          onClose?.();
        }, animationDuration);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeOutside]);

  if (!shouldRender) return null;

  // Position class
  const positionClass = isMobile
    ? styles.mobilePopup
    : (() => {
        switch (position) {
          case "top-left":
            return styles.topLeft;
          case "top-right":
            return styles.topRight;
          case "bottom-left":
            return styles.bottomLeft;
          case "bottom-right":
          default:
            return styles.bottomRight;
        }
      })();

  // Final class
  const containerClasses = [
    styles.popupContainer,
    positionClass,
    animationType === "fade"
      ? styles.fade
      : animationType === "slide"
      ? styles.slide
      : "",
    isVisible
      ? animationType === "fade"
        ? styles.fadeVisible
        : animationType === "slide"
        ? styles.slideVisible
        : ""
      : animationType === "fade"
      ? styles.fadeHidden
      : animationType === "slide"
      ? styles.slideHidden
      : "",
  ].join(" ");

  // Inline styles
  const containerStyle: React.CSSProperties & {
    "--animation-duration"?: string;
  } = {
    ...theme.popup?.container,
    "--animation-duration": `${animationDuration}ms`,
  };

  if (isMobile) {
    containerStyle.minWidth = "100%";
    containerStyle.maxWidth = "100%";
    containerStyle.width = "100%";
    containerStyle.borderRadius = "16px 16px 0px 0px";
  }

  const gridClass = dismissible
    ? hasImage
      ? styles.gridDismissibleImage
      : styles.gridDismissibleNoImage
    : hasImage
    ? styles.gridNonDismissibleImage
    : styles.gridNonDismissibleNoImage;

  return (
    <div
      id={id}
      className={containerClasses}
      ref={popupRef}
      style={containerStyle}
      aria-label={ariaLabel}
    >
      <div
        className={`${styles.contentContainer} ${gridClass}`}
        style={theme.popup?.content}
      >
        {hasImage && (
          <div>
            <img
              src={imageUrl as string}
              alt="Popup"
              style={theme.popup?.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          {title && <h3 style={theme.popup?.title}>{title}</h3>}
          <div style={theme.popup?.message}>
            {renderContent ? renderContent() : <span>{message}</span>}
          </div>
          {buttonText && !renderContent && (
            <button style={theme.popup?.actionButton} onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </div>
        {dismissible && (
          <div className={styles.closeButtonContainer}>
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setShouldRender(false);
                  onClose?.();
                }, animationDuration);
              }}
              role="button"
              style={theme.popup?.closeButton}
              aria-label="Close reminder"
            >
              <FiX />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
