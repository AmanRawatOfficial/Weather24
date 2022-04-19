import Styles from "./WeatherTommorow.module.css"

function WeatherTommorow() {
    return (
        <div className={Styles.weather_tommorow}>
            <h4 className={Styles.weather_tommorow_heading}>Tommorow</h4>
            <p className={Styles.weather_tommorow_temp}>40°C</p>
            <p className={Styles.weather_tommorow_desc}>Sunny</p>
        </div>
    )
}

export default WeatherTommorow