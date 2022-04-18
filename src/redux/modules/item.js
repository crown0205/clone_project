import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_ITEMS = "SET_ITEMS";
const ON_MODAL = "ON_MODAL";
const OFF_MODAL = "OFF_MODAL";

// actions creators
const setItems = createAction(SET_ITEMS, item_list => ({
  item_list,
}));
const onModal = createAction(ON_MODAL, action => ({ action }));
const offModal = createAction(OFF_MODAL, action => ({ action }));

const initialState = {
  list: [
    {
      itemId: "상품 아이디",
      itemName: "상품 이름",
      itemPrice: "가격",
      itemCategory: "카테고리",
      itemInfo: "상품 정보",
      cartCount: 4,
    },
  ],
  modal: false,
};

// middleware actions
const setItemsDB = () => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      // url: "https://6251cd887f7fa1b1dddf398b.mockapi.io/post",
      // url: "https://virtserver.swaggerhub.com/sungji226/cloneCoding/1.1.0/main"
      url: "http://54.180.90.16/main",
      // 54.180.90.16
    })
      .then(doc => {
        // console.log(doc)
        dispatch(setItems(doc));
      })
      .catch(err => {
        console.log("에러가 난다~~");
        console.log(err);
      });
  };
};

const setCategoryDB = category => {
  let params = category.category;
  console.log(params);

  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `http://54.180.90.16/category/${params}`,
    })
      .then(doc => {
        console.log("되나????? 😡");
        console.log(doc);

        dispatch(setItems(doc))
      })
      .catch(err => {
        console.log(err);
        console.log("아~~ 오나여~~~ 또 에러가 오나요~~~ 🤯;");
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_ITEMS]: (state, action) =>
      produce(state, draft => {
        console.log(action)
        draft.list = action.payload.item_list.data;
      }),
    [ON_MODAL]: (state, action) =>
      produce(state, draft => {
        draft.modal = true;
      }),
    [OFF_MODAL]: (state, action) =>
      produce(state, draft => {
        draft.modal = false;
      }),
  },
  initialState
);

// action export
const actionCreators = {
  setItemsDB,
  setCategoryDB,
  onModal,
  offModal,
};

export { actionCreators };
