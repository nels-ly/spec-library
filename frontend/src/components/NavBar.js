import React from "react";
import "./NavBar.css";

export default function NavBar(user_role = ""){
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

    return (
        <div className="nav-flex">
            <img className="nav-logo" src={process.env.PUBLIC_URL+"/Spectrum Logo.png"} alt="Spectrum Logo">
            </img>
            <div className="nav-options">
                {nav_options.map((option, index) => (
                    <h4 key={index}>{option}</h4>
                ))}
            </div>
            {user_role === "" && (
                <img src=""></img>
            )}
        </div>
        
    )
}