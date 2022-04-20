import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailSlider from "../components/DetailSlider";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cartActions } from "../redux/modules/cart";
import { actionCreators as itemActions } from "../redux/modules/item";

// 컴포넌트
import { Image, Button, DetailSpan, Input } from "../elements/Index";

const Detail = (props) => {
    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.user.user[0]);
    const isLogin = useSelector((state) => state.user.isLogin);
    const itemDate = useSelector((state) => state.item.oneItem);
    const itemPrice = useSelector((state) => state.item.oneItem.itemPrice);
    const detailPrice = itemPrice.replace("원", "").replace(",", "");
    const isToken = localStorage.getItem("token");
    const itemId = props.match.params.itemId;

    React.useEffect(() => {
        dispatch(itemActions.getOneItemDB(itemId));
    }, []);

    const [count, setCount] = React.useState(1);

    // 수량 * 원가
    let multiplyPrice = detailPrice * count;

    // 천단위 콤마 찍어주는 함수
    const totalPrice = multiplyPrice.toLocaleString("ko-KR");

    console.log(multiplyPrice, totalPrice);

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

        const itemList = {
            itemId: itemDate._id,
            itemName: itemDate.itemName,
            itemAmount: count,
            itemPrice: totalPrice + "원",
            itemImg: itemDate.itemImg,
            itemCategory: itemDate.itemCategory,
            userAddress: userInfo.userAddress,
            userId: userInfo.userId,
        };

        console.log("addCartDB에 보낼 카트리스트", itemList);

        dispatch(cartActions.addCartDB(itemList));
        window.alert("장바구니에 상품이 담겼습니다!");
    };

    return (
        <React.Fragment>
            <ContainerBox>
                <Main>
                    <ImageBox>
                        <div>
                            <Image src={itemDate.itemImg} />
                        </div>
                    </ImageBox>

                    <OrderBox>
                        <TitleBox>
                            <strong>{itemDate.itemName}</strong>
                            <DetailSpan color="#999999">
                                {itemDate.itemInfo}
                            </DetailSpan>
                        </TitleBox>
                        <Price>
                            <DetailSpan
                                size="28px"
                                height="auto"
                                display="inline"
                                bold="700"
                            >
                                {itemDate.itemPrice}
                            </DetailSpan>
                            {/* <DetailSpan display="inline" height="auto">
                원
              </DetailSpan> */}

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
                                        {totalPrice}
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
                                {isLogin && isToken ? (
                                    <Button
                                        purple
                                        width="432px"
                                        height="56px"
                                        size="16px"
                                        _onClick={addCart}
                                    >
                                        장바구니 담기
                                    </Button>
                                ) : (
                                    <Button
                                        purple
                                        deactivate
                                        backgroundColor="#eee"
                                        border="#fff"
                                        width="432px"
                                        height="56px"
                                        size="16px"
                                    >
                                        장바구니 담기
                                    </Button>
                                )}
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
