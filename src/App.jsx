import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Location from "./components/location/Location"
import Calendar from "./components/calendar/Calendar"

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route to="/dashboard" element={<Dashboard />} />
                <Route to="/location" element={<Location />} />
                <Route to="/calendar" element={<Calendar />} />
            </Routes>
        </>
    );
};

export default App;
