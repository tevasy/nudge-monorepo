export const textContent = {
  title: "Reflection Nudge",
  installCommands: [
    "npm install nudge-library/reflection",
    "npm install nudge-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Reflection Nudge is designed to encourage individuals to pause and consider their emotional state, intentions, or the potential outcomes of their actions before or after engaging in a task. This nudge improves self-awareness and promotes more thoughtful decision-making by prompting users to reflect on their choices, experiences, or progress, while still allowing them to proceed without unnecessary friction.",
    exampleText:
      "Screenshot of Insight Timer that prompts the user to reflect on their feelings at the end of a meditation session, illustrating a Reflection Nudge.",
    image: {
      src: "/reflection/insightTimer.png",
      alt: "Screenshot of Insight Timer that prompts the user to reflect on their feelings at the end of a meditation session, illustrating a Reflection Nudge.",
    },
  },
  problem: {
    title: "Problem",
    content:
      "Users often act without fully assessing their experiences, emotional states, or decision-making processes. **Impulsive actions**, **cognitive biases**, or **emotional states** may lead individuals to overlook important insights, fail to update their beliefs, or act in ways that do not align with their long-term goals. The Reflection Nudge helps mitigate these challenges by creating brief moments of introspection, making individuals more conscious of their behaviors and decisions.",
  },
  context: {
    title: "Context",
    content:
      "This nudge is most effective in **situations where reflection enhances decision-making, learning, or personal growth**. It is particularly relevant in:",
    items: [
      "Goal-setting, where users reflect on daily progress and adjust their targets.",
      "Learning processes, where learners assess completed lessons and summarize key takeaways.",
      "Health tracking, where users reflect on their physical and emotional state after a workout.",
    ],
    devices:
      "The Reflection Nudge is applicable across mobile, desktop, and web interfaces, where structured reflection can improve engagement and self-awareness.",
  },
  solution: {
    title: "Solution",
    content: "The Solution for implementing this nudge involves:",
    items: [
      "Identifying moments where reflection can enhance user awareness.",
      "Ensuring that prompts are timely, contextually relevant, and minimally disruptive.",
    ],
    contentImplementation:
      "The nudge can be integrated using **Modal Dialogs**, **Mood Sliders**, or short **Feedback Forms**. Modal dialogs encourage deeper reflection by briefly focusing the user's attention on a thought-provoking question before they proceed. Mood sliders provide a quick way to assess emotional states, making reflection easy and engaging. Short Feedback Forms allow users to record their thoughts for self-reflection, reinforcing learning and self-awareness.",
  },
  rationale: {
    title: "Rationale",
    content:
      "This nudge is based on **self-reflection**. By prompting individuals to pause and evaluate their decisions, the nudge helps reduce impulsive choices, strengthen commitment to goals, and support learning from past experiences. The nudge also enhances accountability and autonomy, making people more likely to take ownership of their choices and maintain long-term positive behaviors.",
  },
  realWorldExamples: {
    title: "Real-world Examples",
  },
  ethicalConsiderations: {
    title: "Ethical Considerations",
    content:
      "The Reflection Nudge must **support personal growth and promote constructive self-assessment**, rather than causing guilt or self-criticism. The language and format of reflections should be encouraging and non-judgmental, helping users engage with their thoughts in a positive way. Additionally, users should have clear options to opt out of these nudges, ensuring they remain a helpful tool rather than an overwhelming requirement.",
  },
  adaptabilityConsiderations: {
    title: "Adaptability Considerations",
    content:
      "Reflection Nudges should be **tailored to user's behavior, past responses, and key moments where self-reflection is most beneficial**. For example, after completing a complex task, users could be prompted to evaluate what they found challenging. These nudges can also **adapt to situational factors like recent interactions, emotional tone, or progress toward a goal**. If a user has been struggling with a task and making repeated failed attempts, a reflection prompt could gently encourage them to consider what adjustments they might make instead of simply repeating the same approach. Alternatively, if a user has shown significant progress, a prompt might encourage them to reflect on what has worked well and reinforce positive habits. Additionally, **systems can adjust the frequency of prompts over time**, keeping them relevant and helpful rather than repetitive.",
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
