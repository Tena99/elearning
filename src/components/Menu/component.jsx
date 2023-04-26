import { useState } from "react";
import {Link} from "react-router-dom";
import "./style.css"

export default function Menu() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <>
            <div className={"header_divider"}></div>

        <nav className="navigation">
            <Link to={"/"}  className="brand-name">
                <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt={"logo"}/>
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="black"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <Link to={"/elearning"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"./services"}>Services</Link>
                    </li>
                    <li>
                        <Link to={"./design"}>Instructional Design</Link>
                    </li>
                    <li>
                        <Link to={"./development"}>eLearning Development</Link>
                    </li>
                    <li>
                        <Link to={"./price"}>eLearning Price Quote</Link>
                    </li>
                    <li>
                        <Link to={"./packages"}>eLearning Packages</Link>
                    </li>
                    <li>
                        <Link to={"./contact"}>Contact</Link>
                    </li>
                </ul>

            </div>
        </nav>
        </>
    );
}
