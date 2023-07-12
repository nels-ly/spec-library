import React, { useState } from "react";
import "./Section.css";

export default function Section(props) {
  const { section } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button
        type="button"
        className={`section ${isExpanded ? "active" : ""}`}
        onClick={toggleSection}
      >
        {section.title}
      </button>
      <div className={`section-content ${isExpanded ? "expanded" : ""}`}>
        <p>Lorem ipsum...</p>
      </div>
    </>
  );
}
