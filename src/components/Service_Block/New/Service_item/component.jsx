import "./style.css";

function serviceBlock({ src, title, text }) {
    return (
        <article className={"n_service_block "}>
            <div className={"n_service_block icon"}>
                {src}
            </div>

            <h4>{title}</h4>

            <div className={"n_service_block line "}>
                <svg width="100%" height="3" viewBox="0 0 100 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.5" x2="100%" y2="1.5"  strokeWidth="3"/>
                </svg>
            </div>

            <p>{text}</p>
        </article>
    );
}

export default serviceBlock;