import Styles from "./Weather.module.css"

function Weather() {

    return (
        <div className={`${Styles.weather}`}>
            <div className={`${Styles.weather_heading}`}>
                <div className={`${Styles.weather_logo}`}>
                    <i class="bx bxs-cloud"></i>
                </div>
                <div>
                    <h4>Weather</h4>
                    <p>What's the weather.</p>
                </div>
            </div>
            <div className={`${Styles.weather_data}`}>
                <p className={`${Styles.weather_data_current}`}>22°C<span>11°C</span></p>
            </div>
        </div>
    )
}

export default Weather