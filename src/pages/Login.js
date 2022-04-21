import React, { useState } from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = (props) => {
    //카카오 로그인
    const CLIENT_ID = "037c49fc2597d1697ff929e1a1e19493";
    const REDIRECT_URI = "http://54.180.90.16/auth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
                    <KakaoBtn>
                        <div style={{ display: "inline-block" }}>
                            <input
                                type="checkbox"
                                id="secureCheck"
                                checked="checked"
                            />
                            <label htmlFor="secureCheck">보안접속</label>
                        </div>
                        <a href={KAKAO_AUTH_URL}>
                            <img
                                src="kakao_login_medium_narrow.png"
                                alt="카카오 로그인 버튼"
                            />
                        </a>
                    </KakaoBtn>
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
    margin: 0 auto 300px;
    padding: 90px 0 0 0;
`;

const LoginBox = styled.div`
    width: 340px;
    height: 332px;
    padding: 36px 0 0 0;
`;

const KakaoBtn = styled.div`
    width: 340px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 0 10px 0;
`;

export default Login;
