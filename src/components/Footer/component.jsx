import "./style.css"
import {Link} from "react-router-dom";

function Footer ({home}) {

    return <footer>
        <div className={"footer_container"}>
            <div className={"footer_logo"}>
                <img src={process.env.PUBLIC_URL+"/images/logo_dark.svg"} alt={"logo"}/>
            </div>

            <div className={"footer_item"}>
            <ul>
                <li>
                    <Link to={home}>Home eLearning</Link>
                </li>
                <li>
                    <Link to={"./price"}>Price Quote Services</Link>
                </li>
                <li>
                    <Link to={"./design"}>Instructional Design </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to={"./development"}>eLearning Development</Link>
                </li>
                <li>
                    <Link to={"./mobile"}>Mobile Learning</Link>
                </li>
                <li>
                    <Link to={"./training"}>Product Training</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to={"./custom"}>Custom eLearning</Link>
                </li>
                <li>
                    <Link to={"./retail"}>eLearning for Retail</Link>
                </li>
                <li>
                    <Link to={"./packages"}>eLearning Packages</Link>
                </li>
                <li>
                    <Link to={"./contact"}>Contact</Link>
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