import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Location from "./components/location/Location";
import Calendar from "./components/calendar/Calendar"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/location" element={<Location />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </>
    );
}

export default App;
