import React from "react";
import styled from "styled-components";

const Icons = (props) => {
    const { width, height, margin, fontSize, display, src } = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        fontSize: fontSize,
        display: display,
        src: src,
    };

    return (
        <React.Fragment>
            <Icon {...styles} />
        </React.Fragment>
    );
};

Icons.defaultProps = {
    width: "30px",
    height: "30px",
    margin: "-3px 9px 0 0",
    fontSize: "18px",
    display: "block",
    src: "",
};

const Icon = styled.span`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};

    // font-size: ${(props) => props.fontSize};
    // font-weight: 700;
    // line-height: 25px;
    // color: #333333;

    display: ${(props) => props.display};
    background-image: url("${(props) => props.src}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
`;

export default Icons;
