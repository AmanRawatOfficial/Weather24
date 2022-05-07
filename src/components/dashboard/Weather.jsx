import React from "react";

import "./Weather.css";
import DashboardComponent from "../../ui/DashboardComponent";

function Weather() {
    return (
        <DashboardComponent
            heading="Weather"
            description="What's the weather"
            dataOne="22°C"
            dataTwo="Haze"
        >
            <div className="weather-container">
                <div className="weather-details">
                    <h3 className="weather-detail-heading">Pressure</h3>
                    <p className="weather-detail-data">800mb</p>
                </div>
                <div className="weather-details">
                    <h3 className="weather-detail-heading">Visibility</h3>
                    <p className="weather-detail-data">800mb</p>
                </div>
                <div className="weather-details">
                    <h3 className="weather-detail-heading">Humidity</h3>
                    <p className="weather-detail-data">800mb</p>
                </div>
            </div>
        </DashboardComponent>
    );
}

export default Weather;
