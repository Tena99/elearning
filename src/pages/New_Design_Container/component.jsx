import {Link, Outlet} from "react-router-dom";
import Footer from "../../components/Footer";
import CarouselComponent from "../../components/Carousel";
import "./style.css"

function New_design () {
    return <>
        <Link to={"/o"} className={"design_change_old"}>Old design</Link>
        <CarouselComponent/>
        <Outlet/>
        <Footer home={"/n"}/>
    </ >
}

export default New_design