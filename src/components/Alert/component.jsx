import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "./style.css"

function Alert_Message({text}) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            {show && (
                <Alert variant="success" onClose={handleClose} dismissible>
                    {text}
                </Alert>
            )}
        </>
    );
}

export default Alert_Message;