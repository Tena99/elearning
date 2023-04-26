import Form from 'react-bootstrap/Form';
import "./style.css"

function Select({options}) {

    let option = options.map(function (item) {
return <option>{item}</option>
    })

    return (
        <Form.Select className={"select_btn"}>
            {option}
        </Form.Select>
    );
}

export default Select;