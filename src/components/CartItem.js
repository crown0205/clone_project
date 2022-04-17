import React from "react";
import styled from "styled-components";
import Package from "../components/Package";
import Count from "../components/Count";
import {
    Grid,
    Icons,
    DetailSpan,
    ProductImage,
    Button,
} from "../elements/Index";

const OrderItem = () => {
    return (
        <Grid flexDirection="column">
            <Package />
            <Grid
                width="742px"
                height="128px"
                display="flex"
                borderBottom="1px solid #f4f4f4"
            >
                <Grid alignItems="center" width="463px">
                    <Icons checkIcon />
                    <ProductImage
                        href="http://localhost:3000/detail"
                        src="https://img-cf.kurly.com/shop/data/goods/1637154205962y0.jpg"
                    />

                    <Grid width="327px" margin="0 0 5px 20px">
                        <A href="http://localhost:3000/detail">
                            [연세우유 x 마켓컬리] 전용목장우유 900mL
                        </A>
                    </Grid>
                </Grid>
                <Grid
                    width="279px"
                    position="relative"
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0 0 5px 0"
                >
                    <Count />
                    <DetailSpan
                        width="116px"
                        size="16px"
                        bold="700"
                        textAlign="right"
                    >
                        3,940원
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

export default OrderItem;
