import { useState, useEffect } from "react";
import "./style.css";

function CustomSelect({ options }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCloseIcon, setIsCloseIcon] = useState(false);

    function handleOptionClick(optionValue) {
        if (selectedOptions.includes(optionValue)) {
            setSelectedOptions((prevSelectedOptions) =>
                prevSelectedOptions.filter((option) => option !== optionValue)
            );
        } else {
            setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, optionValue]);
        }
    }

    function handleSelectClick() {
        setIsDropdownOpen((prevState) => !prevState);
        setIsCloseIcon((prevState) => !prevState);
    }

    useEffect(() => {
        const n_service_blocks = [...document.querySelectorAll("article.n_service_block")];
        n_service_blocks.forEach((item) => {
            if (selectedOptions.length > 0) {
                const searchValue = item.innerHTML.toLowerCase();
                if (selectedOptions.some(option => searchValue.includes(option.toLowerCase()))) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            } else {
                item.classList.remove("hidden");
            }
        });
    }, [selectedOptions]);

    function handleRemoveOption(optionValue) {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.filter((option) => option !== optionValue)
        );
    }

    const optionList = options
        .filter((option) => !selectedOptions.includes(option))
        .map((optionValue) => (
            <span
                key={optionValue}
                className="option"
                onClick={() => handleOptionClick(optionValue)}
            >
        {optionValue}
      </span>
        ));




    return (
        <div className="custom-select">
            <div className="select-container" onClick={handleSelectClick}>
                <div className="selected-option">
                    {selectedOptions.length > 0 ? (
                        selectedOptions.map((option) => (
                            <span className="selected-option_item" key={option}>
                {option}
                                <span
                                    className="remove-option"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveOption(option);
                                    }}
                                >
                  &times;
                </span>
              </span>
                        ))
                    ) : (
                        <span className="selected-option_item">All</span>
                    )}
                </div>
                <div className="dropdown-icon">
                    <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4.5 4.5L1 1L4.5 4.5ZM4.5 4.5L8 0.999999L4.5 4.5Z" fill="#343434" />
                        <path
                            d="M1 1L4.5 4.5L8 0.999999"
                            stroke="#343434"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
            {isDropdownOpen && (
                <div className="options">
                    <div className="option-list">{optionList}</div>
                </div>
            )}
        </div>
    );
}

export default CustomSelect;