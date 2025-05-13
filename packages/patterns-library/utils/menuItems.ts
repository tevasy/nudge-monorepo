export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

export const nudgesMenu: MenuItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "context", label: "Context" },
  { id: "solution", label: "Solution" },
  { id: "rationale", label: "Rationale" },
  { id: "real-world-examples", label: "Real-world Examples" },
  { id: "ethical-considerations", label: "Ethical Considerations" },
  { id: "adaptability-considerations", label: "Adaptability Considerations" },
  { id: "implementation-resources", label: "Implementation Resources" },
];

export const overviewMenu: MenuItem[] = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Addressed Challenges" },
  { id: "audience", label: "Intended Audience" },
  { id: "contents", label: "Contents" },
];

export const installationMenu: MenuItem[] = [
  { id: "overview", label: "Overview" },
  { id: "step1", label: "Step 1" },
  { id: "step2", label: "Step 2" },
  { id: "step3", label: "Step 3" },
  { id: "scenarios", label: "Usage Scenarios" },
  { id: "theming", label: "Theming" },
];

export const menuItemsMap: Record<string, MenuItem[]> = {
  "/overview": [
    { id: "team", label: "Team" },
    { id: "mission", label: "Mission" },
  ],
  "/nudges/default-options-nudge": [
    { id: "checkbox", label: "Checkbox" },
    { id: "radio-group", label: "Radio Group" },
    { id: "dropdown-menu", label: "Dropdown Menu" },
    { id: "api-reference", label: "API Reference" },
  ],
  "/nudges/anchoring-nudge": [
    { id: "slider", label: "Slider" },
    { id: "textBox", label: "Text Box" },
    { id: "api-reference", label: "API Reference" },
  ],
  "/nudges/reminder-nudge": [
    { id: "popup", label: "Popup" },
    { id: "api-reference", label: "API Reference" },
  ],
  "/nudges/social-norms-nudge": [
    { id: "rating", label: "Rating" },
    { id: "badge", label: "Badge" },
    { id: "api-reference", label: "API Reference" },
  ],
  "/nudges/reflection-nudge": [
    { id: "moodSlider", label: "Mood Slider" },
    { id: "textArea", label: "Text Area" },
    { id: "api-reference", label: "API Reference" },
  ],
  "/nudges/decision-friction-nudge": [
    { id: "dialog", label: "Dialog" },
    { id: "api-reference", label: "API Reference" },
  ],
  "/nudges/confidence-nudge": [
    { id: "tooltip", label: "Tooltip" },
    { id: "api-reference", label: "API Reference" },
  ],
};
