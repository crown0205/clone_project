import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {
        children,
        width,
        height,
        margin,
        padding,
        display,
        justifyContent,
        bg,
        borderTop,
        borderBottom,
        borderRight,
        borderLeft,
        position,
        flexDirection,
        alignItems,
    } = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        display: display,
        justifyContent: justifyContent,
        bg: bg,
        borderTop: borderTop,
        borderBottom: borderBottom,
        borderRight: borderRight,
        borderLeft: borderLeft,
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
    display: "flex",
    justifyContent: "",
    bg: "",
    borderTop: "",
    borderBottom: "",
    borderRight: "",
    borderLeft: "",
    position: "",
    flexDirection: "",
    alignItems: "",
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    display: ${(props) => props.display};
    background: ${(props) => props.bg};
    justify-content: ${(props) => props.justifyContent};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};
    // position: ${(props) => props.position};
    flex-direction: ${(props) => props.flexDirection};
    align-items: ${(props) => props.alignItems};
`;

export default Grid;
