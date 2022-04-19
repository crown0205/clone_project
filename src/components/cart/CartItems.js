import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import Package from "./Package";

const CartItems = (props) => {
  const { ice, cold } = props;

  //props로 ice(냉동), cold(냉장)값을 넘겨 받아서 if으로 return 제한하기

  const user = useSelector((state) => state.user.user);
  const userCart = user[0]?.userCart;
  console.log(user[0]?._id, userCart);

  return (
    <>
      {userCart?.map((i, idx) => {
        if (ice) {
          return (
            <Div>
              <Package
                src={
                  "https://res.kurly.com/pc/service/cart/2007/ico_frozen.svg"
                }
                category="냉동 상품"
              />
              <CartItem key={user[0]._id} {...i} />
            </Div>
          );
        } else if (cold) {
          return (
            <Div>
              <Package
                src={"https://res.kurly.com/pc/service/cart/2007/ico_cold.svg"}
                category="냉장 상품"
              />
              <CartItem key={user[0]._id} {...i} />
            </Div>
          );
        } else {
          return (
            <Div>
              <Package
                src={
                  "https://res.kurly.com/pc/service/cart/2009/ico_room_v2.svg?v=1"
                }
                category="상온 상품"
              />
              <CartItem key={user[0]._id} {...i} />
            </Div>
          );
        }
      })}
      ; )
    </>
  );
};

const Div = styled.div`
`;

export default CartItems;
