import React from "react";
import styled from "styled-components";
import PriceForm from "./PriceForm";
import { Grid, DetailSpan } from "../elements/Index";

const OrderList = (props) => {
    return (
        <Grid
            width="284px"
            padding="9px 18px 18px 20px"
            flexDirection="column"
            bg="#f2f2f2"
        >
            <PriceForm>상품금액</PriceForm>
            <PriceForm>상품할인금액</PriceForm>
            <PriceForm>배송비</PriceForm>
            <Grid width="244px">
                <DetailSpan size="12px" color="#5f0080" padding="0 0 0 70px">
                    38,030원 추가주문 시,
                </DetailSpan>
                <DetailSpan
                    size="12px"
                    bold="700"
                    color="#5f0080"
                    padding="0 0 0 5px"
                >
                    무료배송
                </DetailSpan>
            </Grid>
            <Grid
                height="48px"
                margin="17px 0 0 0"
                padding="17px 0 0 0"
                borderTop="1px solid #eeeeee"
            >
                <PriceForm bold="700">결제예정금액</PriceForm>
            </Grid>
            <Grid padding="13px 0 0 0">
                <DetailSpan
                    height="27px"
                    width="244px"
                    size="12px"
                    bold="700"
                    color="#666666"
                    textAlign="right"
                >
                    <Icon>적립</Icon>
                    로그인 후 회원등급에 따라 적립
                </DetailSpan>
            </Grid>
        </Grid>
    );
};

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
