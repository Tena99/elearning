import Form from 'react-bootstrap/Form';
import "./style.css"

function Search () {

    return<div className={"search_btn"}>
            <Form.Control type="text" placeholder="Search" />

        <div className={"search_icon"}>
            <img src={process.env.PUBLIC_URL + "/images/search_icon.svg"} alt={"search_icon"}/>
        </div>
    </div>
}

export default Search