import React, { useState } from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { FiSearch } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import DaumPostcode from 'react-daum-postcode';

const Signup = (props) => {
  const [userAddress, setUserAddress] = useState("");
 
  const onComplete = (data) => {
    setUserAddress(data.address);
  }

  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [userName, setUserName] = useState("");

  console.log(userId, pwd, userName, userAddress);

  const signup = () => {
    if (userId === "" || pwd === "" || userName === "") {
      window.alert("빈칸을 모두 입력해주세요!");
      return;
    }
    if (pwd !== pwdCheck) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    dispatch(userActions.signupDB(userId, pwd, userName, userAddress));
  };

  return (
    <SignupBox>
      <div
        style={{
          width: "1050px",
          height: "136px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text size="28px" bold>
          회원가입
        </Text>
      </div>
      <Grid>
        <Text
          bold
          size="14px"
          width="159px"
          padding="29px 0 0 20px"
          height="74px"
        >
          아이디
        </Text>
        <span style={{ padding: "19px 0 10px 0" }}>
          <Input
            value={userId}
            margin="0 8px 0 0"
            placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
            _onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <Button width="120px" height="44px" fontSize="14px">
            중복확인
          </Button>
        </span>
      </Grid>
      <Grid>
        <Text
          bold
          size="14px"
          width="159px"
          padding="29px 0 0 20px"
          height="64px"
        >
          비밀번호
        </Text>
        <span style={{ padding: "10px 0 10px 0" }}>
          <Input value={pwd} placeholder="비밀번호를 입력해주세요" _onChange={(e) => {
              setPwd(e.target.value);
            }}/>
        </span>
      </Grid>
      <Grid>
        <Text
          bold
          size="14px"
          width="159px"
          padding="29px 0 0 20px"
          height="64px"
        >
          비밀번호확인
        </Text>
        <span style={{ padding: "10px 0 10px 0" }}>
          <Input value={pwdCheck} placeholder="비밀번호를 한번 더 입력해주세요" _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}/>
        </span>
      </Grid>
      <Grid>
        <Text
          bold
          size="14px"
          width="159px"
          padding="29px 0 0 20px"
          height="64px"
        >
          이름
        </Text>
        <span style={{ padding: "10px 0 10px 0" }}>
          <Input value={userName} placeholder="이름을 입력해주세요" _onChange={(e) => {
              setUserName(e.target.value);
            }}/>
        </span>
      </Grid>
      <Grid>
        <Text
          bold
          size="14px"
          width="159px"
          padding="29px 0 0 20px"
          height="102px"
        >
          주소
        </Text>
        <span style={{ padding: "10px 0 20px 0" }}>
          <Button width="332px" height="44px" fontSize="14px" flex>
            <FiSearch />
            주소 검색
          </Button>
          <div> <DaumPostcode onComplete={onComplete}/> </div>
        </span>
      </Grid>
      <Button purple width="240px" height="56px" _onClick={signup}>
        가입하기
      </Button>
    </SignupBox>
  );
};

export default Signup;

const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: flex;
  width: 640px;
`;
