import React, { Children } from "react";
import styled from "styled-components";

const DetailSpan = (props) => {
    const { color, size, display, children, height, width, bold } = props;

    const styles = {
        color: color,
        size: size,
        display: display,
        height: height,
        width: width,
        bold: bold,
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
};

const Span = styled.span`
    display: ${(props) => props.display};
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    ${(props) => (props.bold ? `font-weight: ${props.bold};` : "")}
`;

export default DetailSpan;
