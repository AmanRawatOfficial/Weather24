import Styles from "./Navbar.module.css";

function Navbar() {
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
                <li>
                    <a href="#">
                        <i className="bx bx-moon"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
