"use client";
import ImageSlider from "../../../components/nudgePages/ImageSlider";
import TitleSection from "../../../components/nudgePages/TitleSection";
import Image from "next/image";
import List from "../../../components/nudgePages/List";
import { textContent } from "./textContent";
import ReactMarkdown from "react-markdown";
import CheckboxDocs from "../../../components/nudgePages/implementation/defaultOptionsNudge/CheckboxDocs";
import RadioGroupDocs from "../../../components/nudgePages/implementation/defaultOptionsNudge/RadioGroupDocs";
import DropdownMenuDocs from "../../../components/nudgePages/implementation/defaultOptionsNudge/DropdownMenuDocs";
import { documentationData } from "../../../utils/documentationData";
import ComponentDocumentationTabs from "../../../components/nudgePages/PropsTables/ComponentDocumentationTabs";

export default function InstallSection() {
  return (
    <div className="flex-1">
      <TitleSection
        title={textContent.title}
        installCommands={textContent.installCommands}
      />
      <section id="overview" className="mb-12 px-6 md:px-11 pt-12 text-base">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {textContent.overview.title}
        </h2>
        <p className="text-lg">{textContent.overview.content}</p>
        <div className="my-6 flex justify-center">
          <Image
            src={textContent.overview.image.src}
            alt={textContent.overview.image.alt}
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-auto h-auto"
            priority
          />
        </div>
        <p>{textContent.overview.exampleText}</p>
      </section>
      <div className="bg-gradient-to-r from-customLightLightOrange via-customLightLightOrange to-transparent px-6 md:px-11 py-12">
        <section id="problem" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.problem.title}
          </h2>
          <ReactMarkdown>{textContent.problem.content}</ReactMarkdown>
        </section>
        <section id="context" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.context.title}
          </h2>
          <ReactMarkdown>{textContent.context.content}</ReactMarkdown>
          <List items={textContent.context.items} type="checked" />
          <p>{textContent.context.devices}</p>
        </section>
        <section id="solution" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.solution.title}
          </h2>
          <p>The solution for implementing this nudge involves:</p>
          <List items={textContent.solution.items} type="numbered" />
          <ReactMarkdown>
            {textContent.solution.contentImplementation}
          </ReactMarkdown>
        </section>
        <section id="rationale" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.rationale.title}
          </h2>
          <ReactMarkdown>{textContent.rationale.content}</ReactMarkdown>
        </section>
        <section id="real-world-examples" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.realWorldExamples.title}
          </h2>
          <ImageSlider nudge={"defaultOptions"} />
        </section>
        <section id="ethical-considerations" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.ethicalConsiderations.title}
          </h2>
          <ReactMarkdown>
            {textContent.ethicalConsiderations.content}
          </ReactMarkdown>
        </section>
        <section id="adaptability-considerations" className="scroll-mt-64">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.adaptabilityConsiderations.title}
          </h2>
          <ReactMarkdown>
            {textContent.adaptabilityConsiderations.content}
          </ReactMarkdown>
        </section>
      </div>
      <section
        id="implementation-resources"
        className="scroll-mt-64 mb-6 md:mb-10 lg:mb-12 px-6 md:px-11 py-12"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          {textContent.implementationResources.title}
        </h2>
        <p className="mb-4">
          Default option nudges can be implemented through <b>Checkbox</b>
          ,&nbsp;
          <b>Radio Group</b>, and <b>Dropdown Menu</b> components, which are
          available via &nbsp;
          <span className="font-mono text-[15px] bg-customLightLightBlue rounded-md py-1 px-1.5">
            npm install nudge-components-library
          </span>{" "}
          or &nbsp;
          <span className="font-mono text-[15px] bg-customLightLightBlue rounded-md py-1 px-1.5">
            npm install nudge-components-library/default-options
          </span>
          . Each component is presented with three tabs: Static nudge, Dynamic
          nudge, and Adaptive nudge.{" "}
        </p>
        <p className="mb-4">
          The <b>Static nudge</b> covers basic component usage, including static
          properties and customization options. The <b>Dynamic nudge</b>
          &nbsp;demonstrates how components respond to user interactions through
          dynamic properties. The <b>Adaptive nudge</b> illustrates how each
          component can shift its behavior based on external factors like time
          of day, past user choices, or other contextual data. All tabs include{" "}
          <b>code snippets</b>&nbsp;detailing how to integrate these components
          into the project, <b>from minimal setup to advanced theming</b>.
          Additionally, the section includes an <b>API Reference</b> detailing
          functional and theme properties for the components.
        </p>
        <section id="checkbox" className="scroll-mt-64">
          <h3 className="text-xl font-bold mt-10 mb-4">
            {textContent.checkbox.title}
          </h3>
          <div className="mb-4">
            <ReactMarkdown>{textContent.checkbox.content}</ReactMarkdown>
          </div>
          <CheckboxDocs />
        </section>
        <section id="radio-group" className="scroll-mt-64">
          <h3 className="text-xl font-bold mt-10 mb-4">
            {textContent.radioGroup.title}
          </h3>
          <div className="mb-4">
            <ReactMarkdown>{textContent.radioGroup.content}</ReactMarkdown>
          </div>
          <RadioGroupDocs />
        </section>
        <section id="dropdown-menu" className="scroll-mt-64">
          <h3 className="text-xl font-bold mt-10 mb-4">
            {textContent.dropdownMenu.title}
          </h3>
          <div className="mb-4">
            <ReactMarkdown>{textContent.dropdownMenu.content}</ReactMarkdown>
          </div>
          <DropdownMenuDocs />
        </section>
        <section id="api-reference" className="scroll-mt-64">
          <h3 className="text-xl font-bold mt-10 mb-4">
            {textContent.apiReference.title}
          </h3>
          <div className="mb-4">
            <ReactMarkdown>{textContent.apiReference.content}</ReactMarkdown>
          </div>
          <ComponentDocumentationTabs
            tabsData={documentationData.defaultOptions}
          />
        </section>
      </section>
    </div>
  );
}
