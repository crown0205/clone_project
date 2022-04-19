import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// initialState
const initialState = {
    user: {
        userId: "",
        pwd: "",
        userName: "마켓컬리",
        userAddress: "",
        userCart: [
            {
                itemId: "상품 아이디",
                itemName: "상품 이름",
                itemAmount: "상품 수량",
                itemPrice: "가격",
                itemImg: "상품 이미지",
            },
        ],
    },
    isLogin: false,
};

// middleware actions
const idCheckDB = (userId) => {
    return function () {
        axios({
            method: "post",
            url: "http://54.180.90.16/login/idCheck",
            data: {
                userId: userId,
            },
        })
            .then((response) => {
                window.alert("사용 가능한 아이디입니다!");
            })
            .catch((error) => {
                window.alert("사용할 수 없는 아이디입니다!");
            });
    };
};

const signupDB = (userId, pwd, pwdCheck, userName, userAddress) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "post",
            url: "http://54.180.90.16/login/signUp",
            data: {
                userId: userId,
                pwd: pwd,
                pwdCheck: pwdCheck,
                userName: userName,
                userAddress: userAddress,
            },
        })
            .then((response) => {
                window.alert("회원가입이 되었습니다!");
                history.push("/login");
            })
            .catch((error) => {
                window.alert("회원가입이 실패했습니다!");
            });
    };
};

const loginDB = (userId, pwd) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "post",
            url: "http://54.180.90.16/login/reqLogin",
            data: {
                userId: userId,
                pwd: pwd,
            },
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                dispatch(setUser(userId));
                history.replace("/");
            })
            .catch((error) => {
                console.log(error, "로그인에 실패했습니다!");
            });
    };
};

const logoutDB = () => {
    return function (dispatch, getState, { history }) {
        localStorage.removeItem("token");
        dispatch(logOut());
        history.replace("/");
    };
};

const getUserDB = () => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: "http://54.180.90.16/login/getUser",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.isLogin = true;
            }),

        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                draft.user = null;
                draft.isLogin = false;
            }),
    },
    initialState
);

// action creator export
const actionCreators = {
    idCheckDB,
    signupDB,
    loginDB,
    setUser,
    logoutDB,
    logOut,
    getUserDB,
};

export { actionCreators };
