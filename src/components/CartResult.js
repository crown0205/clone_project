import React from "react";
import CartButton from "./CartButton";
import CartAddress from "./CartAddress";
import OrderList from "./OrderList";
import Button from "../elements/Button";

const CartResult = (props) => {
    return (
        <React.Fragment>
            <CartButton />
            <CartAddress />
            <OrderList />
            <Button></Button>
            <div>
                <span>쿠폰/적립금은 주문서에서 사용 가능합니다</span>
                <span>[배송준비중] 이전까지 주문 취소 가능합니다.</span>
                <span>
                    [마이컬리>주문내역 상세페이지] 에서 직접 취소하실 수
                    있습니다.
                </span>
            </div>
        </React.Fragment>
    );
};

export default CartResult;
