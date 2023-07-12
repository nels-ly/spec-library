import React from "react";
import "./CourseCard.css";

export default function CourseCard({imgSrc, course_title}){
    return (
        <div className="card">
            <img src={imgSrc} alt="Course">
            </img>
            <div className="container">
                <h4>{course_title}</h4>
            </div>
        </div>
        
    )
}