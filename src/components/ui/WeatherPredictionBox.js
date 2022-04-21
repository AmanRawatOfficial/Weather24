import Styles from "./WeatherPredictionBox.module.css";

function WeatherPredictionBox() {
    return (
        <>
            <div className={Styles.weather_prediction_primary}>
                <img src=""  alt="weather icon"></img>
                <h5>January</h5>
                <p>Cloudy</p>
            </div>
            <div className={Styles.weather_prediction_secondary}>
                <p>27°C / 16°C</p>
            </div>
        </>
    );
}

export default WeatherPredictionBox;
