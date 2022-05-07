import React from "react";

import "./Weather.css";
import DashboardComponent from "../../ui/DashboardComponent";

function Weather() {
    return (
        <DashboardComponent heading="Weather" description="What's the weather">
            <div>
                <div>
                    <h3>Pressure</h3>
                    <p>800mb</p>
                </div>
                <div>
                    <h3>Visibility</h3>
                    <p>800mb</p>
                </div>
                <div>
                    <h3>Humidity</h3>
                    <p>800mb</p>
                </div>
            </div>
        </DashboardComponent>
    );
}

export default Weather;
