import { useState } from "react";
import {
  ThemeProvider,
  defaultTheme,
} from "../../../../../library/src/theme/ThemeContext";
import CodeContainer from "../CodeContainer";
import { Popup } from "../../../../../library/src/components/reminder/Popup";
import {
  popupSnippet,
  popupDynamicSnippet,
  popupAdaptiveSnippet,
} from "../../../../utils/codeSnippets";
import Tabs from "../Tabs";
import imagePopup from "./message.png";
import DynamicPopup from "./DynamicPopup";
import AdaptivePopup from "./AdaptivePopup";

const customTheme = {
  ...defaultTheme,
  popup: {
    ...defaultTheme.popup,
    actionButton: {
      ...defaultTheme.popup.actionButton,
      backgroundColor: "white",
      border: "2px solid #fb8500",
      color: "#002952",
      padding: "5px 16px",
      fontWeight: "500",
    },
    closeButton: {
      ...defaultTheme.popup.closeButton,
      fontSize: "0.875rem",
      border: "1px solid #f7f7f7",
      padding: "0.3rem",
      borderRadius: "50%",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
  },
};

export default function PopupDocs() {
  const [showPopupDefault, setShowPopupDefault] = useState(false);
  const [showPopupCustom, setShowPopupCustom] = useState(false);
  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <Tabs
        tabs={[
          {
            label: "Static nudge",
            content: (
              <div>
                <div className="flex flex-col gap-6 bg-white py-10 px-8 sm:px-24 md:px-40 lg:px-56 rounded-b-2xl">
                  <p className="font-medium -mb-3">Default Version</p>
                  <button
                    className="button-popup"
                    role="button"
                    onClick={() => setShowPopupDefault((prev) => !prev)}
                  >
                    Toggle Popup
                  </button>
                  <Popup
                    id="study-default-popup"
                    ariaLabel="study-default-popup"
                    title={"Study Break Reminder"}
                    message={
                      "Taking short, regular breaks helps increase focus. Consider a quick stretch or a walk before continuing."
                    }
                    buttonText="Take a Break"
                    visible={showPopupDefault}
                    onClose={() => setShowPopupDefault(false)}
                    onButtonClick={() => setShowPopupDefault(false)}
                  />
                  <p className="font-medium -mb-3">Custom Version</p>
                  <button
                    onClick={() => setShowPopupCustom((prev) => !prev)}
                    className="button-popup"
                    role="button"
                  >
                    Toggle Popup
                  </button>
                  <ThemeProvider theme={customTheme}>
                    <Popup
                      id="study-custom-popup"
                      ariaLabel="study-custom-popup"
                      message={
                        "Taking short, regular breaks helps increase focus. Consider a quick stretch or a walk before continuing."
                      }
                      buttonText="Take a Break"
                      visible={showPopupCustom}
                      onClose={() => setShowPopupCustom(false)}
                      onButtonClick={() => setShowPopupCustom(false)}
                      animationType="slide"
                      image={imagePopup}
                      position="top-right"
                      animationDuration={800}
                    />
                  </ThemeProvider>
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={popupSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Dynamic nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-40 lg:px-48 rounded-b-2xl">
                  <DynamicPopup />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={popupDynamicSnippet} />
                </div>
              </div>
            ),
          },
          {
            label: "Adaptive nudge",
            content: (
              <div>
                <div className="bg-white py-10 px-8 sm:px-24 md:px-40 lg:px-48 rounded-b-2xl">
                  <AdaptivePopup />
                </div>
                <div className="border-t border-customLightBlue">
                  <CodeContainer codeSnippet={popupAdaptiveSnippet} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
