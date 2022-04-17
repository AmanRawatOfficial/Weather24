import { useSelector } from "react-redux"
import Styles from "./Dashboard.module.css"
import Weather from "./Weather"

function Dashboard() {

    const isDarkmodeOn = useSelector(state => state.darkmode.isDark)
    const darkmodeCheck = isDarkmodeOn ? Styles.dashboard_dark : ""

    return(
        <main className={`${Styles.dashboard} ${darkmodeCheck}`}>
            <Weather />
        </main>
    )
}
export default Dashboard