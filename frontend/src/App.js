import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// importing all pages 
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

// defining endings 
const ROOT = "/";  // Login page
const LANDING  = "/dashboard";

export let LoggedIn = true;

export default function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path={ROOT} element={<LoginPage />} />
                <Route path={LANDING} element={<LandingPage />} />

            </Routes>
        </Router>
        </>
    )

}
