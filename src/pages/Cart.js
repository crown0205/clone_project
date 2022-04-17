//장바구니 컴포넌트
import React from "react";
import styled from "styled-components";
import CartItems from "../components/CartItems";
import CartResult from "../components/CartResult";
import { Grid } from "../elements/Index";
const Cart = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <H2>장바구니</H2>
            </Grid>
            <CartItems />
            <CartResult />
        </React.Fragment>
    );
};

const H2 = styled.h2`
    font-size: 28px;
`;

export default Cart;
