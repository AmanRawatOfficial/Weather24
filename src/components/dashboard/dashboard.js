import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setWeatherData } from "../../redux/weatherSlice";
import Aqi from "./Aqi";
import Styles from "./Dashboard.module.css";
import Weather from "./Weather";

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
            fetch(
                `https://api.weatherbit.io/v2.0/current?lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=db73e48c3eea4c5c8ae4b44ef77dfe46`
            )
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setWeatherData(data));
                })
                .catch((err) => console.error(err));
        });
    },[dispatch]);

    return (
        <main className={`${Styles.dashboard} ${darkmodeCheck}`}>
            <Weather
                temp={weatherInfo[0].temp}
                desc={weatherInfo[0].weather.description}
            />
            <Aqi aqi={weatherInfo[0].aqi}/>
        </main>
    );
}
export default Dashboard;
