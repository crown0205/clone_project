import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { FiSearch } from "react-icons/fi";

const Signup = () => {
  return (
    <SignupBox>
      <div style={{width: "1050px", height: "136px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Text size="28px" bold>
          회원가입
        </Text>
      </div>
      <Grid>
        <Text bold size="14px" width="159px" padding="29px 0 0 20px" height="74px">
          아이디
        </Text>
        <span style={{ padding: "19px 0 10px 0" }}>
          <Input margin="0 8px 0 0" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
          <Button width="120px" height="44px" fontSize="14px">
              중복확인
          </Button>
        </span>
      </Grid>
      <Grid>
        <Text bold size="14px" width="159px" padding="29px 0 0 20px" height="64px">
          비밀번호
        </Text>
        <span style={{ padding: "10px 0 10px 0" }}>
          <Input placeholder="비밀번호를 입력해주세요"/>
        </span>
      </Grid>
      <Grid>
        <Text bold size="14px" width="159px" padding="29px 0 0 20px" height="64px">
          비밀번호확인
        </Text>
        <span style={{ padding: "10px 0 10px 0" }}>
          <Input placeholder="비밀번호를 한번 더 입력해주세요"/>
        </span>
      </Grid>
      <Grid>
        <Text bold size="14px" width="159px" padding="29px 0 0 20px" height="64px">
          이름
        </Text>
        <span style={{ padding: "10px 0 10px 0" }}>
          <Input placeholder="이름을 입력해주세요"/>
        </span>
      </Grid>
      <Grid>
        <Text bold size="14px" width="159px" padding="29px 0 0 20px" height="102px">
          주소
        </Text>
        <span style={{ padding: "10px 0 20px 0" }}>
          <Button width="332px" height="44px" fontSize="14px" flex>
            <FiSearch />
              주소 검색
          </Button>
        </span>
      </Grid>
      <Button purple width="240px" height="56px">
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
