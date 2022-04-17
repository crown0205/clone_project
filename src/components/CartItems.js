import React from "react";
import CartButton from "./CartButton";
import CartItem from "../components/CartItem";

const CartItems = (props) => {
    return (
        <React.Fragment>
            <CartButton />
            {/* 냉장 */}
            <CartItem />
            {/* 냉동 */}
            <CartItem />
            {/* 상온 */}
            <CartItem />
        </React.Fragment>
    );
};

export default CartItems;
