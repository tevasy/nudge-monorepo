import React, { createContext, FC, ReactNode } from "react";

type BaseCSS = {
  [K in keyof React.CSSProperties]?: React.CSSProperties[K];
};

export type ThemeCSS = BaseCSS & {
  baseBorder?: string;
  hoverBorder?: string;
  triangleColor?: string;
  triangleWidth?: string;
  filledColor?: string;
  emptyColor?: string;
  [key: string]: any;
};

export type Theme = {
  checkbox: {
    wrapper: ThemeCSS;
    container: ThemeCSS;
    checkboxLabel: ThemeCSS;
    input: ThemeCSS;
    checkBox: ThemeCSS;
    checked: ThemeCSS;
    checkIcon: ThemeCSS;
    disabled: ThemeCSS;
    label: ThemeCSS;
    nudgeText: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
    nudgeLeft: ThemeCSS;
    nudgeRight: ThemeCSS;
  };
  radio: {
    wrapper: ThemeCSS;
    container: ThemeCSS;
    radioLabel: ThemeCSS;
    input: ThemeCSS;
    radioCircle: ThemeCSS;
    radioCircleChecked: ThemeCSS;
    disabled: ThemeCSS;
    label: ThemeCSS;
    nudgeText: ThemeCSS;
    radioDot: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
    nudgeLeft: ThemeCSS;
    nudgeRight: ThemeCSS;
  };
  dropdown: {
    dropdownLabel: ThemeCSS;
    wrapper: ThemeCSS;
    button: ThemeCSS;
    disabled: ThemeCSS;
    chevron: ThemeCSS;
    chevronOpen: ThemeCSS;
    list: ThemeCSS;
    option: ThemeCSS;
    optionHover: ThemeCSS;
    hover: ThemeCSS;
    optionSelected: ThemeCSS;
    content: ThemeCSS;
    label: ThemeCSS;
    checkIcon: ThemeCSS;
    nudgeText: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
  };
  slider: {
    wrapper: ThemeCSS;
    container: ThemeCSS;
    tooltip: ThemeCSS;
    sliderLabel: ThemeCSS;
    input: ThemeCSS;
    thumb: ThemeCSS;
    value: ThemeCSS;
    nudgeText: ThemeCSS;
    disabled: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
    nudgeLeft: ThemeCSS;
    nudgeRight: ThemeCSS;
  };
  textBox: {
    wrapper: ThemeCSS;
    textBoxLabel: ThemeCSS;
    input: ThemeCSS;
    nudgeText: ThemeCSS;
    disabled: ThemeCSS;
    hover: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
    nudgeLeft: ThemeCSS;
    nudgeRight: ThemeCSS;
  };
  popup: {
    container: ThemeCSS;
    content: ThemeCSS;
    closeButton: ThemeCSS;
    title: ThemeCSS;
    message: ThemeCSS;
    image: ThemeCSS;
    actionButton: ThemeCSS;
  };
  rating: {
    wrapper: ThemeCSS;
    container: ThemeCSS;
    ratingLabel: ThemeCSS;
    star: ThemeCSS;
    filledStar: ThemeCSS;
    disabled: ThemeCSS;
    nudgeText: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
    nudgeLeft: ThemeCSS;
    nudgeRight: ThemeCSS;
  };
  badge: {
    wrapper: ThemeCSS;
    container: ThemeCSS;
    badgeLabel: ThemeCSS;
    label: ThemeCSS;
    count: ThemeCSS;
    icon: ThemeCSS;
    disabled: ThemeCSS;
    nudgeText: ThemeCSS;
    nudgeLeft: ThemeCSS;
    nudgeRight: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
  };
  tooltip: {
    container: ThemeCSS;
    closeButton: ThemeCSS;
    content: ThemeCSS;
    closeButtonContainer: ThemeCSS;
    message: ThemeCSS;
    actionButton: ThemeCSS;
    icon: ThemeCSS;
  };
  moodSlider: {
    tooltip: ThemeCSS;
    icon: ThemeCSS;
  };
  textArea: {
    wrapper: ThemeCSS;
    textAreaLabel: ThemeCSS;
    input: ThemeCSS;
    hover: ThemeCSS;
    nudgeText: ThemeCSS;
    disabled: ThemeCSS;
    nudgeLeft: ThemeCSS;
    nudgeRight: ThemeCSS;
    nudgeTop: ThemeCSS;
    nudgeBottom: ThemeCSS;
  };
  dialog: {
    container: ThemeCSS;
    overlay: ThemeCSS;
    content: ThemeCSS;
    textContainer: ThemeCSS;
    inputContainer: ThemeCSS;
    buttonContainer: ThemeCSS;
    header: ThemeCSS;
    closeButton: ThemeCSS;
    title: ThemeCSS;
    message: ThemeCSS;
    confirmButton: ThemeCSS;
    cancelButton: ThemeCSS;
    disabled: ThemeCSS;
    input: ThemeCSS;
    promptText: ThemeCSS;
  };
};

