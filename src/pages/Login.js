import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from "../elements/Input";

const Login = () => {
    return (
        <React.Fragment>
            <Wrap>
                <Text>로그인</Text>
                <Input type="text" placeholder="아이디를 입력해주세요" />
                <Input type="text" placeholder="비밀번호를 입력해주세요" />
                <Button purple>로그인</Button>
                <Button>회원가입</Button>
            </Wrap>
        </React.Fragment>
    );
};

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default Login;
