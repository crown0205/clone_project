import React from "react";

// 패키지
import styled from "styled-components";

// 모듈
import { actionCreators as itemActions } from "../redux/modules/item";
import { history } from "../redux/configureStore";

// 컴포넌트
import Modal from "./Modal";
import { useDispatch } from "react-redux";

// 아이콘
import { BsCart2 } from "react-icons/bs";


const SmallItem = props => {
  const dispatch = useDispatch()
  const itemId = props._id

  // console.log(itemId)

  return (
    <React.Fragment>
      <SmallItemWrap>
        <div>
          <div className="itemImg">
            <img
              src={props.itemImg}
              width="249px"
              height="320px"
              alt=""
              onClick={()=> {
                history.push(`/detail/${itemId}`)
              }}
            ></img>
            <button
              className="cardBtn"
              onClick={() => {
                dispatch(itemActions.onModal())
                dispatch(itemActions.getOneItemDB(itemId));
              }}
            >
              <BsCart2 />
            </button>
          </div>
          <div className="itemTitle">
            <p>{props.itemName}</p>
          </div>
          <div className="itemPw">
            {props.dc && <span className="dc"> {props.dc}</span>}
            <div className="prise">
              {props.itemPrice}
            </div>
          </div>
          {props.original && <div className="original">
            {props.original}
          </div> }
          
        </div>
      </SmallItemWrap>
    </React.Fragment>
  );
};

export default SmallItem;

SmallItem.defaultProps = {
  itemImg : "https://img-cf.kurly.com/shop/data/goods/1649919701563l0.jpg",
  itemName: "짬뽕",
  dc: "7%",
  itemPrice: "7,900",
  original: "5,200원",
}

const SmallItemWrap = styled.div`
  .itemImg {
    width: 249px;
    height: 320px;
    background-color: #eee;
    position: relative;
    margin-bottom: 14px;

    .cardBtn {
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      font-size: 24px;
      color: white;
      background-color: #4200586e;
      position: absolute;
      bottom: 15px;
      right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .itemTitle {
    margin-bottom: 8px;
    p {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 23px;
      color: #333333;
    }
  }

  .itemPw {
    clear: both;
    font-weight: 800;
    font-size: 16px;
    margin-bottom: 2px;
    .dc {
      float: left;
      margin-right: 10px;
      color: #fa622f;
    }
  }

  .original {
    color: #999999;
    font-weight: 400;
    font-size: 14px;
    text-decoration: line-through;
  }
`;
