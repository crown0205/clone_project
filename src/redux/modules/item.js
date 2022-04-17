import {
  createAction,
  handleActions
} from "redux-actions";
import {
  produce
} from "immer";
import axios from "axios";

// actions
const SET_ITEMS = "SET_ITEMS"

// actions creators
const setItems = createAction(SET_ITEMS, item_list => ({
  item_list
}))

const initialState = {
  item: [{
    itemId: "상품 아이디",
    itemName: "상품 이름",
    itemPrice: "가격",
    itemCategory: "카테고리",
    itemInfo: "상품 정보",
    cartCount: 4,
  }],
}

// middlewaore actions
const setItemsDB = () => {
  console.log("hi??")
  return function (dispatch, getState, {
    history
  }) {
    axios({
        method: "get",
        // url: "https://6251cd887f7fa1b1dddf398b.mockapi.io/post"
        // url: "https://virtserver.swaggerhub.com/sungji226/cloneCoding/1.1.0/main"
        url: "http://54.180.90.16/main",
        // 54.180.90.16
      })
      .then((doc) => {
        console.log({
          doc
        })

        dispatch(setItems(doc))
      })
      .catch((err) => {
        console.log("에러가 난다~~")
        console.log(err)
      })
  }
}

// Reducer
export default handleActions({
  [SET_ITEMS]: (state, action) => produce(state, (draft) => {
    console.log({action})
    console.log("리듀서쪽")
  })
}, initialState);

// action export
const actionCreators = {
  setItemsDB,
}

export {
  actionCreators
}
