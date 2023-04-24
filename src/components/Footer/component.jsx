import "./style.css"
import {Link} from "react-router-dom";

function Footer () {

    return <footer>
        <div className={"footer_container"}>
            <div className={"footer_logo"}>
                <img src={process.env.PUBLIC_URL+"/images/logo_dark.svg"} alt={"logo"}/>
            </div>

            <div className={"footer_item"}>
            <ul>
                <li>
                    <Link to={"/"}>Home eLearning</Link>
                </li>
                <li>
                    <Link to={"/"}>Price Quote Services</Link>
                </li>
                <li>
                    <Link to={"/"}>Instructional Design </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to={"/"}>eLearning Development</Link>
                </li>
                <li>
                    <Link to={"/"}>   Mobile Learning</Link>
                </li>
                <li>
                    <Link to={"/"}>Product Training</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to={"/"}>Custom eLearning</Link>
                </li>
                <li>
                    <Link to={"/"}>Custom eLearning</Link>
                </li>
                <li>
                    <Link to={"/"}>eLearning Packages</Link>
                </li>
                <li>
                    <Link to={"/"}>Contact</Link>
                </li>
            </ul>
            </div>
        </div>

        <div className={"footer_copyright"}>
            <p>Copyright © 2016 eLearning Company</p>
        </div>
    </footer>

}

export default Footer