import React from "react";
import styled from "styled-components";
import CartButton from "./CartButton";
import CartItem from "../components/CartItem";
import Package from "./Package";

const CartItems = (props) => {
    const { ice, cold } = props;

    //props로 ice(냉동), cold(냉장)값을 넘겨 받아서 if으로 return 제한하기

    if (ice) {
        return (
            <Div>
                <Package
                    src={
                        "https://res.kurly.com/pc/service/cart/2007/ico_frozen.svg"
                    }
                    category="냉동 상품"
                />
                {/* 아이템 맵 돌리기 */}
                <CartItem />
                <CartItem />
                <CartItem />
            </Div>
        );
    }

    if (cold) {
        return (
            <Div>
                <Package
                    src={
                        "https://res.kurly.com/pc/service/cart/2007/ico_cold.svg"
                    }
                    category="냉장 상품"
                />
                {/* 아이템 맵 돌리기 */}
                <CartItem />
                <CartItem />
                <CartItem />
            </Div>
        );
    }

    return (
        <Div>
            <Package
                src={
                    "https://res.kurly.com/pc/service/cart/2009/ico_room_v2.svg?v=1"
                }
                category="상온 상품"
            />
            {/* 아이템 맵 돌리기 */}
            <CartItem />
            <CartItem />
            <CartItem />
        </Div>
    );
};

const Div = styled.div``;

export default CartItems;
