import React from "react";
import defaultProps from "react-slick/lib/default-props";
import styled from "styled-components";

const Grid = (props) => {
    const { width, height, margin, padding, children, isDetail } = props;

    const style = {
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        // bg: bg,
        // center: center,
    };

    if (isDetail) {
        return (
            <React.Fragment>
                <DetailGrid>{children}</DetailGrid>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div></div>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    width: "100%",
    height: "100%",
    margin: false,
    padding: false,
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
`;

export default Grid;
