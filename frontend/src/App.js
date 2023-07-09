import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// importing all pages 
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import CoursePage from "./pages/CoursePage";

// define paths 
const ROOT = "/";  // Login page
const LANDING  = "/dashboard";
const SIGNUP = "/signup";
const COURSE_PAGE = "/course";

export let LoggedIn = true;

export default function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path={ROOT} element={<LoginPage />} />
                <Route path={LANDING} element={<LandingPage />} />
                <Route path={SIGNUP} element={<SignUpPage />} />
                <Route path={COURSE_PAGE} element={<CoursePage/>}/>
            </Routes>
        </Router>
        </>
    )

}
