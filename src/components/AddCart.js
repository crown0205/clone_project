import React from "react";
import styled from "styled-components";
import Count from "./Count";
import { DetailSpan, Button } from "../elements/Index";

const AddCart = (props) => {
    return (
        <CartList>
            <ItemCount>
                <DetailSpan width="140px" display="inline" color="#666666">
                    구매수량
                </DetailSpan>
                <div>
                    <Count detail />
                </div>
            </ItemCount>

            <TotalPrice>
                <PriceBox>
                    <DetailSpan bold="700" height="27px">
                        <Icon>적립</Icon>
                        로그인 후, 회원할인가와 적립혜택 제공
                    </DetailSpan>
                </PriceBox>
                <div>
                    <DetailSpan
                        size="13px"
                        display="inline"
                        height="auto"
                        bold="700"
                    >
                        총 상품금액:
                    </DetailSpan>
                    <DetailSpan
                        size="32px"
                        height="auto"
                        display="inline"
                        bold="700"
                    >
                        1,970
                    </DetailSpan>
                    <DetailSpan
                        size="20px"
                        bold="700"
                        display="inline"
                        height="auto"
                    >
                        원
                    </DetailSpan>
                </div>
            </TotalPrice>
            <Cart>
                <Button purple width="432px" height="56px" size="16px">
                    장바구니 담기
                </Button>
            </Cart>
        </CartList>
    );
};

const CartList = styled.div`
    padding: 0 0 40px 0;
    display: flex;
    flex-direction: column;
`;

const ItemCount = styled.div`
    display: flex;
    align-items: flex-start;
    height: 53px;
    padding: 10px 0 0 0;
`;

const TotalPrice = styled.div`
    height: 117px;
    padding: 30px 0 20px 0;
    display: flex;
    align-items: flex-end;
    flex-direction: column-reverse;
`;

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

const Cart = styled.div`
    height: 56px;
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
`;

export default AddCart;
