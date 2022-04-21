import React from "react";
import styled from "styled-components";
import Count from "../../components/Count";
import { actionCreators as cartActions } from "../../redux/modules/cart";
import {
    Grid,
    Icons,
    DetailSpan,
    ProductImage,
    Button,
} from "../../elements/Index";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
    const {
        itemId,
        itemName,
        itemAmount,
        itemPrice,
        itemImg,
        itemCategory,
        userAddress,
        userId,
        confirmList,
        setConfirmList,
        onClick,
        edit,
    } = props;
    const href = "http://localhost:3000/detail/" + itemId;
    const dispatch = useDispatch();

    //상품 수량 변동 부분
    const [count, setCount] = React.useState(itemAmount);

    const detailPrice = itemPrice.replace("원", "").replace(",", "");

    // 수량 * 원가
    let multiplyPrice = detailPrice * count;

    // 천단위 콤마 찍어주는 함수
    const totalPrice = multiplyPrice.toLocaleString("ko-KR");

    const countMinus = () => {
        if (count > 1) {
            dispatch(cartActions.countCart(itemId, count - 1));
            edit(itemId, count - 1, detailPrice + "원");
            setCount(count - 1);
        }
    };

    const countPlus = () => {
        dispatch(cartActions.countCart(itemId, count + 1));
        edit(itemId, count + 1, detailPrice + "원");
        setCount(count + 1);
    };

    const selectOne = () => {
        confirmList.includes(itemId)
            ? setConfirmList(confirmList.filter((id) => id !== itemId))
            : setConfirmList(confirmList.push(itemId));
    };

    return (
        <Grid flexDirection="column">
            <Grid
                width="742px"
                height="128px"
                display="flex"
                borderBottom="1px solid #f4f4f4"
            >
                <Grid alignItems="center" width="463px">
                    <Icons
                        itemId={itemId}
                        checkIcon
                        checkUrl={
                            confirmList?.includes(itemId)
                                ? "https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg"
                                : "https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg"
                        }
                        onClick={selectOne}
                    />
                    <ProductImage
                        href={href} //props 또 넘겨야 할듯
                        src={itemImg}
                    />

                    <Grid width="327px" margin="0 0 5px 20px">
                        <A href={href}>{itemName}</A>
                    </Grid>
                </Grid>
                <Grid
                    width="279px"
                    position="relative"
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0 0 5px 0"
                >
                    <Count
                        count={count}
                        countMinus={countMinus}
                        countPlus={countPlus}
                    />
                    <DetailSpan
                        width="116px"
                        size="16px"
                        bold="700"
                        textAlign="right"
                    >
                        {totalPrice}원
                    </DetailSpan>

                    <Button
                        small
                        size="30px"
                        margin="0 10px 0 0"
                        src="https://res.kurly.com/pc/service/cart/2007/ico_delete.svg"
                    ></Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

const A = styled.a`
    width: 327px;
    font-weight: 700;
    text-decoration: none;
    color: #333333;
    letter-spacing: -0.8px;
`;

export default CartItem;
