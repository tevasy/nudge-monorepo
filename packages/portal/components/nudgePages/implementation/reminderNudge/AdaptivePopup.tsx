import React, { useState, useEffect } from "react";
import { Popup } from "../../../../../library/src/components/reminder/Popup";

export default function AdaptivePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [lastResponse, setLastResponse] = useState<
    "acknowledged" | "dismissed" | null
  >(null);
  const [hasRespondedThisSession, setHasRespondedThisSession] = useState(false);
  const [hasEverInteracted, setHasEverInteracted] = useState(false);

  // Load from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("hydration-last-response");
    if (stored === "acknowledged" || stored === "dismissed") {
      setLastResponse(stored);
      setHasEverInteracted(true);
    }
  }, []);

  // Store to localStorage when lastResponse changes
  useEffect(() => {
    if (lastResponse) {
      localStorage.setItem("hydration-last-response", lastResponse);
      setHasEverInteracted(true);
    }
  }, [lastResponse]);

  const handleShowReminder = () => {
    setHasRespondedThisSession(false);
    setShowPopup(true);
  };

  const handleAcknowledge = () => {
    setHasRespondedThisSession(true);
    setShowPopup(false);
    setTimeout(() => {
      setLastResponse("acknowledged");
    }, 300);
  };

  const handleDismiss = () => {
    if (!hasRespondedThisSession && hasEverInteracted) {
      setLastResponse("dismissed");
    }
    setShowPopup(false);
  };

  const getAdaptiveMessage = () => {
    if (lastResponse === "dismissed") {
      return "Don't forget to hydrate. Skipping water can affect your focus.";
    } else if (lastResponse === "acknowledged") {
      return "Great job staying hydrated! Keep it up!";
    } else {
      return "Staying hydrated helps your brain and body.";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <p className="font-medium">Adaptive Hydration Reminder</p>
      <button
        onClick={handleShowReminder}
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
        Check Hydration
      </button>

      <Popup
        id="hydration-popup"
        visible={showPopup}
        autoClose
        autoCloseDelay={6000}
        animationType="fade"
        animationDuration={300}
        position="bottom-left"
        title="Hydration Reminder"
        message={getAdaptiveMessage()}
        buttonText="I drank water"
        onButtonClick={handleAcknowledge}
        dismissible
        closeOutside
        onClose={handleDismiss}
        ariaLabel="hydration-reminder"
      />

      <p style={{ fontSize: "0.875rem" }}>
        This popup adapts its message based on past interaction. Acknowledging
        it with the <em>&quot;I drank water&quot;</em> button shows an
        encouraging message next time, dismissing it via close or outside click
        results in a more assertive tone. If there&apos;s no prior interaction,
        a neutral tip is shown. The response is saved in{" "}
        <code style={{ fontSize: "0.813rem" }}>localStorage</code>, so
        adaptivity persists across sessions and page reloads.
      </p>
    </div>
  );
}
