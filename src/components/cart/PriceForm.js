import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, DetailSpan } from '../../elements/Index';

const PriceForm = (props) => {
  const { children, bold, total, discount, your, ship } = props;
  const userCart = useSelector((state) => state.cart.cartList);
  // console.log(userCart, "유저장바구니");
  const priceList =
    //유저카트가 비었을 경우 만들어주기
    userCart.map(
      (itemPrice) =>
        itemPrice.itemAmount *
        Number(itemPrice.itemPrice?.replace('원', '').replace(',', '')),
    );
  // console.log("상품별합계금액", PriceList);
  const totalPrice = priceList.reduce((a, b) => a + b, 0);
  // console.log('총 결제금액', totalPrice);
  const disCountPrice = -Math.floor(totalPrice * 0.001) * 100; //할인금액10%, 10원 이하 버림
  const shippingFee = totalPrice >= 40000 ? 0 : 5000; //배송비
  const yourPrice = totalPrice + disCountPrice + shippingFee; //최종금액

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
              {Number.isNaN(totalPrice) ? 0 : totalPrice}
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
              {Number.isNaN(disCountPrice) ? 0 : disCountPrice}
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
              {Number.isNaN(yourPrice) ? 0 : yourPrice}
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
