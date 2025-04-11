import { useState } from "react";
import { ThemeProvider, defaultTheme } from "nudge-components-library";
import CodeContainer from "../CodeContainer";
import { Dialog } from "nudge-components-library";
import {
  dialogSnippet,
  dialogDynamicSnippet,
  dialogAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import DynamicDialog from "./DynamicDialog";
import AdaptiveDialog from "./AdaptiveDialog";

const customTheme = {
  ...defaultTheme,
  dialog: {
    ...defaultTheme.dialog,
    header: {
      ...defaultTheme.dialog.header,
      backgroundColor: "#ffe5cf",
      border: "none",
    },
    confirmButton: {
      ...defaultTheme.dialog.confirmButton,
      backgroundColor: "#fb8500",
    },
  },
  textBox: {
    ...defaultTheme.textBox,
    input: {
      ...defaultTheme.textBox.input,
      placeholderColor: "#c3c4c5",
    },
    hover: {
      hoverBorder: "1.5px solid #fb8500",
    },
  },
};

export default function DialogDocs() {
  const [dialogConfirmationVisible, setDialogConfirmationVisible] =
    useState(false);
  const [dialogInputVisible, setDialogInputVisible] = useState(false);
  const [dialogThemedVisible, setDialogThemedVisible] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");

  const handleConfirm = () => {
    setConfirmationInput("");
    setDialogConfirmationVisible(false);
    setDialogInputVisible(false);
    setDialogThemedVisible(false);
  };

  const handleCancel = () => {
    setConfirmationInput("");
    setDialogConfirmationVisible(false);
    setDialogInputVisible(false);
    setDialogThemedVisible(false);
  };
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-8 bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-44 rounded-b-2xl">
                  <div>
                    <p className="font-medium mb-4">Default Version</p>
                    <button
                      className="button-popup mb-4"
                      onClick={() => setDialogConfirmationVisible(true)}
                    >
                      Confirmation Dialog
                    </button>
                    <Dialog
                      id="confirmation-dialog"
                      ariaLabel="Confirmation Dialog"
                      visible={dialogConfirmationVisible}
                      title="Delete Confirmation"
                      message="Confirm deletion of this item? This action is irreversible and will result in permanent loss of data."
                      confirmButtonText="Delete"
                      cancelButtonText="Cancel"
                      onConfirm={handleConfirm}
                      onCancel={handleCancel}
                      onClose={() => setDialogConfirmationVisible(false)}
                    />

                    <button
                      className="button-popup"
                      onClick={() => setDialogInputVisible(true)}
                    >
                      Input Dialog
                    </button>
                    <Dialog
                      id="input-dialog"
                      ariaLabel="Input Dialog"
                      visible={dialogInputVisible}
                      title="Delete Confirmation"
                      message="Confirm deletion of this item? This action is irreversible and will result in permanent loss of data."
                      animationType="slide"
                      requiresInput={true}
                      confirmationPrompt="Please type in DELETE to continue."
                      inputPlaceholder="Type DELETE"
                      expectedInput="DELETE"
                      confirmationValue={confirmationInput}
                      onInputChange={setConfirmationInput}
                      confirmButtonText="Delete"
                      cancelButtonText="Cancel"
                      onConfirm={handleConfirm}
                      onCancel={handleCancel}
                      onClose={() => setDialogInputVisible(false)}
                    />
                  </div>
                  <div>
                    <p className="font-medium mb-4">Custom Version</p>
                    <button
                      className="button-popup"
                      onClick={() => setDialogThemedVisible(true)}
                    >
                      Themed Dialog
                    </button>
                    <ThemeProvider theme={customTheme}>
                      <Dialog
                        id="themed-dialog"
                        ariaLabel="Themed Dialog"
                        visible={dialogThemedVisible}
                        title="Delete Confirmation"
                        message="Confirm deletion of this item? This action is irreversible and will result in permanent loss of data."
                        requiresInput={true}
                        closeOutside={true}
                        confirmationPrompt="Please type in DELETE to continue."
                        inputPlaceholder="Type DELETE"
                        expectedInput="DELETE"
                        confirmationValue={confirmationInput}
                        onInputChange={setConfirmationInput}
                        confirmButtonText="Delete"
                        cancelButtonText="Cancel"
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                        onClose={() => setDialogThemedVisible(false)}
                      />
                    </ThemeProvider>
                  </div>
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={dialogSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-44 rounded-b-2xl">
                  <DynamicDialog />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={dialogDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-36 lg:px-44 rounded-b-2xl">
                  <AdaptiveDialog />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={dialogAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
