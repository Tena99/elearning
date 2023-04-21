import "./style.css";
import ServiceBlock from "../../components/Service_Block/component";

function ServiceBlocks() {
  return (
    <div className={"service_container"}>
      <h3>Services We Provide</h3>

      <div className={"service_blocks"}>
        <ServiceBlock
          src={process.env.PUBLIC_URL + "/images/services_tabs.svg"}
          title={"Instructional Design"}
          text={
            "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us."
          }
        />
        <ServiceBlock
          src={process.env.PUBLIC_URL + "/images/services_screen.svg"}
          title={"ELearning Development"}
          text={
            "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer."
          }
        />
        <ServiceBlock
          src={process.env.PUBLIC_URL + "/images/services_mobile.svg"}
          title={"Mobile learning"}
          text={
            "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device."
          }
        />
        <ServiceBlock
          src={process.env.PUBLIC_URL + "/images/services_man.svg"}
          title={"Instructor-Led Training"}
          text={
            "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations."
          }
        />
      </div>
    </div>
  );
}

export default ServiceBlocks;
