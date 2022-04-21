import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import Package from "./Package";

const CartItems = (props) => {
    const {
        iceList,
        coldList,
        normalList,
        confirmList,
        setConfirmList,
        onClick,
        edit,
    } = props;
<<<<<<< HEAD
    // console.log(iceList);
=======
>>>>>>> 4c0450db90f9929cc880e9c71199981f1dd803ea
    // console.log(coldList);
    // console.log(normalList);

    //props로 iceList(냉동), coldList(냉장)값을 넘겨 받아서 if으로 return 제한하기

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
                    return (
                        <CartItem
                            key={list.itemId}
                            {...list}
                            confirmList={confirmList}
                            onClick={onClick}
                            setConfirmList={setConfirmList}
                            edit={edit}
                        />
                    );
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
                    return (
                        <CartItem
                            key={list.itemId}
                            {...list}
                            confirmList={confirmList}
                            setConfirmList={setConfirmList}
                            edit={edit}
                        />
                    );
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
                return (
                    <CartItem
                        key={list.itemId}
                        {...list}
                        confirmList={confirmList}
                        setConfirmList={setConfirmList}
                        edit={edit}
                    />
                );
            })}
        </Div>
    );
};

const Div = styled.div``;

export default CartItems;
