import "./style.css";
import {useEffect} from "react";


function ThemeSwitch({isDark, handleToggle, setSwitchOn, switchOn}) {

    useEffect(() => {
        handleToggle(switchOn);
    }, [switchOn, handleToggle]);

    const handleChange = (event) => {
        setSwitchOn(event.target.checked);
    };

    return (
        <>
            <input type="checkbox" checked={switchOn} onChange={handleChange} id={"toggle"}
            />

            <label className="toggle" htmlFor="toggle">
        <span className="bx bx-moon">
          <img
              src={process.env.PUBLIC_URL + "/images/moon_icon.svg"}
              alt="moon_icon"
          />
        </span>
                {isDark ? (
                    <span className="text">Nightmode</span>
                ) : (
                    <span className="text">Daymode</span>
                )}
                <span className="bx bxs-sun">
          <img
              src={process.env.PUBLIC_URL + "/images/sun_icon.svg"}
              alt="sun_icon"
          />
        </span>
                <span className="ball"></span>
            </label>

            <style>
                {`
          body {
            background: ${isDark ? "#414141" : "#FFFFFF"};
          }

          .toggle {
            background-color: ${isDark ? "#343434" : "#EBEBEB"};
          }

          .toggle .ball {
            background-color: white;
            border: 1px solid #EBEBEB;
            transform: translateX(${isDark ? "-104px" : "0"});
          }

          .text {
            color: ${isDark ? "#FFFFFF" : "#343434"};
          }
                 .bxs-sun {
            display: ${isDark ? "none" : "inline-block"};
          }

          .bx-moon {
            display: ${isDark ? "inline-block" : "none"};
          }

          .n_service_container p,   .n_service_container h4, .n_service_container h5, .n_service_container input::placeholder {
            color: ${isDark ? "white!important" : "black!important"};
          }
          
             .inst_design_section li,   .inst_design_section p, .inst_design_section h4{
            color: ${isDark ? "white!important" : "black!important"};
          }
          
          .error_page.container  {
          background: ${isDark ? "#646464!important" : "white!important"};
          color: ${isDark ? "white!important" : "black!important"};
          }
          
          .search_btn input {
          background: ${isDark ? "rgba(255, 255, 255, 0.1); " : " rgba(52, 52, 52, 0.1);"};
        color: ${isDark ? "white!important" : "color: #343434!!important"};
          }
          
          .search_icon button svg {
          stroke:  ${isDark ? "#FFFFFF " : "#343434"};
          }
          
          .sorry-message {
         color: ${isDark ? "white!important" : "color: #343434!!important"};
          }
          
       .pagination .page-item.active .page-link, .page-link {
                    background: ${isDark ? "rgba(255, 255, 255, 0.1); " : " rgba(52, 52, 52, 0.1);"};
                            color: ${isDark ? "white!important" : "color: #343434!!important"};
          } 
          
           .pagination .page-item.disabled .page-link {
                    background: ${isDark ? "rgba(255, 255, 255, 0.1); " : " rgba(52, 52, 52, 0.1);"};
                            color: ${isDark ? "rgba(255, 255, 255, 0.5)" : "color: #343434!!important"};
          } 
          
          
          .header_carousel_item {
            background: ${isDark ? "#414141!important" : "#FFFFFF"}
        `}
            </style>
        </>
    );
}

export default ThemeSwitch;