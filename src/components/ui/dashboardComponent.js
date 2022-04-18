import Styles from "./DashboardComponent.module.css"

function dashboardComponent(props) {
    return (
        <div className={`${Styles.weather}`}>
            <div className={`${Styles.weather_heading}`}>
                <div className={`${Styles.weather_logo}`}>
                    <i className={`${props.icon}`}></i>
                </div>
                <div>
                    <h4>{props.heading}</h4>
                    <p>{props.secondaryHeading}</p>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default dashboardComponent