import { PropsTableRow } from "../components/nudgePages/PropsTables/PropsTable";

// Functional props
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
    propName: "alwaysShowTooltip",
    type: "boolean",
    defaultValue: "false",
    description:
      "Forces the tooltip to remain visible at all times, rather than only on hover or focus.",
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

export const popupProps: PropsTableRow[] = [
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description: "Sets the HTML id attribute for the popup container.",
  },
  {
    propName: "title",
    type: "string",
    defaultValue: "–",
    description: "Title text displayed at the top of the popup.",
  },
  {
    propName: "message",
    type: "string",
    defaultValue: "–",
    description:
      "Main content of the popup. Ignored if 'renderContent' is provided.",
  },
  {
    propName: "visible",
    type: "boolean",
    defaultValue: "false",
    description: "Controls whether the popup is visible.",
  },
  {
    propName: "onClose",
    type: "() => void",
    defaultValue: "–",
    description: "Callback triggered when the popup is dismissed.",
  },
  {
    propName: "onOpen",
    type: "() => void",
    defaultValue: "–",
    description: "Callback triggered when the popup becomes visible.",
  },
  {
    propName: "autoClose",
    type: "boolean",
    defaultValue: "false",
    description: "If true, popup will automatically close after a delay.",
  },
  {
    propName: "autoCloseDelay",
    type: "number",
    defaultValue: "–",
    description: "Delay in milliseconds before the popup auto-closes.",
  },
  {
    propName: "position",
    type: `top-left | top-right | bottom-left | bottom-right`,
    defaultValue: "bottom-right",
    description: "Popup's position on the screen.",
  },
  {
    propName: "renderContent",
    type: "() => React.ReactNode",
    defaultValue: "–",
    description:
      "Custom render function for popup content. Overrides 'message' and 'buttonText'.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description: "Accessible label for screen readers.",
  },
  {
    propName: "animationType",
    type: `fade | slide | none`,
    defaultValue: "fade",
    description: "Type of popup entrance/exit animation.",
  },
  {
    propName: "animationDuration",
    type: "number",
    defaultValue: "300",
    description: "Animation duration in milliseconds.",
  },
  {
    propName: "dismissible",
    type: "boolean",
    defaultValue: "true",
    description: "If true, displays a close button to dismiss the popup.",
  },
  {
    propName: "closeOutside",
    type: "boolean",
    defaultValue: "false",
    description: "If true, clicking outside the popup will close it.",
  },
  {
    propName: "image",
    type: "string | false | null",
    defaultValue: "defaultImage",
    description: "Image shown inside the popup. Set to false or null to hide.",
  },
  {
    propName: "buttonText",
    type: "string",
    defaultValue: "–",
    description: "Text for the optional action button.",
  },
  {
    propName: "onButtonClick",
    type: "() => void",
    defaultValue: "–",
    description: "Callback triggered when the action button is clicked.",
  },
];

export const ratingProps: PropsTableRow[] = [
  {
    propName: "ratingLabel",
    type: "string",
    defaultValue: "–",
    description: "An optional label displayed above the rating stars.",
  },
  {
    propName: "rating",
    type: "number",
    defaultValue: "–",
    description:
      "Sets the current rating value in controlled mode. Overrides defaultRating if provided.",
  },
  {
    propName: "defaultRating",
    type: "number",
    defaultValue: "0",
    description:
      "Initial rating value in uncontrolled mode. Ignored if 'rating' is provided.",
  },
  {
    propName: "max",
    type: "number",
    defaultValue: "5",
    description: "Total number of stars to render.",
  },
  {
    propName: "onChange",
    type: "(rating: number) => void",
    defaultValue: "–",
    description:
      "Callback fired when the user selects a rating. Receives the new rating as an argument.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables interaction and visual hover effects when true.",
  },
  {
    propName: "nudgeText",
    type: "string",
    defaultValue: "–",
    description: "Text displayed below or beside the rating as a static nudge.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "The unique identifier for the component. Used to associate nudge and accessibility labels.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "ratingLabel or empty string",
    description:
      "Accessibility label for each star. Defaults to 'ratingLabel' if not provided.",
  },
  {
    propName: "onFocus",
    type: "React.FocusEventHandler<HTMLSpanElement>",
    defaultValue: "–",
    description: "Fired when a star gains focus via keyboard or touch.",
  },
  {
    propName: "onBlur",
    type: "React.FocusEventHandler<HTMLSpanElement>",
    defaultValue: "–",
    description: "Called when focus moves outside the component.",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description:
      "Controls visibility of the nudge. If false, nudge text is hidden even if defined.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `"bottom"`,
    description:
      "Controls where the nudge is displayed in relation to the stars.",
  },
  {
    propName: "renderNudge",
    type: "(rating: number) => React.ReactNode",
    defaultValue: "–",
    description:
      "Optional function that returns a custom nudge element based on the current rating value.",
  },
];

