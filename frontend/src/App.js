import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// importing all pages 
import LoginPage from "./pages/LoginPage";

// defining endings 
const ROOT = "/";  // Login page

export let LoggedIn = true;

export default function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path={ROOT} element={<LoginPage />} />
            </Routes>
        </Router>
        </>
    )

}
