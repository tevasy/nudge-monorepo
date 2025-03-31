export const textContent = {
  title: "Confidence Nudge",
  installCommands: [
    "npm install nudge-library/confidence",
    "npm install nudge-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Confidence Nudge is designed to increase the likelihood of task completion by providing supportive and encouraging feedback. It helps reduce self-doubt, build motivation and persistence, particularly in situations where users might hesitate or abandon tasks due to frustration.",
    exampleText:
      "Screenshot of Khan Academy showing a supportive tooltip after a learner makes a mistake, demonstrating a Confidence Nudge.",
    image: {
      src: "/confidence/khanAcademy.png",
      alt: "Screenshot of Khan Academy showing a supportive tooltip after a learner makes a mistake, demonstrating a Confidence Nudge.",
    },
  },
  problem: {
    title: "Problem",
    content:
      "Users often **struggle with maintaining confidence when faced with difficult or unfamiliar challenges**. Self-doubt can lead to hesitation, decreased motivation, and ultimately task abandonment. This nudge counteracts these effects by offering timely encouragement and reinforcing progress, which helps users remain engaged and continue their efforts.",
  },
  context: {
    title: "Context",
    content:
      "This nudge is most effective in **digital environments where users need to sustain consistent effort over time**. It is particularly relevant in:",
    items: [
      "Education platforms, where learners need encouragement to persist with difficult concepts.",
      "Onboarding processes, where new users may feel overwhelmed and benefit from reassurance.",
      "Skill-building exercises, such as language learning apps, where individuals learning a new language require motivation to stay engaged.",
    ],
    devices:
      "The Decision Friction Nudge is applicable across mobile, desktop, and web interfaces.",
  },
  solution: {
    title: "Solution",
    content: "The Solution for implementing this nudge involves:",
    items: [
      "Detecting moments of self-doubt, such as when users struggle with a difficult task or face multiple unsuccessful attempts.",
      "Ensuring nudge appears at the right time, such as after an incorrect response or when progress slows.",
      "Using positive, specific, and tailored to the user's experience language of the nudge. For example, instead of a generic “Good job!”, a more effective nudge highlights improvement: “You're improving with each step! Keep going!”.",
      "Allowing users to have control over the nudge, with options to dismiss it, ensuring that encouragement remains helpful rather than intrusive.",
    ],
    contentImplementation:
      "Confidence Nudges can be integrated through supportive **Tooltips** that provide reassuring messages or hints, such as 'You're on the right track!' or 'Almost there! Keep going!' to encourage persistence. These elements should guide users without becoming intrusive.",
  },
  rationale: {
    title: "Rationale",
    content:
      "This nudge is based on **positive reinforcement**, which encourages the repetition of desired behaviors by providing a motivating stimulus after they occur. Feedback serves as this reinforcing stimulus, acknowledging individuals' efforts and encouraging future progress. As a result, they are more likely to persist through challenges. This reinforcement helps shift the focus from immediate success or failure to long-term improvement.",
  },
  realWorldExamples: {
    title: "Real-world Examples",
  },
  ethicalConsiderations: {
    title: "Ethical Considerations",
    content:
      "The Confidence Nudge must **encourage users without creating pressure or frustration**. The language should be positive and supportive, helping users overcome challenges without punishing them for making a mistake. Nudges should respect individual progress and effort rather than pushing users beyond their limits. Additionally, users should have control over their experience, including the ability to adjust or disable nudges based on their preferences.",
  },
  adaptabilityConsiderations: {
    title: "Adaptability Considerations",
    content:
      "Confidence Nudges should dynamically **adjust based on user behavior, past performance, or task difficulty to provide relevant encouragement**. For example, beginners might receive more frequent support, while advanced users get occasional reinforcement to maintain motivation without unnecessary interruptions. Additionally, the nudges can **incorporate context-aware feedback, which can adjust its tone based on the user's progress**. If a user struggles with a task, nudges can acknowledge their effort and provide supportive messages. If they are excelling, feedback can reinforce their confidence and encourage continued success. **Adaptive encouragement** can further enhance effectiveness by evolving dynamically based on user persistence. If a user consistently engages despite challenges, the system may gradually reduce the frequency of nudges. Conversely, if a user frequently hesitates or abandons tasks, the system can provide increased encouragement to sustain motivation.",
  },
  implementationResources: {
    title: "Implementation Resources",
  },
  tooltip: {
    title: "Tooltip",
    content:
      "The **Static nudge** shows a tooltip with default text that appears on hover or press, including a custom-themed version and a disabled, non-interactive example. The **Dynamic nudge** demonstrates how the tooltip responds to user actions, providing encouraging feedback when a wrong answer is selected. The tooltip stays visible until dismissed, promoting retry behavior. The **Adaptive nudge** updates its message based on the selected context and performance level, offering tailored guidance that aligns with the user's current progress.",
  },
  apiReference: {
    title: "API Reference",
    content:
      "The API Reference provides detailed documentation for the **Tooltip** component. It outlines **functional properties** that can be passed to a component to control its behavior, as well as **theme properties** that can be modified to customize its appearance.",
  },
};