export const badgeProps: PropsTableRow[] = [
  {
    propName: "label",
    type: "string",
    defaultValue: "Required",
    description: "Primary text displayed inside the badge.",
  },
  {
    propName: "badgeLabel",
    type: "string",
    defaultValue: "–",
    description: "Optional label displayed above the badge component.",
  },
  {
    propName: "count",
    type: "number",
    defaultValue: "–",
    description: "Optional count value displayed as a number within the badge.",
  },
  {
    propName: "icon",
    type: "React.ReactNode",
    defaultValue: "–",
    description: "Optional icon rendered next to the label inside the badge.",
  },
  {
    propName: "nudgeText",
    type: "string",
    defaultValue: "–",
    description: "Static nudge message shown alongside the badge.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Sets the id attribute of the component and links the nudge element via aria-describedby.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "badgeLabel or empty string",
    description:
      "Accessibility label for screen readers. Defaults to the badgeLabel if not provided.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables styling and interaction if set to true.",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description:
      "Controls whether the nudge is displayed. If false, nudge is hidden even if defined.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `bottom`,
    description:
      "Controls the position of the nudge relative to the badge component.",
  },
  {
    propName: "renderNudge",
    type: "(badgeData: { label?: string; count?: number }) => React.ReactNode",
    defaultValue: "–",
    description:
      "Custom render function for dynamic nudges based on badge data (label and count).",
  },
];

export const tooltipProps: PropsTableRow[] = [
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description: "Sets the id attribute for the tooltip container.",
  },
  {
    propName: "text",
    type: "string",
    defaultValue: "–",
    description:
      "Text content displayed inside the tooltip when 'renderContent' is not used.",
  },
  {
    propName: "visible",
    type: "boolean",
    defaultValue: "–",
    description:
      "Controls tooltip visibility in controlled mode. If provided, overrides internal visibility logic.",
  },
  {
    propName: "defaultVisible",
    type: "boolean",
    defaultValue: "false",
    description:
      "Initial visibility of the tooltip in uncontrolled mode. Used when 'visible' is not defined.",
  },
  {
    propName: "onOpen",
    type: "() => void",
    defaultValue: "–",
    description: "Callback triggered when the tooltip becomes visible.",
  },
  {
    propName: "onClose",
    type: "() => void",
    defaultValue: "–",
    description: "Callback triggered when the tooltip is hidden.",
  },
  {
    propName: "position",
    type: `top | bottom | left | right | dynamic`,
    defaultValue: `"top"`,
    description:
      "Position of the tooltip relative to its trigger. 'dynamic' auto-determines best fit.",
  },
  {
    propName: "autoClose",
    type: "boolean",
    defaultValue: "false",
    description:
      "If true, tooltip will close automatically after a delay when opened.",
  },
  {
    propName: "autoCloseDelay",
    type: "number",
    defaultValue: "3000",
    description: "Delay in milliseconds before auto-closing the tooltip.",
  },
  {
    propName: "renderContent",
    type: "() => React.ReactNode",
    defaultValue: "–",
    description:
      "Function that returns custom content to render inside the tooltip, overriding 'text'.",
  },
  {
    propName: "children",
    type: "React.ReactNode",
    defaultValue: "–",
    description:
      "The target element that triggers the tooltip on hover or focus.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description:
      "Accessibility label applied to the trigger element for screen readers.",
  },
  {
    propName: "dismissible",
    type: "boolean",
    defaultValue: "false",
    description: "Displays a close button inside the tooltip when true.",
  },
  {
    propName: "animationType",
    type: `fade | slide | none`,
    defaultValue: `fade`,
    description:
      "Controls the animation style used when the tooltip appears and disappears.",
  },
  {
    propName: "animationDuration",
    type: "number",
    defaultValue: "300",
    description: "Duration of the tooltip animation in milliseconds.",
  },
  {
    propName: "closeOnHover",
    type: "boolean",
    defaultValue: "true",
    description:
      "If true, the tooltip will close when the mouse leaves or focus is lost.",
  },
  {
    propName: "openOnHover",
    type: "boolean",
    defaultValue: "true",
    description:
      "If true, the tooltip will open on mouse enter or when the trigger gains focus.",
  },
  {
    propName: "closeOutside",
    type: "boolean",
    defaultValue: "false",
    description: "Closes the tooltip when clicking outside of it.",
  },
  {
    propName: "buttonText",
    type: "string",
    defaultValue: "–",
    description:
      "Optional text for an action button inside the tooltip. Only rendered if 'text' is used (not 'renderContent').",
  },
  {
    propName: "onButtonClick",
    type: "() => void",
    defaultValue: "–",
    description: "Callback fired when the action button is clicked.",
  },
  {
    propName: "icon",
    type: "React.ReactNode",
    defaultValue: "–",
    description:
      "Optional icon displayed inside the tooltip next to the message.",
  },
];

