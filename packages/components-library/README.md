# Nudge Components Library

The **Nudge Components Library** is a collection of React UI components designed to implement digital nudges in user interfaces, called nudge UI components. While the [Nudge Patterns Library](https://nudgepatternslibrary.netlify.app) focuses on documenting nudges, the components described in each nudge pattern can be installed and used directly via this package.

Each nudge UI component is designed to support behavioral influence, modular usage, and adaptable behavior, including static, dynamic, and context-aware scenarios.

---

## Installation

Install the package using npm:

```bash
npm install nudge-components-library
```

---

## Importing Components

### Basic import

```tsx
import { Checkbox } from "nudge-components-library";
```

### Subpath import (for specific nudge patterns)

To avoid loading the full library:

```tsx
import { Slider, TextBox } from "nudge-components-library/anchoring";
```

---

## Usage Example

Use the components directly in JSX:

```tsx
<Checkbox label="Enable bedtime reminder" defaultChecked />
<Slider sliderLabel="Set volume" min={0} max={100} />
<TextBox textBoxLabel="Enter the value" />
```

---

## Usage Scenarios

Nudge UI components support different usage scenarios:

- **Static**: Displaying a predefined message.
- **Dynamic**: Responding to user interaction.
- **Adaptive**: Adjusting based on stored preferences, session data, or user context.

---

## Theming

Nudge UI components use a default theme but can be customized using the `ThemeProvider`. This allows overriding properties like color, spacing, and borders without modifying internal logic.

### Example: Customizing the TextBox

```tsx
import React from "react";
import { ThemeProvider, defaultTheme, TextBox } from "nudge-components-library";

const customTheme = {
  ...defaultTheme,
  textBox: {
    ...defaultTheme.textBox,
    nudgeText: {
      ...defaultTheme.textBox.nudgeText,
      backgroundColor: "#ffe5cf",
    },
    hover: {
      hoverBorder: "2px solid #fb8500",
    },
  },
};

export default function CustomTextBox() {
  return (
    <ThemeProvider theme={customTheme}>
      <TextBox
        id="custom-text-box"
        ariaLabel="Custom Text Box"
        textBoxLabel="Enter a value"
        defaultValue="30"
        nudgeText="Enter a value here. The default is 30."
      />
    </ThemeProvider>
  );
}
```

---

## Documentation and Demos

See [Nudge Patterns Library](https://nudgepatternslibrary.netlify.app) for:

- Nudge Pattern descriptions.
- Interactive demos of the corresponding nudge UI components.
- API reference for each nudge UI component.

## About

Created by [Tatiana Vasylieva](https://tatianavasylieva.com)  
View on [GitHub](https://github.com/tevasy) · [Dribbble](https://dribbble.com/tatianavasye)

© 2025 Tatiana Vasylieva. All rights reserved.
