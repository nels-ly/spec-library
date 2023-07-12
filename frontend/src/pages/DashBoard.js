import {React} from "react";
import "./DashBoard.css";
import CoursePage from "./CoursePage";
import CourseCard from "../components/CourseCard"


export default function DashBoard(){

    // get Course Details
    const tutor_course = {
        course_id: 1,
        course_title: "Tutor Resource Library",
        course_desc: "The Term 3 library for Tutors",
        course_img: process.env.PUBLIC_URL+"/Spectrum Logo.png",
        date_created: new Date()
    };
    


    return (
        <>
        <div className="landing-page-grid">
            <div className="col-1">
                <h1 className="h1-titles">Courses</h1>
                <div className="flex-div">
                    <CourseCard imgSrc={tutor_course.course_img} course_title={tutor_course.course_title}></CourseCard>
                </div>
            </div>
            <div className="col-2">
                <h1 className="h1-titles">This Weeks Lessons</h1>
            </div>
            <div className="col-1">
                <h1 className="h1-titles">Classes</h1>
                <div className="flex-div">
                    <CourseCard imgSrc={tutor_course.course_img} course_title="Year 9 English"></CourseCard>
                    <CourseCard imgSrc={tutor_course.course_img} course_title="Year 10 Mathematics"></CourseCard>
                </div>
            </div>
            <div className="col-2">
                <h1 className="h1-titles">Recently Visited</h1>
            </div>
            
        </div>
        
        
        
        </>

    )
}