export const moodSliderProps: PropsTableRow[] = [
  {
    propName: "moodDefinitions",
    type: "MoodDefinition[]",
    defaultValue: `Moods: bad, okay, good`,
    description:
      "Defines the moods shown along the slider, including icon, label, and optional threshold for mapping values.",
  },
  {
    propName: "onMoodChange",
    type: "(moodId: string) => void",
    defaultValue: "–",
    description:
      "Callback that runs when the slider value changes and a new mood is selected. Provides the corresponding mood's `id`.",
  },
  {
    propName: "tooltipMode",
    type: `value | text | icon`,
    defaultValue: `value`,
    description:
      "Controls what is shown inside the tooltip: the raw numeric value, the mood label, or the mood icon. Falls back to `value` if `showIcon` is false and mode is `icon`.",
  },
  {
    propName: "showIcon",
    type: "boolean",
    defaultValue: "true",
    description:
      "Whether to display the mood icon in the tooltip. If false, `tooltipMode: 'icon'` has no effect.",
  },
];

export const textAreaProps: PropsTableRow[] = [
  {
    propName: "textAreaLabel",
    type: "string",
    defaultValue: "–",
    description: "Label displayed above the text area.",
  },
  {
    propName: "placeholder",
    type: "string",
    defaultValue: "–",
    description: "Text displayed when the text area is empty.",
  },
  {
    propName: "value",
    type: "string",
    defaultValue: "–",
    description:
      "Current text area value (controlled mode). Cannot be used with `defaultValue`.",
  },
  {
    propName: "defaultValue",
    type: "string",
    defaultValue: "–",
    description:
      "Initial value for uncontrolled mode. Cannot be used with `value`.",
  },
  {
    propName: "onChange",
    type: "(value: string) => void",
    defaultValue: "–",
    description: "Callback fired when the text area value changes.",
  },
  {
    propName: "onCommit",
    type: "(value: string) => void",
    defaultValue: "–",
    description:
      "Callback triggered when the user finishes interacting with the text area.",
  },
  {
    propName: "onFocus",
    type: "React.FocusEventHandler<HTMLTextAreaElement>",
    defaultValue: "–",
    description: "Event handler called when the text area gains focus.",
  },
  {
    propName: "onBlur",
    type: "React.FocusEventHandler<HTMLTextAreaElement>",
    defaultValue: "–",
    description: "Event handler called when the text area loses focus.",
  },
  {
    propName: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the text area if true.",
  },
  {
    propName: "nudgeText",
    type: "string",
    defaultValue: "–",
    description: "Message displayed as contextual guidance near the text area.",
  },
  {
    propName: "nudgeVisible",
    type: "boolean",
    defaultValue: "true",
    description: "Controls whether the nudge text is visible.",
  },
  {
    propName: "nudgePosition",
    type: `top | bottom | left | right`,
    defaultValue: `bottom`,
    description:
      "Determines where the nudge text appears relative to the text area.",
  },
  {
    propName: "renderNudge",
    type: "(value: string) => React.ReactNode",
    defaultValue: "–",
    description:
      "Function that renders a custom nudge element based on the current text area value.",
  },
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Sets the `id` attribute for the text area and associates it with the label and aria-describedby.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: "–",
    description:
      "Accessibility label for screen readers. Defaults to `textAreaLabel` if not provided.",
  },
  {
    propName: "rows",
    type: "number",
    defaultValue: "4",
    description: "Number of visible text lines in the text area.",
  },
];

