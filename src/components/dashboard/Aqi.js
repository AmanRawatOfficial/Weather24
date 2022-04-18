import { useSelector } from "react-redux";
import DashboardComponent from "../ui/DashboardComponent";
import Styles from "./Aqi.module.css"

function Aqi(props) {

    // Logic too render alert description via range of aqi
    const aqi = useSelector(state => state.weather.weatherData[0].aqi)
    let aqiDesc = ""
    if (aqi >= 0 && aqi <= 100) {
        aqiDesc = "Good"
    } else if (aqi > 100 && aqi <= 150) {
        aqiDesc = "Moderate"
    } else if (aqi > 150 && aqi <= 300) {
        aqiDesc = "Unhealty"
    } else {
        aqiDesc = "Hazardous"
    }

    return (
        <DashboardComponent
            heading={"Air Quality"}
            icon={"bx bx-wind"}
            secondaryHeading={"What's the air quality"}
        >
            <div className={`${Styles.aqi_data}`}>
                <p className={`${Styles.aqi_data_current}`}>
                    {`${props.aqi}`}
                    <span>AQI</span>
                </p>
            </div>
            <div className={`${Styles.aqi_desc}`}>
                <p>{aqiDesc}</p>
            </div>
        </DashboardComponent>
    );
}

export default Aqi;
