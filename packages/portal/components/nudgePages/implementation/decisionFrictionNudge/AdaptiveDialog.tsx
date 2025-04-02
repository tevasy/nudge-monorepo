import React, { useState, useEffect } from "react";
import { Dialog } from "nudge-library";

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <p style={{ fontWeight: "500" }}>
        Choose Device Type before deleting an account:
      </p>

      <div
        style={{
          display: "flex",
          overflow: "hidden",
        }}
      >
        <button
          onClick={() => setDeviceType("trusted")}
          style={{
            flex: 1,
            fontSize: "0.875rem",
            padding: "8px 12px",
            background: deviceType === "trusted" ? "#e7f2ff" : "white",
            color: deviceType === "trusted" ? "#1b8dff" : "#444",
            borderTop: `1px solid ${
              deviceType === "trusted" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderLeft: `1px solid ${
              deviceType === "trusted" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderBottom: `1px solid ${
              deviceType === "trusted" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderRight: `1px solid ${
              deviceType === "trusted" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderRadius: "5px 0 0 5px",
            fontWeight: deviceType === "trusted" ? "500" : "normal",
            outline: "none",
            cursor: "pointer",
          }}
        >
          Trusted
        </button>
        <button
          onClick={() => setDeviceType("unrecognized")}
          style={{
            flex: 1,
            fontSize: "0.875rem",
            padding: "8px 12px",
            background: deviceType === "unrecognized" ? "#e7f2ff" : "white",
            color: deviceType === "unrecognized" ? "#1b8dff" : "#444",
            borderTop: `1px solid ${
              deviceType === "unrecognized" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderRight: `1px solid ${
              deviceType === "unrecognized" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderBottom: `1px solid ${
              deviceType === "unrecognized" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderLeft: `1px solid ${
              deviceType === "unrecognized" ? "#1b8dff" : "#dfe2e4"
            }`,
            borderRadius: "0 5px 5px 0",
            fontWeight: deviceType === "unrecognized" ? "500" : "normal",
            outline: "none",
            cursor: "pointer",
          }}
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
