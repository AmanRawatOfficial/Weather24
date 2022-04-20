import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setWeatherData } from "../../redux/weatherSlice";
import { setWeatherHourData } from "../../redux/weatherHourSlice";
import Aqi from "./Aqi";
import Styles from "./Dashboard.module.css";
import Weather from "./Weather";
import WeatherHours from "./WeatherHours";
import WeatherTommorow from "./WeatherTommorow";
import { setWeatherDailyData } from "../../redux/weatherDailySlice";
import Sidebar from "./sidebar/Sidebar";

function Dashboard() {
    // Darkmode toggling
    const isDarkmodeOn = useSelector((state) => state.darkmode.isDark);
    const darkmodeCheck = isDarkmodeOn ? Styles.dashboard_dark : "";
    // Api logic
    const dispatch = useDispatch();
    const weatherInfo = useSelector((state) => state.weather.weatherData);

    // https request
    useEffect(() => {
        // Getting Latitude and longitute value using geolocation api (inbuilt-browser)
        navigator.geolocation.getCurrentPosition(function (location) {
            // console.log(location.coords.latitude, location.coords.longitude);

            // Data fetching for current weather stats
            fetch(
                `https://api.weatherbit.io/v2.0/current?lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=db73e48c3eea4c5c8ae4b44ef77dfe46`
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log("Current Weather", data)
                    dispatch(setWeatherData(data));
                })
                .catch((err) => console.error(err));

            // Data fetching for next 3 hours weather forecast
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=9fa2c0491f3eeae40b6bb15320142ebf`
            )
                .then((hourRes) => hourRes.json())
                .then((hourData) => {
                    dispatch(setWeatherHourData(hourData));
                })
                .catch((hourErr) => console.error(hourErr));

            // Data fetching for Daily weather forecast
            fetch(
                `https://api.weatherbit.io/v2.0/forecast/daily?lat=${location.coords.latitude}&lon=${location.coords.longitude}&days=5&key=db73e48c3eea4c5c8ae4b44ef77dfe46`
            )
                .then((dailyRes) => dailyRes.json())
                .then((dailyRes) => {
                    dispatch(setWeatherDailyData(dailyRes))
                })
                .catch((dailyErr) => console.error(dailyErr));
        });
    }, [dispatch]);

    return (
        <main className={`${Styles.dashboard} ${darkmodeCheck}`}>
            <div className={Styles.dashboard_container}>
                <div className={Styles.dashboard_first_row}>
                    <Weather
                        temp={weatherInfo[0].temp}
                        desc={weatherInfo[0].weather.description}
                    />
                    <Aqi aqi={weatherInfo[0].aqi} />
                </div>
                <div className={Styles.dashboard_second_row}>
                    <WeatherHours />
                    <WeatherTommorow />
                </div>
            </div>
            <Sidebar />
        </main>
    );
}
export default Dashboard;
