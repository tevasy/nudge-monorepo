import React, { useState, useEffect } from "react";
import { Rating, DropdownMenu } from "nudge-library";

function AdaptiveRating() {
  const [userExperience, setUserExperience] = useState("intermediate");
  const [userRating, setUserRating] = useState(0);
  const [adaptiveNudgeText, setAdaptiveNudgeText] = useState("");

  const experienceOptions = [
    {
      label: "Beginner",
      value: "beginner",
    },
    {
      label: "Intermediate",
      value: "intermediate",
    },
    {
      label: "Advanced",
      value: "advanced",
    },
  ];

  useEffect(() => {
    const fetchNudgeText = () => {
      switch (userExperience) {
        case "beginner":
          return "85% of beginners value clear documentation!";
        case "intermediate":
          return "75% of intermediate developers rate this project highly!";
        case "advanced":
          return "90% of experts endorse its code quality!";
        default:
          return "See how your peers are rating this project!";
      }
    };

    const timeoutId = setTimeout(() => {
      setAdaptiveNudgeText(fetchNudgeText());
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [userExperience]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <DropdownMenu
        dropdownLabel="Select the experience level:"
        id="experienceDropdown"
        ariaLabel="experinceDropdown"
        options={userExperience ? experienceOptions : []}
        selected={userExperience}
        onChange={(value) => setUserExperience(value)}
        placeholder="Select the experience level"
      />
      <Rating
        ratingLabel="Rating of the project:"
        defaultRating={userRating}
        max={5}
        onChange={(newRating) => setUserRating(newRating)}
        nudgeText={adaptiveNudgeText}
        nudgePosition="bottom"
        renderNudge={(rating) => (
          <div>
            {adaptiveNudgeText} {rating > 0 && <span>(Rating: {rating})</span>}
          </div>
        )}
      />

      <p style={{ fontSize: "0.875rem" }}>
        This adaptive rating component personalizes its the nudge text based on
        the user&apos;s experience level. The dropdown is included for
        demonstration purposes. In a real-world implementation, the experience
        level would be inferred from user profile data or activity history.
      </p>
    </div>
  );
}

export default AdaptiveRating;
