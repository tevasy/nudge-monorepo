# Nudge Monorepo

This monorepo contains two main packages:

- **Nudge Patterns Library**: A Next.js web documentation platform for exploring digital nudges organized using nudge pattern structure.
- **Nudge Components Library**: A set of React nudge UI components implementing nudge patterns, published as an npm package: [`nudge-components-library`](https://www.npmjs.com/package/nudge-components-library).

---

## Project Structure

```
nudge-monorepo/
|-- packages/
|  |-- components-library/     # React components + npm module
|  |-- patterns-library/       # Next.js application
```

---

### Running the Nudge Patterns Library

```bash
cd packages/patterns-library
npm install
npm run dev
```

Then visit http://localhost:3000 to explore the documentation.

**The nudge UI components from the Nudge Components Library will install automatically and will be visible in the Nudge Patterns Library straight away.**

---

## Installing the Nudge Components Library

To install the `nudge-components-library` in your project:

```bash
npm install nudge-components-library
```

### Importing Components

```tsx
import { Checkbox } from "nudge-components-library";
import { Slider, TextBox } from "nudge-components-library/anchoring";
```

### Usage Example

```tsx
<Checkbox label="Enable bedtime reminder" defaultChecked />
<Slider sliderLabel="Set volume" min={0} max={100} />
<TextBox textBoxLabel="Enter your goal" />
```

---

## Note

This project was developed as part of a Master's Thesis at the UiT - The Arctic University of Norway.
