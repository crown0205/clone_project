import React from "react";
import CartItems from "./CartItems";
import { actionCreators as cartActions } from "../redux/modules/cart";
import { useDispatch, useSelector } from "react-redux";

const CartCategoryList = (props) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(cartActions.readCartDB());
    }, []);

    const CartList = useSelector((state) => state.cart);

    return (
        <React.Fragment>
            <CartItems ice />
            <CartItems cold />
            <CartItems />
        </React.Fragment>
    );
};

export default CartCategoryList;
