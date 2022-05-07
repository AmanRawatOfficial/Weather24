import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeather } from "../Redux/weatherSlice";

import "./Welcome.css";

function Welcome() {

    const dispatch = useDispatch();
    useSelector((state) => {
        console.log(state.weather.weatherData)
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (location) {
            // console.log(location.coords.latitude, location.coords.longitude);

            // Data fetching for current weather stats
            fetch(
                `https://api.weatherbit.io/v2.0/current?lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=db73e48c3eea4c5c8ae4b44ef77dfe46`
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log("Current Weather", data)
                    dispatch(setWeather(data))
                })
                .catch((err) => console.error(err));
        })
    }, [dispatch])

    return (
        <div className="welcome">
            <h1 className="welcome-text">
                Welcome <br /> To <br /> Weather 24
            </h1>
        </div>
    );
}

export default Welcome;
