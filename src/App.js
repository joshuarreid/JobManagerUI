import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/util/Layout";
import RequireAuth from "./components/util/RequireAuth";
import TestPage from "./components/home/Test";


function App() {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* protected routes */}
            <Route element={<RequireAuth />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/test" element={<TestPage />}/>
            </Route>


            {/* catch all */}
            <Route path="/*" element={<Layout />} />
        </Routes>
    );
}

export default App;