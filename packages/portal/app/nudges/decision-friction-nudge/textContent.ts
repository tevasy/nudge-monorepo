export const textContent = {
  title: "Decision Friction Nudge",
  installCommands: [
    "npm install nudge-library/decision-friction",
    "npm install nudge-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Decision Friction Nudge is designed to introduce a small but deliberate pause before an impactful action, which makes users to reconsider their decision. By creating a brief moment for reflection, this nudge helps prevent rash choices while still allowing users to proceed if they confirm their intent.",
    exampleText:
      "Screenshot of Khan Academy's program deletion confirmation modal, illustrating the Decision Friction Nudge.",
    image: {
      src: "/decisionFriction/khanAcademy.png",
      alt: "Screenshot of Khan Academy's program deletion confirmation modal, illustrating the Decision Friction Nudge.",
    },
  },
  problem: {
    title: "Problem",
    content:
      "Users may **act on impulse, overlook potential consequences, or make irreversible choices without sufficient deliberation**. Without a pause, individuals might perform actions they later regret, such as deleting important information or making financial transactions without fully considering the risks. The Decision Friction Nudge helps mitigate these risks by introducing a slight delay, which would make users rethink their choices and avoid unintended mistakes.",
  },
  context: {
    title: "Context",
    content:
      "This nudge is most effective in **digital environments where irreversible or emotionally charged decisions are common**. It is particularly useful in:",
    items: [
      "Content deletion, where users may accidentally erase important files.",
      "Account modifications, where critical settings could be changed without fully understanding the long-term impact.",
      "High-risk financial transactions, where individuals might make large investments without evaluating the risks thoroughly.",
    ],
    devices:
      "The Decision Friction Nudge is applicable across mobile, desktop, and web interfaces.",
  },
  solution: {
    title: "Solution",
    content: "The Solution for implementing this nudge involves:",
    items: [
      "Identifying critical decision points where impulsive actions may lead to regret.",
      "Ensuring introduced friction is minimal but effective, so users pause without feeling unnecessarily obstructed.",
    ],
    contentImplementation:
      "The nudge can be implemented using **Dialogs** with confirmation or additional input prompts. Confirmation Dialogs introduce a required step before proceeding, prompting users to acknowledge their decision. Dialogs with additional input prompts ask users to provide an extra detail, such as re-entering their password or selecting a reason for their action, encouraging reflection before continuing. To maintain a user-friendly experience, these prompts should be clear, minimally disruptive, and easy to bypass if the user is already certain of their decision.",
  },
  rationale: {
    title: "Rationale",
    content:
      "This nudge is based on **regret aversion**. The small friction point before proceeding with an action, makes users to pause and consider the potential consequences of their choice. This helps prevent impulsive or emotionally driven decisions that could lead to regret. Additionally, requiring explicit confirmation increases users' confidence in their decision, as they actively affirm their intent rather than acting automatically.",
  },
  realWorldExamples: {
    title: "Real-world Examples",
  },
  ethicalConsiderations: {
    title: "Ethical Considerations",
    content:
      "The Decision Friction Nudge must **protect users from poorly considered decisions without creating unnecessary barriers**. The nudge should not frustrate or manipulate users into abandoning a choice they genuinely wish to make. Users should be able to bypass the friction easily if they have already considered their decision. The nudge should also be transparent, with clear messaging explaining why an additional step is required. Providing users with relevant information about the potential consequences of their action can further support informed decision-making.",
  },
  adaptabilityConsiderations: {
    title: "Adaptability Considerations",
    content:
      "Decision friction prompts should be context-aware and responsive to user behavior. **Context-aware prompts adjust based on external factors such as time, location, or device type**. For example, a system might require additional confirmation if a user attempts a high-risk transaction from an unfamiliar device but reduce friction when the same action is performed on a trusted device. Similarly, friction prompts should **adapt to the type of action being performed**. High-risk actions, such as permanently deleting an account, may require multiple confirmation steps, while low-risk actions, such as saving a draft of a message, may proceed with minimal interruption. Additionally, systems can introduce **adaptive friction, where the level of confirmation adjusts dynamically based on user behavior**. If a user consistently confirms an action without hesitation, the system may reduce friction. Conversely, if a user frequently cancels or hesitates, the system can introduce additional confirmation steps to help prevent mistakes.",
  },
  implementationResources: {
    title: "Implementation Resources",
  },
  rating: {
    title: "Rating",
    content:
      "The **Static nudge** displays default and themed popups for study reminders. The **Dynamic nudge** highlights how the component responds to user interaction by updating its content based on the selected appointment type, including a countdown before auto-closing and contextual feedback when switching between reminders. The **Adaptive nudge** presents a hydration reminder that adjusts its tone based on previous user responses, demonstrating how reminder's content can evolve using saved user engagement data.",
  },
  badge: {
    title: "Badge",
    content:
      "The **Static nudge** displays default and themed popups for study reminders. The **Dynamic nudge** highlights how the component responds to user interaction by updating its content based on the selected appointment type, including a countdown before auto-closing and contextual feedback when switching between reminders. The **Adaptive nudge** presents a hydration reminder that adjusts its tone based on previous user responses, demonstrating how reminder's content can evolve using saved user engagement data.",
  },
  apiReference: {
    title: "API Reference",
    content:
      "The API Reference provides detailed documentation for the **Popup** component. It tab outlines **functional properties** that can be passed to a component to control its behavior, as well as **theme properties** that can be modified to customize its appearance.",
  },
};
