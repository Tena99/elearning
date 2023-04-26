import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import Menu from "../Menu";

function Carousel_Component() {
    return (
        <div className={"header_carousel"} style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/header_background.jpg)`,
            backgroundSize: 'cover'}}>

        <Carousel interval={null} controls={false} className={"vertical"}>

            {/*First slide*/}

            <Carousel.Item >
                <div className={"header_carousel_item_container"}>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_logo.svg"}
                                alt="First slide"
                            />
                        </div>

                        <button className={"header_carousel_theme"}>Daymode</button>
                    </div>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_services(2.0).jpg"}
                                alt="First slide"
                            />
                        </div>

                        <div className={"header_carousel_caption one"}>
                            <Carousel.Caption>
                                <h3>Services</h3>
                            </Carousel.Caption>
                        </div>
                    </div>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_inst_design.png"}
                                alt="First slide"
                            />
                        </div>

                        <div className={"header_carousel_caption two"}>
                            <Carousel.Caption>
                                <h3>Instructional Design</h3>
                            </Carousel.Caption>
                        </div>
                    </div>

                </div>
            </Carousel.Item>

            {/*Second slide*/}

            <Carousel.Item >
                <div className={"header_carousel_item_container"}>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_logo.svg"}
                                alt="Second slide"
                            />
                        </div>

                        <button className={"header_carousel_theme"}>Daymode</button>
                    </div>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_development.png"}
                                alt="Second slide"
                            />
                        </div>

                        <div className={"header_carousel_caption one"}>
                            <Carousel.Caption>
                                <h3>eLearning Development</h3>
                            </Carousel.Caption>
                        </div>
                    </div>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_price.png"}
                                alt="Second slide"
                            />
                        </div>

                        <div className={"header_carousel_caption two"}>
                            <Carousel.Caption>
                                <h3>eLearning Price Quote</h3>
                            </Carousel.Caption>
                        </div>
                    </div>

                </div>
            </Carousel.Item>

            {/*Third slide*/}

            <Carousel.Item >
                <div className={"header_carousel_item_container"}>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_logo.svg"}
                                alt="Third slide"
                            />
                        </div>

                        <button className={"header_carousel_theme"}>Daymode</button>
                    </div>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img"}>
                            <img
                                className="d-block w-20"
                                src={ process.env.PUBLIC_URL + "/images/header_packages.png"}
                                alt="Third slide"
                            />
                        </div>

                        <div className={"header_carousel_caption one"}>
                            <Carousel.Caption>
                                <h3>eLearning Packages</h3>
                            </Carousel.Caption>
                        </div>
                    </div>

                    <div className={"header_carousel_item"}>
                        <div className={"header_carousel_item_img third"}>
                            <img
                                className="d-block w-100"
                                src={ process.env.PUBLIC_URL + "/images/header_contact.svg"}
                                alt="Third slide"
                            />
                        </div>

                        <div className={"header_carousel_caption two"}>
                        </div>
                    </div>

                </div>
            </Carousel.Item>
        </Carousel>

            <Menu/>
        </div>
    );
}

export default Carousel_Component;