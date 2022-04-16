import React, {useState} from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from "../elements/Input";

const Login = () => {

  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");

    return (
        <React.Fragment>
            <Wrap>
                <Text size="20px" bold>
                    로그인
                </Text>
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
                    width="340px"
                    height="54px"
                    margin="0 0 10px 0"
                    _onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                />
                <Button purple width="340px" height="54px" margin="0 0 10px 0">
                    로그인
                </Button>
                <Button width="340px" height="54px">
                    회원가입
                </Button>
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
