import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const { width, height, src, children, backgroundSize } = props;

    const styles = {
        src: src,
        width: width,
        height: height,
        backgroundSize: backgroundSize,
    };

    return (
        <React.Fragment>
            {/* <AspectOutter> */}
            <AspectInner {...styles}>{children}</AspectInner>
            {/* </AspectOutter> */}
        </React.Fragment>
    );
};

Image.defaultProps = {
    width: "100%",
    height: "100%",
    src: "",
    backgroundSize: "cover",
};

// const AspectOutter = styled.div`
//     width: 100%;
//     max-width: 100%;
//     height: 100%;
// `;

const AspectInner = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-image: url("${(props) => props.src}");
    background-size: ${(props) => props.backgroundSize};
`;

export default Image;
