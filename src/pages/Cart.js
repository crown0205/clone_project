//장바구니 컴포넌트
import React from "react";
import styled from "styled-components";
import CartButton from "../components/CartButton";
import CartCategoryList from "../components/CartCategoryList";
import CartResult from "../components/CartResult";
import { Grid } from "../elements/Index";
const Cart = (props) => {
    return (
        <Grid display="block" width="1050px" margin="auto">
            <Grid width="1050px" height="136px" padding="50px 0 51px 0">
                <H2>장바구니</H2>
            </Grid>
            <Grid justifyContent="space-between">
                <Grid flexDirection="column">
                    <CartButton />
                    {/* 카테고리 3개 묶은 컴포넌트 만들기 */}
                    <CartCategoryList />
                    <CartButton />
                </Grid>
                <Grid width="284px">
                    <CartResult />
                </Grid>
            </Grid>
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
