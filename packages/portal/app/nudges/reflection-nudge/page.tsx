"use client";
import ImageSlider from "../../../components/nudgePages/ImageSlider";
import TitleSection from "../../../components/nudgePages/TitleSection";
import Image from "next/image";
import List from "../../../components/nudgePages/List";
import { textContent } from "./textContent";
import ReactMarkdown from "react-markdown";
import { documentationData } from "../../../utils/documentationData";
import ComponentDocumentationTabs from "../../../components/nudgePages/PropsTables/ComponentDocumentationTabs";
import RatingDocs from "../../../components/nudgePages/implementation/socialNormsNudge/RatingDocs";
import BadgeDocs from "../../../components/nudgePages/implementation/socialNormsNudge/BadgeDocs";

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
          <ImageSlider nudge={"reflection"} />
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
          Reminder nudges can be implemented using the <b>Popup</b> component,
          available via &nbsp;
          <span className="font-mono text-[15px] bg-customLightLightBlue rounded-md py-1 px-1.5">
            npm install nudge-library
          </span>{" "}
          or &nbsp;
          <span className="font-mono text-[15px] bg-customLightLightBlue rounded-md py-1 px-1.5">
            npm install nudge-library/reminder
          </span>
          . The component&apos;s usage examples are shown in three tabs: Static
          nudge, Dynamic nudge, and Adaptive nudge. All tabs include code
          snippets for integration, and the section concludes with an API
          Reference outlining both functional and theme properties.
        </p>
        <section id="rating" className="scroll-mt-64">
          <h3 className="text-xl font-bold mt-10 mb-4">
            {textContent.rating.title}
          </h3>
          <div className="mb-4">
            <ReactMarkdown>{textContent.rating.content}</ReactMarkdown>
          </div>
          <RatingDocs />
        </section>
        <section id="badge" className="scroll-mt-64">
          <h3 className="text-xl font-bold mt-10 mb-4">
            {textContent.badge.title}
          </h3>
          <div className="mb-4">
            <ReactMarkdown>{textContent.badge.content}</ReactMarkdown>
          </div>
          <BadgeDocs />
        </section>
        <section id="api-reference" className="scroll-mt-64">
          <h3 className="text-xl font-bold mt-10 mb-4">
            {textContent.apiReference.title}
          </h3>
          <div className="mb-4">
            <ReactMarkdown>{textContent.apiReference.content}</ReactMarkdown>
          </div>
          <ComponentDocumentationTabs tabsData={documentationData.reminder} />
        </section>
      </section>
    </div>
  );
}
