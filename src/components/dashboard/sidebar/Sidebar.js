import OtherData from "./OtherData"
import Styles from "./Sidebar.module.css"
import WeatherPrediction from "./WeatherPrediction"

function Sidebar() {
    return (
        <div className={Styles.sidebar}>
            <OtherData />
            <WeatherPrediction />
        </div>
    )
}

export default Sidebar