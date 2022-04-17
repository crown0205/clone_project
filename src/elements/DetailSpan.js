import React, { Children } from "react";
import styled from "styled-components";

const DetailSpan = (props) => {
    const {
        padding,
        color,
        size,
        display,
        children,
        height,
        width,
        bold,
        textAlign,
    } = props;

    const styles = {
        color: color,
        size: size,
        display: display,
        height: height,
        width: width,
        bold: bold,
        textAlign: textAlign,
        padding: padding,
    };

    return (
        <React.Fragment>
            <Span {...styles}>{children}</Span>
        </React.Fragment>
    );
};

DetailSpan.defaultProps = {
    display: "block",
    size: "14px",
    color: "#333333",
    height: "20px",
    width: "auto",
    bold: false,
    textAlign: "",
    padding: "",
};

const Span = styled.span`
    display: ${(props) => props.display};
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    ${(props) => (props.bold ? `font-weight: ${props.bold};` : "")}
    text-align:  ${(props) => props.textAlign};
    padding: ${(props) => props.padding};
`;

export default DetailSpan;
