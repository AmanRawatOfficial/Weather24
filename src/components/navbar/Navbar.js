import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkmode } from "../../redux/darkmodeSlice";
import Styles from "./Navbar.module.css";

function Navbar() {
    const isDarkmodeOn = useSelector((state) => state.darkmode.isDark);
    const dispatch = useDispatch();

    // DARKMODE
    const darkmodeCheck = isDarkmodeOn ? Styles.sidebar_dark : ""; // darkmode swithcing
    const darkmodeCheckFont = isDarkmodeOn ? Styles.nav_list_dark : ""; // darkmode switcing for white fonts

    return (
        <nav className={`${Styles.sidebar} ${darkmodeCheck}`}>
            <div className={Styles.logo_content}>
                <div className={Styles.logo}>
                    <Link to="/dashboard">
                        <i
                            className={`bx bx-cloud ${Styles.logo_icon} ${darkmodeCheckFont}`}
                        ></i>
                    </Link>
                </div>
            </div>
            <ul className={`${Styles.nav_list}`}>
                <li>
                    <Link to="/dashboard">
                        <i
                            className={`bx bx-grid-alt ${Styles.nav_list_icons} ${darkmodeCheckFont}`}
                        ></i>
                    </Link>
                </li>
                <li>
                    <Link to="/map">
                        <i
                            className={`bx bx-map ${Styles.nav_list_icons} ${darkmodeCheckFont}`}
                        ></i>
                    </Link>
                </li>
                <li>
                    <Link to="/calender">
                        <i
                            className={`bx bx-calendar ${Styles.nav_list_icons} ${darkmodeCheckFont}`}
                        ></i>
                    </Link>
                </li>
            </ul>
            <button
                className={Styles.nav_list}
                onClick={() => dispatch(toggleDarkmode())}
            >
                <i
                    className={`bx bx-moon ${Styles.nav_list_icons} ${darkmodeCheckFont}`}
                ></i>
            </button>
        </nav>
    );
}

export default Navbar;
