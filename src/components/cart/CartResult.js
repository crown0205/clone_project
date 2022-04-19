import React from "react";
import CartAddress from "./CartAddress";
import OrderList from "./OrderList";
import { Grid, Button, DetailSpan } from "../../elements/Index";

const CartResult = (props) => {
    return (
        <Grid display="block" position="fixed" bg="#fff">
            <Grid display="block" border="1px solid #fafafa">
                <CartAddress />
                <OrderList />
            </Grid>
            <Grid height="76px" padding="20px 0 0 0">
                <Button
                    purple
                    width="284px"
                    height="56px"
                    padding="0 0 2px 0"
                    bold
                >
                    주문하기
                </Button>
            </Grid>
            <Grid width="284px" flexDirection="column" padding="34px 0 0 0">
                <DetailSpan size="12px" color="#666666" letterSpacing="-1px">
                    · 쿠폰/적립금은 주문서에서 사용 가능합니다
                </DetailSpan>
                <DetailSpan size="12px" color="#666666" letterSpacing="-1px">
                    · [배송준비중] 이전까지 주문 취소 가능합니다.
                </DetailSpan>
                <DetailSpan size="12px" color="#666666" letterSpacing="-1px">
                    · [마이컬리>주문내역 상세페이지] 에서 직접 취소하실 수
                    있습니다.
                </DetailSpan>
            </Grid>
        </Grid>
    );
};

export default CartResult;
