//장바구니 컴포넌트
import React from "react";
import styled from "styled-components";
import CartItems from "../components/CartItems";
import CartResult from "../components/CartResult";
import { Grid } from "../elements/Index";
const Cart = (props) => {
    return (
        <Grid display="block" width="1050px" margin="auto">
            <Grid width="1050px" height="136px" padding="50px 0 51px 0">
                <H2>장바구니</H2>
            </Grid>
            <CartItems />
            <CartResult />
        </Grid>
    );
};

const H2 = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    margin: auto;
`;

export default Cart;
