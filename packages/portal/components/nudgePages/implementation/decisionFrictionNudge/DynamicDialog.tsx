import React, { useState } from "react";
import { Dialog } from "nudge-library";

export default function DynamicDialog() {
  const [visibleDisable, setVisibleDisable] = useState(false);
  const [visibleEnable, setVisibleEnable] = useState(false);
  const [confirmationValue, setConfirmationValue] = useState("");
  const [is2FADisabled, setIs2FADisabled] = useState(false);

  const expectedInput = "DISABLE 2FA";

  const openDisableDialog = () => setVisibleDisable(true);
  const closeDisableDialog = () => {
    setConfirmationValue("");
    setVisibleDisable(false);
  };

  const confirmDisable = () => {
    setVisibleDisable(false);
    setTimeout(() => {
      setIs2FADisabled(true);
      setConfirmationValue("");
    }, 400);
  };

  const openEnableDialog = () => setVisibleEnable(true);
  const closeEnableDialog = () => setVisibleEnable(false);

  const confirmEnable = () => {
    setVisibleEnable(false);
    setTimeout(() => {
      setIs2FADisabled(false);
    }, 300);
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
        Managing Two-Factor Authentication (2FA) in Account Settings
      </p>
      <button
        className={"button-popup"}
        onClick={is2FADisabled ? openEnableDialog : openDisableDialog}
      >
        {is2FADisabled ? "Enable 2FA" : "Disable 2FA"}
      </button>

      <p style={{ marginTop: "-10px" }}>
        {is2FADisabled
          ? "2FA is currently disabled. Press the button to enable it again."
          : "2FA is currently enabled. Press the button to disable it."}
      </p>

      {!is2FADisabled && (
        <Dialog
          id="dialog-disable-2fa"
          title="Disable Two-Factor Authentication?"
          message="Disabling 2FA removes an important layer of account protection. This action is not recommended unless necessary."
          visible={visibleDisable}
          onClose={closeDisableDialog}
          onConfirm={confirmDisable}
          onCancel={closeDisableDialog}
          requiresInput={true}
          confirmationPrompt={`Please type ${expectedInput} to proceed.`}
          inputPlaceholder="Type the phrase here"
          confirmationValue={confirmationValue}
          expectedInput={expectedInput}
          onInputChange={setConfirmationValue}
          autoClose={true}
          autoCloseDelay={12000}
          animationType="fade"
          animationDuration={400}
          dismissible={true}
          confirmButtonText="Yes, Disable 2FA"
          cancelButtonText="No, Keep It On"
          ariaLabel="Disable 2FA Confirmation Dialog"
          inputProps={{
            id: "2fa-input-box",
            placeholder: expectedInput,
            disabled: false,
            ariaLabel: "Type DISABLE 2FA to confirm",
            nudgeVisible: true,
            renderNudge: (val) => {
              if (!val) {
                return <span style={{ color: "gray" }}>No input entered.</span>;
              }
              if (val === expectedInput) {
                return (
                  <span style={{ color: "green" }}>
                    Confirmation phrase accepted.
                  </span>
                );
              }
              return <span>Input must match {expectedInput} exactly.</span>;
            },
          }}
        />
      )}

      {is2FADisabled && (
        <Dialog
          id="dialog-enable-2fa"
          title="Enable Two-Factor Authentication?"
          message="Enabling 2FA is strongly recommended to improve account security. Proceed with activation?"
          visible={visibleEnable}
          onClose={closeEnableDialog}
          onConfirm={confirmEnable}
          onCancel={closeEnableDialog}
          requiresInput={false}
          autoClose={false}
          animationType="slide"
          animationDuration={300}
          dismissible={true}
          confirmButtonText="Enable 2FA"
          cancelButtonText="Cancel"
          ariaLabel="Enable 2FA Confirmation Dialog"
        />
      )}
      <p style={{ fontSize: "0.875rem" }}>
        This example allows toggling Two-Factor Authentication (2FA) with
        dynamic dialogs. Disabling 2FA requires manually typing a confirmation
        phrase. Nudge text is displayed beneath the input, changing based on
        provided text. Enabling 2FA uses a simpler confirmation dialog. The UI
        updates dynamically based on the current 2FA state, and the
        corresponding dialog is shown accordingly.
      </p>
    </div>
  );
}
