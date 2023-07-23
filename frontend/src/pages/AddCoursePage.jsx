import {React} from "react";
import "./DashBoard.css";
import CourseCard from "../components/CourseCard"
import NavBar from "../components/NavBar";
import { Link, useLocation} from "react-router-dom";
import {LoggedIn, profile} from "../App";
import {useState, useDispatch, useSelector} from "react-redux";
import "./AddCoursePage.css";


export default function AddCoursePage() {

    const courseUpload = (event) => {
        event.preventDefault();

        const courseName = event.target.courseName.value;
        const coursePhoto = event.target.coursePhoto.value;

        const courseDetails = {
            courseName: courseName,
            coursePhoto: coursePhoto
        }
    }

    return (
        <> 
        <NavBar></NavBar>
        <div className="main-div">
        <h1 id="add-course-header">Enter Course Details</h1>
        <br></br>
        <form onSubmit={courseUpload}>
        <div className="grid-course-field">
            <label className="h2-headers" for="courseName">Course Name</label>
            <input required id="courseName" type="text" className="course-input-field" placeholder="Enter Course Name"></input>
            <label className="h2-headers" for="coursePhoto">Course Image</label>
            <input required id="coursePhoto" type="file" className="course-photo-input"></input>
            <br></br>
            <button type="submit" className="uploadBtn">UPLOAD COURSE</button>
        </div>
        
        </form>

        </div>
        
        </>)


}