import React from "react";
import styled from "styled-components";
import Count from "../../components/Count";
import {
    Grid,
    Icons,
    DetailSpan,
    ProductImage,
    Button,
} from "../../elements/Index";

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
    } = props;
    const href = "http://localhost:3000/detail/" + itemId;

    // const selectOne = () => {
    //     confirmList.includes(itemId)
    //         ? setConfirmList(confirmList.filter((id) => id !== itemId))
    //         : setConfirmList(confirmList.push(itemId));
    // };
    console.log(confirmList);

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
                    <Count>{itemAmount}</Count>
                    <DetailSpan
                        width="116px"
                        size="16px"
                        bold="700"
                        textAlign="right"
                    >
                        {itemPrice}
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
