//장바구니 컴포넌트
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cartActions } from "../redux/modules/cart";
import CartButton from "../components/cart/CartButton";
import CartCategoryList from "../components/cart/CartCategoryList";
import CartResult from "../components/cart/CartResult";
import { Grid } from "../elements/Index";

const Cart = (props) => {

    //장바구니 수정
    const edit = (itemId, itemAmount, itemPrice) => {

        dispatch(cartActions.editCartDB(itemId, itemAmount, itemPrice));
    }

    //카트리스트 받아오기
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(cartActions.readCartDB());
    }, []);
    const cartList = useSelector((state) => state.cart);
    console.log(cartList); //장바구니목록

    return (
    <Wrap>
        <Grid display="block" width="1050px" margin="auto">
            <Grid width="1050px" height="136px" padding="50px 0 51px 0">
                <H2>장바구니</H2>
            </Grid>
            <Grid justifyContent="space-between">
                <Grid flexDirection="column">
                    <CartButton />
                    {/* 카테고리 3개 묶은 컴포넌트 만들기 */}
                    <CartCategoryList cartList={cartList} edit={edit}/>
                    <CartButton />
                </Grid>
                <Grid width="284px">
                    <CartResult />
                </Grid>
            </Grid>
        </Grid>
    </Wrap>
    );
};

const H2 = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    margin: auto;
`;

const Wrap = styled.div`
    height: 870px;
`
export default Cart;
