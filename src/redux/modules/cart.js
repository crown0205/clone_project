import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { axios } from "axios";
import { Apis } from "../../shared/Api";

//액션
const ADD_CART = "ADD_CART";

//액션 크리에이터
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

const addCartDB = (itemList = "") => {
    return function (dispatch, getState, { history }) {
        console.log("addcart미들웨어", itemList);

        Apis.addCart(itemList)
            .then((response) => {
                console.log("addcart서버에서응답", response);

                const itemList = {
                    itemId: "테스트1",
                    itemName: "테스트2",
                    itemAmount: "테스트3",
                    itemPrice: "테스트4",
                    itemImg: "테스트5",
                };
                //리듀서에 넣을 형식 만들기
                // dispatch(addCart(itemList));
            })
            .catch((error) => {
                console.log("addcart서버 연결 중 에러", error);
            });
    };
};

//리듀서
export default handleActions(
    {
        [ADD_CART]: (state, action) =>
            produce(state, (draft) => {
                console.log("addcart리듀서", state);
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
