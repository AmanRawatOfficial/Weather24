import { useSelector } from "react-redux";

function WeatherHours() {
    const weatherHourData = useSelector(
        (state) => state.weatherHour.weatherHourData
    );

    console.log("from weatherC", weatherHourData);
    const arrayList = weatherHourData.list.slice(0,4).map(list => <p>{list.main.temp}</p>)

    return (
        <div>
            <div>
                <h3>How's the temperature in next 3 hours?</h3>
                {arrayList}
            </div>
        </div>
    );
}

export default WeatherHours;
