import Styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkmode } from "../../redux/darkmodeSlice"

function Navbar() {

    const isDarkmodeOn = useSelector(state => state.darkmode.isDark)
    const dispatch = useDispatch()
    console.log(isDarkmodeOn)

    return (
        <nav className={Styles.sidebar}>
            <div className={Styles.logo_content}>
                <div className={Styles.logo}>
                    <i className="bx bx-cloud"></i>
                </div>
            </div>
            <ul className={Styles.nav_list}>
                <li>
                    <a href="#">
                        <i className="bx bx-grid-alt"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-map"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-calendar"></i>
                    </a>
                </li>
                <li onClick={() => dispatch(toggleDarkmode())}>
                    <a href="#">
                        <i className="bx bx-moon"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
