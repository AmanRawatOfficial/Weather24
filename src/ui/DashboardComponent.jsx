import React from "react";

import "./DashboardComponent.css";

function DashboardComponent(props) {
    return (
        <div className="container">
            <div className="primary">
                <div className="primary-icon">
                    <i className="bx bx-cloud" />
                </div>
                <div>
                    <h2>{props.heading}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="data-container">
                <div className="data">
                    <p className="data-temp">{props.dataOne}</p>
                    <p className="data-desc">{props.dataTwo}</p>
                </div>
                <p>Partly Cloudy</p>
            </div>
            {props.children}
        </div>
    );
}

export default DashboardComponent;
