import Styles from "./DashboardComponent.module.css"

function dashboardComponent(props) {
    return (
        <div className={`${Styles.weather}`}>
            {props.children}
        </div>
    )
}

export default dashboardComponent