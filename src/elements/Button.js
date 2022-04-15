import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { purple, text, _onClick, children, margin, width, padding, fontSize, bold } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    fontSize: fontSize,
    bold: bold,
  };

  if (purple) {
    return (
      <React.Fragment>
        <PurpleBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </PurpleBtn>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <WhiteBtn {...styles} onClick={_onClick}>
        {text ? text : children}
      </WhiteBtn>
    </React.Fragment>
  );
};

Button.defaultProps = {
  purple: false,
  text: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: "",
  padding: false,
  fontSize: "",
  bold: false,
};

const PurpleBtn = styled.button`
  width: ${(props) => props.width};
  border: 1px solid #5f0080;
  border-radius: 3px;
  max-width: 100%;
  height: 54px;
  background-color: #5f0080;
  color: #ffffff;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  text-align: center;
  box-sizing: border-box;
  ${(props) => (props.margin? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding? `padding: ${props.padding};` : "")}
`;

const WhiteBtn = styled.button`
  width: ${(props) => props.width};
  border: 1px solid #5f0080;
  border-radius: 3px;
  max-width: 100%;
  height: 54px;
  background-color: #ffffff;
  color: #5f0080;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  ${(props) => (props.margin? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding? `padding: ${props.padding};` : "")}
`;

export default Button;
