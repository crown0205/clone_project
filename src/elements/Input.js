import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { type, placeholder, value, _onChange } = props;

  return <Textarea type={type} placeholer={placeholder} value={value} onChange={_onChange}/>;
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  _onChange: () => {},
  width: "332px",
};

const Textarea = styled.input`
  border: 1px solid #333333;
  width: ${(props) => props.width};
  max-width: 100%;
  height: "44px";
  padding: "0 14px 0 14px";
  box-sizing: border-box;
`;
export default Input;
