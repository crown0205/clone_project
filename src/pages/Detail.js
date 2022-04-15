import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import DetailSpan from "../elements/DetailSpan";

const Detail = () => {
    return (
        <React.Fragment>
            <ContainerBox>
                <Container>
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
                                    src={
                                        "https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2FdetailInfo.PNG?alt=media&token=bf55b666-3e14-493e-ac17-9d86d7d15832"
                                    }
                                />
                            </ItemInfo>
                            {/* 컴포넌트 나누기? */}
                            <CartList>
                                <Count>
                                    <Text>수량</Text>
                                </Count>
                                <TotalPrice>
                                    <Text>합계</Text>
                                </TotalPrice>
                                <Cart>
                                    <Text>장바구니 담기</Text>
                                </Cart>
                            </CartList>
                        </OrderBox>
                    </Main>
                    <Grid>연관상품(배너이미지)</Grid>
                    <Grid>상품설명, 고객리뷰, 문의내용</Grid>
                    <Grid>상세설명이미지</Grid>
                    <Grid>밑에는 어떻게 처리하지?</Grid>
                </Container>
            </ContainerBox>
        </React.Fragment>
    );
};

const ContainerBox = styled.div`
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    width: 1050px;
`;
const Main = styled.div`
    width: 1050px;
    height: 850px;
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
    * display: block;
`;

const TitleBox = styled.p`
    strong {
        display: block;
        font-size: 24px;
        font-weight: 700;
        line-height: 34px;
        height: 34px;
    }
`;

const Price = styled.div``;

const ItemInfo = styled.div`
    width: 560px;
    max-width: 100%;
    height: 440px;
`;

const CartList = styled.div``;

const Count = styled.div``;

const TotalPrice = styled.div``;

const Cart = styled.div``;

export default Detail;
