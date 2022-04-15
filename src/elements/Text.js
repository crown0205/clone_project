import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { weight, color, size, children } = props;

  const styles = { weight: weight, color: color, size: size };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  weight: "400",
  color: "#333333",
  size: "16px",
};

const P = styled.p`
  font-family: "Noto Sans KR";
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
`;

export default Text;
