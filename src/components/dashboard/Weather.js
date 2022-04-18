import Styles from "./Weather.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setWeatherData } from "../../redux/weatherSlice";

function Weather() {
    const currentTemp = useSelector((state) => state.weather.weatherData);
    const dispatch = useDispatch();

    // Weather Data Fetching
    useEffect(() => {
        // Getting Latitude and longitute value using geolocation api (inbuilt-browser)
        navigator.geolocation.getCurrentPosition(function (location) {
            fetch(
                `https://api.weatherbit.io/v2.0/current?lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=db73e48c3eea4c5c8ae4b44ef77dfe46`
            )
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setWeatherData(data));
                });
        });
    }, []);

    return (
        <div className={`${Styles.weather}`}>
            <div className={`${Styles.weather_heading}`}>
                <div className={`${Styles.weather_logo}`}>
                    <i class="bx bxs-cloud"></i>
                </div>
                <div>
                    <h4>Weather</h4>
                    <p>What's the weather.</p>
                </div>
            </div>
            <div className={`${Styles.weather_data}`}>
                <p className={`${Styles.weather_data_current}`}>
                    {`${currentTemp[0].temp}`}°C<span>{`${currentTemp[0].weather.description}`}</span>
                </p>
            </div>
        </div>
    );
}

export default Weather;
