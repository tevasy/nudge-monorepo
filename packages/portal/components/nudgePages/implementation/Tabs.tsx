import React, { useState, ReactNode } from "react";

interface TabsProps {
  tabs: { label: string; content: ReactNode }[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b border-customLightBlue">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4.5 py-3 text-sm cursor-pointer text-center ${
              activeTab === index
                ? "border-b-3 border-customBlue font-bold"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div key={activeTab} className="fade-in">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
