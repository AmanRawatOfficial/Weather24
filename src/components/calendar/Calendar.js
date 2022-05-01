import React from "react";
import { useSelector } from "react-redux"

import Styles from "./Calendar.module.css"

function Calendar() {
    

    const weatherDaily = useSelector(
        (state) => state.weatherDaily.weatherDailyData
    );
    let unique = 0;
    const weathericon = weatherDaily.data[4].weather.icon;
    if (weatherDaily?.data) {
        
    }
    const calendarBox = weatherDaily.data.map((item) => {
        unique++
        return (
            <div key={unique} className={Styles.calendar_box}>
                <p className={Styles.calendar_date}>1 May</p>
                <div className={Styles.calendar_box_data}>
                    <img
                        src={require(`../../assets/icons/${weathericon}.png`)}
                        className={Styles.weather_img}
                        alt="weather icon"
                    ></img>
                    <h3>41°C / 31°C</h3>
                </div>
                <p className={Styles.calendar_box_desc}>scattered clouds</p>
            </div>
        );
    })
    return (
        <div className={Styles.calendar_box_container}>
            {calendarBox}
        </div>
    );
}

export default Calendar;
