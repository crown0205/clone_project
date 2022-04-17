import React from "react";
import styled from "styled-components";
import CartButton from "./CartButton";
import CartItem from "../components/CartItem";
import Package from "./Package";

const CartItems = (props) => {
    return (
        <Div>
            <Package />
            {/* 아이템 맵 돌리기 */}
            <CartItem />
            <CartItem />
            <CartItem />
        </Div>
    );
};

const Div = styled.div``;

export default CartItems;
