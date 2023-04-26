import "./style.css";

function serviceBlock({ src, title, text }) {
    return (
        <article className={"service_block "}>
            <div className={"service_block icon"}>
                {src}
            </div>

            <h4>{title}</h4>

            <div className={"service_block line "}>
                <svg width="35" height="3" viewBox="0 0 35 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.5" x2="35" y2="1.5"  strokeWidth="3"/>
                </svg>
            </div>

            <p>{text}</p>
        </article>
    );
}

export default serviceBlock;