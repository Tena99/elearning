import "./style.css";
import {useState} from "react";


function ThemeSwitch() {
    const [isDark, setIsDark] = useState(false);

    const handleToggle = () => {
        setIsDark(!isDark);
    };

    return (
        <>
            <input
                type="checkbox"
                id="toggle"
                checked={isDark}
                onChange={handleToggle}
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
              background: #646464!important;
               color: white!important;
          }
          
          .header_carousel_item {
            background: ${isDark ? "#414141!important" : "#FFFFFF"}
        `}
            </style>
        </>
    );
}

export default ThemeSwitch;