import React from "react";
import { Routes, Route } from "react-router-dom";

// Local imports
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Location from "./components/location/Location";
import Calendar from "./components/calendar/Calendar";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/location" element={<Location />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="*" element={<h1>Page Not Found!</h1>} />
            </Routes>
        </div>
    );
};

export default App;
