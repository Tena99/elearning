import "./style.css"
import {Link} from "react-router-dom";

function Design_Banner () {

    return <div className={"n_design_section"}>
        <div className={"n_design_banner"} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/design_background.jpg)`,
        backgroundSize: 'cover'}}>

        <article className={"n_design_banner_item"}>
            <h3>We Design Learning.</h3>
            <p>What We Can Do For You?</p>
            <Link to={"./services"}>Know more</Link>
        </article>

        <div className={"n_design_banner_img"}>
<img src={process.env.PUBLIC_URL + "/images/design_man.png"} alt={"design_man"}/>
        </div>
    </div>
    <div className={"n_design_banner_line"}></div>
</div>
}

export default Design_Banner