"use client";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import ListItem from "../../components/nudgePages/ListItem";
import { textContent } from "./textContent";
import CodeContainer from "../../components/nudgePages/implementation/CodeContainer";
import {
  step1Snippet,
  step2Snippet,
  step3Snippet,
  step4Snippet,
  themingSnippet,
} from "../../utils/codeSnippets";

export default function InstallSection() {
  return (
    <div className="flex-1">
      <section className="px-6 md:px-11 py-14 bg-gradient-to-r from-[#E4F1FF] via-[#FFEAD2B8] to-[#FFFFFF00]">
        <h1 className="text-3xl md:text-4xl font-bold">Installation</h1>
      </section>
      <section id="overview" className="mb-6 px-6 md:px-11 pt-12 text-base">
        <p className="text-lg mb-4">
          While the Nudge Patterns Library focuses on documenting nudges, the
          nudge UI components described below each nudge pattern can be
          installed via the{" "}
          <Link
            className="text-customDarkerBlue"
            href="https://www.npmjs.com/package/nudge-components-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            nudge-components-library
          </Link>
          &nbsp;npm package. They are a part of the Nudge Components Library and
          can be used directly in React applications through a simple setup
          process.
        </p>
      </section>
      <div className="px-6 md:px-11 py-12 mb-6 md:mb-10 lg:mb-12">
        <section id="step1" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.step1.title}
          </h2>
          <ReactMarkdown>{textContent.step1.content}</ReactMarkdown>
          <div className="rounded-2xl shadow-md border border-customLightBlue mt-6">
            <CodeContainer codeSnippet={step1Snippet} />
          </div>
        </section>
        <section id="step2" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.step2.title}
          </h2>
          <ReactMarkdown>{textContent.step2.content}</ReactMarkdown>
          <div className="rounded-2xl shadow-md border border-customLightBlue mt-6">
            <CodeContainer codeSnippet={step2Snippet} />
          </div>
          <p className="mt-6 mb-6">{textContent.step2.extra}</p>
          <div className="rounded-2xl shadow-md border border-customLightBlue">
            <CodeContainer codeSnippet={step3Snippet} />
          </div>
        </section>
        <section id="step3" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.step3.title}
          </h2>
          <p className="mb-6">{textContent.step3.content}</p>
          <div className="rounded-2xl shadow-md border border-customLightBlue">
            <CodeContainer codeSnippet={step4Snippet} />
          </div>
        </section>
        <section id="scenarios" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.scenarios.title}
          </h2>
          <ReactMarkdown>{textContent.scenarios.content}</ReactMarkdown>
          <ul className="space-y-2.5 my-4">
            <ListItem type="checked">
              <span className="font-bold">Static:</span> Displaying a predefined
              message.
            </ListItem>
            <ListItem type="checked">
              <span className="font-bold">Dynamic:</span> Responding to user
              input or interaction.
            </ListItem>
            <ListItem type="checked">
              <span className="font-bold">Adaptive:</span> Adjusting based on
              stored preferences, session data, or other context.
            </ListItem>
          </ul>
          <p>{textContent.scenarios.extra}</p>
        </section>
        <section id="theming" className="scroll-mt-64">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.theming.title}
          </h2>
          <p className="mb-6">
            Nudge UI components use a standard theme but can be customized using
            a <code style={{ fontSize: "1rem" }}>ThemeProvider</code>. Custom
            themes allow to override colors, borders, spacing, hover effects,
            and other style tokens while preserving the default structure.
          </p>
          <p className="mb-6">
            The example below customizes the Text Box nudge UI component by
            changing the background color of the{" "}
            <code style={{ fontSize: "1rem" }}>nudgeText</code> and modifying
            the hover border styling. These overrides integrate with the default
            theme, eliminating the need to modify the Text Box directly.
          </p>
          <div className="rounded-2xl shadow-md border border-customLightBlue">
            <CodeContainer codeSnippet={themingSnippet} />
          </div>
        </section>
      </div>
    </div>
  );
}
