import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <div>
                <div>
                    <Link to="/">
                        <i
                            className={`bx bx-cloud`}
                        ></i>
                    </Link>
                </div>
            </div>
            <ul>
                <li>
                    <Link to="/dashboard">
                        <i
                            className={`bx bx-grid-alt`}
                        ></i>
                    </Link>
                </li>
                <li>
                    <Link to="/location">
                        <i
                            className={`bx bx-map`}
                        ></i>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar">
                        <i
                            className={`bx bx-calendar`}
                        ></i>
                    </Link>
                </li>
            </ul>
            <button
            >
                <i
                    className={`bx bx-moon`}
                ></i>
            </button>
        </nav>
    );
}

export default Navbar;
