import React from 'react';
import styled from 'styled-components';
import { Grid, Icons, DetailSpan } from '../../elements/Index';

const CartButton = (props) => {
  const { onClick, _onClick, confirmList } = props;

  return (
    <Grid width="742px" padding="0 10px 0 2px">
      <CheckLabel onClick={onClick}>
        <input type={'checkbox'}></input>
        <Icons
          checkIcon
          checkUrl={
            confirmList
              ? 'https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg'
              : 'https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg'
          }
        />
        <DetailSpan bold="700">전체선택(0/5)&nbsp;&nbsp;</DetailSpan>
      </CheckLabel>
      <DeleteLabel onClick={_onClick}>
        <input type={'checkbox'}></input>

        <DetailSpan bold="700">|&nbsp;&nbsp;선택삭제</DetailSpan>
      </DeleteLabel>
    </Grid>
  );
};

const CheckLabel = styled.button`
  width: auto;
  height: 60px;
  padding: 18px 0 17px 0;
  display: flex;
  background: transparent;
  border: none;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

const DeleteLabel = styled.button`
  width: auto;
  height: 60px;
  padding: 18px 0 17px 0;
  display: flex;
  background: transparent;
  border: none;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

export default CartButton;
