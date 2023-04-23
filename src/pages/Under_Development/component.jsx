import "./style.css"
import {  Link } from "react-router-dom";

function Under_Development () {
    return <div className="error_page container">
        <h1>This page is under development</h1>
        <p>Unfortunately, this page is in development and not yet ready for use. We are working on it and will try to make it available soon. We apologize for the inconvenience.</p>
        <Link to={"/elearning"}>Back</Link>
    </div>
}

export default Under_Development