import React, { useState } from "react";

// 패키지
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { useSelector } from "react-redux";

//  컴포넌트
import Header from "../components/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Modal from "../components/Modal";
import PostCode from "../components/PostCode";
import "./App.css";

function App() {
  const isModal = useSelector(state => state.item.modal);
  const modal = isModal;
  console.log(modal);

  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/bestItem" exact component={Category} />
        <Route path="/category/:category" exact component={Category} />
        <Route path="/detail/" exact component={Detail} />
        <Route path="/cart" exact component={Cart} />

        {/* 모달 */}
        {modal === true ? <Modal /> : null}
      </ConnectedRouter>
    </>
  );
}

export default App;
