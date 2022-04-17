import React from "react";
import styled from "styled-components";
import { Grid, Icons, DetailSpan } from "../elements/Index";

const CartButton = (props) => {
    return (
        <Grid width="742px" padding="0 10px 0 2px">
            <CheckLabel>
                <input type={"checkbox"}></input>
                <Icons
                    width="24px"
                    height="24px"
                    margin="0 12px 0 0"
                    src="https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg"
                />
                <DetailSpan bold="700">전체선택(0/5)</DetailSpan>
            </CheckLabel>
            <DeleteLabel>
                <input type={"checkbox"}></input>
                <Icons
                    width="24px"
                    height="24px"
                    margin="0 12px 0 0"
                    src="https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg"
                />
                <DetailSpan bold="700">선택삭제</DetailSpan>
            </DeleteLabel>
        </Grid>
    );
};

const CheckLabel = styled.label`
    width: auto;
    height: 60px;
    padding: 18px 0 17px 0;
    display: flex;

    input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
`;

const DeleteLabel = styled.label`
    width: auto;
    height: 60px;
    padding: 18px 0 17px 0;
    display: flex;

    input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
`;

export default CartButton;
