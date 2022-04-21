import WeatherPredictionBox from "../../ui/WeatherPredictionBox";
import Styles from "./WeatherPrediction.module.css";

function WeatherPrediction() {
    return (
        <div className={Styles.weather_prediction}>
            <div className={Styles.weather_prediction_box}>
                <WeatherPredictionBox />
            </div>
            <div className={Styles.weather_prediction_box}>
                <WeatherPredictionBox />
            </div>
            <div className={Styles.weather_prediction_box}>
                <WeatherPredictionBox />
            </div>
        </div>
    );
}

export default WeatherPrediction;
