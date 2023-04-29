import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import "./style.css"
import Menu from "../Menu";
import ThemeSwitch from "../Theme_Switch";
import  { useState, useEffect } from "react";



function Carousel() {

    const [isDark, setIsDark] = useState(false);

    const handleToggle = () => {
        setIsDark(!isDark);
    };

    const [switchOn, setSwitchOn] = useState(isDark);

    useEffect(() => {
        setSwitchOn(isDark);
    }, [isDark]);

    useEffect(() => {
        setIsDark(switchOn);
    }, [switchOn]);


    return <div className={"header_carousel"} style={{
        background: `linear-gradient(0deg, rgba(52, 52, 52, 0.45), rgba(52, 52, 52, 0.45)), url(${process.env.PUBLIC_URL}/images/header_background.jpg)`,
        backgroundSize: 'cover',  backgroundRepeat: "no-repeat",
    }}>
        <OwlCarousel className='header_carousel_container'
                     margin={10}
                     nav={false}
                     dots={true}
                     items={1}
                     slideBy={3}
                     loop={null}
                     mouseDrag={false}
                     touchDrag={false}
                     responsive={{
                         650: {items: 2},
                         1024:{items:3}
                     }}>

            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img logo"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_logo.svg"}
                            alt="First slide"
                        />
                        <p>Taking Learning to the Next Level</p>
                    </div>
                    <ThemeSwitch isDark={isDark} handleToggle={handleToggle} setSwitchOn={setSwitchOn} switchOn={switchOn} />
                </div>
            </div>

            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_services(2.0).png"}
                            alt="First slide"
                        />
                    </div>
                </div>
            </div>

            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_inst_design.png"}
                            alt="First slide"
                        />
                    </div>
                </div>
            </div>

            <div className='item '>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img logo"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_logo.svg"}
                            alt="Second slide"
                        />
                        <p>Taking Learning to the Next Level</p>
                    </div>
                    <ThemeSwitch isDark={isDark} handleToggle={handleToggle} setSwitchOn={setSwitchOn} switchOn={switchOn} />
                </div>
            </div>

            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_development.png"}
                            alt="Second slide"
                        />
                    </div>
                </div>
            </div>

            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_price.png"}
                            alt="Second slide"
                        />
                    </div>
                </div>
            </div>

            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img logo"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_logo.svg"}
                            alt="Third slide"
                        />
                        <p>Taking Learning to the Next Level</p>
                    </div>
                    <ThemeSwitch isDark={isDark} handleToggle={handleToggle} setSwitchOn={setSwitchOn} switchOn={switchOn} />
                </div>
            </div>

            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_packages.png"}
                            alt="Third slide"
                        />
                    </div>
                </div>

            </div>
            <div className='item'>
                <div className={"header_carousel_item"}>
                    <div className={"header_carousel_item_img third"}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/header_contact.svg"}
                            alt="Third slide"
                        />
                    </div>
                </div>
            </div>
        </OwlCarousel>;

        <Menu/>
    </div>

}

export default Carousel