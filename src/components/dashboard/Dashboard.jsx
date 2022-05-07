import React from "react";

import "./Dashboard.css";
import Weather from "./Weather";
import Aqi from "./Aqi"

function Dashboard() {
    return (
        <div className="dashboard">
            <Weather />
            <Aqi />
        </div>
    );
}

export default Dashboard;
