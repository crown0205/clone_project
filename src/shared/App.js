import React, { useState } from "react";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as itemActions } from "../redux/modules/item";

// 패키지
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";

//  컴포넌트
import Header from "../components/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Modal from "../components/Modal";
import "./App.css";
import Footer from "../components/Footer";
<<<<<<< HEAD
=======
import OAuth2RedirectHandler from "../pages/OAuth2RedirectHandeler";
>>>>>>> 4c0450db90f9929cc880e9c71199981f1dd803ea

function App() {
  const dispatch = useDispatch();

  //로그인 여부 확인
  const isLogin = useSelector((state) => state.user.isLogin);
  const isToken = localStorage.getItem("token");

  React.useEffect(() => {
    if (isToken) {
      dispatch(userActions.getUserDB());
    }
  }, []);

  //모달 상태 확인
  const isModal = useSelector((state) => state.item.modal);

  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/bestItem" exact component={Category} />
        <Route path="/category/:category" exact component={Category} />
        <Route path="/detail/:itemId" exact component={Detail} />
        <Route path="/cart" exact component={Cart} />
<<<<<<< HEAD
=======
        <Route path="54.180.90.16/oauth/kakao" component={OAuth2RedirectHandler} />
>>>>>>> 4c0450db90f9929cc880e9c71199981f1dd803ea
        {/* 모달 */}
        {isModal ? <Modal /> : null}
        <Footer />
      </ConnectedRouter>
    </>
  );
}

export default App;
