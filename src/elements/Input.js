import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { type, placeholder, value, _onChange, width, height, margin } = props;

  const styles = { width, height, margin };

  return (
    <Textarea
      {...styles}
      type={type}
      placeholder={placeholder}
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
export default Input;
