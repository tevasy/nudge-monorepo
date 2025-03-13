import React, { createContext, FC, ReactNode } from "react";

type BaseCSS = {
  [K in keyof React.CSSProperties]?: React.CSSProperties[K];
};

export type ThemeCSS = BaseCSS & {
  baseBorder?: string;
  hoverBorder?: string;
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
};

export const defaultTheme: Theme = {
  checkbox: {
    wrapper: {},
    container: {
      display: "flex",
      alignItems: "center",
    },
    input: {
      opacity: 0,
      position: "absolute",
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
      fontSize: "13px",
      backgroundColor: "var(--color-lightBlue)",
      color: "var(--color-black)",
      padding: "4px 8px",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      top: "-30px",
      triangleColor: "var(--color-lightBlue)",
      triangleWidth: "5px",
      zIndex: "5",
      bottom: "calc(100% + 3px)",
    },
    sliderLabel: {
      fontSize: "var(--font-size-md)",
      color: "var(--color-black)",
      fontWeight: "500",
      marginBottom: "10px",
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
      filledAdjust: 0,
    },
    thumb: {
      width: "20px",
      height: "20px",
      top: "4px",
      borderRadius: "50%",
      background: "var(--color-darkerBlue)",
      shadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
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
};

export const ThemeContext = createContext<Theme>(defaultTheme);

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
