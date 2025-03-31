import React, { useState } from "react";
import { Badge } from "nudge-library";

const AdaptiveBadgeExample = () => {
  const [userProfile, setUserProfile] = useState({
    skillLevel: "Intermediate",
    favoriteTopic: "React",
    coursesCompleted: 2,
    recentActivity: "",
  });

  // Function to determine the nudge message based on user progress.
  const dynamicNudgeMessage = (): string => {
    if (userProfile.recentActivity) {
      return userProfile.recentActivity;
    }
    if (userProfile.coursesCompleted < 3) {
      return "Keep going! 80% of learners have completed more than 3 courses.";
    }
    if (userProfile.coursesCompleted < 7) {
      return `Great progress! As an ${userProfile.skillLevel} learner, consider exploring advanced ${userProfile.favoriteTopic} courses, endorsed by 60% of learners.`;
    }
    return "Outstanding performance! Join the community challenges to put new skills to the test.";
  };

  // Function to simulate course completion.
  const completeCourse = () => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      coursesCompleted: prevProfile.coursesCompleted + 1,
      recentActivity: "The new course is completed!",
    }));

    setTimeout(() => {
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        recentActivity: "",
      }));
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontWeight: "500", marginBottom: "1.5rem" }}>
        Click to complete a course:
      </div>
      <Badge
        label="Courses Completed"
        count={userProfile.coursesCompleted}
        renderNudge={() => <p>{dynamicNudgeMessage()}</p>}
        nudgePosition="bottom"
      />
      <button
        onClick={completeCourse}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Complete Course
      </button>
      <p style={{ fontSize: "0.875rem", marginTop: "1.5rem" }}>
        This adaptive badge updates its nudge text based on the user's profile
        data, such as skill level, favorite topics, and learning progress. In
        real-world scenarios, this information would be derived from the
        learner's activity history and profile metadata. Clicking the button
        triggers a real-time update in the badge count and the nudge message.
      </p>
    </div>
  );
};

export default AdaptiveBadgeExample;
