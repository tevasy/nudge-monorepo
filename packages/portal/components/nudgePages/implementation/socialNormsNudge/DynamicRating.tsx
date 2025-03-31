import React, { useState } from "react";
import { Rating } from "nudge-library";

export default function DynamicRating() {
  const [courseRating, setCourseRating] = useState<number>(4);
  const [showAfterRatingHint, setShowAfterRatingHint] =
    useState<boolean>(false);

  const handleRatingChange = (newRating: number) => {
    setCourseRating(newRating);
  };

  const renderCustomNudge = (rating: number) => {
    const completionText =
      rating >= 4
        ? "Highly rated. Over 2,300 students completed this course!"
        : rating >= 2
        ? "Popular. Many learners found this course useful."
        : "This course is still gathering reviews.";
    return <span style={{ fontSize: "0.9rem" }}>{completionText}</span>;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p style={{ fontWeight: "500", marginBottom: "1.5rem" }}>
        Select a rating for a dynamic feedback:
      </p>

      <Rating
        rating={courseRating}
        max={5}
        id="courseRating"
        ariaLabel="CourseRating"
        onChange={handleRatingChange}
        nudgeVisible={true}
        nudgePosition="bottom"
        renderNudge={renderCustomNudge}
        onFocus={() => setShowAfterRatingHint(false)}
        onBlur={() => setShowAfterRatingHint(true)}
      />

      <div
        style={{
          color: "#555",
          opacity: showAfterRatingHint ? 1 : 0,
          maxHeight: showAfterRatingHint ? "50px" : "0px",
          overflow: "hidden",
          transition: "opacity 0.5s ease-in-out, max-height 0.5s ease-in-out",
          marginTop: "0.9rem",
        }}
      >
        The rating can be updated anytime.
      </div>

      <p style={{ fontSize: "0.875rem", marginTop: "1.5rem" }}>
        The nudge text updates dynamically based on the selected rating to
        highlight social proof. After component loses focus, a hint appears.
        When the rating component gains focus by selecting a star, the helper
        message is hidden.
      </p>
    </div>
  );
}
