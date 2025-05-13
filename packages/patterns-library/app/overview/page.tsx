"use client";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import List from "../../components/nudgePages/List";
import ListItem from "../../components/nudgePages/ListItem";
import { textContent } from "./textContent";

export default function InstallSection() {
  return (
    <div className="flex-1">
      <section className="px-6 md:px-11 py-14 bg-gradient-to-r from-[#E4F1FF] via-[#FFEAD2B8] to-[#FFFFFF00]">
        <h1 className="text-3xl md:text-4xl font-bold">Overview</h1>
      </section>
      <section id="overview" className="mb-12 px-6 md:px-11 pt-12 text-base">
        <p className="text-lg mb-4">
          The <b>Nudge Patterns Library</b>&nbsp;is a documentation resource
          that supports the representation and implementation of digital nudges
          in user interfaces. It presents a collection of nudge patterns that
          describe the context of use of each nudge, its behavioral rationale,
          ethical and adaptability considerations. Each pattern is accompanied
          by examples of corresponding nudge UI components, which translate the
          patterns into practical implementations.
        </p>
        <p className="text-lg">
          These components are provided through the{" "}
          <b>Nudge Components Library</b>, a React-based npm package published
          under the name{" "}
          <Link
            className="text-customDarkerBlue"
            href="https://www.npmjs.com/package/nudge-components-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            nudge-components-library
          </Link>
          . The library offers nudge UI components specifically designed to
          support behavioral influence. Each component includes properties for
          adaptivity, allowing to incorporate personalization, trigger-based
          activation, and context-awareness.
        </p>
      </section>
      <div className="bg-gradient-to-r from-customLightLightOrange via-customLightLightOrange to-transparent px-6 md:px-11 py-12 md:mb-10 lg:mb-20">
        <section id="challenges" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.challenges.title}
          </h2>
          <ReactMarkdown>{textContent.challenges.content}</ReactMarkdown>
          <ul className="space-y-2.5 my-4">
            <ListItem type="checked">
              <span className="font-bold">
                Lack of Structured Documentation:
              </span>{" "}
              Information on digital nudging is scattered across academic
              studies, industry publications, and design practices with no
              unified resource. In addition, there is no common structure for
              documenting nudges. Descriptions are often inconsistent, omitting
              critical details such as behavioral mechanisms, usage contexts, or
              intended outcomes. This lack of structure makes it difficult to
              systematically discover, compare, and apply nudges.
            </ListItem>
            <ListItem type="checked">
              <span className="font-bold">Lack of Technical Support:</span> Even
              when designers and developers identify suitable nudges, they often
              lack technical resources to implement them in user interfaces.
              Existing UI components are typically optimized for usability and
              visual consistency, but they do not account for behavioral
              influence. As a result, implementing nudges often requires
              modifying general-purpose components or creating custom solutions
              from scratch. This increases technical complexity and reduces
              scalability and consistency.
            </ListItem>
            <ListItem type="checked">
              <span className="font-bold">Limited Ethical Guidance:</span>{" "}
              Existing nudging resources rarely provide guidance on how to
              create nudges in ethically responsible ways. As a result,
              designers and developers often lack clear standards for designing
              and implementing nudges that respect user autonomy and maintain
              transparency. This increases the risk of manipulative designs and
              inconsistent ethical practices.
            </ListItem>
            <ListItem type="checked">
              <span className="font-bold">
                Insufficient Support for Adaptability:
              </span>{" "}
              Most documented nudges assume static design and implementation.
              The resources describing them provide little guidance for adapting
              nudges to user behavior, preferences, or situational context,
              which may reduce their relevance in dynamic digital environments.
            </ListItem>
          </ul>
          <p>{textContent.challenges.extra}</p>
        </section>
        <section id="audience" className="scroll-mt-64 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.audience.title}
          </h2>
          <ReactMarkdown>{textContent.audience.content}</ReactMarkdown>
        </section>
        <section id="contents" className="scroll-mt-64">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {textContent.contents.title}
          </h2>
          <p>{textContent.contents.content}</p>
          <List items={textContent.contents.items} type="numbered" />
          <ReactMarkdown>{textContent.contents.extra}</ReactMarkdown>
        </section>
      </div>
    </div>
  );
}
