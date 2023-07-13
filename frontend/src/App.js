import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// importing all pages 
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import SignUpPage from "./pages/SignUpPage";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";

// define paths 
const ROOT = "/";  // Login page
const DASHBOARD  = "/dashboard";
const SIGNUP = "/signup";
const COURSE_PAGE = "/course";
const LESSON_PAGE = "/lesson"

export let LoggedIn = true;

export default function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path={ROOT} element={<LoginPage />} />
                <Route path={DASHBOARD} element={<DashBoard />} />
                <Route path={SIGNUP} element={<SignUpPage />} />
                <Route path={COURSE_PAGE} element={<CoursePage/>}/>
                <Route path={LESSON_PAGE} element={<LessonPage/>}/>
            </Routes>
        </Router>
        </>
    )

}
