import React, { useState } from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = (props) => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {
    dispatch(userActions.loginDB(userId, pwd));
  };

  return (
    <React.Fragment>
      <Wrap>
        <Text size="20px" bold>
          로그인
        </Text>
        <LoginBox>
          <Input
            value={userId}
            placeholder="아이디를 입력해주세요"
            width="340px"
            height="54px"
            margin="0 0 10px 0"
            _onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <Input
            value={pwd}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            width="340px"
            height="54px"
            margin="0 0 10px 0"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <SecureBox>
            <input type="checkbox" id="secureCheck" />
            <label htmlFor="secureCheck">보안접속</label>
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
          </SecureBox>
          <Button
            purple
            width="340px"
            height="54px"
            margin="0 0 10px 0"
            _onClick={login}
          >
            로그인
          </Button>
          <Button
            width="340px"
            height="54px"
            _onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button>
        </LoginBox>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 442px;
  margin: 0 590px 0 590px;
  padding: 90px 0 0 0;
`;

const LoginBox = styled.div`
  width: 340px;
  height: 332px;
  padding: 36px 0 0 0;
`;

const SecureBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  height: 60px;
  padding: 0 0 28px 0;
`;
export default Login;
