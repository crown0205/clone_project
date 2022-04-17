import React from "react";
import styled from "styled-components";
import { Grid, Button, Icons, DetailSpan } from "../elements/Index";

const CartAddress = (props) => {
    return (
        <Grid
            width="284px"
            padding="23px 19px 20px 19px"
            flexDirection="column"
            borderTop="1px solid #f2f2f2"
            borderRight="1px solid #f2f2f2"
            borderLeff="1px solid #f2f2f2"
        >
            <Grid>
                <DetailSpan size="16px" bold="700">
                    <Icons
                        height="22px"
                        margin="0 -5px -5px 0"
                        display="inline-block"
                        src="https://res.kurly.com/pc/service/cart/2007/ico_location.svg"
                    />
                    배송지
                </DetailSpan>
            </Grid>
            <Grid
                width="284px"
                padding="11px 0 0 0"
                display="flex"
                flexDirection="column"
            >
                <DetailSpan height="24px" bold="700" size="16px">
                    서울 용산구 후암동 8
                </DetailSpan>
                <DetailSpan height="22px" padding="8px 0 0 0" color="#5f0080">
                    샛별배송
                </DetailSpan>
                <Button
                    width="244px"
                    height="36px"
                    fontSize="12px"
                    margin="17px 0 0 0"
                >
                    배송지 변경
                </Button>
            </Grid>
        </Grid>
    );
};

export default CartAddress;
