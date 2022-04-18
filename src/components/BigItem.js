import React from "react";

// 패키지
import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { useDispatch } from "react-redux";

// 모듈
import { actionCreators as itemActions } from "../redux/modules/item";

const BigItem = (props) => {
  const dispatch = useDispatch()

  console.log(props)

  return (
    <React.Fragment>
      <BigItemWrap>
        <div className="itemImg">
          <img
            src={props.itemImg}
            width="344px"
            height="433px"
            alt="음식사진"
          ></img>
          <button className="cardBtn" onClick={() => {
            // onModal 클릭시 아이템 (이름, 가격) 정보 보내줘야됨.
                dispatch(itemActions.onModal())
              }}>
            <BsCart2 />
          </button>
        </div>
        <div className="itemTitle">
          <p>{props.itemName}</p>
        </div>
        <div className="itemPw">
          <span className="present">{props.dc}</span>
          <div className="prise">
            {/* 1,125<span>원</span> */}
            {props.itemPrice}
          </div>
        </div>
        <div className="unPrise">
          {/* 1,210<span>원</span> */}
          {props.original}
        </div>

        <div className="itemDesc">{props.itemInfo}</div>
        <div className="Pointmark">kurly Only</div>
      </BigItemWrap>
    </React.Fragment>
  );
};

export default BigItem;

const BigItemWrap = styled.div`
  margin-top: 20px;

  .itemImg {
    position: relative;
    .cardBtn {
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      font-size: 24px;
      color: white;
      background-color: #4200586e;
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .itemTitle {
    margin-bottom: 8px;
    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 29px;
      color: #333333;
    }
  }

  .itemPw {
    clear: both;
    font-weight: 800;
    font-size: 18px;
    color: #333;
    margin-bottom: 2px;
    .present {
      float: left;
      margin-right: 10px;
      color: #fa622f;
    }
  }

  .unPrise {
    color: #999999;
    font-weight: 600;
    font-size: 16px;
    text-decoration: line-through;
    margin-top: 5px;
  }

  .itemDesc {
    color: #999;
    font-size: 13px;
    font-weight: 500;
    padding-top: 11px;
    line-height: 19px;
  }

  .Pointmark {
    color: #5f0080;
    background-color: #f3f3f3;
    height: 22px;
    margin-top: 6px;
    padding: 0 8px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    line-height: 22px;
    vertical-align: middle;
    border-radius: 5px;
    margin: 12px 10px 10px 0;

  }
`;
