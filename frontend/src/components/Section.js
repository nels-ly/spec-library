import React, { useState } from "react";
import "./Section.css";
import LessonCard from "./LessonCard";

export default function Section(props) {
  const { section } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const renderLessons =  (lessons) => {
    return lessons.map((lesson, index) =>(
      <LessonCard key={index} lesson={lesson}></LessonCard>
    ));
  }

  return (
    <>
      <button
        type="button"
        className={`section ${isExpanded ? "active" : ""}`}
        onClick={toggleSection}
      >
        <div className="flex-cont">
          {section.title}
          <img
            src={process.env.PUBLIC_URL+"/fi-rr-angle-down.svg"}
            alt="Section Icon"
            className={`section-icon ${isExpanded ? "upward" : "downward"}`}
          />
        </div>
        <div className="lesson-count">
          {section.lessons.length} Lessons
        </div>
      </button>
      <div className={`section-content ${isExpanded ? "expanded" : ""}`}>
        {renderLessons(section.lessons)}
      </div>
    </>
  );
}
