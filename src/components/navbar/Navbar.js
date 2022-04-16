import Styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkmode } from "../../redux/darkmodeSlice"

function Navbar() {

    const isDarkmodeOn = useSelector(state => state.darkmode.isDark)
    const dispatch = useDispatch()
    const darkmodeCheck = isDarkmodeOn ? Styles.sidebar_dark : "" // darkmode swithcing
    console.log(isDarkmodeOn)

    return (
        <nav className={`${Styles.sidebar} ${darkmodeCheck}`}>
            <div className={Styles.logo_content}>
                <div className={Styles.logo}>
                    <i className={`bx bx-cloud ${darkmodeCheck}`}></i>
                </div>
            </div>
            <ul className={`${Styles.nav_list}`}>
                <li>
                    <a href="#">
                        <i className={`bx bx-grid-alt ${darkmodeCheck}`}></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className={`bx bx-map ${darkmodeCheck}`}></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className={`bx bx-calendar ${darkmodeCheck}`}></i>
                    </a>
                </li>
                <li onClick={() => dispatch(toggleDarkmode())}>
                    <a href="#">
                        <i className={`bx bx-moon ${darkmodeCheck}`}></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
