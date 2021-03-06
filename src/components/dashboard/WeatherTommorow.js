import { useSelector } from "react-redux";
import Styles from "./WeatherTommorow.module.css";

function WeatherTommorow() {
    const weatherDaily = useSelector(
        (state) => state.weatherDaily.weatherDailyData
    );
    const weathericon = weatherDaily.data[1].weather.icon;

    return (
        <div className={Styles.weather_tommorow}>
            <div className={Styles.weather_tommorow_container}>
                <h4 className={Styles.weather_tommorow_heading}>Tommorow</h4>

                <img
                    src={require(`../../assets/icons/${weathericon}.png`)}
                    className={Styles.weather_tommorow_img}
                    alt="weather icon"
                ></img>
                <p className={Styles.weather_tommorow_temp}>
                    {Math.round(weatherDaily.data[1].temp)}°C
                </p>

                <p className={Styles.weather_tommorow_desc}>
                    {weatherDaily.data[1].weather.description}
                </p>
            </div>
        </div>
    );
}

export default WeatherTommorow;
