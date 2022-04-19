import DashboardComponent from "../ui/DashboardComponent";
import Styles from "./Weather.module.css";
import { useSelector } from "react-redux"

function Weather() {
    // Getting state from redux to read data from
    const weatherData = useSelector(state => state.weather.weatherData)

    return (
        <DashboardComponent
            heading={"Weather"}
            icon={"bx bxs-cloud"}
            secondaryHeading={"What's the weather"}
        >
            <div className={`${Styles.weather_data}`}>
                <p className={`${Styles.weather_data_current}`}>
                    {`${weatherData[0].temp}`}°C
                    <span>{`${weatherData[0].weather.description}`}</span>
                </p>
            </div>
            <div className={`${Styles.weather_info}`}>
                <div className={`${Styles.weather_info_box}`}>
                    <p>Pressure</p>
                    <p>{`${Math.floor(weatherData[0].pres)}`}mb</p>
                </div>
                <div className={`${Styles.weather_info_box}`}>
                    <p>Visibility</p>
                    <p>{`${weatherData[0].vis}`}km</p>
                </div>
                <div className={`${Styles.weather_info_box}`}>
                    <p>Humadity</p>
                    <p>{`${weatherData[0].rh}`}%</p>
                </div>
            </div>
        </DashboardComponent>
    );
}

export default Weather;
