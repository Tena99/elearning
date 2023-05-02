import { Formik } from 'formik';
import {useState, useEffect} from "react";
import "./style.css"

function Search () {




return   <Formik
    initialValues={{ search:"" }}
    onSubmit={(values, { setSubmitting }) => {
        let  searchValue = values.search

        function Filter () {
            let services = [...document.querySelectorAll("article.n_service_block ")]
            let hasResult = false

            services.filter(function (item) {
                if (item.innerText.toLowerCase().includes(searchValue)) {
                    item.classList.remove('hidden')
                    hasResult = true
                } else {
                    item.classList.add('hidden')
                }
            })

            if (!hasResult) {
                let parentElement = document.querySelector('.n_service_blocks')
                parentElement.insertAdjacentHTML('beforeend', '<div class="sorry-message">Sorry, no results found. <br>Please try again</div>')
            } else {
                let sorryMessage = document.querySelector('.sorry-message')
                if (sorryMessage) {
                    sorryMessage.remove()
                }
            }
        }
        Filter()
        setSubmitting(false);
        }
    }
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
            <div className={"search_btn"}>
                <input
                    type="text"
                    name="search"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.search}
                    placeholder={"Search"}
                />

                <div className={"search_icon"}>
                    <button type="submit" disabled={isSubmitting}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.75">
                                <path d="M10.9167 10.9166L18 18"  strokeWidth="1.7" strokeLinecap="round"/>
                                <path d="M10.6735 10.6736C12.8865 8.46064 12.8865 4.87271 10.6735 2.65973C8.46056 0.446756 4.87262 0.446756 2.65969 2.65973C0.446669 4.87271 0.446669 8.46064 2.65969 10.6736C4.87262 12.8866 8.46056 12.8866 10.6735 10.6736Z" strokeWidth="1.7" strokeLinecap="round"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    )}
</Formik>
}

export default Search
