import Styles from "./Dashboard.module.css"
import { useSelector } from "react-redux"

function Dashboard() {

    const isDarkmodeOn = useSelector(state => state.darkmode.isDark)
    const darkmodeCheck = isDarkmodeOn ? Styles.dashboard_dark : ""

    return(
        <main className={`${Styles.dashboard} ${darkmodeCheck}`}>
            <h1>Dashboard</h1>
        </main>
    )
}
export default Dashboard