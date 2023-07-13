import React, { useState } from "react";
import "./LessonCard.css";
import { Link } from "react-router-dom";

export default function LessonCard(props){
    // lesson for now just contains lesson tile (lessons = array of lesson titles)
    // props = {lesson_object, user_object}
    const { lesson } = props;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <>
        <Link className="lesson-card" 
            to={{
                pathname: "/lesson",
                state: {
                    lesson_object: lesson,
                    user_object: "placeholder"
                }
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? 
            (<img className="book-icon" src={process.env.PUBLIC_URL+"/fi-sr-book-alt.svg"}></img>)
            : 
            (<img className="book-icon" src={process.env.PUBLIC_URL+"/fi-rr-book-alt.svg"}></img>)
            }

            <div className="week-text">{lesson}</div>
        </Link>  
        </>
    )
}