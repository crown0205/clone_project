import { useSelector } from "react-redux";
import React from "react";
import styled from "styled-components";
import PriceForm from "./PriceForm";
import { Grid, DetailSpan } from "../../elements/Index";

const OrderList = (props) => {
    const userCart = useSelector((state) => state.cart.cartList);
    // console.log(userCart, "유저장바구니");
    const PriceList =
        //유저카트가 비었을 경우 만들어주기
        userCart.map(
            (itemPrice) =>
                itemPrice.itemAmount *
                Number(itemPrice.itemPrice?.replace("원", "").replace(",", ""))
        );
    // console.log("상품별합계금액", PriceList);
    const totalPrice = PriceList.reduce((a, b) => a + b);

    return (
        <Grid
            width="284px"
            padding="9px 18px 18px 20px"
            flexDirection="column"
            bg="#f2f2f2"
        >
            <PriceForm total>상품금액</PriceForm>
            <PriceForm discount>상품할인금액 (20%) </PriceForm>
            <PriceForm ship>배송비</PriceForm>
            <Grid width="244px">
                <DetailSpan
                    width="190px"
                    size="12px"
                    color="#5f0080"
                    padding="0 0 0 70px"
                >
                    {40000 - totalPrice < 0
                        ? ""
                        : 40000 -
                          (Number.isNaN(totalPrice) ? 0 : totalPrice) +
                          "원 추가주문 시,"}
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
                <PriceForm bold="700" your>
                    결제예정금액
                </PriceForm>
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
                    구매 시{" "}
                    {Number.isNaN(totalPrice)
                        ? 0
                        : Math.floor(totalPrice * 0.03)}
                    원 적립
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
