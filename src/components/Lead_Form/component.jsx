import React, {useState} from 'react';
import { Formik } from 'formik';
import "./style.css"
import Alert_Message from "../Alert/component";

function Lead_Form () {
    const [formSubmitted, setFormSubmitted] = useState(false);


    return <div className={"lead_form"}>

        <h2>Talk To Us About Your Project</h2>
        <h3>We will never send spam or add you to a mailing list</h3>

        <Formik
            initialValues={{ name: "", email: "", message: ""  }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(values, null, 2),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
                setSubmitting(false);
                setFormSubmitted(true)
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                    <div className={"lead_form error"}>
                    <input
                        type="text"
                        name="name"
                        placeholder={"Enter your Name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />

                        <p>
                        {errors.name && touched.name && errors.name}
                        </p>
                    </div>
                    <div className={"lead_form error"}>
                    <input
                        type="email"
                        name="email"
                        placeholder={"Enter your Email Address"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                     <p>
                     {errors.email && touched.email && errors.email}
                     </p>
                 </div>
                    <div className={"lead_form error"}>
                    <textarea
                        name="message"
                        placeholder={"Your Message"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    {errors.message && touched.message && errors.message}
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>

                    {formSubmitted ? <Alert_Message text={"Success! We'll contact you shortly"}/>  :  null}
                </form>
            )}
        </Formik>
    </div>

}

export default Lead_Form