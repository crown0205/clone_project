import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailSlider from "../components/DetailSlider";
import { useDispatch } from "react-redux";
import { actionCreators as cartActions } from "../redux/modules/cart";
import { Image, Button, DetailSpan, Input } from "../elements/Index";

const Detail = () => {
    const dispatch = useDispatch();
    const [count, setCount] = React.useState(1);

    console.log(count);

    const countMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const countPlus = () => {
        setCount(count + 1);
    };

    const addCart = () => {
        console.log("addcart시작", count);
        //상품정보 받아오기

        const item_list = {
            itemId: "헬로",
            itemName: "123",
            itemAmount: count,
            itemPrice: "456",
            itemImg: "789",
        };

        dispatch(cartActions.addCartDB(item_list));
    };

    return (
        <React.Fragment>
            <ContainerBox>
                <Main>
                    <ImageBox>
                        <div>
                            <Image
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2FdetailItemImage.PNG?alt=media&token=c5c771d3-2cf7-4c49-8c59-52024d7d7c68"
                                }
                            />
                        </div>
                    </ImageBox>

                    <OrderBox>
                        <TitleBox>
                            <strong>
                                [연세우유 x 마켓컬리] 전용목장우유 900mL
                            </strong>
                            <DetailSpan color="#999999">
                                가격, 퀄리티 모두 만족스러운 1A등급 우유
                            </DetailSpan>
                        </TitleBox>
                        <Price>
                            <DetailSpan
                                size="28px"
                                height="auto"
                                display="inline"
                                bold="700"
                            >
                                1,970
                            </DetailSpan>
                            <DetailSpan display="inline" height="auto">
                                원
                            </DetailSpan>

                            <DetailSpan height="27px" color="#5F0080">
                                로그인 후, 적립혜택이 제공됩니다.
                            </DetailSpan>
                        </Price>
                        <ItemInfo>
                            <Image
                                width="auto"
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2FdetailInfo.PNG?alt=media&token=bf55b666-3e14-493e-ac17-9d86d7d15832"
                                }
                            />
                        </ItemInfo>
                        {/* <AddCart /> */}
                        <CartList>
                            <ItemCount>
                                <DetailSpan
                                    width="140px"
                                    display="inline"
                                    color="#666666"
                                >
                                    구매수량
                                </DetailSpan>
                                <div>
                                    <Buttonbox>
                                        <Button
                                            small
                                            size="30px"
                                            src={
                                                "https://res.kurly.com/pc/service/common/2009/ico_minus_on.svg"
                                            }
                                            _onClick={countMinus}
                                        >
                                            -
                                        </Button>
                                        <Input
                                            countInput
                                            ref={Input.value}
                                            value={count}
                                            width="26px"
                                            height="30px"
                                        ></Input>
                                        <Button
                                            small
                                            size="30px"
                                            src={
                                                "https://res.kurly.com/pc/service/common/2009/ico_plus_on.svg"
                                            }
                                            _onClick={countPlus}
                                        >
                                            +
                                        </Button>
                                    </Buttonbox>
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
                                <Button
                                    purple
                                    width="432px"
                                    height="56px"
                                    size="16px"
                                    _onClick={addCart}
                                >
                                    장바구니 담기
                                </Button>
                            </Cart>
                        </CartList>
                    </OrderBox>
                </Main>
                <Banner>
                    <BannerLine></BannerLine>
                    <h3>RELATED PRODUCT</h3>
                    <DetailSlider />
                </Banner>
                <DetailContainer>
                    <DetailButtonBox>
                        <DetailButton>상품설명</DetailButton>
                        <DetailButton>고객리뷰</DetailButton>
                        <DetailButton>문의내용</DetailButton>
                    </DetailButtonBox>
                    <div>상품설명</div>
                    <div>고객리뷰</div>
                    <div>문의내용</div>
                </DetailContainer>
                <div>상세설명이미지</div>
                <div>밑에는 어떻게 처리하지?</div>
            </ContainerBox>
        </React.Fragment>
    );
};

const ContainerBox = styled.div`
    // display: flex;
    justify-content: center;
`;

const Main = styled.div`
    margin: 0 auto;
    width: 1050px;
    height: 850px;
    padding: 20px 0 0 0;
    display: flex;
`;
const ImageBox = styled.div`
    width: 490px;
    height: 550px;

    div {
        width: 430px;
        max-width: 100%;
        height: 100%;
    }
`;

const OrderBox = styled.div`
    width: 560px;
`;

const TitleBox = styled.p`
    strong {
        display: block;
        font-size: 24px;
        font-weight: 600;
        line-height: 34px;
        height: 34px;
    }
`;

const Price = styled.div``;

const ItemInfo = styled.div`
    padding: 5px 0;
    width: 560px;
    max-width: 100%;
    height: 440px;
`;

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

const Banner = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding: 0 40px 0 0;

    h3 {
        font-size: 13px;
        font-weight: 900;
        line-height: 23.4px;
        background: #fff;
        color: #4c4c4c;
        height: 28.5px;
        width: 1010px;
    }
`;

const BannerLine = styled.div`
    height: 5px;
    width: 20px;
    background: #000;
`;

const DetailContainer = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding: 100px 40px 0 0;
`;

const DetailButtonBox = styled.div`
    display: flex;
`;

const Buttonbox = styled.div`
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    width: 88px;
    max-height: 35px;
    display: flex;
    background: #fff;
`;

const DetailButton = styled.a`
    display: block;
    height: 60px;
    width: 335px;
    min-height: auto;
    min-width: auto;
    border: 1px solid #eeeeee;
    background-position: 0% 0%;
    color: #666666;
    font-size: 16px;
    font-weight: 700;
    line-height: 59px;
    text-align: center;
    cursor: pointer;
`;

export default Detail;
