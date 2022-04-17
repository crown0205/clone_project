import React from "react";
import styled from "styled-components";
import CartButton from "./CartButton";
import CartItem from "../components/CartItem";

const CartItems = (props) => {
    return (
        <Div>
            <CartButton />
            {/* 냉장 */}
            <CartItem />
            <CartButton />
        </Div>
    );
};

const Div = styled.div``;

export default CartItems;
