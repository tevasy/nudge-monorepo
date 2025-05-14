import { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CodeContainerProps {
  codeSnippet: string;
}

export default function CodeContainer({ codeSnippet }: CodeContainerProps) {
  const [copied, setCopied] = useState(false);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-customLightLightLightBlue rounded-2xl relative">
      <div className="absolute top-4 right-6 z-8">
        <button
          onClick={copyToClipboard}
          className="bg-customLightLightBlue px-2 py-2 text-base text-customBlack rounded-md flex items-center gap-2 hover:bg-customLightBlue cursor-pointer transition shadow-md"
        >
          {copied ? (
            <FiCheck className="text-sm" strokeWidth={2} />
          ) : (
            <FiCopy className="text-sm" strokeWidth={2} />
          )}
        </button>
      </div>

      <div
        ref={codeContainerRef}
        className="max-h-80 overflow-auto pl-4 pr-16 relative rounded-lg"
      >
        <SyntaxHighlighter
          language="jsx"
          style={materialLight}
          wrapLongLines={false}
          customStyle={{
            backgroundColor: "transparent",
            fontSize: "13px",
            whiteSpace: "pre",
            wordBreak: "normal",
          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
