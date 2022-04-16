import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { purple, text, _onClick, children, margin, width, height, padding, fontSize, bold, flex } = props;

  const styles = { margin, width, height, padding, fontSize, bold, flex };

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
  height: "44px",
  padding: false,
  fontSize: "16px",
  bold: false,
  flex: false,
};

const PurpleBtn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #5f0080;
  border-radius: 3px;
  max-width: 100%;
  background-color: #5f0080;
  color: #ffffff;
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  text-align: center;
  box-sizing: border-box;
  ${(props) => (props.margin? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding? `padding: ${props.padding};` : "")}
  ${(props) => (props.flex? `display: flex;` : "")}
  &:hover {
    cursor: pointer;
  }
`;

const WhiteBtn = styled.button`
  width: ${(props) => props.width};
  border: 1px solid #5f0080;
  border-radius: 3px;
  max-width: 100%;
  height: 44px;
  background-color: #ffffff;
  color: #5f0080;
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  ${(props) => (props.margin? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding? `padding: ${props.padding};` : "")}
  ${(props) => (props.flex? `display: flex; justify-content: center; align-items: center;` : "")}
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
