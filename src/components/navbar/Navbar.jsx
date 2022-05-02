import React from "react";
import { Link } from "react-router-dom"

import "./Navbar.css"

function Navbar() {
    return (
        <nav className="sidebar">
            <div>
                <div>
                    <Link to="/dashboard">
                        <i
                            className={`bx bx-cloud sidebar-icon`}
                        ></i>
                    </Link>
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/dashboard">
                        <i
                            className={`bx bx-grid-alt sidebar-icon`}
                        ></i>
                    </Link>
                </li>
                <li>
                    <Link to="/location">
                        <i
                            className={`bx bx-map sidebar-icon`}
                        ></i>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar">
                        <i
                            className={`bx bx-calendar sidebar-icon`}
                        ></i>
                    </Link>
                </li>
            </ul>
            <button
            >
                <i
                    className={`bx bx-moon sidebar-icon`}
                ></i>
            </button>
        </nav>
    );
}

export default Navbar;
