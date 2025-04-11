export const textContent = {
  title: "Reflection Nudge",
  installCommands: [
    "npm install nudge-components-library/reflection",
    "npm install nudge-components-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Reflection Nudge encourages individuals to pause and consider their emotional state, intentions, or the outcomes of their actions before or after a task. It supports self-awareness and more thoughtful decision-making, while still allowing users to proceed without unnecessary friction.",
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
      "This nudge can be implemented using **mood sliders** and **text areas**. The mood slider offers a quick, intuitive way to assess emotional state, while the text area invites users to reflect more deeply by journaling their thoughts. Together, they support self-awareness and reinforce learning without adding friction.",
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
      "The Reflection Nudge should be **tailored to user's behavior, past responses, and key moments where self-reflection is most beneficial**. For example, after completing a complex task, users could be prompted to evaluate what they found challenging. These nudges can also **adapt to situational factors like recent interactions, emotional tone, or progress toward a goal**. If a user has been struggling with a task and making repeated failed attempts, a reflection prompt could gently encourage them to consider what adjustments they might make instead of simply repeating the same approach. Alternatively, if a user has shown significant progress, a prompt might encourage them to reflect on what has worked well and reinforce positive habits. Additionally, **systems can adjust the frequency of prompts over time**, keeping them relevant and helpful rather than repetitive.",
  },
  implementationResources: {
    title: "Implementation Resources",
  },
  rating: {
    title: "Mood Slider",
    content:
      "The **Static nudge** includes a default version, a custom-themed version that displays nudge text to encourage self-awareness, and a disabled version. The **Dynamic nudge** displays a slider with mood-specific icons and labels, along with responsive nudge messages tailored to the selected mood. The **Adaptive nudge** personalizes its feedback by referencing the user's previously saved mood. When the slider loses focus, it compares the current value to the stored one and adjusts the nudge text accordingly.",
  },
  badge: {
    title: "Text Area",
    content:
      "The **Static nudge** presents a default version, a custom-themed version, and a disabled version with nudge text, motivating users to record their daily routines. The **Dynamic nudge** features a text area that responds to user interaction. When the text area loses focus, the nudge temporarily changes to confirm that the reflection has been saved. The **Adaptive nudge** adjusts its message based on the content of the reflection, the time of day, and the user's history of submissions. When a reflection is submitted, the nudge text acknowledges the update.",
  },
  apiReference: {
    title: "API Reference",
    content:
      "The API Reference provides detailed documentation for the **Mood Slider** and **Text Area** components. Each tab outlines **functional properties** that can be passed to a component to control its behavior, as well as **theme properties** that can be modified to customize its appearance. The **Mood Slider** component inherits all functional and theme properties from the base Slider component, in addition to introducing mood-specific props and styles. The shared props are documented on the Anchoring Nudge page.",
  },
};
