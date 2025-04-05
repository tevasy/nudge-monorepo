export const textContent = {
  title: "Social Norms Nudge",
  installCommands: [
    "npm install nudge-library/social-norms",
    "npm install nudge-library",
  ],
  overview: {
    title: "Overview",
    content:
      "The Social Norms Nudge is designed to encourage user behavior by leveraging people's tendency to follow the actions of others, which makes certain choices feel more desirable or widely accepted. It reinforces social validation by showing what others are doing, which makes users more likely to adopt similar behaviors while still having the freedom to choose.",
    exampleText:
      "Screenshot of Coursera's “Google Prompting Essentials” course page, illustrating the Social Norms Nudges.",
    image: {
      src: "/socialNorms/coursera.png",
      alt: "Screenshot of Coursera's course page, illustrating the Social Norms Nudge.",
    },
  },
  problem: {
    title: "Problem",
    content:
      "Users often **face uncertainty when making decisions, especially in unfamiliar environments where they lack prior experience or knowledge**. This uncertainty can lead to hesitation, poor choices, or even avoiding a decision altogether. The Social Norms Nudge addresses this by showing what others have done, which provides a sense of reassurance. When users see that many people have made a particular choice, they feel more confident following the same path. This nudge encourages engagement, participation, and informed decision-making.",
  },
  context: {
    title: "Context",
    content:
      "This nudge is most effective in digital environments where social influence shapes user choices. It applies to:",
    items: [
      "E-learning platforms, where showing the number of students who have completed a course can encourage others to enroll.",
      "Content recommendation systems, where highlighting the most-read research articles motivates others to explore them.",
      "Collaborative platforms, where showing how many users have endorsed a shared document can encourage its reuse.",
    ],
    devices:
      "The Social Norms Nudge is relevant across mobile apps, desktop applications, and web-based platforms, where social engagement indicators can be integrated.",
  },
  solution: {
    title: "Solution",
    content: "The Solution for implementing this nudge involves:",
    items: [
      "Integrating social validation mechanisms into key decision points in the user interface.",
      "Ensuring that displayed social proof is accurate and relevant.",
      "Using clear indicators to highlight community engagement.",
    ],
    contentImplementation:
      "Social Norms Nudges can be implemented using displays of **Ratings** and **Badges** that signify popularity and credibility. Ratings provide community feedback, which helps users to make informed decisions. Badges such as “Top Contributor” acknowledge active participation and expertise, while “Top-Rated” labels highlight highly recognized content. Similarly, Badges like “20 people recently completed this course” build credibility and show engagement from other people.",
  },
  rationale: {
    title: "Rationale",
    content:
      "This nudge is based on **social proof** and **herd behavior**. People tend to follow the actions of others, assuming that popular choices are often the correct or preferred ones. Seeing that others have engaged with a particular option increases its perceived value and credibility, which encourages users to make similar choices.",
  },
  realWorldExamples: {
    title: "Real-world Examples",
  },
  ethicalConsiderations: {
    title: "Ethical Considerations",
    content:
      "The Social Norms Nudge must **ensure that displayed social proof is accurate rather than artificially inflating popularity**. Users should be able to understand how social indicators are generated and trust that they reflect real activity. Providing contextual explanations about why a particular choice is popular or well-rated can further support informed decision-making. It's also important to avoid encouraging negative behaviors by making sure that the social norms promote positive and helpful actions.",
  },
  adaptabilityConsiderations: {
    title: "Adaptability Considerations",
    content:
      "Systems incorporating this nudge should go beyond static indicators, and include personalization and context sensitivity. The nudge can be **tailored based on user preferences, location, or past behaviors**. For instance, a learning platform might showcase resources frequently accessed by users at a similar skill level. At the same time, **context-aware nudges can highlight peer activity most relevant to the individual**, such as reviews from users with similar interests or trends within a specific community. Additionally, **dynamic social norms can display real-time updates on user activity**, such as trending topics or popular choices, helping users feel connected to an active community. For example, GitHub showcases trending repositories and Stack Overflow features the most active programming questions. However, it's essential to keep this information up to date.",
  },
  implementationResources: {
    title: "Implementation Resources",
  },
  rating: {
    title: "Rating",
    content:
      "The **Static nudge** displays a default rating with nudge text, including a custom-themed version and a disabled read-only state. The **Dynamic nudge** updates its text based on the selected rating, providing context-aware feedback. A follow-up hint appears when the component loses focus, reminding that the rating can be changed. The **Adaptive nudge** personalizes its message based on the user's experience level, with nudge text reflecting what peers at similar levels typically endorse.",
  },
  badge: {
    title: "Badge",
    content:
      "The **Static nudge** displays a badge with nudge text encouraging feedback review, including a custom-themed version and a disabled read-only state. The **Dynamic nudge** updates its message based on endorsement count, reflecting document's popularity. After endorsment, a confirmation message briefly appears before fading out. The **Adaptive nudge** personalizes its message using user profile data such as skill level and progress. The nudge text adapts to reflect typical behavior among similar users.",
  },
  apiReference: {
    title: "API Reference",
    content:
      "The API Reference provides detailed documentation for the **Rating** and **Badge** components. Each tab outlines **functional properties** that can be passed to a component to control its behavior, as well as **theme properties** that can be modified to customize its appearance.",
  },
};
