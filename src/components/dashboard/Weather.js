import DashboardComponent from "../ui/DashboardComponent";
import Styles from "./Weather.module.css";

function Weather(props) {
    return (
        <DashboardComponent>
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
                    {`${props.temp}`}°C
                    <span>{`${props.desc}`}</span>
                </p>
            </div>
        </DashboardComponent>
    );
}

export default Weather;
