import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { axios } from "axios";
import { Apis } from "../../shared/Api";

//액션
const READ_CART = "READ_CART";
const ADD_CART = "ADD_CART";

//액션 크리에이터
const readCart = createAction(READ_CART, (cartList) => ({ cartList }));
const addCart = createAction(ADD_CART, (itemList) => ({ itemList }));

//이니셜 스테이트
const initialState = {
    cartList: [
        {
            itemId: "상품 아이디",
            itemName: "상품 이름",
            itemAmount: "상품 수량",
            itemPrice: "상품 가격",
            itemImg: "상품 이미지",
        },
    ],
};

//미들웨어
const readCartFB = () => {
    return function (dispatch, getState, { history }) {
        console.log("readCart미들웨어");
        Apis.readCart()
            .then((response) => {
                console.log("readCart서버에서응답", response);

                // 목록 만들어서 디스패치 리듀서
            })

            .catch((error) => {
                console.log("readCart서버통신 중 오류", error);
            });
    };
};

const addCartDB = (itemList = "") => {
    return function (dispatch, getState, { history }) {
        console.log("addcart미들웨어", itemList);

        // Apis.addCart(itemList)
        //     .then((response) => {
        //         console.log("addcart서버에서응답", response);

        const aitemList = {
            itemId: "테스트1",
            itemName: "테스트2",
            itemAmount: "테스트3",
            itemPrice: "테스트4",
            itemImg: "테스트5",
        };
        //리듀서에 넣을 형식 만들기
        dispatch(addCart(aitemList));
        //     })
        //     .catch((error) => {
        //         window.alert("댓글 전송에 실패하셨습니다.");
        //         // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        //         if (error.response) {
        //             // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
        //         } else if (error.request) {
        //             // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        //             // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        //             // node.js에서는 http.ClientRequest 인스턴스입니다.
        //             console.log(error.request);
        //         } else {
        //             // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        //             console.log("Error", error.message);
        //         }
        //         console.log(error.config);
        //     });
    };
};

//리듀서
export default handleActions(
    {
        [ADD_CART]: (state, action) =>
            produce(state, (draft) => {
                console.log("addcart리듀서", action.payload);
                draft.list.push(action.payload.itemList);
            }),
    },
    initialState
);

//익스포트
const actionCreators = {
    addCart,
    addCartDB,
};

export { actionCreators };
