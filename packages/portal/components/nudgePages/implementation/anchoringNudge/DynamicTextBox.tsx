import React, { useState } from "react";
import { TextBox } from "nudge-library";

export default function DonationSettings() {
  // Predefined suggested donation amount.
  const [suggestedDonation, setSuggestedDonation] = useState("25");
  const [showPreview, setShowPreview] = useState(false);
  const [finalMessage, setFinalMessage] = useState("");

  // Show the preview when the textbox gains focus.
  const handleFocus = () => {
    setShowPreview(true);
    setFinalMessage("");
  };

  // Hide the preview when the textbox loses focus.
  const handleBlur = () => {
    setShowPreview(false);
  };

  // Update state as the user types, only allow numeric input (including decimals)
  const handleChange = (newValue: string) => {
    if (newValue === "" || /^\d*\.?\d*$/.test(newValue)) {
      setSuggestedDonation(newValue);
    }
  };

  // Capture and display the final donation amount upon commit.
  // Prevent committing an empty or invalid numeric value.
  const handleCommit = (newValue: string) => {
    const numericValue = parseFloat(newValue);
    if (newValue.trim() === "" || isNaN(numericValue)) return;
    setFinalMessage(
      `Thank you for choosing to donate ${newValue}! Your generosity can make a real difference.`
    );
  };

  // Render a dynamic preview based on the entered donation amount.
  const renderDonationPreview = (value: string) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      return <div>Please enter a valid donation amount.</div>;
    }
    if (numericValue < 20) {
      return (
        <div>
          Even a small increase can make a big difference, consider donating a
          bit more!
        </div>
      );
    } else if (numericValue < 50) {
      return (
        <div>
          Great choice! A slightly higher donation could increase your impact.
        </div>
      );
    } else {
      return (
        <div>
          Fantastic! Your generous donation has the power to change lives.
        </div>
      );
    }
  };

  return (
    <div>
      <TextBox
        id="donationAmount"
        ariaLabel="Donation Amount"
        textBoxLabel="Donation Amount"
        value={suggestedDonation}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCommit={handleCommit}
        nudgeVisible={showPreview}
        renderNudge={renderDonationPreview}
      />
      {finalMessage && (
        <div style={{ marginTop: "10px", fontSize: "1rem" }}>
          {finalMessage}
        </div>
      )}
      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        When the text box is focused, a nudge text appears that updates based on
        the entered amount. Once focus is lost, the nudge message disappears
        via&nbsp;<code style={{ fontSize: "0.813rem" }}>nudgeVisible</code> and
        the input is committed via{" "}
        <code style={{ fontSize: "0.813rem" }}>onCommit</code>, displaying a
        final confirmation message for the donation. This component will not
        commit an empty value, or inputs other than numbers.
      </p>
    </div>
  );
}
