import { PropsTableRow } from "../components/nudgePages/PropsTables/PropsTable";

// Functional props for Checkbox
export const checkboxProps: PropsTableRow[] = [
  {
    propName: "label",
    type: "string",
    defaultValue: "Required",
    description: "The text label displayed next to the checkbox.",
  },
  {
    propName: "checkboxLabel",
    type: "string",
    defaultValue: "–",
    description: "An additional label rendered above the checkbox.",
  },
  {
    propName: "checked",
    type: "boolean",
    defaultValue: "–",
    description: "Controls the checked state (controlled mode).",
  },
  {
    propName: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
    description:
      "Initial checked state (uncontrolled mode). Ignored if 'checked' is provided.",
  },
  {
    propName: "onChange",
    type: "(checked: boolean) => void",
    defaultValue: "–",
    description:
      "Runs when the state changes, receiving the new checked state as an argument.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the checkbox if true.",
  },
  {
    propName: "nudgeText",
    type: "string",
    defaultValue: "–",
    description: "A nudge message for context or a nudge of the checkbox.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Sets the id attribute of the checkbox input, and associates it with aria-describedby.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description:
      "Accessibility label for the checkbox. If not provided, the 'label' prop is used.",
  },
  {
    propName: "onFocus",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the checkbox gains focus.",
  },
  {
    propName: "onBlur",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the checkbox loses focus.",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description:
      "Controls whether the nudge text is displayed. Hides the nudge if set to 'false'.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `bottom`,
    description:
      "Determines where the nudge text is displayed relative to the checkbox.",
  },
  {
    propName: "renderNudge",
    type: "(checked: boolean) => React.ReactNode",
    defaultValue: "–",
    description:
      "Function that renders a custom nudge element based on the current checked state.",
  },
];

// Functional props for Radio Group
export const radioGroupProps: PropsTableRow[] = [
  {
    propName: "label",
    type: "string",
    defaultValue: "Required",
    description: "The text label for the radio option.",
  },
  {
    propName: "radioLabel",
    type: "string",
    defaultValue: "–",
    description:
      "An additional label rendered above the radio group, used for individual radio options.",
  },
  {
    propName: "value",
    type: "string",
    defaultValue: "Required",
    description: "The value of the radio option.",
  },
  {
    propName: "checked",
    type: "boolean",
    defaultValue: "–",
    description: "Controls whether the radio is selected (controlled mode).",
  },
  {
    propName: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
    description:
      "Initial checked state (uncontrolled mode). Ignored if 'checked' is provided.",
  },
  {
    propName: "onChange",
    type: "(value: string) => void",
    defaultValue: "–",
    description:
      "Runs when the state changes, receiving the new checked state as an argument.",
  },
  {
    propName: "name",
    type: "string",
    defaultValue: "Required",
    description: "The name attribute for grouping radio buttons.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the radio option if true.",
  },
  {
    propName: "nudgeText",
    type: "string",
    defaultValue: "–",
    description: "A nudge message for context or a nudge of the radio option.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Sets the id attribute of the radio input, associates it with aria-describedby.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description:
      "Accessibility label for the radio input. If not provided, the 'label' prop is used.",
  },
  {
    propName: "onFocus",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the radio input gains focus.",
  },
  {
    propName: "onBlur",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the radio input loses focus.",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description:
      "Controls whether the nudge message is displayed. Hides the nudge if set to 'false'.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `bottom`,
    description:
      "Determines where the nudge text is displayed relative to the radio input.",
  },
  {
    propName: "renderNudge",
    type: "(checked: boolean) => React.ReactNode",
    defaultValue: "–",
    description:
      "Function that renders a custom nudge element based on the current checked state.",
  },
];

