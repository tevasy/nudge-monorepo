"use client";

import { FaNpm } from "react-icons/fa";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

interface TitleSectionProps {
  title: string;
  installCommands: string[];
}

export default function TitleSection({
  title,
  installCommands,
}: TitleSectionProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedText(command);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="px-6 md:px-11 py-14 bg-gradient-to-r from-[#E4F1FF] via-[#FFEAD2B8] to-[#FFFFFF00]">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
      <p className="font-medium text-md mb-2.5">Install with:</p>
      <div className="flex flex-col text-sm space-y-2">
        {installCommands.map((command, index) => (
          <div key={index} className="space-y-2">
            <button
              className={`flex items-center px-3 py-2 rounded-lg transition cursor-pointer text-left ${
                index === 0
                  ? "bg-customLightBlue text-customDarkerBlue"
                  : "bg-customLightOrange text-customOrange"
              }`}
              onClick={() => handleCopy(command)}
            >
              <FaNpm className="mr-2.5 text-[#CC3534] text-xl" />
              {command}
              <span className="ml-2">
                {copiedText === command ? (
                  <FiCheck className="text-base" />
                ) : (
                  <FiCopy className="text-base" />
                )}
              </span>
            </button>
            {index === 0 && <span>or</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
