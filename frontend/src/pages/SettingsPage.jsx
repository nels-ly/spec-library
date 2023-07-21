import {React} from "react";
import "./DashBoard.css";
import CoursePage from "./CoursePage";
import CourseCard from "../components/CourseCard"
import NavBar from "../components/NavBar";
import { Link, useLocation} from "react-router-dom";

export default function SettingsPage() {
    const location = useLocation();
    const { user_role } = location.state || { user_role: "tutor" };

    return (<>
         <NavBar user_role={user_role}></NavBar>
    
    </>)


}