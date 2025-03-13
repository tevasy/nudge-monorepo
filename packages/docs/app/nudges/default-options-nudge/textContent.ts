export const textContent = {
  title: "Default Options Nudge",
  installCommands: [
    "npm install nudge-library/default-options",
    "npm install nudge-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Default Options Nudge guides decision-making by preselecting optimal, beneficial or least harmful option as the default while still allowing users to opt out if they prefer an alternative. It simplifies decision-making by reducing cognitive effort, which makes users more likely to choose a suggested option.",
    exampleText:
      "Screenshot of Google's “Display language” modal with default option, illustrating Default Options Nudge.",
    image: {
      src: "/defaultOptions/google_modal.png",
      alt: "Screenshot of Google's 'Display language' modal with default option, illustrating Default Options Nudge.",
    },
  },
  problem: {
    title: "Problem",
    content:
      "Users often struggle with decision-making when faced with **high cognitive load** or **limited prior knowledge**. Evaluating all available choices can be overwhelming, leading to decision fatigue or suboptimal selections. The Default Options Nudge mitigates this challenge by **setting a recommended choice**, helping users make more informed decisions without requiring extensive effort or expertise.",
  },
  context: {
    title: "Context",
    content:
      "This nudge is most effective in digital environments where users must make **choices that impact their privacy**, **security**, **preferences**, or **well-being**. It is particularly useful in:",
    items: [
      "Form submissions, where pre-selected options simplify the process.",
      "Privacy settings, where stronger security configurations can be enabled by default.",
      "Health applications, where users are automatically enrolled in wellness programs unless they opt out.",
    ],
    devices:
      "This nudge is applicable across mobile, desktop, and web applications, where the way choices are presented influences user behavior.",
  },
  solution: {
    title: "Solution",
    content: "The solution for implementing this nudge involves:",
    items: [
      "Identifying key decision points where defaults can help users make better choices.",
      "Pre-selecting the most beneficial option.",
      "Providing clear explanations to inform users why the default is recommended.",
      "Making opting out easy by offering a simple way to change the default.",
    ],
    contentImplementation:
      "Default options can be implemented in various interface elements. **Radio Groups** and **Checkboxes** with a pre-selected choice simplify selection by setting the recommended option as the default while still allowing users to choose another option. **Dropdown Menus** with the most recommended option listed first can steer users toward an optimal choice without restricting their autonomy. These components can be customized and styled to fit specific application needs.",
  },
  rationale: {
    title: "Rationale",
    content:
      "This nudge is based on **status quo bias**, which refers to people's tendency to stick with preselected choices rather than making an active change. Defaults serve as a subtle indication of a recommended action, reducing decision fatigue and making it easier for users to proceed without hesitation. Since making an active choice requires effort, users are more likely to accept the default option, especially in situations where they lack expertise or motivation to evaluate all alternatives.",
  },
  realWorldExamples: {
    title: "Real-world Examples",
  },
  ethicalConsiderations: {
    title: "Ethical Considerations",
    content:
      "The Default Options Nudge must be **transparent and designed in the user's best interest**. The goal should be to simplify decision-making rather than manipulate users into selecting options that disproportionately benefit the system. To uphold user autonomy, defaults should always be easy to modify or opt out of. Providing brief explanations or justifications for default choices can further support informed decision-making by helping users understand why a particular option is preselected. Additionally, default settings should respect user privacy by avoiding preselected choices that assume consent for data sharing without explicit approval.",
  },
  adaptabilityConsiderations: {
    title: "Adaptability Considerations",
    content:
      "Default options must remain relevant across different users and contexts. They can be **dynamically adjusted** based on user behavior, previous choices, or specific conditions like location, device type, or time of day. For example, a first-time user might see different defaults than an experienced user. Additionally, **contextual factors** can influence default options. A system might present different options depending on whether the user is in the new location, using an unfamiliar device, or performing an action at an unusual time. Systems can also use **adaptive defaults**, where the recommended choices change over time based on how the user interacts with them, creating a more personalized and responsive experience.",
  },
  implementationResources: {
    title: "Implementation Resources",
  },
  checkbox: {
    title: "Checkbox",
    content:
      "A bedtime reminder is checked by default in the **Static nudge** example, with nudge text reinforcing healthy sleep habits. A custom-themed variant demonstrates label and background overrides, while a disabled checkbox prevents changes to a recommended setting. The **Dynamic nudge** example includes an audio descriptions checkbox that toggles a bold label on focus, and displays context-based nudge text. Another example keeps the nudge visible until the box is checked, as seen in dynamic course materials. In the **Adaptive nudge** example, Dark Mode activates automatically after 6 PM to reduce eye strain, showing different nudge text based on enabled state.",
  },
  radioGroup: {
    title: "Radio Group",
    content:
      "Recommended workout is selected by default in the **Static nudge** example, with nudge text highlighting quick calorie burning. A custom-themed version shows how to override the radio circle styling, while a disabled option illustrates how to lock a particular choice. The **Dynamic nudge** example includes a preferred quality selection that toggles a bold label on focus and uses context-based nudge text to confirm or suggest each option. The **Adaptive nudge** example remembers and restores a chosen export format and renders nudge text to appear only for the selected choice.",
  },
  dropdownMenu: {
    title: "Dropdown Menu",
    content:
      "The **Static nudge** example offers a default course format with nudge text emphasizing flexible learning. A custom-themed variant demonstrates how to override styling for difficulty levels, and a disabled dropdown locks a particular subject choice. In the **Dynamic nudge** example, a learning preference dropdown toggles label styling on focus, showing context-based text for unselected options. The **Adaptive nudge** example detects recommended languages from the browser settings, using nudge text to indicate which options are most relevant.",
  },
  apiReference: {
    title: "API Reference",
    content:
      "The API Reference provides detailed documentation for the **Checkbox**, **Radio Group**, and **Dropdown Menu** components. Each tab outlines **functional properties** that can be passed to a component to control its behavior, as well as **theme properties** that can be modified to customize its appearance.",
  },
};
