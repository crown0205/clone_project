import React, { Children } from "react";
import styled from "styled-components";

const DetailSpan = (props) => {
    const {
        margin,
        padding,
        color,
        size,
        display,
        children,
        height,
        width,
        bold,
        textAlign,
        lineHeight,
        letterSpacing,
    } = props;

    const styles = {
        color: color,
        size: size,
        display: display,
        height: height,
        width: width,
        bold: bold,
        textAlign: textAlign,
        margin: margin,
        padding: padding,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
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
    margin: "",
    padding: "",
    lineHeight: "",
    letterSpacing: "",
};

const Span = styled.span`
    display: ${(props) => props.display};
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    ${(props) => (props.bold ? `font-weight: ${props.bold};` : "")}
    text-align:  ${(props) => props.textAlign};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
`;

export default DetailSpan;
