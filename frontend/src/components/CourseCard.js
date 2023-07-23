import React from "react";
import "./CourseCard.css";

export default function CourseCard({imgSrc, course_title}){
    return (
        <div className="card">
            <img src={imgSrc} alt="Course">
            </img>
            <div className="container">
                <p className="courseTitle">{course_title}</p>
            </div>
        </div>
        
    )
}