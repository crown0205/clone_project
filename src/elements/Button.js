import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    purple,
    text,
    _onClick,
    children,
    margin,
    width,
    height,
    padding,
    fontSize,
    bold,
    flex,
    small,
    src,
    size,
    backgroundColor,
    border,
    deactivate,
  } = props;

  const styles = {
    margin,
    width,
    height,
    padding,
    fontSize,
    bold,
    flex,
    small,
    src,
    size,
    backgroundColor,
    border,
    deactivate,
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

  if (small) {
    return (
      <React.Fragment>
        <SmallBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallBtn>
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
  small: false,
  src: "",
  size: "",
  backgroundColor: "",
  border: "",
  deactivate: "",
};

const PurpleBtn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border? props.border : "1px solid #5f0080"};
  border-radius: 3px;
  max-width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#5f0080"};
  color: #ffffff;
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  text-align: center;
  box-sizing: border-box;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.flex ? `display: flex;` : "")}
  cursor: ${(props) => props.deactivate? props.deactivate : "pointer"};
`;

const WhiteBtn = styled.button`
  width: ${(props) => props.width};
  border: 1px solid #5f0080;
  border-radius: 3px;
  max-width: 100%;
  height: ${(props) => props.height};
  background-color: #ffffff;
  color: #5f0080;
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) =>
    props.flex
      ? `display: flex; justify-content: center; align-items: center;`
      : ""}
  cursor: pointer;
`;

const SmallBtn = styled.button`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  font-size: 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: ${(props) => props.margin};

  background-color: #fff;
  background-image: url("${(props) => props.src}");
  // background-position: 50% 50%;
  // background-repeat: no-repeat;
`;
export default Button;
