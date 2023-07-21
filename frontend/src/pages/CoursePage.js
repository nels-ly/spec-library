import {React} from "react";
import "./CoursePage.css"
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import { useLocation } from "react-router-dom";
// Course Page contains all the lessons 

class DemoSection{
    constructor(title, lessons) {
        this.title = title;
        this.lessons = lessons;
    }
}

class Lesson{
    constructor(lesson_title, lesson_pdf){
        this.lesson_title = lesson_title;
        this.lesson_pdf = lesson_pdf;
    }
}


export default function CoursePage() {
    const location = useLocation();
    //  passing user and course objects from Dashboard
    const {user, course} = location.state || {}
    
    const lessons = [];
    for (let i = 1; i < 11; i++) {
        const lesson_title = "Week "+ i;
        const lesson_pdf = process.env.PUBLIC_URL + "/Spectrum Logo.png";
        lessons.push(new Lesson(lesson_title, lesson_pdf));
    }

    const course_sections = [];
    for (let i=1; i<13; i++){
        const title1 = "Grade " + i + " English Term 1";
        const title2 = "Grade " + i + " Mathematics Term 1";
        course_sections.push(new DemoSection(title1, lessons));
        course_sections.push(new DemoSection(title2, lessons));
    }

    const renderListOfSections = (sections) => {
        return sections.map((section, index) => (
            <>
            <Section key={index} section={section}></Section>
            </>  
        ));
    }
    

    return(
        <>
            <NavBar user_role="student"></NavBar>

            <div className="lesson-list-grid"> <div className="align-grid-items">
                <SearchBar/>
                <br></br>

                {renderListOfSections(course_sections)}
            </div></div>

        </>
    )
}