import "./style.css"
import {  Link } from "react-router-dom";

function Header () {

    return <header     style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/header_background.jpg)`,
        backgroundSize: 'cover'}}>
<div className={"header_container"}>
    <div className={"header_item"}>
        <div className={"header_item__image"}>
        <img
            src={process.env.PUBLIC_URL + "/images/header_logo.svg"}
            alt={"line"}
        />
        </div>
    </div>

        <div className={"header_item"}>
            <div className={"header_item__image"}>
            <img
                src={process.env.PUBLIC_URL + "/images/header_services.jpg"}
                alt={"line"}
            />
            </div>
            <p>Services</p>
        </div>

        <div className={"header_item"}>
            <div className={"header_item__image"}>
                <img
                    src={process.env.PUBLIC_URL + "/images/header_design.png"}
                    alt={"line"}
                />
            </div>
            <p>Instructional Design</p>
        </div>

        <div className={"header_item"}>
            <div className={"header_item__image"}>
                <img
                    src={process.env.PUBLIC_URL + "/images/header_development.jpg"}
                    alt={"line"}
                />
            </div>
            <p>eLearning Development</p>
        </div>
</div>

        <div className={"header_container second_row"}>

        <div className={"header_item"}>
            <div className={"header_item__image"}>
                <img
                    src={process.env.PUBLIC_URL + "/images/header_price.jpg"}
                    alt={"line"}
                />
            </div>
            <p>eLearning Price Quote</p>
        </div>

        <div className={"header_item"}>
            <div className={"header_item__image"}>
                <img
                    src={process.env.PUBLIC_URL + "/images/header_packages.jpg"}
                    alt={"line"}
                />
            </div>
            <p>eLearning Packages</p>
        </div>

        <div className={"header_item"}>
            <div className={"header_item__image"}>
                <img
                    src={process.env.PUBLIC_URL + "/images/header_photo.jpg"}
                    alt={"line"}
                />
            </div>
        </div>

        <div className={"header_item"}>
            <div className={"header_item__image"}>
                <img
                    src={process.env.PUBLIC_URL + "/images/header_contact.svg"}
                    alt={"line"}
                />
            </div>
        </div>
        </div>

        <div className={"header_divider"}></div>
        <div className={"header_menu"}>
            <img src={process.env.PUBLIC_URL + "/images/logo.svg"}/>

            <ul>
                <li>
                    <Link to={"/elearning"}>Home</Link>
                </li>
                <li>
                    <Link to={"/services"}>Services</Link>
                </li>
                <li>
                    <Link to={"/design"}>Instructional Design</Link>
                </li>
                <li>
                    <Link to={"/development"}>eLearning Development</Link>
                </li>
                <li>
                    <Link to={"/price"}>eLearning Price Quote</Link>
                </li>
                <li>
                    <Link to={"/packages"}>eLearning Packages</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>

        </div>
    </header>
}

export default Header