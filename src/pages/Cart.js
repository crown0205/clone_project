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
    //카트리스트 받아오기

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(cartActions.readCartDB());
    }, []);
    const cartList = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    //장바구니목록

    //전체선택, 선택삭제, 주문하기 위한 아이템아이디리스트
    const totalitemId = cartList.cartList.map(
        (itemId, index) => cartList.cartList[index].itemId
    );
    //처음 스테이트는 전체선택
    const [confirmList, setConfirmList] = React.useState(totalitemId);
    // 전체선택을 위한 함수 onClick
    const selectAll = () => {
        confirmList?.length === totalitemId.length
            ? setConfirmList("")
            : setConfirmList(totalitemId);
    };

    //선택삭제 _onClick
    const deleteCartList = () => {
        if (confirmList.length === 0) {
            window.alert("삭제할 상품을 선택해주세요!");
            return;
        }

        console.log(confirmList);
        const userId = user.user[0].userId;
        const deleteCartList = {
            userId: userId,
            itemId: confirmList,
        };
        console.log(deleteCartList);

        dispatch(cartActions.deleteCartDB(deleteCartList));
    };

    return (
        <Wrap>
            <Grid display="block" width="1050px" margin="auto">
                <Grid width="1050px" height="136px" padding="50px 0 51px 0">
                    <H2>장바구니</H2>
                </Grid>
                <Grid justifyContent="space-between">
                    <Grid flexDirection="column">
                        <CartButton
                            onClick={selectAll}
                            _onClick={deleteCartList}
                            confirmList={confirmList}
                        />
                        {/* 카테고리 3개 묶은 컴포넌트 만들기 */}
                        <CartCategoryList
                            cartList={cartList}
                            confirmList={confirmList}
                            setConfirmList={setConfirmList}
                            // onClick={selectOne}
                        />
                        {/* <CartButton onClick={selectAll} /> */}
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
`;
export default Cart;
