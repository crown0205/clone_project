//장바구니 컴포넌트
import React from "react";
import styled from "styled-components";
import CartItems from "../components/CartItems";
import CartResult from "../components/CartResult";

const Cart = (props) => {
    return (
        <React.Fragment>
            <div>장바구니</div>
            <CartItems />
            <CartResult />
        </React.Fragment>
    );
};

export default Cart;
