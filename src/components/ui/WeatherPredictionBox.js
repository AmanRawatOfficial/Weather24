import Styles from "./WeatherPredictionBox.module.css";

function WeatherPredictionBox(props) {
    return (
        <>
            <div className={Styles.weather_prediction_primary}>
                <div className={Styles.weather_prediction_primary_box}>
                    <div className={Styles.weather_prediction_img_box}>
                        <img
                            src={require(`../../assets/icons/${props.icon}.png`)}
                            className={Styles.weather_prediction_img}
                            alt="weather icon"
                        ></img>
                    </div>

                    <div className={Styles.weather_prediction_info}>
                        <h5 className={Styles.weather_prediction_month}>
                            {props.month} {props.date}
                        </h5>
                        <p className={Styles.weather_prediction_desc}>{props.desc}</p>
                    </div>
                </div>
            </div>
            <div className={Styles.weather_prediction_secondary}>
                <div>{props.maxTemp}°C / {props.minTemp}°C</div>
            </div>
        </>
    );
}

export default WeatherPredictionBox;
