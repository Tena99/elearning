import {Link, Outlet} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css"

function Old_design () {
    return <>
        <Link to={"/n"} className={"design_change_new"}>New design</Link>
        <Header/>
        <Outlet/>
        <Footer home={"/o"}/>
    </ >
}

export default Old_design