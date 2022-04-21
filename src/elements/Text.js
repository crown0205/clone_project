import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { bold, color, size, children, width, height, padding } = props;

    const styles = { bold, color, size, width, height, padding };
    return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
    children: null,
    bold: false,
    color: "#333333",
    size: "16px",
    width: "",
    heignt: "",
    padding: "",
};

const P = styled.p`
    font-family: "Noto Sans KR";
    font-weight: ${(props) => (props.bold ? "700" : "500")};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
`;

export default Text;
