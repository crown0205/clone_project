import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const {
        type,
        placeholder,
        value,
        _onChange,
        countInput,
        width,
        height,
        fontSize,
        margin,
    } = props;

    const styles = { width, height, fontSize, margin };

    if (countInput) {
        return (
            <CountInput
                type={type}
                value={value}
                onChange={_onChange}
                {...styles}
            ></CountInput>
        );
    }

    return (
        <Textarea
            {...styles}
            type={type}
            placeholer={placeholder}
            value={value}
            onChange={_onChange}
        />
    );
};

Input.defaultProps = {
    type: "text",
    placeholder: "",
    value: "",
    _onChange: () => {},
    width: "332px",
    height: "44px",
    fontSize: "",
    margin: false,
};

const Textarea = styled.input`
    border: 1px solid #333333;
    width: ${(props) => props.width};
    max-width: 100%;
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: 0 14px 0 14px;
    box-sizing: border-box;
    border-radius: 3px;
    .placeholder {
        color: #cccccc;
    }
`;

const CountInput = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: 14px;
    font-weight: 500;

    text-align: center;
    background-color: transparent;
    background-position: 0% 0%;
    color: #333333;
    margin: -1px -1px 0 -1px;
    padding: 4px 0;
    max-width: 100%;
    border: none;
`;

export default Input;
