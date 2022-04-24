import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Button, Icons, DetailSpan } from '../../elements/Index';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';
import PostCode from '../PostCode';

const CartAddress = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userActions.getUserDB());
  }, []);

  const user = useSelector((state) => state.user.user);

  const [postcode, setPostcode] = useState(false);
  const [Address, setAddress] = useState('');

  const onComplete = (data) => {
    setAddress(data.address);
    setPostcode(!postcode);
  };

  return (
    <Grid width="284px" padding="23px 19px 20px 19px" flexDirection="column">
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
        <DetailSpan height="24px" bold="700" size="16px" margin="0 0 20px 0">
          {Address ? Address : user[0]?.userAddress}
        </DetailSpan>
        <DetailSpan height="22px" padding="8px 0 0 0" color="#5f0080">
          샛별배송
        </DetailSpan>
        <Button
          width="244px"
          height="36px"
          fontSize="12px"
          margin="17px 0 0 0"
          _onClick={setPostcode}
        >
          배송지 변경
        </Button>
        {postcode ? <PostCode onComplete={onComplete} /> : null}
      </Grid>
    </Grid>
  );
};

export default CartAddress;
