import { useSelector } from "react-redux";
import Styles from "./WeatherHours.module.css"

function WeatherHours() {
    const weatherHourData = useSelector(
        (state) => state.weatherHour.weatherHourData
    );

    console.log("from weatherC", weatherHourData);
    const arrayList = weatherHourData.list.slice(0,4).map(list => <p>{list.main.temp}</p>)

    return (
        <div className={Styles.hour_weather}>
            <div className={Styles.hour_weather_header}>
                <h3 className={Styles.hour_weather_heading}>How's the temperature<br></br> in next 3 hours?</h3>
                {arrayList}
            </div>
        </div>
    );
}

export default WeatherHours;
