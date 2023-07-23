import {React} from "react";
import "./DashBoard.css";
import CourseCard from "../components/CourseCard"
import NavBar from "../components/NavBar";
import { Link, useLocation} from "react-router-dom";
import {LoggedIn, profile} from "../App";
import {useState, useDispatch, useSelector} from "react-redux";
import "./AddCoursePage.css";


export default function AddCoursePage() {


    return (
        <> 
        <NavBar></NavBar>
        <h1 id="add-course-header">Enter Course Details</h1>
        
        </>)


}