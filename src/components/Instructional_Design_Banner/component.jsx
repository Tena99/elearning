import "./style.css"

function Instructional_Design_Banner () {

    return<div className={"inst_design_section"}>

        <h2>Instructional Design</h2>

        <div className={"inst_design_container"}>
            <div className={"inst_design_img"}>
                <img src={process.env.PUBLIC_URL+"/images/inst_design_photo.png"} alt={"#"}/>
            </div>

    <div className={"inst_design_item"}>
        <h4>We know learning inside and out</h4>
        <p>Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.</p>
<ul>
    <li>Each project requires a unique approach, and we are ready for the challenge</li>
    <li>Our expertise in the training and development industry will make your project a success</li>
    <li>Your goals and deadlines are our priority</li>
</ul>
    </div>
        </div>

        <div className={"inst_design_container"}>
            <div className={"inst_design_item"}>
                <h4>Our clients love the work we do</h4>
                <p>We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.</p>
                <ul>
                    <li>We start each project with a careful analysiys of your learning needs</li>
                    <li>We constantly look for ways to save your time and money while exceeding your expectations</li>
                    <li>We don't stop working until you are satisfied with the products we deliver</li>
                </ul>
            </div>

            <div className={"inst_design_img"}>
                <img src={process.env.PUBLIC_URL+"/images/inst_design_photo(2).png"} alt={"#"}/>
            </div>

        </div>
    </div>
}

export default Instructional_Design_Banner