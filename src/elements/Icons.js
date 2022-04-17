import React from "react";
import styled from "styled-components";

const Icons = (props) => {
    const { width, height, margin, fontSize, display, src, checkIcon } = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        fontSize: fontSize,
        display: display,
        src: src,
    };

    if (checkIcon) {
        return <CheckIcon {...styles} />;
    }

    return <Icon {...styles} />;
};

Icons.defaultProps = {
    width: "30px",
    height: "30px",
    margin: "-3px 9px 0 0",
    fontSize: "18px",
    display: "block",
    src: "",
};

const CheckIcon = styled.span`
    width: 24px;
    height: 24px;
    margin: -2px 12px 0 0;
    display: ${(props) => props.display};

    background-image: url("https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg");
    background-position: 0% 50%;
    background-repeat: no-repeat;
`;

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
    background-position: 0% 50%;
    background-repeat: no-repeat;
`;

export default Icons;
