import React from "react";
import CartItems from "./CartItems";

const CartCategoryList = (props) => {
    //어떻게 각각 넣어줘야하나?
    console.log(props);
    return (
        <React.Fragment>
            <CartItems ice />
            <CartItems cold />
            <CartItems />
        </React.Fragment>
    );
};

export default CartCategoryList;
