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

export const menuItemsMap: Record<string, MenuItem[]> = {
  "/about": [
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
  // Add additional page-specific configurations as needed.
};
