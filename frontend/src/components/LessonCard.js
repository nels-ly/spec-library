import React, { useState } from "react";
import "./LessonCard.css";

export default function LessonCard(props){
    // lesson for now just contains lesson tile (lessons = array of lesson titles)
    const { lesson } = props;

    return(
        <>
        <div className="lesson-card">
        <img className="book"></img>
        {lesson}
        
        </div>
        </>
    )
}