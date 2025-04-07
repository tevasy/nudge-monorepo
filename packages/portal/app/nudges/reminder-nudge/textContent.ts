export const textContent = {
  title: "Reminder Nudge",
  installCommands: [
    "npm install nudge-library/reminder",
    "npm install nudge-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Reminder Nudge is designed to help individuals overcome barriers such as inattention, procrastination, inertia, or competing obligations by delivering timely prompts that encourage action. By prompting engagement at the right moment, this nudge helps users complete important tasks without delay, while still allowing them to dismiss or postpone the reminder if needed.",
    exampleText:
      "Screenshot of pop-up from Apple Reminders, illustrating the Reminder Nudge.",
    image: {
      src: "/reminder/apple_reminder.png",
      alt: "Screenshot of pop-up from Apple Reminders, illustrating the Reminder Nudge.",
    },
  },
  problem: {
    title: "Problem",
    content:
      "Users often **delay decisions**, **lose track of tasks**, or **continue to postpone actions, even when they intend to complete them**. Without external prompts, important tasks may be unintentionally overlooked due to distractions, competing priorities, or cognitive overload. The Reminder Nudge ensures that critical actions are brought back into focus at the right moment, increasing follow-through and reducing unintended forgetfulness.",
  },
  context: {
    title: "Context",
    content:
      "This nudge is most effective in **situations where timely action is necessary and where users benefit from external prompts**. It is particularly useful in:",
    items: [
      "Appointment scheduling, where they remind users to attend doctor's appointments.",
      "Learning applications, where they stimulate early participation.",
      "Health tracking, where they encourage posture correction when working at a computer.",
    ],
    devices:
      "The nudge can be implemented across various digital platforms and interfaces, including mobile notifications, desktop alerts, and web-based pop-ups.",
  },
  solution: {
    title: "Solution",
    content: "The Solution for implementing this nudge involves:",
    items: [
      "Identifying key moments when users need a reminder.",
      "Ensuring that notifications appear at optimal times.",
      "Allowing users to adjust their preferences for when they receive them.",
      "Providing clear, actionable prompts.",
    ],
    contentImplementation:
      "The Reminder Nudge can be implemented using **pop-ups** to gently prompt users without being overly intrusive. These components can be adjusted to let users act immediately or postpone as needed.",
  },
  rationale: {
    title: "Rationale",
    content:
      "This nudge is based on **attention shift**, **belief adjustment**, and **psychological costs**. People often intend to act but fail due to distractions, competing priorities, or cognitive overload. A well-timed reminder counteracts this by bringing the intended action back into focus at the right moment. In some cases, reminders also introduce psychological costs, such as guilt or social expectation, which further motivate action.",
  },
  realWorldExamples: {
    title: "Real-world Examples",
  },
  ethicalConsiderations: {
    title: "Ethical Considerations",
    content:
      "The Reminder Nudge must **support user autonomy rather than becoming intrusive or overwhelming**. Users should have control over the frequency, timing, and format of reminders, with options to snooze, reschedule, or turn them off to prevent frustration. Additionally, reminders should provide enough context for users to make informed decisions rather than feeling pressured into immediate action.",
  },
  adaptabilityConsiderations: {
    title: "Adaptability Considerations",
    content:
      "Reminders should match the user's behavior and current situation. Instead of using broad categories like age or gender, **reminders should be based on previous interactions and user responsiveness**. For example, a system might remind a user to finish a task when they usually work on it, rather than sending the same reminder at fixed times. Reminders can also **adjust depending on factors like time of day**, **location**, or **how urgent the matter is**, so they appear when users are most likely to act. In addition, **adaptive reminders adjust their content, timing, and frequency based on user engagement**. They can become more frequent for users who respond and less so for those who do not, which helps avoid annoyance and fatigue.",
  },
  implementationResources: {
    title: "Implementation Resources",
  },
  popup: {
    title: "Popup",
    content:
      "The **Static nudge** displays default and themed Popups for study reminders. The **Dynamic nudge** highlights how the component responds to user interaction by updating its content based on the selected appointment type, including a countdown before auto-closing and contextual feedback when switching between reminders. The **Adaptive nudge** presents a hydration reminder that adjusts its tone based on previous user responses, demonstrating how the Popup's content can evolve using saved user engagement data.",
  },
  apiReference: {
    title: "API Reference",
    content:
      "The API Reference provides detailed documentation for the **Popup** component. It outlines **functional properties** that can be passed to a component to control its behavior, as well as **theme properties** that can be modified to customize its appearance.",
  },
};
