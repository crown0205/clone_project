import React from "react";
import CartItems from "./CartItems";

const CartCategoryList = (props) => {
    const { cartList, confirmList, setConfirmList, onClick, edit } = props;
    //필터? 맵? 으로 각각 카테고리 리스트 고르기

    const iceCategory = cartList.cartList.filter(
        (list) => list.itemCategory === "maindish"
    );
    // console.log("냉동리스트", iceCategory);

    const coldCategory = cartList.cartList.filter(
        (list) => list.itemCategory === "vegetable"
    );
    // console.log("냉장리스트", coldCategory);

    const normalCategory = cartList.cartList.filter(
        (list) =>
            list.itemCategory === "bakery" || list.itemCategory === "mealkit"
    );
    // console.log("상온리스트", normalCategory);

    return (
        <React.Fragment>
            <CartItems
                iceList={iceCategory}
                confirmList={confirmList}
                setConfirmList={setConfirmList}
                onClick={onClick}
                edit={edit}
            />
            <CartItems
                coldList={coldCategory}
                confirmList={confirmList}
                setConfirmList={setConfirmList}
                onClick={onClick}
            />
            <CartItems
                normalList={normalCategory}
                confirmList={confirmList}
                setConfirmList={setConfirmList}
                onClick={onClick}
            />
        </React.Fragment>
    );
};

export default CartCategoryList;
