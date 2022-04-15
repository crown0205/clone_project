import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { width, height, margin, padding, children, src, bg, isDetail } =
        props;

    const styles = {
        src: src,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        bg: bg,
        // center: center,
    };

    return (
        <React.Fragment>
            <DetailGrid {...styles}>{children}</DetailGrid>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    width: "100%",
    height: "100%",
    margin: false,
    padding: false,
    bg: "red",
    src: "",
    // children: null,
    // is_flex: false,
    // bg: false,
    // center: false,
};

const DetailGrid = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    background: ${(props) => props.bg};
    background-image: url("${(props) => props.src}");
`;

export default Grid;
