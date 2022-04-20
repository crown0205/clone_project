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
    </>
  );
};

const Div = styled.div``;

export default CartItems;
