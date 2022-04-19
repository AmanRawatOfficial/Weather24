import { useSelector } from "react-redux"

function WeatherHours() {
    const weatherHourData = useSelector(state => state.weatherHour.weatherHourData)

    console.log(weatherHourData)

    return (
        <div>
            <div>
                <h3>How's the temperature in next 3 hours?</h3>
            </div>

        </div>
    );
}

export default WeatherHours;
