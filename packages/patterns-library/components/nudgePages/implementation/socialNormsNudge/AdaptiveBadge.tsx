import React, { useState } from "react";
import { Badge } from "nudge-components-library";

const AdaptiveBadge = () => {
  const [userProfile, setUserProfile] = useState({
    skillLevel: "Intermediate",
    favoriteTopic: "React",
    coursesCompleted: 2,
    recentActivity: "",
  });

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
        gap: "2rem",
      }}
    >
      <Badge
        badgeLabel="Click to complete a course:"
        label="Courses Completed"
        count={userProfile.coursesCompleted}
        renderNudge={() => <p>{dynamicNudgeMessage()}</p>}
        nudgePosition="bottom"
      />
      <button onClick={completeCourse} className="button-popup">
        Complete Course
      </button>
      <p style={{ fontSize: "0.875rem" }}>
        This adaptive badge updates its nudge text based on the user&apos;s
        profile data, such as skill level, favorite topics, and learning
        progress. In real-world scenarios, this information would be derived
        from the learner&apos;s activity history and profile metadata. Clicking
        the button triggers a real-time update in the badge count and the nudge
        message.
      </p>
    </div>
  );
};

export default AdaptiveBadge;
