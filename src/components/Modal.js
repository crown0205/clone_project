import React from "react";

// 패키지
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// 모듈
import item, { actionCreators as itemActions } from "../redux/modules/item";

const Modal = (props) => {
  const dispatch = useDispatch();
  const itemData = useSelector(state => state.item.oneItem)
  const itemPrice = useSelector(state => state.item.oneItem.itemPrice)
  const ModalPrice1 = itemPrice.replace("원", "").replace(",","")

  const [count, setCount] = React.useState(1);
  
  const countMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const countPlus = () => {
    setCount(count + 1);
  };

  return (
    <Wrap>
      <div className="cartModal">
        <div className="itemWrap">
          <p className="title">{itemData.itemName}</p>
          <div className="itemCount">
            <span className="price">{itemData.itemPrice}</span>
            <span className="count">
              <button className="down btn" onClick={countMinus}></button>
              <input readOnly="readOnly" value={count} />
              <button className="up btn" onClick={countPlus}></button>
            </span>
          </div>
        </div>

        <div className="totalWrap">
          <div className="totalinner">
            <span className="total">합계</span>
            <span className="totalPrice">
              {ModalPrice1 * count}<span>원</span>
            </span>
          </div>
          <div className="totalText">
            <span className="point">적립</span>
            <span>로그인 후, 회원할인가와 적립혜택 제공</span>
          </div>
        </div>

        {/* 버튼 */}
        <div className="btnWrap ">
          <button
            className="cancel btn"
            onClick={() => {
              dispatch(itemActions.offModal());
            }}
          >
            취소
          </button>
          <button
            className="addCart btn"
            onClick={() => {
              alert("준비중");
              // 장바구니 담기 클릭시 아이템 (이름, 수량, 가격) 정보 넘겨줘야됨.
            }}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </Wrap>
  );
};

export default Modal;

const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  /* 모달 */
  .cartModal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 440px;
    padding: 30px;
    border-radius: 10px;

    /* 아이템 카운드 부분 */
    .itemWrap {
      min-height: 120px;

      .title {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 600;
      }

      .itemCount {
        display: flex;
        justify-content: space-between;

        .price {
          font-size: 14px;
          font-weight: 800;
          padding-top: 6px;
        }

        .count {
          display: flex;
          justify-content: space-between;
          width: 88px;
          height: 30px;
          border: 1px solid #dddfe1;
          border-radius: 3px;

          .btn {
            width: 28px;
            height: 28px;
            background-color: #fff;
            outline: none;
            border: none;
            color: #fff;
            background-size: 30px 30px;
            cursor: pointer;
          }

          input {
            width: 30px;
            height: 29px;
            outline: none;
            border: 0;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            line-height: 18px;
            padding-top: 2px;
            border-bottom: 1px solid #dddfe1;
            color: #000;
          }

          .down {
            background: url("https://res.kurly.com/pc/ico/2010/ico_minus_on.svg")
              no-repeat 50% 50%;
          }

          .up {
            background: url("https://res.kurly.com/pc/ico/2010/ico_plus_on.svg")
              no-repeat 50% 50%;
          }
        }
      }
    }

    /* 총 가격 */
    .totalWrap {
      margin-bottom: 20px;
      .totalinner {
        display: flex;
        justify-content: space-between;

        .total {
          font-size: 16px;
          font-weight: 600;
        }

        .totalPrice {
          font-size: 24px;
          font-weight: 700;

          span {
            display: inline-block;
            position: relative;
            top: -3px;
            padding-left: 4px;
            font-size: 16px;
            font-weight: 500;
          }
        }
      }

      .totalText {
        text-align: right;
        font-weight: 600;

        .point {
          display: inline-block;
          font-size: 11px;
          background-color: #ffbf00;
          font-weight: 700;
          color: #fff;
          width: 38px;
          height: 20px;
          border-radius: 10px;
          line-height: 20px;
          text-align: center;
          vertical-align: 1px;
          margin-right: 6px;
          padding-top: 1px;
        }

        span {
          font-size: 14px;
          font-weight: 500;
        }
      }
    }

    /* 버튼 */
    .btnWrap {
      display: flex;
      justify-content: space-between;

      .btn {
        width: 186px;
        height: 56px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      }

      .cancel {
        background-color: #fff;
      }

      .addCart {
        color: #fff;
        background-color: #5f0081;
        border: 1px solid #5f0081;
      }
    }
  } 
`;
