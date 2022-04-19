import React, { useState } from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { FiSearch } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import PostCode from "../components/PostCode";

const Signup = (props) => {
  const [postcode, setPostcode] = useState(false);
  const onComplete = (data) => {
    setUserAddress(data.address);
    setPostcode(!postcode);
  };

  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const isId = (userId) => {
    const regId = /^[a-z0-9]{6,20}$/;
    return regId.test(userId);
  };

  const isPwd = (pwd) => {
    const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,25}/;
    return regPwd.test(pwd);
  };

  const idCheck = () => {
    dispatch(userActions.idCheckDB(userId));
  };

  const signup = () => {
    if (
      userId === "" ||
      pwd === "" ||
      pwdCheck === "" ||
      userName === "" ||
      userAddress === ""
    ) {
      window.alert("아이디, 패스워드, 이름을 모두 입력해주세요!");
      return;
    }
    if (pwd !== pwdCheck) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    if (!isId(userId)) {
      window.alert("아이디 형식이 올바르지 않습니다!");
      return;
    }
    if (!isPwd(pwd)) {
      window.alert("비밀번호 형식이 올바르지 않습니다!");
      return;
    }

    dispatch(
      userActions.signupDB(userId, pwd, pwdCheck, userName, userAddress)
    );
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
          <Button
            width="120px"
            height="44px"
            fontSize="14px"
            _onClick={idCheck}
          >
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
          <Input
            value={pwd}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
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
          <Input
            value={pwdCheck}
            placeholder="비밀번호를 한번 더 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
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
          <Input
            value={userName}
            placeholder="이름을 입력해주세요"
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
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
        {userAddress ? <Input value={userAddress} margin="0 8px 0 0" _onChange={(e) => {
              setUserAddress(e.target.value);
            }}/> : null}
          {userAddress ? (
            <SearchAgain onClick={setPostcode}>
              <FiSearch />
              재검색
            </SearchAgain>
          ) : (
            <Button
              width="332px"
              height="44px"
              fontSize="14px"
              flex
              _onClick={setPostcode}
            >
              <FiSearch />
              주소 검색
            </Button>
          )}
          {postcode ? <PostCode onComplete={onComplete} /> : null}
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

const SearchAgain = styled.button`
  width: 120px;
  height: 44px;
  border: 1px solid #5f0080;
  border-radius: 3px;
  background-color: #ffffff;
  max-width: 100%;
  color: #5f0080;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
`;
