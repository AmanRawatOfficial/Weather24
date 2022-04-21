import Styles from "./OtherData.module.css";
import { useSelector } from "react-redux"

function OtherData() {

    const weatherData = useSelector(state => state.weather.weatherData)
    const windSpeed = weatherData[0].wind_spd
    const windDesc = weatherData[0].wind_cdir_full
    const uvi = (weatherData[0].uv).toFixed(1)

    // Description changing logic
    let uviDesc = ""
    if (uvi <= 2) {
        uviDesc = "Low"
    } else if (uvi <= 5) {
        uviDesc = "Moderate"
    } else if (uvi <= 7) {
        uviDesc = "High"
    } else if (uvi <= 10) {
        uviDesc = "Very High"
    } else {
        uviDesc = "Extreme"
    }

    return (
        <div className={Styles.other_data}>
            <div className={Styles.other_data_main}>
                <div className={Styles.other_data_main_icon}>
                    <i className="bx bxs-sun"></i>
                </div>
                <div className={Styles.other_data_main_info}>
                    <p className={Styles.other_data_main_info_uv}>
                        {uvi} UVI <span className={Styles.other_data_main_desc}>{uviDesc}</span>
                    </p>
                    <p>
                        {uviDesc} risk of from UV Rays
                    </p>
                </div>
            </div>
            <div className={Styles.other_data_main}>
                <div className={Styles.other_data_main_icon}>
                    <i className="bx bx-wind"></i>
                </div>
                <div className={Styles.other_data_main_info}>
                    <p className={Styles.other_data_main_info_uv}>
                        {windSpeed} m/s <span className={Styles.other_data_main_desc}>{windDesc}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OtherData;
