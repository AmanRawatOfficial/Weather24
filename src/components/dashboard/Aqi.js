import DashboardComponent from "../ui/DashboardComponent";
import Styles from "./Aqi.module.css"

function Aqi(props) {
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
        </DashboardComponent>
    );
}

export default Aqi;