// Functional props for Dropdown Menu
export const dropdownMenuProps: PropsTableRow[] = [
  {
    propName: "dropdownLabel",
    type: "string",
    defaultValue: "–",
    description: "Label for the dropdown displayed above the button.",
  },
  {
    propName: "options",
    type: "{ label: string; value: string; nudgeText?: string }[]",
    defaultValue: "Required",
    description: "Array of options to display in the dropdown.",
  },
  {
    propName: "selected",
    type: "string",
    defaultValue: "–",
    description: "Currently selected option (controlled mode).",
  },
  {
    propName: "defaultSelected",
    type: "string",
    defaultValue: "–",
    description:
      "Initial selected option (uncontrolled mode). Ignored if 'selected' is provided.",
  },
  {
    propName: "onChange",
    type: "(value: string) => void",
    defaultValue: "–",
    description:
      "Runs when the state changes, receiving the new selected state as an argument.",
  },
  {
    propName: "placeholder",
    type: "string",
    defaultValue: "Select an option",
    description: "Placeholder text when no option is selected.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the dropdown if true.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Sets the id attribute for the dropdown button, used for accessibility and associating nudge elements.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description:
      "Accessibility label for the dropdown. If not provided, the placeholder text is used.",
  },
  {
    propName: "onFocus",
    type: "React.FocusEventHandler<HTMLButtonElement>",
    defaultValue: "–",
    description: "Event handler called when the dropdown button gains focus.",
  },
  {
    propName: "onBlur",
    type: "React.FocusEventHandler<HTMLButtonElement>",
    defaultValue: "–",
    description:
      "Event handler called when the dropdown button loses focus. Triggers onCommit with the current selected value.",
  },
  {
    propName: "onCommit",
    type: "(value: string) => void",
    defaultValue: "–",
    description:
      "Callback fired when the dropdown selection is committed, typically when focus is lost.",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description: "Controls whether the nudge message is displayed.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `bottom`,
    description:
      "Determines where the nudge message is displayed relative to the dropdown option.",
  },
  {
    propName: "renderNudge",
    type: "(option: { label: string; value: string; nudgeText?: string } | undefined) => React.ReactNode".replace(
      / /g,
      "\u2002"
    ),

    defaultValue: "–",
    description:
      "Function that renders a custom nudge element for a dropdown option based on the option data.",
  },
];

export const sliderProps: PropsTableRow[] = [
  {
    propName: "sliderLabel",
    type: "string",
    defaultValue: "–",
    description: "Label displayed above the slider.",
  },
  {
    propName: "min",
    type: "number",
    defaultValue: "0",
    description: "Minimum value of the slider.",
  },
  {
    propName: "max",
    type: "number",
    defaultValue: "100",
    description: "Maximum value of the slider.",
  },
  {
    propName: "value",
    type: "number",
    defaultValue: "–",
    description: "Current slider value (controlled mode).",
  },
  {
    propName: "defaultValue",
    type: "number",
    defaultValue: "–",
    description:
      "Initial slider value (uncontrolled mode). Ignored if 'value' is provided.",
  },
  {
    propName: "step",
    type: "number",
    defaultValue: "1",
    description: "Increment step for the slider.",
  },
  {
    propName: "showValueTooltip",
    type: "boolean",
    defaultValue: "true",
    description: "Controls the display of a tooltip showing the current value.",
  },
  {
    propName: "onChange",
    type: "(value: number) => void",
    defaultValue: "–",
    description: "Callback fired when the slider value changes.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the slider if true.",
  },
  {
    propName: "nudgeText",
    type: "string",
    defaultValue: "–",
    description: "Message displayed for additional context of the slider.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Sets the id attribute for the slider input, used for accessibility.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description:
      "Accessibility label for the slider input. Defaults to the 'sliderLabel' if not provided.",
  },
  {
    propName: "onFocus",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the slider input gains focus.",
  },
  {
    propName: "onBlur",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the slider input loses focus.",
  },
  {
    propName: "onCommit",
    type: "(value: number) => void",
    defaultValue: "–",
    description:
      "Callback fired when slider interaction is committed, such as on blur or mouse up.",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description: "Controls whether the nudge message is displayed.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `bottom`,
    description:
      "Determines the position of the nudge message relative to the slider.",
  },
  {
    propName: "renderNudge",
    type: "(value: number) => React.ReactNode",
    defaultValue: "–",
    description:
      "Function to render a custom nudge element based on the current slider value.",
  },
];

