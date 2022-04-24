import React from 'react';
import styled from 'styled-components';
import { Grid, Icons, DetailSpan } from '../../elements/Index';

const Package = (props) => {
  return (
    <Grid
      width="742px"
      height="60px"
      padding="14px 5px 15px 0"
      justifyContent="space-between"
      borderTop="1px solid #333"
    >
      <Grid width="368.5px" height="30px" padding="3px 0 0 0">
        <Icons
          src={
            props.src
            // "https://res.kurly.com/pc/service/cart/2007/ico_cold.svg"
          }
        />
        <DetailSpan size="18px" bold="700">
          {props.category}
        </DetailSpan>
      </Grid>

      <Button>
        <Icons
          src={'https://res.kurly.com/pc/service/cart/2007/ico_dropup.svg'}
        />
      </Button>
    </Grid>
  );
};

const Button = styled.button`
  width: 35px;
  height: 30px;
  background: #fff;
  cursor: pointer;
  overflow: hidden;
  float: right;
  border: none;
`;

export default Package;
