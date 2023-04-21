import "./style.css";

function serviceBlock({ src, title, text }) {
  return (
    <article className={"service_block "}>
      <div className={"service_block icon"}>
        <img src={src} alt={"article_illustation"} />
      </div>

      <h4>{title}</h4>

      <div className={"service_block line "}>
        <img
          src={process.env.PUBLIC_URL + "/images/services_line.svg"}
          alt={"line"}
        />
      </div>

      <p>{text}</p>
    </article>
  );
}

export default serviceBlock;