export const dialogProps: PropsTableRow[] = [
  {
    propName: "id",
    type: "string",
    defaultValue: "–",
    description:
      "Sets the `id` attribute of the dialog container for accessibility or testing.",
  },
  {
    propName: "title",
    type: "string",
    defaultValue: "–",
    description: "Title displayed at the top of the dialog.",
  },
  {
    propName: "message",
    type: "string | React.ReactNode",
    defaultValue: "–",
    description:
      "The main message content of the dialog. Can be plain text or a React element.",
  },
  {
    propName: "visible",
    type: "boolean",
    defaultValue: "false",
    description: "Controls whether the dialog is shown.",
  },
  {
    propName: "onOpen",
    type: "() => void",
    defaultValue: "–",
    description: "Callback triggered when the dialog becomes visible.",
  },
  {
    propName: "onClose",
    type: "() => void",
    defaultValue: "–",
    description: "Callback triggered when the dialog is closed.",
  },
  {
    propName: "autoClose",
    type: "boolean",
    defaultValue: "false",
    description: "If true, the dialog will automatically close after a delay.",
  },
  {
    propName: "autoCloseDelay",
    type: "number",
    defaultValue: "5000",
    description:
      "Time in milliseconds before auto-close when `autoClose` is enabled.",
  },
  {
    propName: "animationType",
    type: `fade | slide | none`,
    defaultValue: `fade`,
    description: "Type of animation used when showing or hiding the dialog.",
  },
  {
    propName: "animationDuration",
    type: "number",
    defaultValue: "300",
    description: "Duration of the open/close animation in milliseconds.",
  },
  {
    propName: "dismissible",
    type: "boolean",
    defaultValue: "true",
    description:
      "If true, a close icon is shown and the user can dismiss the dialog manually.",
  },
  {
    propName: "closeOutside",
    type: "boolean",
    defaultValue: "false",
    description: "If true, clicking outside the dialog will close it.",
  },
  {
    propName: "confirmButtonText",
    type: "string",
    defaultValue: `"Confirm"`,
    description: "Text shown on the confirm button.",
  },
  {
    propName: "cancelButtonText",
    type: "string",
    defaultValue: `"Cancel"`,
    description: "Text shown on the cancel button.",
  },
  {
    propName: "onConfirm",
    type: "() => void",
    defaultValue: "–",
    description: "Callback fired when the confirm button is clicked.",
  },
  {
    propName: "onCancel",
    type: "() => void",
    defaultValue: "–",
    description: "Callback fired when the cancel button is clicked.",
  },
  {
    propName: "requiresInput",
    type: "boolean",
    defaultValue: "false",
    description:
      "If true, the dialog includes an input field that must match `expectedInput` to confirm.",
  },
  {
    propName: "confirmationPrompt",
    type: "string",
    defaultValue: "–",
    description:
      "Prompt displayed above the input when `requiresInput` is true.",
  },
  {
    propName: "inputPlaceholder",
    type: "string",
    defaultValue: `"Type to confirm"`,
    description: "Placeholder text for the confirmation input field.",
  },
  {
    propName: "confirmationValue",
    type: "string",
    defaultValue: `""`,
    description: "Current value of the confirmation input (controlled).",
  },
  {
    propName: "expectedInput",
    type: "string",
    defaultValue: "–",
    description:
      "The expected string that must be typed to enable confirmation.",
  },
  {
    propName: "onInputChange",
    type: "(value: string) => void",
    defaultValue: "–",
    description: "Callback fired when the confirmation input value changes.",
  },
  {
    propName: "ariaLabel",
    type: "string",
    defaultValue: `"Dialog"`,
    description: "Accessibility label for the dialog container.",
  },
  {
    propName: "inputProps",
    type: "Partial<TextBoxProps>",
    defaultValue: "–",
    description:
      "Additional props passed to the internal `TextBox` used for input confirmation.",
  },
];

