import React, { useState, useEffect } from "react";
import { Dialog } from "nudge-components-library";

type DeviceType = "trusted" | "unrecognized";

export default function AdaptiveDialog() {
  const [deviceType, setDeviceType] = useState<DeviceType>("trusted");

  const [visible, setVisible] = useState(false);
  const [requiresInput, setRequiresInput] = useState(false);
  const [expectedInput, setExpectedInput] = useState("");
  const [confirmationValue, setConfirmationValue] = useState("");
  const [confirmationPrompt, setConfirmationPrompt] = useState("");
  const [frictionReason, setFrictionReason] = useState<string>("");

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    const needsInput = deviceType === "unrecognized";
    setRequiresInput(needsInput);

    const reasons: string[] = [];
    if (deviceType === "unrecognized") reasons.push("Unrecognized device");

    setFrictionReason(reasons.join(". ") + ".");

    if (needsInput) {
      const confirmText = `DELETE ACCOUNT`;
      setExpectedInput(confirmText);
      setConfirmationPrompt(
        `To proceed, type ${confirmText} in the field below.`
      );
    } else {
      setExpectedInput("");
      setConfirmationPrompt("");
    }
  }, [deviceType]);

  const handleConfirm = () => {
    setStatusMessage("✅ Account has been permanently deleted.");
    setVisible(false);
  };

  const handleCancel = () => {
    setStatusMessage("❌ Deletion process was cancelled.");
    setVisible(false);
  };

  const getButtonStyle = (type: DeviceType) => {
    const isActive = deviceType === type;
    const isFirst = type === "trusted";

    return {
      flex: 1,
      fontSize: "0.875rem",
      padding: "8px 12px",
      backgroundColor: isActive ? "#e7f2ff" : "white",
      color: isActive ? "#1b8dff" : "#002952",
      fontWeight: isActive ? "500" : "normal",
      borderTop: `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`,
      borderBottom: `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`,
      borderLeft: isFirst
        ? `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`
        : "none",
      borderRight: isFirst
        ? "none"
        : `2px solid ${isActive ? "#1b8dff" : "#dfe2e4"}`,
      borderRadius: isFirst ? "5px 0 0 5px" : "0 5px 5px 0",
      outline: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
    };
  };

  const dividerColor = "#1b8dff";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <p style={{ fontWeight: "500" }}>
        Choose Device Type before deleting an account:
      </p>

      <div style={{ display: "flex", alignItems: "stretch" }}>
        <button
          onClick={() => setDeviceType("trusted")}
          style={getButtonStyle("trusted")}
        >
          Trusted
        </button>

        <div style={{ width: "2px", backgroundColor: dividerColor }} />

        <button
          onClick={() => setDeviceType("unrecognized")}
          style={getButtonStyle("unrecognized")}
        >
          Unrecognized
        </button>
      </div>

      <button onClick={() => setVisible(true)} className="button-popup">
        Delete Account
      </button>

      {statusMessage && <p>{statusMessage}</p>}

      <Dialog
        visible={visible}
        title="Confirm Account Deletion"
        message={
          <>
            Proceeding will <strong>permanently delete the account</strong>.
            This action is irreversible.
            {requiresInput && (
              <div style={{ marginTop: 10, color: "#a94442" }}>
                <strong>Additional verification required:</strong>
                <br />
                {frictionReason}
              </div>
            )}
          </>
        }
        onClose={() => setVisible(false)}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        requiresInput={requiresInput}
        expectedInput={expectedInput}
        confirmationValue={confirmationValue}
        onInputChange={setConfirmationValue}
        confirmationPrompt={confirmationPrompt}
        confirmButtonText="Delete Account"
        cancelButtonText="Cancel"
      />

      <p style={{ fontSize: "0.875rem" }}>
        The example allows switching between trusted and unrecognized device
        contexts. When the unrecognized device type is selected, an additional
        verification step is introduced: the user must type a confirmation
        phrase before the action can proceed. In contrast, the trusted device
        context allows immediate confirmation with minimal friction. After the
        deletion attempt, a success or cancellation message is displayed to
        provide feedback.
      </p>
    </div>
  );
}
