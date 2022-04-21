import React from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const PostCode = (props) => {
  return (
    <Wrap>
      <DaumPostcode onComplete={props.onComplete} />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 440px;
  height: 500px;
  padding: 30px;
  border-radius: 10px;
  z-index: 9999;
`;

export default PostCode;
