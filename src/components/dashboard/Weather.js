import DashboardComponent from "../ui/DashboardComponent";
import Styles from "./Weather.module.css";

function Weather(props) {
    return (
        <DashboardComponent heading={"Weather"} icon={"bx bxs-cloud"} secondaryHeading={"What's the weather"}>
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
