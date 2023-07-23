import {React, useEffect, useState} from "react";
import "./DashBoard.css";
import CoursePage from "./CoursePage";
import CourseCard from "../components/CourseCard"
import NavBar from "../components/NavBar";
import { Link, useLocation} from "react-router-dom";
import Cookies from "js-cookie";

export default function SettingsPage() {
    const location = useLocation();
    const [user, setUser ] = useState(false);

    useEffect(()=>{
        setUser(JSON.parse(Cookies.get("ple")))

    }, []) 

    console.log(user)

    return (
    <>
         <NavBar user_role={user.role} username={user.username}></NavBar>

        <h1 className="profile-title">Account Details</h1>

    </>)


}