import React from "react";
import styled from "styled-components";
import { Button } from "../elements/Index";

const CartAddress = (props) => {
    return (
        <React.Fragment>
            <h3>아이콘, 배송지</h3>
            <p>주소</p>
            <span>샛별배송</span>
            <Button>배송지 변경</Button>
        </React.Fragment>
    );
};

export default CartAddress;
