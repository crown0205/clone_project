import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_ITEMS = "SET_ITEMS";
const ON_MODAL = "ON_MODAL";
const OFF_MODAL = "OFF_MODAL";
const ONE_ITEM = "ONE_ITEM";

// actions creators
const setItems = createAction(SET_ITEMS, (item_list) => ({
  item_list,
}));
const OneItem = createAction(ONE_ITEM, (item) => ({ item }));
const onModal = createAction(ON_MODAL, (action) => ({ action }));
const offModal = createAction(OFF_MODAL, (action) => ({ action }));

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
  oneItem: {
    itemId: "상품 아이디",
    itemName: "상품 이름",
    itemPrice: "가격",
    itemCategory: "카테고리",
    itemInfo: "상품 정보",
    cartCount: "장바구니 카운트",
    itemImg: "상품 이미지",
  },
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
      .then((doc) => {
        // console.log(doc)
        dispatch(setItems(doc));
      })
      .catch((err) => {
        console.log("에러가 난다~~");
        console.log(err);
      });
  };
};

const setCategoryDB = (category) => {
  console.log(category);

  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `http://54.180.90.16/category/${category}`,
    })
      .then((doc) => {
        console.log(doc);
        dispatch(setItems(doc));
      })
      .catch((err) => {
        console.log(err);
        console.log("아~~ 오나여~~~ 또 에러가 오나요~~~ 🤯;");
      });
  };
};

const getOneItemDB = (itemId) => {
  console.log(itemId);
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `http://54.180.90.16/detail/${itemId}`,
    })
      .then((doc) => {
        console.log(doc);
        dispatch(OneItem(doc));
      })
      .catch((err) => {
        console.log(err);
        console.log("getOneItem");
      });
  };
};

// Reducer
export default handleActions(
  {
    // main, category
    [SET_ITEMS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.item_list.data;
      }),
    [ON_MODAL]: (state, action) =>
      produce(state, (draft) => {
        draft.modal = true;
      }),
    [OFF_MODAL]: (state, action) =>
      produce(state, (draft) => {
        draft.modal = false;
      }),
    // detail
    [ONE_ITEM]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.oneItem = action.payload.item.data;
      }),
  },
  initialState
);

// action export
const actionCreators = {
  setItemsDB,
  setCategoryDB,
  getOneItemDB,
  onModal,
  offModal,
};

export { actionCreators };
