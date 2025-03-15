import React, { useState } from "react";
import PropsTable, { PropsTableRow } from "./PropsTable";
import ThemePropertiesTable, { ThemePropertyRow } from "./ThemePropertiesTable";

export interface ComponentDocumentationData {
  title: string;
  functionalProps: PropsTableRow[];
  themeProperties: ThemePropertyRow[];
}

interface ComponentDocumentationTabsProps {
  tabsData: ComponentDocumentationData[];
}

export default function ComponentDocumentationTabs({
  tabsData,
}: ComponentDocumentationTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-2xl shadow-md border border-customLightBlue">
      <div className="flex border-b border-customLightBlue mb-4 text-sm">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-3 px-4.5 focus:outline-none cursor-pointer ${
              activeTab === index
                ? "border-b-3 border-customBlue font-bold cursor-pointer"
                : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="pt-3">
        <h2 className="text-lg font-bold mb-2.5 pl-4">Functional properties</h2>
        <PropsTable data={tabsData[activeTab].functionalProps} />
        <h2 className="text-lg font-bold mt-8 mb-2.5 pl-4">Theme properties</h2>
        <ThemePropertiesTable data={tabsData[activeTab].themeProperties} />
      </div>
    </div>
  );
}
