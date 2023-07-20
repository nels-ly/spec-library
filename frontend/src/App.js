import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// importing all pages 
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import SignUpPage from "./pages/SignUpPage";
import CoursePage from "./pages/CoursePage";

// define paths 
const ROOT = "/";  // Login page
const DASHBOARD  = "/dashboard";
const SIGNUP = "/signup";
const COURSE_PAGE = "/course";


export let LoggedIn = false;
export let profile = null;

export const setLoggedIn = (loggedIn) => {
    LoggedIn = loggedIn;
}

export const setProfile = (_profile) => {
    profile = _profile;
}

export default function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path={ROOT} element={<LoginPage />} />
                <Route path={DASHBOARD} element={<DashBoard />} />
                <Route path={SIGNUP} element={<SignUpPage />} />
                <Route path={COURSE_PAGE} element={<CoursePage/>}/>
            </Routes>
        </Router>
        </>
    )

}
