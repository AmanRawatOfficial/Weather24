import WeatherPredictionBox from "../../ui/WeatherPredictionBox";
import Styles from "./WeatherPrediction.module.css";
import { useSelector } from "react-redux";

function WeatherPrediction() {
    const weatherData = useSelector(
        (state) => state.weatherDaily.weatherDailyData
    );
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const d = new Date();
    let currentMonth = months[d.getMonth()];
    let currentDate = d.getDate();
    console.log("From Weather Prediction", weatherData);

    function tempRounder(temp) {
        return Math.round(temp);
    }

    return (
        <div className={Styles.weather_prediction}>
            <div className={Styles.weather_prediction_box}>
                <WeatherPredictionBox
                    month={currentMonth}
                    date={currentDate + 2}
                    maxTemp={tempRounder(weatherData.data[2].max_temp)}
                    minTemp={tempRounder(weatherData.data[2].min_temp)}
                    icon={weatherData.data[2].weather.icon}
                    desc={weatherData.data[2].weather.description}
                />
            </div>
            <div className={Styles.weather_prediction_box}>
                <WeatherPredictionBox
                    month={currentMonth}
                    date={currentDate + 3}
                    maxTemp={tempRounder(weatherData.data[3].max_temp)}
                    minTemp={tempRounder(weatherData.data[3].min_temp)}
                    icon={weatherData.data[3].weather.icon}
                    desc={weatherData.data[3].weather.description}
                />
            </div>
            <div className={Styles.weather_prediction_box}>
                <WeatherPredictionBox
                    month={currentMonth}
                    date={currentDate + 4}
                    maxTemp={tempRounder(weatherData.data[4].max_temp)}
                    minTemp={tempRounder(weatherData.data[4].min_temp)}
                    icon={weatherData.data[4].weather.icon}
                    desc={weatherData.data[4].weather.description}
                />
            </div>
        </div>
    );
}

export default WeatherPrediction;
