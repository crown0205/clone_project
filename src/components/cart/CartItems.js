import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import Package from "./Package";

const CartItems = (props) => {
    const { iceList, coldList, normalList } = props;

    console.log(iceList);
    console.log(coldList);
    console.log(normalList);

    //props로 iceList(냉동), coldList(냉장)값을 넘겨 받아서 if으로 return 제한하기

<<<<<<< HEAD
  return (
    <>
    </>
  );
=======
    if (iceList) {
        return (
            <Div>
                <Package
                    src={
                        "https://res.kurly.com/pc/service/cart/2007/ico_frozen.svg"
                    }
                    category="냉동 상품"
                />
                {/* 아이템 맵 돌리기 */}
                {iceList.map((list, index) => {
                    return <CartItem key={list.itemId} {...list} />;
                })}
            </Div>
        );
    }

    if (coldList) {
        return (
            <Div>
                <Package
                    src={
                        "https://res.kurly.com/pc/service/cart/2007/ico_cold.svg"
                    }
                    category="냉장 상품"
                />
                {/* 아이템 맵 돌리기 */}
                {coldList.map((list, index) => {
                    return <CartItem key={list.itemId} {...list} />;
                })}
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
            {normalList.map((list, index) => {
                return <CartItem key={list.itemId} {...list} />;
            })}
        </Div>
    );
>>>>>>> b559333fbd1e4564f8cd335b521010b9135961b4
};

const Div = styled.div``;

export default CartItems;
