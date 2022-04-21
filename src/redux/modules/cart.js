import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { axios } from "axios";
import { Apis } from "../../shared/Api";

//액션
const READ_CART = "READ_CART";
const ADD_CART = "ADD_CART";
const EDIT_CART = "EDIT_CART";
const COUNT_CART = "COUNT_CART";
const DELETE_CART = "DELETE_CART";

//액션 크리에이터
const readCart = createAction(READ_CART, (cartList) => ({ cartList }));
const addCart = createAction(ADD_CART, (cartList) => ({ cartList }));
const editCart = createAction(EDIT_CART, (cartList) => ({ cartList }));
const countCart = createAction(COUNT_CART, (itemId, count) => ({
    itemId,
    count,
}));
const deleteCart = createAction(DELETE_CART, (itemId, cartList) => ({
    itemId,
    cartList,
}));

//이니셜 스테이트
const initialState = {
    cartList: [
        {
            // itemId: "상품 아이디",
            // itemName: "상품 이름",
            // itemAmount: "상품 수량",
            // itemPrice: "상품 가격",
            // itemImg: "상품 이미지",
            // itemCategory: "",
            // userAddress: "주소",
            // userId: "아이디",
        },
    ],
};

//미들웨어
const readCartDB = () => {
    return function (dispatch, getState, { history }) {
        console.log("readCart미들웨어");
        Apis.readCart()
            .then((response) => {
                console.log("readCart서버에서응답", response.data);
                dispatch(readCart(response.data));
            })

            .catch((error) => {
                console.log("readCart서버통신 중 오류", error);
            });
    };
};

const addCartDB = (cartList = "") => {
    return function (dispatch, getState, { history }) {
        console.log("addcart미들웨어", cartList);

        Apis.addCart(cartList)
            .then((response) => {
                console.log("addcart서버에서응답", response);

                dispatch(addCart(cartList));
            })
            .catch((error) => {
                window.alert("댓글 전송에 실패하셨습니다.");
                // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
                if (error.response) {
                    // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
                } else if (error.request) {
                    // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
                    // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
                    // node.js에서는 http.ClientRequest 인스턴스입니다.
                    console.log(error.request);
                } else {
                    // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
};

const editCartDB = (itemId, itemAmount, itemPrice) => {
    return function (dispatch, getState, { history }) {
        Apis.editCart(itemId, itemAmount, itemPrice)
            .then((response) => {
                dispatch(editCart(response.data));
            })
            .catch((error) => {
                window.alert("댓글 전송에 실패하셨습니다.");
                // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
                if (error.response) {
                    // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
                } else if (error.request) {
                    // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
                    // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
                    // node.js에서는 http.ClientRequest 인스턴스입니다.
                    console.log(error.request);
                } else {
                    // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
};

const deleteCartDB = (deleteList) => {
    return function (dispatch, getState, { history }) {
        console.log(deleteList);

        Apis.deleteCart(deleteList)
            .then((response) => {
                console.log("deletecart서버에서응답", response);
                window.location.reload();

                // dispatch(deleteCart(deleteCartList));
            })
            .catch((error) => {
                window.alert("댓글 전송에 실패하셨습니다.");
                // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
                if (error.response) {
                    // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
                } else if (error.request) {
                    // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
                    // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
                    // node.js에서는 http.ClientRequest 인스턴스입니다.
                    console.log(error.request);
                } else {
                    // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
};

//리듀서
export default handleActions(
    {
        [ADD_CART]: (state, action) =>
            produce(state, (draft) => {
                console.log("addcart리듀서", action.payload.cartList);
                draft.cartList.push(action.payload.cartList);
            }),
        [READ_CART]: (state, action) =>
            produce(state, (draft) => {
                console.log("readCart리듀서", action.payload);
                draft.cartList = action.payload.cartList;
            }),
        [EDIT_CART]: (state, action) =>
            produce(state, (draft) => {
                let idx = draft.cartList.findIndex(
                    (c) => c.itemId === action.payload.cartList.itemId
                );
                console.log(idx);
                draft.cartList[idx] = action.payload.cartList;
            }),
        [COUNT_CART]: (state, action) =>
            produce(state, (draft) => {
                let idx = draft.cartList.findIndex(
                    (c) => c.itemId === action.payload.itemId
                );
                draft.cartList[idx] = {
                    ...draft.cartList[idx],
                    itemAmount: action.payload.count,
                };
            }),
        [DELETE_CART]: (state, action) =>
            produce(state, (draft) => {
                console.log("리듀서", action.payload);
            }),
    },
    initialState
);

//익스포트
const actionCreators = {
    readCart,
    readCartDB,
    addCart,
    addCartDB,
    editCart,
    editCartDB,
    countCart,
    deleteCart,
    deleteCartDB,
};

export { actionCreators };
