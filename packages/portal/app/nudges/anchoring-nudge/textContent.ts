export const textContent = {
  title: "Anchoring Nudge",
  installCommands: [
    "npm install nudge-library/anchoring",
    "npm install nudge-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Anchoring Nudge is designed to influence decision-making by presenting an initial reference point that shapes subsequent judgments and choices. By introducing a predefined value or range, this nudge helps users make more confident decisions while still allowing them to adjust their selection based on personal preferences.",
    exampleText:
      "Screenshot of predefined values in Figma's drop shadow settings, illustrating the Anchoring Nudge.",
    image: {
      src: "/anchoring/figma_shadow.png",
      alt: "Screenshot of predefined values in Figma's drop shadow settings, illustrating the Anchoring Nudge.",
    },
  },
  problem: {
    title: "Problem",
    content:
      "Users often struggle to determine the best option when they **lack sufficient information**, **find it difficult to compare alternatives**, or **feel overwhelmed by too many choices**. Without a clear reference point, decision-making can become more cognitively demanding, leading to hesitation or suboptimal selections. The Anchoring Nudge mitigates this challenge by **establishing a starting point** that guides users toward an informed decision and reduces uncertainty.",
  },
  context: {
    title: "Context",
    content:
      "This nudge is most effective in situations where users need to **assess values**, **compare options**, or **determine an appropriate selection based on a numerical input**. It is particularly useful in:",
    items: [
      "Pricing strategies, where higher initial values make lower prices appear more attractive.",
      "Donation platforms, where higher suggested contribution amounts encourage larger donations.",
      "Time management, where suggesting a longer default duration for activities like studying can encourage users to dedicate more time.",
    ],
    devices:
      "This nudge is applicable across mobile, desktop, and web interfaces, where predefined reference points can simplify decision-making.",
  },
  solution: {
    title: "Solution",
    content: "The Solution for implementing this nudge involves:",
    items: [
      "Identifying key moments where an anchor can simplify decision-making.",
      "Ensuring that the initial reference point is reasonable and relevant.",
      "Providing users with flexibility to adjust their choices easily.",
      "Adding an explanation for the suggested value, where necessary.",
    ],
    contentImplementation:
      "The Anchoring Nudge can be implemented using **sliders with specific endpoints**, **sliders with default positions**, and **text boxes with predefined values**. Sliders with specific endpoints help users frame their decision within a defined range, while sliders with default positions suggest an optimal starting point. Text boxes with predefined values offer a quick reference for users who may not have a clear idea of what to input, helping them to make a choice.",
  },
  rationale: {
    title: "Rationale",
    content:
      "This nudge is based on **anchoring and adjustment bias**, a cognitive effect where people rely heavily on the first piece of information they encounter when making a decision. Once an initial value is provided, users tend to adjust from that point rather than considering all options from scratch. As a result, the decision-making process becomes simpler and demands less mental effort.",
  },
  realWorldExamples: {
    title: "Real-world Examples",
  },
  ethicalConsiderations: {
    title: "Ethical Considerations",
    content:
      "The Anchoring Nudge must provide **useful reference points without misleading users**. Its goal is to assist users in making informed decisions rather than manipulating them into selecting a specific option. To maintain transparency, users should clearly understand why an anchor has been set and have the flexibility to adjust their selection as needed. Providing an explanation for a suggested value can further support informed decision-making. When applying this nudge in financial contexts, it is crucial to ensure that anchor values and suggested amounts remain reasonable. Systems should avoid setting excessively high anchors that pressure users into spending more than they intend.",
  },
  adaptabilityConsiderations: {
    title: "Adaptability Considerations",
    content:
      "Anchoring must remain effective across different users and contexts. Reference points can be **dynamically set** based on user behavior or past selections to increase their relevance. For example, a system might suggest different starting values for a beginner versus an experienced user based on their skill level. Systems can also introduce **adaptive anchoring**, where anchors adjust based on on how users interact with them over time. If a user frequently selects a higher value than the suggested one, the system can raise future recommendations to better match their preferences. In contrast, if users frequently lower an anchor, the system may start with a lower suggestion. **Context-aware nudges** can further improve anchoring by adjusting values based on external factors like location or timing, such as suggesting higher savings goals at the beginning of the month. This approach allows for a more tailored and adaptive experience.",
  },
  implementationResources: {
    title: "Implementation Resources",
  },
  slider: {
    title: "Slider",
    content:
      "A slider with default value of 50 is showcased in the **Static nudge**, highlighting its initial value through nudge text. A slider with minimum and maximum values employs a custom theme, and a disabled slider restricts changes to a fixed range. In the **Dynamic nudge**, a savings slider presents context-aware hints during focus, and commits the final value once the slider loses focus. The **Adaptive nudge** retrieves previously stored volume data, providing different messages when the current setting is higher, lower, or the same as the last saved value.",
  },
  textBox: {
    title: "Text Box",
    content:
      "The **Static nudge** highlights a text box prefilled with value of 30, accompanied by nudge text. A themed variant shows how to modify label and background properties, while a disabled text box prevents user edits. The **Dynamic nudge** includes a donation entry field that offers context-based tips while typing and commits the final sum when focus is lost. The **Adaptive nudge** assigns a default study duration based on the current time of day and offers relevant suggestions.",
  },
  apiReference: {
    title: "API Reference",
    content:
      "The API Reference provides detailed documentation for the **Slider** and **Text Box** components. Each tab outlines **functional properties** that can be passed to a component to control its behavior, as well as **theme properties** that can be modified to customize its appearance.",
  },
};
