import {Link, Outlet} from "react-router-dom";
import Footer from "../../components/Footer";
import Carousel_Component from "../../components/Carousel";
import "./style.css"

function New_design () {
    return <>
        <Link to={"/o"} className={"design_change_old"}>Old design</Link>
        <Carousel_Component/>
        <Outlet/>
        <Footer/>
    </ >
}

export default New_design