import React from "react";
import "./NavBar.css";
import AccountDropDown from "./AccountDropDown";

export default function NavBar({user_role = ""}){
    const nav_options = [];
    if (user_role == "tutor"){
        nav_options.push("Dashboard");
        nav_options.push("Login to MySpectrum")
    } else if (user_role == "student") {
        nav_options.push("Dashboard") 
    } else if (user_role == "admin") {
        nav_options.push("Dashboard");
        nav_options.push("Manage Courses");
        nav_options.push("Manage Users")
    }
    // else user_role == "" means user is not logged in

    return (
        <>
        <div className="nav-flex">
            <img className="nav-logo" src={process.env.PUBLIC_URL+"/Spectrum Logo.png"} alt="Spectrum Logo">
            </img>

            {nav_options.map((option, index) => (
                <div className="nav-options" key={index}>{option}</div>
            ))}
            {user_role !== "" && (
                <AccountDropDown></AccountDropDown> 
            )}
        </div>
        
        <br></br>
        <br></br>
        </>
    )
        
}
