import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
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
        console.log(error, "실패했습니다!");
      });
  };
};

const signupDB = (userId, pwd, pwdCheck, userName, userAddress) => {
  return function ({ history }) {
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
        console.log(error, "회원가입에 실패했습니다!");
      });
  };
};

const loginDB = (userId, pwd) => {
  return function (dispatch, { history }) {
    axios({
      method: "post",
      url: "http://54.180.90.16//login/reqLogin",
      data: {
        userId: userId,
        pwd: pwd,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(setUser(userId));
        history.push("/");
      })
      .catch((error) => {
        console.log(error, "로그인에 실패했습니다!");
      });
  };
};

const logoutDB = () => {
  return function (dispatch, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
    history.replace("/");
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
      }),

    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  signupDB,
  loginDB,
  setUser,
  logoutDB,
  logOut,
  getUser,
};

export { actionCreators };
