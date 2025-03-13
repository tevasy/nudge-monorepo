"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  nudge?: "defaultOptions" | "anchoring";
}

const images: Record<"defaultOptions" | "anchoring", ImageData[]> = {
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
        "Outlook's settings let users customize their inbox view. By default, emails are not sorted into “Focused“ and “Other,“ allowing users to control how they organize their inbox. Messages are grouped by conversation, making it easier to follow threads without searching. The text size is set to “Large” for better readability. These defaults enable users to navigate their inbox without manual adjustments.",
    },
  ],
  anchoring: [
    {
      src: "/anchoring/figma_shadow.png",
      alt: "Example 1: Figma's drop shadow settings",
      title: "Example 1: Figma's drop shadow settings",
      description:
        "Predefined values in Figma's drop shadow settings act as an Anchoring Nudge. When adjusting shadow effects, users encounter default values for position (X: 0, Y: 4), blur (4), spread (0), and opacity (25%), providing a reference point. This helps reduce uncertainty and simplifies the decision-making process while still allowing users to customize their choice.",
    },
    {
      src: "/anchoring/macos_keyboard.png",
      alt: "Example 2: macOS keyboard settings",
      title: "Example 2: macOS keyboard preferences",
      description:
        "The predefined positions of macOS keyboard sliders serve as an Anchoring Nudge. The “Key repeat rate” (set closer to “Fast”) determines how quickly a held key repeats, and the “Delay until repeat” (set closer to “Short”) controls how long a key must be pressed before it begins repeating. These anchors offer a helpful starting point for users unsure of the preferred keyboard configuration, simplifying initial decisions while still allowing customization.",
    },
  ],
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  nudge = "defaultOptions",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const selectedImages = images[nudge] || images.defaultOptions;

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
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden shadow-lg rounded-2xl">
      <button
        onClick={prevSlide}
        className="absolute left-4 top-[46%] transform -translate-y-1/2 bg-white/25 md:bg-white/45 backdrop-blur-lg w-10 h-10 md:w-13 md:h-13 flex items-center justify-center rounded-full shadow-md transition z-10 cursor-pointer hover:bg-white/80 hover:scale-105"
      >
        <FiChevronLeft className="w-6 h-6 md:w-8 md:h-8 mr-0.5 opacity-80" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-[46%] transform -translate-y-1/2 bg-white/25 md:bg-white/45 backdrop-blur-lg w-10 h-10 md:w-13 md:h-13 flex items-center justify-center rounded-full shadow-md transition z-10 cursor-pointer hover:bg-white/80 hover:scale-105"
      >
        <FiChevronRight className="w-6 h-6 md:w-8 md:h-8 ml-0.5 opacity-80" />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
            <div className="flex flex-col items-center justify-center text-center p-6">
              <h4 className="text-lg font-semibold mb-2">{image.title}</h4>
              <p className="text-base">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
