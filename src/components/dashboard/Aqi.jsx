import React from "react";

import "./Aqi.css";
import DashboardComponent from "../../ui/DashboardComponent";

function Weather() {
    return (
        <DashboardComponent
            heading="Air Quality"
            description="What's air quality"
            dataOne="220"
            dataTwo="AQI"
        >
            <div className="aqi-container">
                    <p>Unhealthy</p>
            </div>
        </DashboardComponent>
    );
}

export default Weather;