export const textBoxProps: PropsTableRow[] = [
  {
    propName: "textBoxLabel",
    type: "string",
    defaultValue: "–",
    description: "Label for the text box displayed above the input.",
  },
  {
    propName: "value",
    type: "string",
    defaultValue: "–",
    description: "Controlled value for the text box. Only used if provided.",
  },
  {
    propName: "defaultValue",
    type: "string",
    defaultValue: "–",
    description:
      "Initial value for the textbox (uncontrolled mode). Ignored if 'value' is provided.",
  },
  {
    propName: "onChange",
    type: "(value: string) => void",
    defaultValue: "–",
    description: "Callback fired when the textbox value changes.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the text box if true.",
  },
  {
    propName: "nudgeText",
    type: "string",
    defaultValue: "–",
    description: "Static nudge text displayed as guidance.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Unique identifier for the textbox (used for linking the label and input).",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description:
      "Accessibility label for screen readers. Defaults to 'textBoxLabel' if not provided.",
  },
  {
    propName: "onFocus",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the textbox gains focus.",
  },
  {
    propName: "onBlur",
    type: "React.FocusEventHandler<HTMLInputElement>",
    defaultValue: "–",
    description: "Event handler called when the textbox loses focus.",
  },
  {
    propName: "onCommit",
    type: "(value: string) => void",
    defaultValue: "–",
    description:
      "Callback fired when the input is committed (such as on blur).",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description: "Controls whether the nudge message is displayed.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `bottom`,
    description:
      "Determines the position of the nudge message relative to the textbox.",
  },
  {
    propName: "renderNudge",
    type: "(value: string) => React.ReactNode",
    defaultValue: "–",
    description:
      "Function to render custom nudge content based on the current textbox value.",
  },
];

// Theme attributes for Checkbox
// Extended Theme attributes for Checkbox
export const checkboxThemeProperties = [
  {
    propName: "wrapper",
    cssProperties: ["–"],
    description: "Wrapper style for the entire checkbox component.",
  },
  {
    propName: "container",
    cssProperties: ["display", "alignItems"],
    description: "Container for the checkbox.",
  },
  {
    propName: "checkboxLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginBottom"],
    description: "Styles for the label rendered above the checkbox.",
  },
  {
    propName: "checkBox",
    cssProperties: [
      "width",
      "height",
      "border",
      "borderRadius",
      "display",
      "justifyContent",
      "alignItems",
      "marginRight",
      "transition",
      "cursor",
    ],
    description: "Styles the checkbox appearance.",
  },
  {
    propName: "checked",
    cssProperties: ["backgroundColor", "border"],
    description: "Styles applied when the checkbox is checked.",
  },
  {
    propName: "checkIcon",
    cssProperties: ["color", "fontSize"],
    description: "Styling for the checkmark inside the checkbox.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styles applied to a disabled checkbox.",
  },
  {
    propName: "label",
    cssProperties: ["color", "fontSize", "cursor"],
    description: "Styles for the main checkbox label.",
  },
  {
    propName: "nudgeText",
    cssProperties: [
      "padding",
      "backgroundColor",
      "borderRadius",
      "fontSize",
      "color",
      "display",
      "alignItems",
      "gap",
      "transition",
    ],
    description: "Styles for the nudge text of the checkbox.",
  },
  {
    propName: "nudgeLeft",
    cssProperties: ["marginRight"],
    description:
      "Styling for the nudge element when positioned to the left of the checkbox.",
  },
  {
    propName: "nudgeRight",
    cssProperties: ["marginLeft"],
    description:
      "Styling for the nudge element when positioned to the right of the checkbox.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description:
      "Styling for the nudge element when positioned above the checkbox.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description:
      "Styling for the nudge element when positioned below the checkbox.",
  },
];

