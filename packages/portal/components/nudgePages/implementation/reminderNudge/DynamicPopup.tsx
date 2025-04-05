import React, { useState, useEffect, useRef } from "react";
import { Popup } from "nudge-library";

export default function DynamicReminder() {
  const [popupState, setPopupState] = useState<{
    type: "doctor" | "dentist" | null;
    visible: boolean;
  }>({ type: null, visible: false });

  const [countdown, setCountdown] = useState(5);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  const currentMessageRef = useRef<string | null>(null);

  const animationDuration = 300;
  const autoCloseDelay = 5000;

  const handleShowReminder = (type: "doctor" | "dentist") => {
    if (popupState.visible && popupState.type !== type) {
      setPopupState((prev) => ({ ...prev, visible: false }));
      setTimeout(() => {
        setCountdown(5);
        setPopupState({ type, visible: true });
      }, animationDuration);
    } else if (!popupState.visible) {
      setCountdown(5);
      setPopupState({ type, visible: true });
    }
  };

  const handlePopupOpen = () => {
    setHasBeenOpened(true);
    const message =
      "A reminder is open for the selected appointment type. It will close automatically after a short countdown or when clicking outside.";

    if (currentMessageRef.current !== message) {
      currentMessageRef.current = message;
      setNotificationMessage(message);
    }
  };

  const handlePopupClose = () => {
    setPopupState((prev) => ({ ...prev, visible: false }));

    if (hasBeenOpened) {
      const message =
        "The reminder has closed. Select an appointment type again to view the message.";

      if (currentMessageRef.current !== message) {
        currentMessageRef.current = message;
        setNotificationMessage(message);
      }
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (popupState.visible) {
      intervalId = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [popupState.visible]);

  const getButtonStyle = (type: "doctor" | "dentist") => {
    const isActive = popupState.type === type;
    const isDoctor = type === "doctor";

    return {
      flex: 1,
      fontSize: "0.875rem",
      padding: "8px 12px",
      backgroundColor: isActive ? "#e7f2ff" : "white",
      color: isActive ? "#1b8dff" : "#002952",
      fontWeight: isActive ? "500" : "normal",
      cursor: "pointer",
      borderTop: `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`,
      borderBottom: `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`,
      borderLeft: isDoctor
        ? `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`
        : "none",
      borderRight: !isDoctor
        ? `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`
        : "none",
      borderRadius: isDoctor ? "5px 0 0 5px" : "0 5px 5px 0",
      outline: "none",
    };
  };

  const dividerColor = popupState.type ? "#1b8dff" : "#dfe2e4";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <p style={{ fontWeight: "500" }}>
        Select the Appointment Type to receive a reminder:
      </p>

      <div style={{ display: "flex", alignItems: "stretch" }}>
        <button
          onClick={() => handleShowReminder("doctor")}
          disabled={popupState.visible && popupState.type === "dentist"}
          style={{
            ...getButtonStyle("doctor"),
            ...(popupState.visible && popupState.type === "dentist"
              ? { cursor: "not-allowed", opacity: 0.5 }
              : {}),
          }}
        >
          Doctor
        </button>

        <div
          style={{
            width: "2px",
            backgroundColor: dividerColor,
          }}
        />

        <button
          onClick={() => handleShowReminder("dentist")}
          disabled={popupState.visible && popupState.type === "doctor"}
          style={{
            ...getButtonStyle("dentist"),
            ...(popupState.visible && popupState.type === "doctor"
              ? { cursor: "not-allowed", opacity: 0.5 }
              : {}),
          }}
        >
          Dentist
        </button>
      </div>

      {notificationMessage && (
        <p style={{ fontSize: "0.875rem" }}>{notificationMessage}</p>
      )}

      {popupState.type && (
        <Popup
          key={popupState.type}
          visible={popupState.visible}
          onOpen={handlePopupOpen}
          onClose={handlePopupClose}
          autoClose
          autoCloseDelay={autoCloseDelay}
          animationType="slide"
          animationDuration={animationDuration}
          dismissible
          closeOutside
          title={`${
            popupState.type === "doctor" ? "Doctor" : "Dentist"
          } Appointment Reminder`}
          renderContent={() => (
            <div>
              <p>
                {popupState.type === "doctor"
                  ? "Please remember to bring the medical records."
                  : "Please remember to bring any previous dental records."}
              </p>
              <p style={{ marginTop: "0.875rem" }}>
                The reminder will close in <strong>{countdown}</strong> second
                {countdown !== 1 && "s"}.
              </p>
            </div>
          )}
        />
      )}
    </div>
  );
}
