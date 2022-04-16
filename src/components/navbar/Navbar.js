import "boxicons";

function Navbar() {
    return (
        <nav className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <box-icon name="cloud"></box-icon>
                    <div className="logo_name">Weather24</div>
                </div>
                <box-icon name="menu"></box-icon>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <box-icon name="grid-alt"></box-icon>
                        <span className="links_name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name="map"></box-icon>
                        <span className="links_name">Map</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name="calendar"></box-icon>
                        <span className="links_name">Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name="moon"></box-icon>
                        <span className="links_name">Theme</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
