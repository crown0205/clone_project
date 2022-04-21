import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const OAuth2RedirectHandler = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(async () => {
    await dispatch(userActions.kakaoLogin(code));
  }, []);

  return <p>로그인 중입니다</p>;
};

export default OAuth2RedirectHandler;