// Extended Theme attributes for Radio Group
export const radioGroupThemeProperties = [
  {
    propName: "wrapper",
    cssProperties: ["–"],
    description: "Wrapper style for the entire radio group component.",
  },
  {
    propName: "container",
    cssProperties: ["display", "alignItems", "cursor"],
    description: "Container for radio inputs.",
  },
  {
    propName: "radioLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginBottom"],
    description: "Styles for the label rendered above the radio input.",
  },
  {
    propName: "radioCircle",
    cssProperties: [
      "width",
      "height",
      "border",
      "borderRadius",
      "display",
      "justifyContent",
      "alignItems",
      "marginRight",
      "transition",
    ],
    description: "Styles the radio circle.",
  },
  {
    propName: "radioCircleChecked",
    cssProperties: ["backgroundColor", "border", "position"],
    description: "Styles applied when the radio circle is checked.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styling applied when the radio button is disabled.",
  },
  {
    propName: "label",
    cssProperties: ["color", "fontSize"],
    description: "Defines the styling of the label.",
  },
  {
    propName: "nudgeText",
    cssProperties: [
      "marginTop",
      "padding",
      "backgroundColor",
      "borderRadius",
      "fontSize",
      "color",
      "display",
      "alignItems",
      "gap",
      "transition",
    ],
    description: "Styles for the nudge text of the radio option.",
  },
  {
    propName: "radioDot",
    cssProperties: [
      "width",
      "height",
      "backgroundColor",
      "borderRadius",
      "position",
    ],
    description: "Styling of the inner dot of the selected radio button.",
  },
  {
    propName: "nudgeLeft",
    cssProperties: ["marginRight"],
    description:
      "Styling for the nudge element positioned to the left of the radio input.",
  },
  {
    propName: "nudgeRight",
    cssProperties: ["marginLeft"],
    description:
      "Styling for the nudge element positioned to the right of the radio input.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description:
      "Styling for the nudge element positioned above the radio input.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description:
      "Styling for the nudge element positioned below the radio input.",
  },
];

export const dropdownThemeProperties = [
  {
    propName: "wrapper",
    cssProperties: ["position"],
    description: "Wrapper style for the dropdown container.",
  },
  {
    propName: "dropdownLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginBottom"],
    description: "Styles for the label displayed above the dropdown.",
  },
  {
    propName: "button",
    cssProperties: [
      "width",
      "padding",
      "fontSize",
      "color",
      "background",
      "baseBorder",
      "borderRadius",
      "display",
      "justifyContent",
      "alignItems",
      "cursor",
      "transition",
    ],
    description: "Dropdown button styling.",
  },
  {
    propName: "hover",
    cssProperties: ["hoverBorder"],
    description: "Styling for hover state of button options.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styling applied when the dropdown is disabled.",
  },
  {
    propName: "chevron",
    cssProperties: ["fontSize", "transition", "color"],
    description: "Styling for dropdown arrow.",
  },
  {
    propName: "list",
    cssProperties: [
      "position",
      "left",
      "width",
      "background",
      "border",
      "borderRadius",
      "boxShadow",
      "listStyle",
      "padding",
      "marginTop",
      "zIndex",
      "transition",
      "maxHeight",
      "overflowY",
    ],
    description: "Styling for dropdown list container.",
  },
  {
    propName: "option",
    cssProperties: [
      "padding",
      "fontSize",
      "cursor",
      "transition",
      "textAlign",
      "display",
      "flexDirection",
      "alignItems",
      "gap",
    ],
    description: "Styling for each dropdown list option.",
  },
  {
    propName: "optionSelected",
    cssProperties: ["fontWeight"],
    description: "Styling for selected dropdown options.",
  },
  {
    propName: "optionHover",
    cssProperties: ["background"],
    description: "Styling for hover state of dropdown options.",
  },
  {
    propName: "content",
    cssProperties: ["display", "alignItems", "justifyContent", "width"],
    description: "Defines the styling for content within an option.",
  },
  {
    propName: "label",
    cssProperties: ["color"],
    description: "Defines the label styling within dropdown options.",
  },
  {
    propName: "checkIcon",
    cssProperties: ["fontSize", "color", "strokeWidth"],
    description:
      "Styling for the check icon displayed in selected dropdown options.",
  },
  {
    propName: "nudgeText",
    cssProperties: ["fontSize", "color", "fontWeight"],
    description: "Styling for nudge text within dropdown options.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description:
      "Styling for the nudge element positioned above the dropdown option.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description:
      "Styling for the nudge element positioned below the dropdown option.",
  },
];