// Theme attributes
export const checkboxThemeProps = [
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
export const radioGroupThemeProps = [
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

export const dropdownThemeProps = [
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

export const sliderThemeProps = [
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
      "boxShadow",
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

export const textBoxThemeProps = [
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

export const popupThemeProps = [
  {
    propName: "container",
    cssProperties: [
      "background",
      "boxShadow",
      "borderRadius",
      "padding",
      "minWidth",
      "maxWidth",
      "boxSizing",
    ],
    description: "Styling for the outer popup container.",
  },
  {
    propName: "content",
    cssProperties: ["position"],
    description: "Styling for the inner content area.",
  },
  {
    propName: "closeButton",
    cssProperties: ["border", "background", "cursor", "fontSize", "padding"],
    description: "Styling for the close (X) button.",
  },
  {
    propName: "title",
    cssProperties: [
      "marginTop",
      "marginBottom",
      "fontSize",
      "fontWeight",
      "color",
    ],
    description: "Styling for the popup title text.",
  },
  {
    propName: "message",
    cssProperties: ["fontSize", "color", "lineHeight"],
    description: "Styling for the popup message or content.",
  },
  {
    propName: "image",
    cssProperties: ["width"],
    description: "Styling for the image inside the popup.",
  },
  {
    propName: "actionButton",
    cssProperties: [
      "marginTop",
      "padding",
      "fontSize",
      "backgroundColor",
      "color",
      "border",
      "borderRadius",
      "cursor",
    ],
    description: "Styling for the action button.",
  },
];

export const ratingThemeProps = [
  {
    propName: "wrapper",
    cssProperties: ["–"],
    description: "Wrapper style for the entire rating component.",
  },
  {
    propName: "container",
    cssProperties: ["–"],
    description: "Container for the star elements.",
  },
  {
    propName: "ratingLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginBottom"],
    description: "Styles for the optional label shown above the rating stars.",
  },
  {
    propName: "star",
    cssProperties: [
      "color",
      "fontSize",
      "marginRight",
      "cursor",
      "transition",
      "strokeWidth",
    ],
    description:
      "Styles for the appearance of each star (unfilled or hovered).",
  },
  {
    propName: "filledStar",
    cssProperties: ["color"],
    description:
      "Styles applied to stars that represent the selected rating value.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styles applied when the rating component is disabled.",
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
    description: "Styles for the nudge message displayed near the rating.",
  },
  {
    propName: "nudgeLeft",
    cssProperties: ["marginRight"],
    description:
      "Styling for the nudge when positioned to the left of the stars.",
  },
  {
    propName: "nudgeRight",
    cssProperties: ["marginLeft"],
    description:
      "Styling for the nudge when positioned to the right of the stars.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description: "Styling for the nudge when positioned above the stars.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description: "Styling for the nudge when positioned below the stars.",
  },
];

export const badgeThemeProps = [
  {
    propName: "wrapper",
    cssProperties: ["–"],
    description: "Wrapper style for the entire badge component.",
  },
  {
    propName: "container",
    cssProperties: ["background", "border", "borderRadius", "padding"],
    description:
      "Styles applied to the main badge container holding label, icon, and count.",
  },
  {
    propName: "badgeLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginBottom"],
    description: "Styles for the optional label displayed above the badge.",
  },
  {
    propName: "label",
    cssProperties: ["fontSize", "color", "fontWeight"],
    description: "Styles for the main text label inside the badge.",
  },
  {
    propName: "count",
    cssProperties: [
      "fontSize",
      "color",
      "marginLeft",
      "background",
      "borderRadius",
      "fontWeight",
      "padding",
    ],
    description: "Styles applied to the badge count element.",
  },
  {
    propName: "icon",
    cssProperties: ["fontSize", "color", "marginRight"],
    description: "Styles applied to the icon displayed next to the label.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styles applied to the badge when it is disabled.",
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
    description: "Styles for the nudge text shown near the badge.",
  },
  {
    propName: "nudgeLeft",
    cssProperties: ["marginRight"],
    description:
      "Styling for the nudge element when positioned to the left of the badge.",
  },
  {
    propName: "nudgeRight",
    cssProperties: ["marginLeft"],
    description:
      "Styling for the nudge element when positioned to the right of the badge.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description:
      "Styling for the nudge element when positioned above the badge.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description:
      "Styling for the nudge element when positioned below the badge.",
  },
];

export const tooltipThemeProps = [
  {
    propName: "container",
    cssProperties: [
      "background",
      "border",
      "boxShadow",
      "borderRadius",
      "padding",
      "width",
      "minWidth",
      "boxSizing",
      "position",
      "zIndex",
    ],
    description: "Main container for the tooltip popup.",
  },
  {
    propName: "content",
    cssProperties: ["–"],
    description: "Wrapper for the entire content area inside the tooltip.",
  },
  {
    propName: "closeButton",
    cssProperties: [
      "border",
      "background",
      "cursor",
      "fontSize",
      "padding",
      "color",
    ],
    description: "Styles applied to the tooltip's close (dismiss) button.",
  },
  {
    propName: "closeButtonContainer",
    cssProperties: ["–"],
    description: "Container for positioning the close button.",
  },
  {
    propName: "message",
    cssProperties: [
      "fontSize",
      "color",
      "lineHeight",
      "wordBreak",
      "textAlign",
    ],
    description: "Styles for the tooltip message or content area.",
  },
  {
    propName: "actionButton",
    cssProperties: [
      "marginTop",
      "padding",
      "fontSize",
      "backgroundColor",
      "color",
      "border",
      "borderRadius",
      "cursor",
      "textDecoration",
      "letterSpacing",
      "wordBreak",
    ],
    description:
      "Styles for the optional action button shown within the tooltip.",
  },
  {
    propName: "icon",
    cssProperties: ["fontSize", "color"],
    description: "Styles for the optional icon displayed in the tooltip.",
  },
];

export const moodSliderThemeProps = [
  {
    propName: "tooltip",
    cssProperties: [
      "fontSize",
      "backgroundColor",
      "color",
      "padding",
      "borderRadius",
      "triangleColor",
      "triangleWidth",
      "zIndex",
      "bottom",
    ],
    description: "Styles for the tooltip displayed above the slider thumb.",
  },
  {
    propName: "icon",
    cssProperties: ["fontSize"],
    description: "Styles for the mood icon rendered inside the tooltip.",
  },
];

export const textAreaThemeProps = [
  {
    propName: "wrapper",
    cssProperties: ["–"],
    description: "Wrapper style for the entire text area component.",
  },
  {
    propName: "textAreaLabel",
    cssProperties: ["fontSize", "color", "fontWeight", "marginTop"],
    description: "Styles for the label rendered above the text area.",
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
      "lineHeight",
      "placeholderColor",
      "placeholderFontSize",
    ],
    description: "Styles applied to the text area input field.",
  },
  {
    propName: "hover",
    cssProperties: ["hoverBorder"],
    description: "Styles applied to the text area input when hovered.",
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
    description: "Styles for the nudge text providing contextual guidance.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description: "Styles applied when the text area is disabled.",
  },
  {
    propName: "nudgeLeft",
    cssProperties: ["marginRight"],
    description:
      "Styling for the nudge text when positioned to the left of the text area.",
  },
  {
    propName: "nudgeRight",
    cssProperties: ["marginLeft"],
    description:
      "Styling for the nudge text when positioned to the right of the textarea.",
  },
  {
    propName: "nudgeTop",
    cssProperties: ["marginBottom"],
    description:
      "Styling for the nudge text when positioned above the textarea.",
  },
  {
    propName: "nudgeBottom",
    cssProperties: ["marginTop"],
    description:
      "Styling for the nudge text when positioned below the textarea.",
  },
];

export const dialogThemeProps = [
  {
    propName: "container",
    cssProperties: [
      "background",
      "boxShadow",
      "borderRadius",
      "minWidth",
      "maxWidth",
      "boxSizing",
    ],
    description: "Styles for the outer dialog container box.",
  },
  {
    propName: "overlay",
    cssProperties: ["background"],
    description: "Styles for the full-screen overlay behind the dialog.",
  },
  {
    propName: "content",
    cssProperties: ["position"],
    description: "Styles for the content wrapper inside the dialog.",
  },
  {
    propName: "header",
    cssProperties: ["borderBottom", "padding", "borderRadius"],
    description:
      "Styles for the dialog header area containing the title and close button.",
  },
  {
    propName: "textContainer",
    cssProperties: ["borderBottom", "padding"],
    description:
      "Styles for the section containing the message and optional input prompt.",
  },
  {
    propName: "inputContainer",
    cssProperties: ["padding"],
    description:
      "Padding for the section containing the confirm/cancel buttons when input is required.",
  },
  {
    propName: "buttonContainer",
    cssProperties: ["padding"],
    description:
      "Padding for the section containing the confirm/cancel buttons when no input is required.",
  },
  {
    propName: "closeButton",
    cssProperties: [
      "border",
      "background",
      "cursor",
      "fontSize",
      "padding",
      "lineHeight",
    ],
    description: "Styles for the 'X' button used to dismiss the dialog.",
  },
  {
    propName: "title",
    cssProperties: [
      "marginTop",
      "marginBottom",
      "fontSize",
      "fontWeight",
      "color",
      "wordBreak",
    ],
    description: "Typography and layout styles for the dialog title.",
  },
  {
    propName: "message",
    cssProperties: [
      "fontSize",
      "color",
      "lineHeight",
      "wordBreak",
      "marginTop",
      "marginBottom",
    ],
    description: "Typography styles for the main dialog message content.",
  },
  {
    propName: "confirmButton",
    cssProperties: [
      "padding",
      "fontSize",
      "backgroundColor",
      "color",
      "border",
      "borderRadius",
      "cursor",
      "textDecoration",
      "wordBreak",
      "letterSpacing",
      "fontWeight",
      "width",
    ],
    description: "Styles for the confirm button in the footer.",
  },
  {
    propName: "cancelButton",
    cssProperties: [
      "width",
      "padding",
      "fontSize",
      "backgroundColor",
      "color",
      "border",
      "borderRadius",
      "cursor",
      "textDecoration",
      "letterSpacing",
      "wordBreak",
      "marginRight",
      "fontWeight",
    ],
    description: "Styles for the cancel button in the footer.",
  },
  {
    propName: "promptText",
    cssProperties: ["color", "fontWeight", "marginTop", "marginBottom"],
    description: "Styles for the prompt shown above the confirmation input.",
  },
  {
    propName: "disabled",
    cssProperties: ["opacity", "pointerEvents", "cursor"],
    description:
      "Styles applied to the confirm button when disabled (input does not match expected value).",
  },
  {
    propName: "input",
    cssProperties: ["marginBottom"],
    description: "Styles for the container wrapping the `TextBox` input field.",
  },
];

export const documentationData = {
  defaultOptions: [
    {
      title: "Checkbox",
      functionalProps: checkboxProps,
      themeProps: checkboxThemeProps,
    },
    {
      title: "Radio Group",
      functionalProps: radioGroupProps,
      themeProps: radioGroupThemeProps,
    },
    {
      title: "Dropdown Menu",
      functionalProps: dropdownMenuProps,
      themeProps: dropdownThemeProps,
    },
  ],
  anchoring: [
    {
      title: "Slider",
      functionalProps: sliderProps,
      themeProps: sliderThemeProps,
    },
    {
      title: "Text Box",
      functionalProps: textBoxProps,
      themeProps: textBoxThemeProps,
    },
  ],
  reminder: [
    {
      title: "Popup",
      functionalProps: popupProps,
      themeProps: popupThemeProps,
    },
  ],
  socialNorms: [
    {
      title: "Rating",
      functionalProps: ratingProps,
      themeProps: ratingThemeProps,
    },
    {
      title: "Badge",
      functionalProps: badgeProps,
      themeProps: badgeThemeProps,
    },
  ],
  reflection: [
    {
      title: "Mood Slider",
      functionalProps: moodSliderProps,
      themeProps: moodSliderThemeProps,
    },
    {
      title: "Text Area",
      functionalProps: textAreaProps,
      themeProps: textAreaThemeProps,
    },
  ],
  decisionFriction: [
    {
      title: "Dialog",
      functionalProps: dialogProps,
      themeProps: dialogThemeProps,
    },
  ],
  confidence: [
    {
      title: "Tooltip",
      functionalProps: tooltipProps,
      themeProps: tooltipThemeProps,
    },
  ],
};
