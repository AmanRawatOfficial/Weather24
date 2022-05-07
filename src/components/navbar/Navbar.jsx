import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

// const modalRoot = document.getElementById("modal-root");

// const Modal = (props) => {
//     return ReactDOM.createPortal(
//         <div className="overlay">{props.children}</div>,
//         modalRoot
//     );
// };

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /* Handling Menu button state */
    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    };

    return (
        <>
            <nav className="sidebar">
                <div>
                    <div className="sidebar-logo-box">
                        <Link to="/dashboard">
                            <i className="bx bx-cloud sidebar-logo"></i>
                        </Link>
                    </div>
                </div>
                <ul>
                    <li className="sidebar-icon-box link-icon">
                        <Link to="/dashboard">
                            <i className="bx bx-grid-alt sidebar-icon"></i>
                        </Link>
                    </li>
                    <li className="sidebar-icon-box link-icon">
                        <Link to="/location">
                            <i className="bx bx-map sidebar-icon"></i>
                        </Link>
                    </li>
                    <li className="sidebar-icon-box link-icon">
                        <Link to="/calendar">
                            <i className="bx bx-calendar sidebar-icon"></i>
                        </Link>
                    </li>
                </ul>
                <div className="sidebar-icon-box">
                    <div className="link-icon">
                        <button className="sidebar-button">
                            <i className="bx bx-moon sidebar-icon"></i>
                        </button>
                    </div>

                    <div className="menu">
                        <button
                            className="sidebar-button"
                            onClick={menuHandler}
                        >
                            <i className="bx bx-menu sidebar-icon"></i>
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="sidebar-mobile">
                    <ul>
                        <li
                            className="sidebar-icon-box icon-mobile"
                            onClick={menuHandler}
                        >
                            <Link to="/dashboard">
                                <i className="bx bx-grid-alt sidebar-icon"></i>
                            </Link>
                        </li>
                        <li
                            className="sidebar-icon-box icon-mobile"
                            onClick={menuHandler}
                        >
                            <Link to="/location">
                                <i className="bx bx-map sidebar-icon"></i>
                            </Link>
                        </li>
                        <li
                            className="sidebar-icon-box icon-mobile"
                            onClick={menuHandler}
                        >
                            <Link to="/calendar">
                                <i className="bx bx-calendar sidebar-icon"></i>
                            </Link>
                        </li>
                    </ul>
                    <div className="sidebar-icon-box icon-mobile mobile-button">
                        <div>
                            <button className="sidebar-button">
                                <i className="bx bx-moon sidebar-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
