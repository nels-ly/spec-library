import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

// importing all pages 
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import SignUpPage from "./pages/SignUpPage";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";
import SettingsPage from "./pages/SettingsPage";
import ManageCoursePage from "./pages/ManageCoursePage";
import AddCoursePage from "./pages/AddCoursePage";

// define paths 
const ROOT = "/";  // Login page
const DASHBOARD  = "/dashboard";
const SIGNUP = "/signup";
const COURSE_PAGE = "/course";
const LESSON_PAGE = "/lesson"
const SETTINGS = "/settings";
const MANAGE_COURSE = '/manage-course'
const ADD_COURSE = '/add-course';


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
                <Route path={ROOT} element={<LoginPage/>} />
                <Route path={DASHBOARD} element={<DashBoard />} />
                <Route path={SIGNUP} element={<SignUpPage />} />
                <Route path={COURSE_PAGE} element={<CoursePage/>}/>
                <Route path={LESSON_PAGE} element={<LessonPage/>}/>
                <Route path={SETTINGS} element={<SettingsPage/>}/>
                <Route path={MANAGE_COURSE} element={<ManageCoursePage/>}/>
                <Route path={ADD_COURSE} element = {<AddCoursePage/>}/>
            </Routes>
        </Router>
        </>
    )

}
