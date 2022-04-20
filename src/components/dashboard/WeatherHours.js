import { useSelector } from "react-redux";
import Styles from "./WeatherHours.module.css";

function WeatherHours() {
    const weatherHourData = useSelector(
        (state) => state.weatherHour.weatherHourData
    );

    function timeFormat(time) {
        let timeDescription = ""
        const hour = time.slice(11,13)
        if (hour <= 12) {
            timeDescription = " AM"
        } else if (hour > 12) {
            timeDescription = " PM"
        }
        let newTime = time.slice(11, 16)
        return newTime + timeDescription
    }

    console.log("from weatherC", weatherHourData);
    const arrayList = weatherHourData.list.slice(0, 4).map((list) => (
        <div className={Styles.hour_weather_data_item}>
            <div className={Styles.hour_weather_data_item_container}>
                <p className={Styles.hour_weather_data_item_temp}>{Math.round(list.main.temp)}°C</p>
                <div className={Styles.hour_weather_data_item_hm}>
                    <i className="bx bxs-droplet"></i>
                    <p>{list.main.humidity}%</p>
                </div>
            </div>
            <div className={Styles.hour_weather_data_item_time}>
                <p>{timeFormat(list.dt_txt)}</p>
            </div>
        </div>
    ));

    return (
        <div className={Styles.hour_weather}>
            <div className={Styles.hour_weather_header}>
                <h3 className={Styles.hour_weather_heading}>
                    How's the<br></br> temperature today?
                </h3>
            </div>
            <div className={Styles.hour_weather_data}>{arrayList}</div>
        </div>
    );
}

export default WeatherHours;
