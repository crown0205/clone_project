import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, DetailSpan } from "../../elements/Index";

const PriceForm = (props) => {
    const { children, bold, total, discount, your, ship } = props;
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
    // console.log('총 결제금액', totalPrice);
    const disCountPrice = -totalPrice * 0.2; //할인금액20%
    const yourPrice = totalPrice + disCountPrice; //최종금액
    const shippingFee = totalPrice >= 40000 ? 0 : 5000; //배송비

    if (total) {
        return (
            <Grid height="36px" width="284px" alignItems="center">
                <Dl>
                    <Dt>{children}</Dt>
                    <Grid>
                        <DetailSpan
                            size="18px"
                            color="#4c4c4c"
                            lineHeight="19px"
                            bold={bold}
                        >
                            {totalPrice}
                        </DetailSpan>
                        <DetailSpan size="16px" color="#4c4c4c">
                            원
                        </DetailSpan>
                    </Grid>
                </Dl>
            </Grid>
        );
    }
    if (discount) {
        return (
            <Grid height="36px" width="284px" alignItems="center">
                <Dl>
                    <Dt>{children}</Dt>
                    <Grid>
                        <DetailSpan
                            size="18px"
                            color="#4c4c4c"
                            lineHeight="19px"
                            bold={bold}
                        >
                            {disCountPrice}
                        </DetailSpan>
                        <DetailSpan size="16px" color="#4c4c4c">
                            원
                        </DetailSpan>
                    </Grid>
                </Dl>
            </Grid>
        );
    }
    if (your) {
        return (
            <Grid height="36px" width="284px" alignItems="center">
                <Dl>
                    <Dt>{children}</Dt>
                    <Grid>
                        <DetailSpan
                            size="18px"
                            color="#4c4c4c"
                            lineHeight="19px"
                            bold={bold}
                        >
                            {yourPrice}
                        </DetailSpan>
                        <DetailSpan size="16px" color="#4c4c4c">
                            원
                        </DetailSpan>
                    </Grid>
                </Dl>
            </Grid>
        );
    }
    if (ship) {
        return (
            <Grid height="36px" width="284px" alignItems="center">
                <Dl>
                    <Dt>{children}</Dt>
                    <Grid>
                        <DetailSpan
                            size="18px"
                            color="#4c4c4c"
                            lineHeight="19px"
                            bold={bold}
                        >
                            {shippingFee}
                        </DetailSpan>
                        <DetailSpan size="16px" color="#4c4c4c">
                            원
                        </DetailSpan>
                    </Grid>
                </Dl>
            </Grid>
        );
    }
};
const Dl = styled.dl`
    width: 244px;
    display: flex;
    justify-content: space-between;
`;
const Dt = styled.dt`
    font-size: 16px;
    color: #4c4c4c;
`;

export default PriceForm;
