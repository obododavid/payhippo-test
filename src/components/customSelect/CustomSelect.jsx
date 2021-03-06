import React from "react";
import Select from "react-select";
import "./CustomSelect.scss";

const CustomSelect = ({ options, onChange, value, placeholder, error, touched, name, id, handleBlurDropdown }) => {
    const customStyles = {
        valueContainer: (provided, state) => ({
            ...provided,
            padding: "0px 15px"
        }),
        input: (provided, state) => ({
            ...provided,
            padding: "0px",
            margin: "0px",
            fontFamily: "markpro"
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: "pointer",
            paddingLeft: "15px",
            fontFamily: "markpro"
        }),
        control: () => ({
            border: "1px solid #cdd1de",
            display: "flex",
            // height: "50px",
            borderRadius: "5px",
            backgroundColor: "#fff",
            cursor: "pointer"
        }),
        placeholder: (provided, state) => ({
            ...provided,
            transform: "translateY(0px)",
            position: "static",
            top: "0px",
            fontFamily: "markpro"
        }),
        indicatorSeparator: () => ({
            width: "0px"
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            paddingRight: "15px"
        }),
        menu: (provided, state) => {
            return {
                ...provided,
                padding: "0px",
                margin: "0px",
                borderRadius: "0px 0px 5px 5px",
                transform: "translateY(-5px)",
                boxShadow: "0px",
                border: "1px solid #cdd1de",
                borderTop: "0px"
            };
        },
        singleValue: (provided, state) => ({
            ...provided,
            opacity: state.isDisabled ? 0.5 : 1,
            transition: "opacity 300ms",
            transform: "translateY(0px)",
            position: "static",
            top: "0px",
            cursor: "pointer",
            fontFamily: "markpro"
        })
    };

    return (
        <div>
            <Select
                styles={customStyles}
                options={options}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className="select-wrapper"
                onBlur={handleBlurDropdown}
            />
            {touched && error ? <h5 className="error-message">{error}</h5> : null}
        </div>
    );
};

export default CustomSelect;
