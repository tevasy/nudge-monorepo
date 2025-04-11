import React, { useState } from "react";
import { Rating } from "nudge-components-library";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Rating
        ratingLabel="Select a rating for a dynamic feedback:"
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

      <div style={{ margin: "0.3rem 0" }}>
        <div
          style={{
            color: "#555",
            overflow: "hidden",
            opacity: showAfterRatingHint ? 1 : 0,
            margin: showAfterRatingHint ? "1.5rem 0" : 0,
            transition: "opacity 0.5s ease-in-out, margin 0.5s ease-in-out",
          }}
        >
          The rating can be updated anytime.
        </div>
      </div>

      <p style={{ fontSize: "0.875rem", margin: 0 }}>
        The nudge text updates dynamically based on the selected rating to
        highlight social norms. After the component loses focus, a hint appears.
        When the rating component gains focus by selecting a star, the helper
        message is hidden.
      </p>
    </div>
  );
}
