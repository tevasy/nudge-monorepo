"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  nudge?:
    | "defaultOptions"
    | "anchoring"
    | "reminder"
    | "socialNorms"
    | "reflection"
    | "decisionFriction"
    | "confidence";
}

const images: Record<
  | "defaultOptions"
  | "anchoring"
  | "reminder"
  | "socialNorms"
  | "reflection"
  | "decisionFriction"
  | "confidence",
  ImageData[]
> = {
  defaultOptions: [
    {
      src: "/defaultOptions/google_modal.png",
      alt: "Example 1: Google's “Display Language” Modal",
      title: "Example 1: Google's “Display Language” Modal",
      description:
        "Google's modal reduces decision fatigue when selecting a language. In contexts such as initial setup or language preference modification, English is preselected as the default, allowing most users to use a service immediately without an overwhelming choice. At the same time, users who prefer a different language can easily make that change.",
    },
    {
      src: "/defaultOptions/outlook_settings.png",
      alt: "Example 2: Outlook's “Mail Layout” Settings",
      title: "Example 2: Outlook's “Mail Layout” Settings",
      description:
        "Outlook's settings let users customize their inbox view. By default, emails are not sorted into “Focused“ and “Other,“ allowing to control how the inbox is organized. Messages are grouped by conversation, making it easier to follow threads without searching. The text size is set to “Large” for better readability. These defaults enable users to navigate their inbox without manual adjustments.",
    },
  ],
  anchoring: [
    {
      src: "/anchoring/figma_shadow.png",
      alt: "Example 1: Figma's drop shadow settings",
      title: "Example 1: Figma's drop shadow settings",
      description:
        "Predefined values in Figma's drop shadow settings act as an Anchoring Nudge. When adjusting shadow effects, users encounter default values for position (X: 0, Y: 4), blur (4), spread (0), and opacity (25%), providing a reference point. This helps reduce uncertainty and simplifies decision-making while still allowing users to customize their choice.",
    },
    {
      src: "/anchoring/macos_keyboard.png",
      alt: "Example 2: macOS keyboard settings",
      title: "Example 2: macOS keyboard preferences",
      description:
        "The predefined positions of macOS keyboard sliders serve as an Anchoring Nudge. The “Key repeat rate” (set closer to “Fast”) determines how quickly a held key repeats, and the “Delay until repeat” (set closer to “Short”) controls how long a key must be pressed before it begins repeating. These anchors offer a helpful starting point for users unsure of the preferred keyboard configuration, simplifying initial decisions while still allowing customization.",
    },
  ],
  reminder: [
    {
      src: "/reminder/apple_reminder.png",
      alt: "Example 1: Apple Reminders",
      title: "Example 1: Apple Reminders",
      description:
        "An example of the Reminder Nudge is the use of popup notifications from Apple Reminders, which help users stay on track with scheduled tasks. When a task is due, a notification appears, reminding the user to take action. This ensures that important tasks are not overlooked, with options to decide whether to act immediately or postpone.",
    },
    {
      src: "/reminder/google_keep.png",
      alt: "Example 2: Google Keep Reminders",
      title: "Example 2: Google Keep Reminders",
      description:
        "Google Keep displays reminder popups based on times users set for individual notes. For instance, a reminder may appear with the message “Visit a meeting. Don't forget!” scheduled for 12:05 PM. The popup includes an “Open Note” button and a close option, helping users follow through with their intentions at the time they've chosen. This supports better organization and timely action on personal tasks.",
    },
  ],
  socialNorms: [
    {
      src: "/socialNorms/coursera.png",
      alt: "Example 1: Coursera's Course Page",
      title: "Example 1: Coursera's Course Page",
      description:
        "Coursera's use of social norm on the 'Google Prompting Essentials' course page helps users make more confident and informed decisions. The message “46,404 already enrolled” signals to potential learners that many others have found the course worthwhile. It reduces uncertainty and helps them feel part of a broader learning community. Similarly, the statement “97% – Most learners liked this course” reassures users of the course's quality based on peer feedback.",
    },
    {
      src: "/socialNorms/kaggle.png",
      alt: "Example 2: Kaggle's Front Page",
      title: "Example 2: Kaggle's Front Page",
      description:
        "Kaggle uses a descriptive social norm in the message “Join over 23M+ machine learners…”, implying that participation in the platform is typical among peers in the ML/AI community. This helps users feel that joining and learning is a standard behavior, reducing hesitation and increasing confidence in the decision to participate.",
    },
  ],
  reflection: [
    {
      src: "/reflection/insightTimer.png",
      alt: "Example 1: Insight Timer's Reflection Prompt",
      title: "Example 1: Insight Timer's Reflection Prompt",
      description:
        "Insight Timer prompts users to reflect at the end of a meditation session, encouraging self-awareness. After completing a session, users interact with a “How are you feeling?” mood slider, followed by the option to describe their emotional state in more detail using “Journal about your session” form.",
    },
    {
      src: "/reflection/langotalk.png",
      alt: "Example 2: Langotalk's Reflection Prompts",
      title: "Example 2: Langotalk's Reflection Prompts",
      description:
        "Langotalk shows mood reflection prompts after completing a learning session, illustrating Reflection Nudge. When users finish a lesson, they are encouraged to rate their experience using mood-based emojis and select a reason that best describes their feelings about the session. This reflection helps users become more aware of their emotions, which promotes a deeper connection to the learning process. Additionally, it allows the system to personalize future lessons based on user feedback, improving overall learning outcomes.",
    },
  ],
  decisionFriction: [
    {
      src: "/decisionFriction/khanAcademy.png",
      alt: "Example 1: Khan Academy's Confirmation Dialog",
      title: "Example 1: Khan Academy's Confirmation Dialog",
      description:
        "Khan Academy shows a confirmation dialog, which serves as a Decision Friction Nudge. When attempting to delete a program, a modal appears asking, “Are you sure you want to delete your program?”, providing users with an extra moment to reconsider their action. This slight friction ensures that users do not accidentally erase their work and gives them a chance to reflect on the consequences of deletion.",
    },
    {
      src: "/decisionFriction/calm.png",
      alt: "Example 2: Calm's Confirmation Dialog",
      title: "Example 2: Calm's Confirmation Dialog",
      description:
        "Calm displays a confirmation prompt before cancelling a bedtime reminder: “Are you sure? It's hard to get ready for bed without a little help”. This acts as a Decision Friction Nudge by creating a brief pause before an impulsive action, encouraging users to maintain a consistent sleep schedule.",
    },
    {
      src: "/decisionFriction/github.png",
      alt: "Example 3: Github's Additional Input Dialog",
      title: "Example 3: Github's Additional Input Dialog",
      description:
        "GitHub displays a confirmation modal that includes an additional input field, requiring users to manually type the repository name before deletion. This serves as a Decision Friction Nudge by introducing a small friction, which prompts users to reconsider an impulsive or high-impact action.",
    },
  ],
  confidence: [
    {
      src: "/confidence/khanAcademy.png",
      alt: "Example 1: Khan Academy's Tooltips",
      title: "Example 1: Khan Academy's Tooltips",
      description:
        "Khan Academy displays supportive tooltip “Not quite! Give it another try!” when learners make a mistake. This message reduces self-doubt and encourages persistence. It also includes a “Show a step” button, offering a hint to guide the learner forward and increase the likelihood of task completion.",
    },
    {
      src: "/confidence/brilliant.png",
      alt: "Example 2: Brilliant's Feedback",
      title: "Example 2: Brilliant's Feedback",
      description:
        "The Confidence Nudge in Brilliant's interactive exercises supports users when they struggle. Instead of a discouraging error message, the system provides a prompt like “Try again. Think about shifting the ship's position right 5 units and up 3 units”, offering both encouragement and a specific hint. Users are given two options: “Try again” to reinforce persistence or “See answer” for additional help. This approach reduces self-doubt and increases the likelihood of task completion.",
    },
  ],
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  nudge = "defaultOptions",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const selectedImages = images[nudge] || images.defaultOptions;

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 0;

    if (distance > threshold) {
      nextSlide();
    } else if (distance < -threshold) {
      prevSlide();
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto ">
      <div className="overflow-hidden shadow-lg rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {selectedImages.map((image, index) => (
            <div key={index} className="min-w-full bg-white flex flex-col">
              <div className="flex border-b border-customLightGray">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={500}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center p-6 h-full">
                <div>
                  <h4 className="text-lg font-semibold mb-2">{image.title}</h4>
                  <p className="text-base">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute -left-2 md:left-4 top-[46%] transform -translate-y-1/2 bg-white/25 md:bg-white/45 backdrop-blur-lg w-10 h-10 md:w-13 md:h-13 flex items-center justify-center rounded-full shadow-md transition z-10 cursor-pointer hover:bg-white/80 hover:scale-105"
      >
        <FiChevronLeft className="w-6 h-6 md:w-8 md:h-8 mr-0.5 opacity-80" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-2 md:right-4 top-[46%] transform -translate-y-1/2 bg-white/25 md:bg-white/45 backdrop-blur-lg w-10 h-10 md:w-13 md:h-13 flex items-center justify-center rounded-full shadow-md transition z-10 cursor-pointer hover:bg-white/80 hover:scale-105"
      >
        <FiChevronRight className="w-6 h-6 md:w-8 md:h-8 ml-0.5 opacity-80" />
      </button>
    </div>
  );
};

export default ImageSlider;
