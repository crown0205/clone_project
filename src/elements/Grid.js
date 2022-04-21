import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {
        children,
        width,
        height,
        margin,
        padding,
        paddingTop,
        display,
        justifyContent,
        bg,
        border,
        borderTop,
        borderBottom,
        position,
        flexDirection,
        alignItems,
    } = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        paddingTop: paddingTop,
        display: display,
        justifyContent: justifyContent,
        bg: bg,
        border: border,
        borderTop: borderTop,
        borderBottom: borderBottom,
        position: position,
        flexDirection: flexDirection,
        alignItems: alignItems,
    };

    return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
    width: "",
    height: "",
    margin: "",
    padding: "",
    paddingTop: "",
    display: "flex",
    justifyContent: "",
    bg: "",
    border: "",
    borderTop: "",
    borderBottom: "",
    position: "",
    flexDirection: "",
    alignItems: "",
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    ${(props) => (props.paddingTop ? `padding-top: ${props.paddingTop};` : "")}
    display: ${(props) => props.display};
    background: ${(props) => props.bg};
    justify-content: ${(props) => props.justifyContent};
    border: ${(props) => props.border};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    position: ${(props) => props.position};
    flex-direction: ${(props) => props.flexDirection};
    align-items: ${(props) => props.alignItems};
`;

export default Grid;
