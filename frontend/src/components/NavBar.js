import React from "react";
import "./NavBar.css";
import AccountDropDown from "./AccountDropDown";
import {profile} from "../App";
import {NavLink} from "react-router-dom";

export default function NavBar({user_role = "student",  username = ""}){

    const nav_options = {};
    if (user_role === "tutor"){
        nav_options["Dashboard"] = "/dashboard";
        nav_options["Login to MySpectrum"] = "#";
    } else if (user_role === "student") {
        nav_options["Dashboard"] = "/dashboard";
    } else if (user_role === "admin") {
        nav_options["Dashboard"] = "/dashboard";
        nav_options["Manage Courses"] = "/manage-course";
        nav_options["Manage Users"] = "#";
    }
    

    console.log(Object.entries(nav_options));
 
    // else user_role == "" means user is not logged in

    return (
        <>
        <div className="nav-flex">
            <img className="nav-logo" src={process.env.PUBLIC_URL+"/Spectrum Logo.png"} alt="Spectrum Logo">
            </img>

            {Object.entries(nav_options).map((option, index) => (
                <NavLink className="nav-options" to={option[1]} key={index}>{option[0]}</NavLink>
            ))}
            {user_role !== "" && (
                <div className="account-img">
                <AccountDropDown username= {username}></AccountDropDown> 
                </div>
            )}
        </div>
        
        <br></br>
        <br></br>
        </>
    )
        
}
