import React, {useEffect, useState} from "react";

import "./style.css";
import ServiceItem from "./Service_item";


function ServiceBlocks() {
    const [svgStroke, setSvgStroke] = useState('white');
    const [svgBackground, setSvgBackground] = useState('');
    const [svgBorder, setSvgBorder] = useState('#DCCE90');
    const [svgLineColour, setLineColour] = useState('#DCCE90');

    useEffect(() => {
        const svgContainers = document.querySelectorAll(".service_block .icon")
        svgContainers.forEach(function (svgContainer) {
            svgContainer.style.backgroundColor= svgBackground;
            svgContainer.style.borderColor=svgBorder
        })

        const svgElements = document.querySelectorAll('.service_block .icon svg');
        svgElements.forEach(function (svgElement) {
            svgElement.setAttribute('stroke', svgStroke);
        })

        const svgLines = document.querySelectorAll(".service_block .line svg")
        svgLines.forEach(function (svgLine) {
            svgLine.setAttribute('stroke', svgLineColour);
        })

    }, [svgStroke], [svgBackground], [setSvgBorder], [svgLineColour]);

    return (
        <div className={"service_container"}>
            <h3>Services We Provide</h3>

            <div className={"service_blocks"}>
                <ServiceItem
                    src={<svg width="100%" height="100%" viewBox="0 0 58 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_1_70" fill="white">
                            <rect x="16.3231" y="0.0909424" width="40.9952" height="26.9638" rx="0.728751"/>
                        </mask>
                        <rect x="16.3231" y="0.0909424" width="40.9952" height="26.9638" rx="0.728751" strokeWidth="4.37251" mask="url(#path-1-inside-1_1_70)"/>
                        <path d="M13.3948 10.2935H10.0973C9.6948 10.2935 9.36853 10.6197 9.36853 11.0222V35.4354C9.36853 35.8378 9.6948 36.1641 10.0973 36.1641H48.9029C49.3054 36.1641 49.6317 35.8378 49.6317 35.4354V30.3341"  strokeWidth="2.18625"/>
                        <path d="M5.70832 19.0385H2.41076C2.00828 19.0385 1.68201 19.3647 1.68201 19.7672V44.1804C1.68201 44.5828 2.00828 44.9091 2.41076 44.9091H41.2164C41.6189 44.9091 41.9452 44.5828 41.9452 44.1804V39.0791"  strokeWidth="2.18625"/>
                    </svg>
                    }
                    title={"Instructional Design"}
                    text={
                        "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us."
                    }
                />
                <ServiceItem
                    src={<svg width="100%" height="100%" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.52213" y="1.38582" width="51.9557" height="40.6063" rx="2.49103"  strokeWidth="2.13517"/>
                        <line x1="0.454498" y1="32.0191" x2="54.5454" y2="32.0191"  strokeWidth="2.13517"/>
                        <ellipse cx="27.5001" cy="37.3609" rx="2.84689" ry="2.84943" />
                        <line x1="27.5" y1="43.0597" x2="27.5" y2="45.9091"  strokeWidth="1.42344"/>
                        <line x1="44.5814" y1="46.9768" x2="10.4187" y2="46.9768"  strokeWidth="2.13517"/>
                    </svg>
                    }
                    title={"ELearning Development"}
                    text={
                        "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer."
                    }
                />
                <ServiceItem
                    src={<svg width="100%" height="100%" viewBox="0 0 39 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.27404" y="1.77398" width="35.6792" height="53.1547" rx="6.18925" strokeWidth="2.18444"/>
                        <line x1="13.6526" y1="6.14277" x2="24.5748" y2="6.14277" strokeWidth="2.18444" strokeLinecap="round"/>
                        <line x1="0.910202" y1="10.5117" x2="38.0457" y2="10.5117"  strokeWidth="2.18444"/>
                        <line x1="0.181992" y1="44.7346" x2="37.3175" y2="44.7346"  strokeWidth="2.18444"/>
                        <circle cx="19.114" cy="50.1958" r="2.91259"  strokeWidth="2.18444"/>
                    </svg>
                    }
                    title={"Mobile learning"}
                    text={
                        "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device."
                    }
                />
                <ServiceItem
                    src={<svg width="100%" height="100%" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9528 10.885V1.45459H54.7729V22.4917H46.4306L37.3628 31.5594V22.4917H31.5595"  strokeWidth="2.17625"/>
                        <circle cx="31.1966" cy="13.4239" r="1.08813"/>
                        <circle cx="36.9999" cy="13.4239" r="1.08813"/>
                        <circle cx="42.8033" cy="13.4239" r="1.08813" />
                        <path d="M27.5696 27.9323C27.5696 33.6481 23.4083 38.0882 18.5019 38.0882C13.5955 38.0882 9.43416 33.6481 9.43416 27.9323C9.43416 22.2166 13.5955 17.7765 18.5019 17.7765C23.4083 17.7765 27.5696 22.2166 27.5696 27.9323Z"  strokeWidth="2.17625"/>
                        <path d="M8.70865 27.5696C10.764 28.295 15.8903 28.5127 19.9526 23.5798C21.1133 28.2225 25.9978 28.1741 28.2949 27.5696" strokeWidth="2.17625"/>
                        <path d="M14.1493 37.3627V42.4407C9.91773 43.4079 1.45453 46.1403 1.45453 49.3321C1.45453 52.524 1.45453 54.531 1.45453 55.1355H36.2746V50.3368C36.2746 49.6794 36.1074 49.0258 35.6896 48.5182C34.0574 46.5356 30.1316 43.4486 23.5798 42.4407C23.5798 38.6685 23.5798 36.7582 23.5798 36.6373" strokeWidth="2.17625"/>
                    </svg>
                    }
                    title={"Instructor-Led Training"}
                    text={
                        "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations."
                    }
                />
            </div>

            <div className={"service_block_btn-container"}>
                <h4>Don't like this theme? Choose another one:</h4>
                <div className={"service_block_btns"}>
                    <button type={"button"} className={"service_block_btn yellow_btn"}
                            onClick={() => {setSvgStroke('white'); setSvgBackground('#DCCE90'); setSvgBorder("#DCCE90"); setLineColour("#DCCE90")}}></button>
                    <button type={"button"} className={"service_block_btn green_btn"}
                            onClick={() => {setSvgStroke('#FFFFFF'); setSvgBackground('#29B4AD'); setSvgBorder("#29B4AD"); setLineColour("#29B4AD")}}></button>
                    <button type={"button"} className={"service_block_btn green_transparent_btn"}
                            onClick={() => {setSvgStroke('#23B6B0'); setSvgBackground('transparent'); setSvgBorder("#23B6B0"); setLineColour("#23B6B0")}}></button>
                    <button type={"button"} className={"service_block_btn grey_transparent_btn"}
                            onClick={() => {setSvgStroke('#B5B7B6'); setSvgBackground('transparent'); setSvgBorder("#B5B7B6"); setLineColour("#B5B7B6")}}></button>
                </div>
            </div>

        </div>
    );
}

export default ServiceBlocks;