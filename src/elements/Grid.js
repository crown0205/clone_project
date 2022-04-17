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
    };

    return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
    width: "100%",
    height: "",
    margin: "",
    padding: "",
    display: "flex",
    justifyContent: "",
    bg: "",
    borderTop: "",
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    display: ${(props) => props.display};
    background: ${(props) => props.bg};
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    border-top: ${(props) => props.borderTop};
`;

export default Grid;
