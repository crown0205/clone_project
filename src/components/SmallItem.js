import React from "react";

// 패키지
import styled from "styled-components";

// 아이콘
import { BsCart2 } from "react-icons/bs";

// 컴포넌트
import Modal from "./Modal";
import { useDispatch } from "react-redux";

// 모듈
import { actionCreators as itemActions } from "../redux/modules/item";


const SmallItem = props => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <SmallItemWrap>
        <div>
          <div className="itemImg">
            <img
              src="https://img-cf.kurly.com/shop/data/goods/1623311791794l0.jpg"
              width="249px"
              height="320px"
              alt=""
            ></img>
            <button
              className="cardBtn"
              onClick={() => {
                dispatch(itemActions.onModal())
              }}
            >
              <BsCart2 />
            </button>
          </div>
          <div className="itemTitle">
            <p>바질</p>
          </div>
          <div className="itemPw">
            <span className="present">7%</span>
            <div className="prise">
              1,125<span>원</span>
            </div>
          </div>
          <div className="unPrise">
            1210<span>원</span>
          </div>
        </div>
      </SmallItemWrap>
    </React.Fragment>
  );
};

export default SmallItem;

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
    .present {
      float: left;
      margin-right: 10px;
      color: #fa622f;
    }
  }

  .unPrise {
    color: #999999;
    font-weight: 400;
    font-size: 14px;
    text-decoration: line-through;
  }
`;
