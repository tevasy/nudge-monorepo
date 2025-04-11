import React, { useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { Badge, ThemeProvider, defaultTheme } from "nudge-components-library";

const Icon = FiThumbsUp as React.ElementType;

const customTheme = {
  ...defaultTheme,
  badge: {
    ...defaultTheme.badge,
    nudgeText: {
      ...defaultTheme.badge.nudgeText,
      padding: "0",
    },
  },
};

export default function DynamicBadge() {
  const [endorsements, setEndorsements] = useState<number>(78);
  const [hasEndorsed, setHasEndorsed] = useState<boolean>(false);
  const [showEndorsedNudge, setShowEndorsedNudge] = useState<boolean>(true);

  const handleEndorse = () => {
    if (!hasEndorsed) {
      setEndorsements((prev) => prev + 1);
      setHasEndorsed(true);
      setShowEndorsedNudge(true);
      setTimeout(() => {
        setShowEndorsedNudge(false);
      }, 5000);
    }
  };

  const renderCustomNudge = ({ count }: { count?: number }) => {
    if (!count) return null;

    const fadeStyle: React.CSSProperties = {
      fontSize: "0.875rem",
      opacity: hasEndorsed && !showEndorsedNudge ? 0 : 1,
      maxHeight: hasEndorsed && !showEndorsedNudge ? 0 : "auto",
      padding: hasEndorsed && !showEndorsedNudge ? 0 : "8px 12px",
      overflow: "hidden",
      transition: "opacity 0.5s ease, max-height 0.5s ease, padding 0.5s ease",
    };

    if (hasEndorsed) {
      return <div style={fadeStyle}>You endorsed this document.</div>;
    }

    return (
      <div style={fadeStyle}>
        {count > 50
          ? "Widely endorsed! A favorite among collaborators."
          : count > 10
          ? "Trusted by many, a useful document to reuse."
          : "Just starting to get attention. Be one of the first to endorse it!"}
      </div>
    );
  };

  const nudgeVisible = true;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <ThemeProvider theme={customTheme}>
        <Badge
          id="strategy-doc-badge"
          badgeLabel="Endorse a shared document:"
          label="Endorsed"
          count={endorsements}
          icon={<Icon />}
          ariaLabel="Document endorsement badge"
          nudgeVisible={nudgeVisible}
          nudgePosition="bottom"
          renderNudge={renderCustomNudge}
        />
      </ThemeProvider>
      <button
        onClick={handleEndorse}
        disabled={hasEndorsed}
        className={hasEndorsed ? "button-popup disabled" : "button-popup"}
      >
        {hasEndorsed ? "Endorsed" : "Endorse this Document"}
      </button>

      <p style={{ fontSize: "0.875rem" }}>
        This badge shows how many collaborators have endorsed the document. A
        confirmation message appears for 5 seconds after endorsing, then
        disappears to reduce visual noise.
      </p>
    </div>
  );
}
