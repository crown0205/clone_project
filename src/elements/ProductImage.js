import React from "react";
import styled from "styled-components";

const ProductImage = (props) => {
    const { href, src } = props;
    const styles = { src: src };

    return (
        <a href={href}>
            <Img {...styles} />
        </a>
    );
};

ProductImage.defaultProps = {
    src: "",
};

const Img = styled.img`
    width: 60px;
    height: 78px;
    margin: 0 0 0 20px;

    cursor: pointer;
    background-image: url("${(props) => props.src}");
    background-repeat: no-repeat;
`;

export default ProductImage;
