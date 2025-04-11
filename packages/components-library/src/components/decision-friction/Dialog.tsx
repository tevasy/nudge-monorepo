import React, {
  useState,
  useContext,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { FiX } from "react-icons/fi";
import styles from "./Dialog.module.css";
import { ThemeContext } from "../../theme/ThemeContext";
import { TextBox, TextBoxProps } from "../anchoring/TextBox";

export type ControlledTextBoxProps = {
  value: string;
  defaultValue?: never;
} & Omit<TextBoxProps, "value" | "defaultValue">;

type DialogPropsBase = {
  id?: string;
  title: string;
  message: string | React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
  animationType?: "fade" | "slide" | "none";
  animationDuration?: number;
  dismissible?: boolean;
  closeOutside?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  inputPlaceholder?: string;
  confirmationValue?: string;
  expectedInput?: string;
  onInputChange?: (value: string) => void;
  ariaLabel?: string;
  inputProps?: Partial<TextBoxProps>;
};

type DialogPropsRequiresInput = DialogPropsBase & {
  requiresInput: true;
  confirmationPrompt: string;
};

type DialogPropsNoInput = DialogPropsBase & {
  requiresInput?: false;
  confirmationPrompt?: string;
};

export type DialogProps = DialogPropsRequiresInput | DialogPropsNoInput;

export function Dialog({
  id,
  title,
  message,
  visible = false,
  onClose,
  onOpen,
  autoClose = false,
  autoCloseDelay = 5000,
  animationType = "fade",
  animationDuration = 300,
  dismissible = true,
  closeOutside = false,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  onConfirm,
  onCancel,
  requiresInput = false,
  inputPlaceholder = "Type to confirm",
  confirmationValue = "",
  expectedInput,
  onInputChange,
  ariaLabel = "Dialog",
  inputProps,
  confirmationPrompt,
}: DialogProps) {
  const theme = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldRender, setShouldRender] = useState(visible);
  const [isVisible, setIsVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

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
  }, [visible, animationDuration, onClose, onOpen]);

  // Auto-close logic
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
  }, [autoClose, autoCloseDelay, shouldRender, animationDuration, onClose]);

  if (!shouldRender) return null;

  const containerClasses = [
    styles.dialogContainer,
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
    isMobile ? styles.mobileDialog : "",
  ].join(" ");

  const containerStyle: React.CSSProperties & {
    "--animation-duration"?: string;
  } = {
    ...theme.dialog?.container,
    "--animation-duration": `${animationDuration}ms`,
  };

  const overlayStyle: React.CSSProperties = {
    ...(theme.dialog?.overlay || { background: "rgba(0, 0, 0, 0.5)" }),
    transition: `opacity ${animationDuration}ms ease`,
  };

  const handleOverlayClick = () => {
    if (closeOutside) {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
        onClose?.();
      }, animationDuration);
    }
  };

  const handleConfirmClick = () => {
    if (requiresInput && expectedInput && confirmationValue !== expectedInput) {
      return;
    }
    onConfirm?.();
  };

  const isConfirmDisabled =
    requiresInput && expectedInput
      ? confirmationValue !== expectedInput
      : false;

  return (
    <div
      className={`${styles.overlay} ${
        isVisible ? styles.overlayVisible : styles.overlayHidden
      }`}
      onClick={handleOverlayClick}
      style={overlayStyle}
    >
      <div
        id={id}
        className={containerClasses}
        ref={dialogRef}
        style={containerStyle}
        aria-label={ariaLabel}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.contentContainer} style={theme.dialog?.content}>
          {(title || dismissible) && (
            <div style={theme.dialog?.header} className={styles.headerRow}>
              {title && <h3 style={theme.dialog?.title}>{title}</h3>}
              {dismissible && (
                <button
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => {
                      setShouldRender(false);
                      onClose?.();
                    }, animationDuration);
                  }}
                  role="button"
                  style={theme.dialog?.closeButton}
                  aria-label="Close dialog"
                >
                  <FiX />
                </button>
              )}
            </div>
          )}
          <div style={theme.dialog?.textContainer}>
            {message && <div style={theme.dialog?.message}>{message}</div>}
            {requiresInput && (
              <>
                <p style={theme.dialog?.promptText}>{confirmationPrompt}</p>
                <div style={theme.dialog?.input}>
                  <TextBox
                    id="dialog-confirmation-input"
                    textBoxLabel=""
                    value={confirmationValue}
                    onChange={(value) => {
                      onInputChange?.(value);
                    }}
                    placeholder={inputPlaceholder}
                    ariaLabel={ariaLabel}
                    {...(inputProps as Partial<ControlledTextBoxProps>)}
                  />
                </div>
              </>
            )}
          </div>
          {requiresInput && (
            <div
              style={theme.dialog?.inputContainer}
              className={styles.inputSection}
            >
              <div className={styles.buttonSection}>
                <button onClick={onCancel} style={theme.dialog?.cancelButton}>
                  {cancelButtonText}
                </button>
                <button
                  onClick={handleConfirmClick}
                  style={{
                    ...theme.dialog?.confirmButton,
                    ...(isConfirmDisabled ? theme.dialog?.disabled : {}),
                  }}
                  disabled={isConfirmDisabled}
                >
                  {confirmButtonText}
                </button>
              </div>
            </div>
          )}
          {!requiresInput && (
            <div
              style={theme.dialog?.buttonContainer}
              className={styles.buttonSection}
            >
              <button onClick={onCancel} style={theme.dialog?.cancelButton}>
                {cancelButtonText}
              </button>
              <button onClick={onConfirm} style={theme.dialog?.confirmButton}>
                {confirmButtonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