export const defaultTheme: Theme = {
  checkbox: {
    wrapper: {},
    container: {
      display: "flex",
      alignItems: "center",
    },
    checkboxLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginBottom: "12px",
    },
    checkBox: {
      width: "22px",
      height: "22px",
      border: "var(--border-gray)",
      borderRadius: "var(--border-radius-sm)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "10px",
      transition: "all 0.2s ease-in-out",
      cursor: "pointer",
    },
    checked: {
      backgroundColor: "var(--color-darkerBlue)",
      border: "var(--border-selected)",
    },
    checkIcon: {
      color: "white",
      fontSize: "var(--font-size-lg)",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    input: {
      opacity: 0,
      position: "absolute",
    },
    label: {
      color: "var(--color-black)",
      fontSize: "var(--font-size-md)",
      cursor: "pointer",
    },
    nudgeText: {
      padding: "8px 12px",
      backgroundColor: "var(--color-lightLightBlue)",
      borderRadius: "6px",
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "opacity 0.3s ease-in-out",
    },
    nudgeLeft: {
      marginRight: "12px",
    },
    nudgeRight: {
      marginLeft: "12px",
    },
    nudgeTop: { marginBottom: "6px" },
    nudgeBottom: { marginTop: "6px" },
  },
  radio: {
    wrapper: {},
    container: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    input: {
      opacity: 0,
      position: "absolute",
    },
    radioLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginBottom: "10px",
    },
    radioCircle: {
      width: "20px",
      height: "20px",
      border: "2px solid var(--color-darkGray)",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "10px",
      transition: "all 0.2s ease-in-out",
    },
    radioCircleChecked: {
      backgroundColor: "var(--color-darkerBlue)",
      border: "2px solid var(--color-darkerBlue)",
      position: "relative",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    label: {
      color: "var(--color-black)",
      fontSize: "var(--font-size-md)",
    },
    nudgeText: {
      marginTop: "4px",
      padding: "6px 10px",
      backgroundColor: "var(--color-lightLightBlue)",
      borderRadius: "6px",
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "opacity 0.3s ease-in-out",
    },
    radioDot: {
      width: "10px",
      height: "10px",
      backgroundColor: "white",
      borderRadius: "50%",
      position: "absolute",
    },
    nudgeLeft: {
      marginRight: "12px",
    },
    nudgeRight: {
      marginLeft: "12px",
    },
    nudgeTop: { marginBottom: "6px" },
    nudgeBottom: { marginTop: "6px" },
  },
  dropdown: {
    wrapper: {
      position: "relative",
    },
    dropdownLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      padding: "10px 14px",
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      background: "white",
      baseBorder: "var(--border-gray)",
      borderRadius: "var(--border-radius-sm)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      transition: "border-color 0.2s ease-in-out",
    },
    hover: {
      hoverBorder: "var(--border-selected)",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    chevron: {
      fontSize: "var(--font-size-lg)",
      transition: "transform 0.3s ease-in-out",
      color: "var(--color-black)",
    },
    chevronOpen: {
      transform: "rotate(180deg)",
    },
    list: {
      position: "absolute",
      left: 0,
      width: "100%",
      background: "white",
      border: "1.5px solid var(--color-lightBlue)",
      borderRadius: "var(--border-radius-sm)",
      boxShadow: "0px 4px 10px rgba(0, 6, 41, 0.1)",
      listStyle: "none",
      padding: "6px 0",
      marginTop: "4px",
      zIndex: 10,
      transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
      maxHeight: "200px",
      overflowY: "auto",
    },
    option: {
      padding: "10px 14px",
      fontSize: "var(--font-size-md)",
      cursor: "pointer",
      transition: "background 0.2s ease-in-out",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "4px",
    },
    optionSelected: {
      fontWeight: 500,
    },
    optionHover: {
      background: "var(--color-lightLightBlue)",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    label: {
      color: "var(--color-black)",
    },
    checkIcon: {
      fontSize: "var(--font-size-lg)",
      color: "var(--color-black)",
      strokeWidth: "3",
    },
    nudgeText: {
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      fontWeight: "normal",
    },
    nudgeTop: { marginBottom: "6px" },
    nudgeBottom: { marginTop: "6px" },
  },
  slider: {
    wrapper: {},
    container: {
      width: "100%",
    },
    tooltip: {
      display: "flex",
      alignItems: "center",
      fontSize: "13px",
      backgroundColor: "var(--color-lightBlue)",
      color: "var(--color-black)",
      padding: "4px 8px",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      triangleColor: "var(--color-lightBlue)",
      triangleWidth: "5px",
      zIndex: "5",
      bottom: "calc(100% + 3px)",
    },
    sliderLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginBottom: "16px",
    },
    input: {
      width: "100%",
      appearance: "none",
      height: "6px",
      borderRadius: "4px",
      outline: "none",
      transition: "background 0.2s ease-in-out",
      filledColor: "var(--color-darkerBlue)",
      emptyColor: "var(--color-lightLightBlue)",
    },
    thumb: {
      width: "20px",
      height: "20px",
      top: "4px",
      borderRadius: "50%",
      background: "var(--color-darkerBlue)",
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      cursor: "pointer",
    },
    value: {
      fontSize: "var(--font-size-sm)",
      fontWeight: "500",
      color: "var(--color-black)",
    },
    nudgeText: {
      padding: "6px 10px",
      backgroundColor: "var(--color-lightLightBlue)",
      borderRadius: "6px",
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      transition: "opacity 0.3s ease-in-out",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    nudgeTop: {
      marginBottom: "6px",
    },
    nudgeBottom: {
      marginTop: "6px",
    },
    nudgeLeft: {
      marginRight: "24px",
    },
    nudgeRight: {
      marginLeft: "24px",
    },
  },
  moodSlider: {
    tooltip: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "13px",
      backgroundColor: "var(--color-lightBlue)",
      color: "var(--color-black)",
      padding: "8px 10px",
      borderRadius: "4px",
      triangleColor: "var(--color-lightBlue)",
      triangleWidth: "5px",
      zIndex: "5",
      bottom: "calc(100% + 3px)",
    },
    icon: {
      fontSize: "22px",
    },
  },
  textBox: {
    wrapper: {},
    textBoxLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginTop: "10px",
    },
    input: {
      padding: "10px",
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      background: "white",
      borderRadius: "var(--border-radius-sm)",
      transition: "border-color 0.2s ease-in-out",
      baseBorder: "var(--border-gray)",
      width: "100%",
      placeholderColor: "var(--color-darkGray)",
      placeholderFontSize: "var(--font-size-md)",
    },
    hover: {
      hoverBorder: "var(--border-selected)",
    },
    nudgeText: {
      marginTop: "4px",
      padding: "6px 10px",
      backgroundColor: "var(--color-lightLightBlue)",
      borderRadius: "6px",
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      transition: "opacity 0.3s ease-in-out",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    nudgeLeft: {
      marginRight: "12px",
    },
    nudgeRight: {
      marginLeft: "12px",
    },
    nudgeTop: { marginBottom: "6px" },
    nudgeBottom: { marginTop: "6px" },
  },
  popup: {
    container: {
      background: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "16px",
      padding: "22px",
      minWidth: "300px",
      maxWidth: "450px",
      boxSizing: "border-box",
    },
    content: {
      position: "relative",
    },
    closeButton: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "var(--font-size-lg)",
      padding: "0px",
    },
    title: {
      marginTop: "0px",
      marginBottom: "14px",
      fontSize: "var(--font-size-lg)",
      fontWeight: "600",
      color: "var(--color-black)",
      wordBreak: "break-word",
    },
    message: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      lineHeight: 1.5,
      wordBreak: "break-word",
    },
    image: {
      width: "77px",
    },
    actionButton: {
      marginTop: "16px",
      padding: "7px 16px",
      fontSize: "var(--font-size-sm)",
      backgroundColor: "var(--color-darkerBlue)",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
      letterSpacing: "0.3px",
      wordBreak: "break-word",
    },
  },
  rating: {
    wrapper: {},
    container: {},
    ratingLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginBottom: "16px",
    },
    star: {
      color: "#ccc",
      fontSize: "var(--font-size-2xl)",
      marginRight: "4px",
      cursor: "pointer",
      transition: "color 0.2s ease-in-out",
      strokeWidth: "2",
    },
    filledStar: {
      color: "#ffc700",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    nudgeText: {
      padding: "8px 12px",
      backgroundColor: "var(--color-lightLightBlue)",
      borderRadius: "6px",
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "opacity 0.3s ease-in-out",
    },
    nudgeLeft: {
      marginRight: "12px",
    },
    nudgeRight: {
      marginLeft: "12px",
    },
    nudgeTop: {
      marginBottom: "8px",
    },
    nudgeBottom: {
      marginTop: "6px",
    },
  },
  badge: {
    wrapper: {},
    container: {
      background: "white",
      border: "2px solid var(--color-darkerBlue)",
      borderRadius: "25px",
      padding: "10px 20px",
    },
    badgeLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginBottom: "16px",
    },
    label: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
    },
    count: {
      fontSize: "12px",
      color: "var(--color-black)",
      marginLeft: "10px",
      background: "var(--color-lightBlue)",
      borderRadius: "20px",
      fontWeight: "500",
      padding: "0 6px",
    },
    icon: {
      fontSize: "var(--font-size-lg)",
      color: "var(--color-black)",
      marginRight: "10px",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    nudgeText: {
      padding: "8px 12px",
      backgroundColor: "var(--color-lightLightBlue)",
      borderRadius: "6px",
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "opacity 0.3s ease-in-out",
    },
    nudgeLeft: {
      marginRight: "12px",
    },
    nudgeRight: {
      marginLeft: "12px",
    },
    nudgeTop: {
      marginBottom: "10px",
    },
    nudgeBottom: {
      marginTop: "10px",
    },
  },
  tooltip: {
    container: {
      background: "white",
      border: "1px solid #ddd",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
      padding: "14px",
      width: "100%",
      minWidth: "200px",
      boxSizing: "border-box",
      position: "absolute",
      zIndex: 1000,
    },
    content: {},
    closeButton: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "var(--font-size-lg)",
      padding: "0px",
      color: "var(--color-darkGray)",
    },
    closeButtonContainer: {},
    message: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      lineHeight: 1.5,
      wordBreak: "break-word",
      textAlign: "left",
    },
    actionButton: {
      marginTop: "12px",
      padding: "7px 16px",
      fontSize: "var(--font-size-sm)",
      backgroundColor: "var(--color-darkerBlue)",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
      letterSpacing: "0.3px",
      wordBreak: "break-word",
    },
    icon: { fontSize: "var(--font-size-xl)", color: "var(--color-black)" },
  },
  textArea: {
    wrapper: {},
    textAreaLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginTop: "10px",
    },
    input: {
      padding: "10px",
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      background: "white",
      borderRadius: "var(--border-radius-sm)",
      transition: "border-color 0.2s ease-in-out",
      baseBorder: "var(--border-gray)",
      lineHeight: "1.3",
      placeholderColor: "var(--color-darkGray)",
      placeholderFontSize: "var(--font-size-md)",
    },
    hover: {
      hoverBorder: "var(--border-selected)",
    },
    nudgeText: {
      marginTop: "4px",
      padding: "6px 10px",
      backgroundColor: "var(--color-lightLightBlue)",
      borderRadius: "6px",
      fontSize: "var(--font-size-sm)",
      color: "var(--color-black)",
      transition: "opacity 0.3s ease-in-out",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    nudgeLeft: {
      marginRight: "12px",
    },
    nudgeRight: {
      marginLeft: "12px",
    },
    nudgeTop: { marginBottom: "6px" },
    nudgeBottom: { marginTop: "6px" },
  },
  dialog: {
    container: {
      background: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "16px",
      minWidth: "300px",
      maxWidth: "450px",
      boxSizing: "border-box",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      position: "relative",
    },
    header: {
      borderBottom: "1px solid var(--color-gray)",
      padding: "20px",
      borderRadius: "16px 16px 0 0",
    },
    textContainer: {
      borderBottom: "1px solid var(--color-gray)",
      padding: "25px",
    },
    inputContainer: {
      padding: "20px",
    },
    buttonContainer: {
      padding: "15px 20px",
    },
    closeButton: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "var(--font-size-lg)",
      padding: "0px",
      lineHeight: "0px",
    },
    title: {
      marginTop: "0px",
      marginBottom: "0",
      fontSize: "var(--font-size-lg)",
      fontWeight: "600",
      color: "var(--color-black)",
      wordBreak: "break-word",
    },
    message: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      lineHeight: 1.5,
      wordBreak: "break-word",
      marginTop: "0",
      marginBottom: "0",
    },
    confirmButton: {
      padding: "8px 20px",
      fontSize: "var(--font-size-sm)",
      backgroundColor: "var(--color-darkerBlue)",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
      wordBreak: "break-word",
      letterSpacing: "0.1px",
      fontWeight: "500",
      width: "100%",
    },
    cancelButton: {
      width: "100%",
      padding: "10px 20px",
      fontSize: "var(--font-size-sm)",
      backgroundColor: "var(--color-lightGray)",
      color: "var(--color-black)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
      letterSpacing: "0.1px",
      wordBreak: "break-word",
      marginRight: "10px",
      fontWeight: "500",
    },
    promptText: {
      color: "var(--color-black)",
      fontWeight: "500",
      marginTop: "1rem",
      marginBottom: "0",
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: "none",
      cursor: "not-allowed",
    },
    input: {
      marginBottom: "8px",
    },
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