export const sliderThemeProperties = [
  {
    propName: "wrapper",
    cssProperties: ["–"],
    description: "Wrapper style for the entire slider component.",
  },
  {
    propName: "container",
    cssProperties: ["width"],
    description: "Container styling for the slider input.",
  },
  {
    propName: "tooltip",
    cssProperties: [
      "fontSize",
      "backgroundColor",
      "color",
      "padding",
      "borderRadius",
      "whiteSpace",
      "top",
      "triangleColor",
      "triangleWidth",
      "zIndex",
      "bottom",
    ],
    description: "Tooltip styling for displaying the current slider value.",
  },
  {
    propName: "sliderLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginBottom"],
    description: "Styling for label displayed above the slider.",
  },
  {
    propName: "input",
    cssProperties: [
      "width",
      "appearance",
      "height",
      "borderRadius",
      "outline",
      "transition",
      "filledColor",
      "emptyColor",
      "filledAdjust",
    ],
    description: "Styles for the slider input.",
  },
  {
    propName: "thumb",
    cssProperties: [
      "width",
      "height",
      "top",
      "borderRadius",
      "background",
      "shadow",
    ],
    description: "Styling for the slider thumb.",
  },
  {
    propName: "value",
    cssProperties: ["fontSize", "fontWeight", "color"],
    description: "Styles for displaying the current slider value.",
  },
  {
    propName: "nudgeText",
    cssProperties: [
      "padding",
      "backgroundColor",
      "borderRadius",
      "fontSize",
      "color",
      "transition",
    ],
    description: "Styles for the nudge text.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styles applied when the slider is disabled.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description: "Styling for the nudge element positioned above the slider.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description: "Styling for the nudge element positioned below the slider.",
  },
  {
    propName: "nudgeLeft",
    cssProperties: ["marginRight"],
    description:
      "Styling for the nudge element positioned to the left of the slider.",
  },
  {
    propName: "nudgeRight",
    cssProperties: ["marginLeft"],
    description:
      "Styling for the nudge element positioned to the right of the slider.",
  },
];

export const textBoxThemeProperties = [
  {
    propName: "wrapper",
    cssProperties: ["–"],
    description: "Wrapper style for the entire text box.",
  },
  {
    propName: "textBoxLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginTop"],
    description: "Styles for the label displayed above the text box.",
  },
  {
    propName: "input",
    cssProperties: [
      "padding",
      "fontSize",
      "color",
      "background",
      "borderRadius",
      "transition",
      "baseBorder",
      "width",
    ],
    description: "Styles for the textbox input element.",
  },
  {
    propName: "hover",
    cssProperties: ["hoverBorder"],
    description: "Styling applied to the textbox input on hover.",
  },
  {
    propName: "nudgeText",
    cssProperties: [
      "marginTop",
      "padding",
      "backgroundColor",
      "borderRadius",
      "fontSize",
      "color",
      "transition",
    ],
    description: "Styles for the nudge text of the text box.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styling applied when the textbox is disabled.",
  },
  {
    propName: "nudgeLeft",
    cssProperties: ["marginRight"],
    description:
      "Styling for the nudge element positioned to the left of the text box.",
  },
  {
    propName: "nudgeRight",
    cssProperties: ["marginLeft"],
    description:
      "Styling for the nudge element positioned to the right of the text box.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description: "Styling for the nudge element positioned above the text box.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description: "Styling for the nudge element positioned below the text box.",
  },
];

export const documentationData = {
  defaultOptions: [
    {
      title: "Checkbox",
      functionalProps: checkboxProps,
      themeProperties: checkboxThemeProperties,
    },
    {
      title: "Radio Group",
      functionalProps: radioGroupProps,
      themeProperties: radioGroupThemeProperties,
    },
    {
      title: "Dropdown Menu",
      functionalProps: dropdownMenuProps,
      themeProperties: dropdownThemeProperties,
    },
  ],
  anchoring: [
    {
      title: "Slider",
      functionalProps: sliderProps,
      themeProperties: sliderThemeProperties,
    },
    {
      title: "Text Box",
      functionalProps: textBoxProps,
      themeProperties: textBoxThemeProperties,
    },
  ],
};
