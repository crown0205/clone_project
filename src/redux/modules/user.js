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
  isLogin: false,
};

// middleware actions
const signupDB = (userId, pwd, userName, userAddress) => {
  return function ({ history }) {
    axios({
      method: "post",
      url: "http://54.180.90.16/login/signUp",
      data: {
        userId: userId,
        pwd: pwd,
        userName: userName,
        userAddress: userAddress
      },
    })
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error, "회원가입에 실패했습니다!");
      });
  };
};

// const loginDB = (id, pwd) => {
//   return function (dispatch, getState, { history }) {
//     auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
//       auth
//         .signInWithEmailAndPassword(id, pwd)
//         .then((user) => {
//           console.log(user);
//           dispatch(
//             setUser({
//               user_name: user.user.displayName,
//               id: id,
//               user_profile: "",
//               uid: user.user.uid,
//             })
//           );
//           history.push("/");
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;

//           console.log(errorCode, errorMessage);
//         });
//     });
//   };
// };

// const loginCheckDB = () => {
//   return function (dispatch, getState, { history }) {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         dispatch(
//           setUser({
//             user_name: user.displayName,
//             user_profile: "",
//             id: user.email,
//             uid: user.uid,
//           })
//         );
//       } else {
//         dispatch(logOut());
//       }
//     });
//   };
// };

// const logoutDB = () => {
//   return function (dispatch, getState, { history }) {
//     auth.signOut().then(() => {
//       dispatch(logOut());
//       history.replace("/");
//     });
//   };
// };

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.isLogin = true;
      }),

    [GET_USER]: (state, action) => produce(state, (draft) => {}),

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
  signupDB,
  //   loginDB,
  //   loginCheckDB,
  setUser,
  getUser,
  logOut,
  //   logoutDB,
};

export { actionCreators };
