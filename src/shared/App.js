import React from "react";

import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import Header from "../components/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";

import "./App.css";

function App() {
    return (
        <>
            <ConnectedRouter history={history}>
                <Header />
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/category" exact component={Category} />
                <Route path="/detail" exact component={Detail} />
                <Route path="/cart" exact component={Cart} />
            </ConnectedRouter>
        </>
    );
}

export default App;
