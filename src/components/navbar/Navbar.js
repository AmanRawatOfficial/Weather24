import Styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkmode } from "../../redux/darkmodeSlice"

function Navbar() {

    const isDarkmodeOn = useSelector(state => state.darkmode.isDark)
    const dispatch = useDispatch()

    // DARKMODE
    const darkmodeCheck = isDarkmodeOn ? Styles.sidebar_dark : "" // darkmode swithcing
    const darkmodeCheckFont = isDarkmodeOn ? Styles.nav_list_dark : "" // darkmode switcing for white fonts

    return (
        <nav className={`${Styles.sidebar} ${darkmodeCheck}`}>
            <div className={Styles.logo_content}>
                <div className={Styles.logo}>
                    <i className={`bx bx-cloud ${Styles.logo_icon} ${darkmodeCheckFont}`}></i>
                </div>
            </div>
            <ul className={`${Styles.nav_list}`}>
                <li>
                    <a href="#">
                        <i className={`bx bx-grid-alt ${Styles.nav_list_icons} ${darkmodeCheckFont}`}></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className={`bx bx-map ${Styles.nav_list_icons} ${darkmodeCheckFont}`}></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className={`bx bx-calendar ${Styles.nav_list_icons} ${darkmodeCheckFont}`}></i>
                    </a>
                </li>
                <li onClick={() => dispatch(toggleDarkmode())}>
                    <a href="#">
                        <i className={`bx bx-moon ${Styles.nav_list_icons} ${darkmodeCheckFont}`}></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
