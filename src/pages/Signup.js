import React from "react";
import Text from "../elements/Text";
import Button from "../elements/Button";
import { FiSearch } from "react-icons/fi";

const Signup = () => {
<<<<<<< HEAD
    return (
        <React.Fragment>
            <h1>Signup</h1>
        </React.Fragment>
    );
=======
  return (
    <React.Fragment>
      <Text>회원가입</Text>
      <div>
        <Text>아이디</Text>
        <input type="text" />
        <Button>중복확인</Button>
      </div>
      <div>
        <Text>비밀번호</Text>
        <input type="text" />
      </div>
      <div>
        <Text>비밀번호확인</Text>
        <input type="text" />
      </div>
      <div>
        <Text>이름</Text>
        <input type="text" />
      </div>
      <div>
        <Text>주소</Text>
        <Button>
          <FiSearch />
          주소 검색
        </Button>
      </div>
      <Button purple>가입하기</Button>
    </React.Fragment>
  );
>>>>>>> master
};

export default Signup;
