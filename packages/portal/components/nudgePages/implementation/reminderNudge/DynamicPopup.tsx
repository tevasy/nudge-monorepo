import React, { useState, useEffect } from "react";
import { Popup } from "../../../../../library/src/components/reminder/Popup";

export default function DynamicReminder() {
  const [popupState, setPopupState] = useState<{
    type: "doctor" | "dentist" | null;
    visible: boolean;
  }>({ type: null, visible: false });

  const [countdown, setCountdown] = useState(5);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

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
    setNotificationMessage(
      "A reminder is open for the selected appointment type. It will close automatically after a short countdown or when clicking outside."
    );
  };

  const handlePopupClose = () => {
    setPopupState((prev) => ({ ...prev, visible: false }));
    if (hasBeenOpened) {
      setNotificationMessage(
        "The reminder has closed. Select an appointment type again to view the message."
      );
    }
  };

  // Countdown logic
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <p className="font-medium">
        Select the appointment type to receive a reminder:
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <button
          onClick={() => handleShowReminder("doctor")}
          style={{
            padding: "0.6rem 1.2rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            border: "2px solid #85c2ff",
            boxShadow: "#03a9f438 0px 2px 8px 0px",
            borderRadius: "10px",
            backgroundColor: "white",
            cursor: "pointer",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
          }}
        >
          Doctor Appointment
        </button>
        <button
          onClick={() => handleShowReminder("dentist")}
          style={{
            padding: "0.6rem 1.2rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            border: "2px solid #1b8dff",
            boxShadow: "#1b8dff45 0px 2px 8px 0px",
            borderRadius: "10px",
            backgroundColor: "white",
            cursor: "pointer",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
          }}
        >
          Dentist Appointment
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
              {popupState.type === "doctor" ? (
                <p>Please remember to bring the medical records.</p>
              ) : (
                <p>Please remember to bring any previous dental records.</p>
              )}
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
