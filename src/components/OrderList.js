import React from "react";
import styled from "styled-components";
import PriceForm from "./PriceForm";
import { DetailSpan } from "../elements/Index";

const OrderList = (props) => {
    return (
        <React.Fragment>
            <PriceForm />
            <PriceForm />
            <PriceForm />
            <div>
                <PriceForm />
            </div>
            <PriceBox>
                <DetailSpan bold="700" height="27px">
                    <Icon>적립</Icon>
                    로그인 후, 회원할인가와 적립혜택 제공
                </DetailSpan>
            </PriceBox>
        </React.Fragment>
    );
};

const PriceBox = styled.div`
    padding: 13px 0 0 0;
`;

const Icon = styled.span`
    display: inline-block;
    background: #ffbf00;
    height: 20px;
    width: 38px;
    margin: 0 3px 0 0;
    padding: 3px 0 0 0;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 700;
    font-height: 20px;
    color: #ffffff;
    text-align: center;
    vertical-align: 1px;
`;

export default OrderList;
