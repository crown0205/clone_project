import React from "react";

import styled from "styled-components";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterWrap>
        <div className="innerWrap">
          <div className="left">
            <p className="title">고객행복센터</p>

            <div className="inner">
              <div className="innerLeft">
                <p className="number">1633-1103</p>
                <button className="btn">카카오톡 문의</button>
                <button className="btn">1:1 문의</button>
                <button className="btn">대량주문 문의</button>
              </div>
              <div className="innerRight">
                <p className="rightTitle">365고객센터</p>
                <p className="rightContent">오전 7시 _ 오후 7시</p>
                <p className="rightTitle">365고객센터</p>
                <p className="rightContent">오전 7시 _ 오후 7시</p>
                <p className="rightTitle">24시간 접수 가능</p>
                <p className="rightContent">
                  고객센터 운영시간에 순차적으로 답변해드리겠습니다.
                </p>

                <p className="rightContent">
                  비회원의 경우 이메일로 문의 바랍니다.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <ul className="footBar">
              <li>컬러소개</li>
              <li>컬러소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </ul>
            <div className="Introduce one">
              FE:
              <span className="name">강성지</span>
              <span className="name">정현수</span>
              <span className="name">공지애</span>
            </div>
            <div className="Introduce two">
              BE:
              <span className="name">홍준기</span>
              <span className="name">김윤하</span>
              <span className="name">김태균</span>
            </div>
            <ul className="iconWrap">
              <li>
                <img
                  src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
                  alt=""
                  width="30px"
                  height="30px"
                ></img>
              </li>
              <li>
                <img
                  src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
                  alt=""
                  width="30px"
                  height="30px"
                ></img>
              </li>
              <li>
                <img
                  src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
                  alt=""
                  width="30px"
                  height="30px"
                ></img>
              </li>
              <li>
                <img
                  src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
                  alt=""
                  width="30px"
                  height="30px"
                ></img>
              </li>
              <li>
                <img
                  src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
                  alt=""
                  width="30px"
                  height="30px"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </FooterWrap>
      <Etc className="etc">
        <div className="etcInner">
          <p>
            지금 이 마켓컬리 사이트에서 판매되는 상품들은 마켓컬리에 있는 실제 상품이나 이것은 클론 사이트입니다..
            그래서 상품을 보여 드릴수는 있지만, 판매는 하지 않는 마켓플레이스(오픈마켓) 있습니다.
          </p>
          <p>
            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
            통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
            교환/환불 등 의무와 책임을 부담하지 않습니다.
          </p>
          <em className="Em">© KORLY CORPS. AAA RIGHTS DESERVED</em>
        </div>
      </Etc>
    </React.Fragment>
  );
};

export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  padding-top: 29px;
  border-top: 1px solid #e3e3e3;
  margin-top: 50px;
  padding-bottom: 30px;
  background-color: #f7f7f7;

  .innerWrap {
    width: 1100px;
    margin: auto;
    display: flex;

    .left {
      width: 50%;

      .title {
        font-size: 20px;
        font-weight: 700;
        color: #333;
        line-height: 24px;
      }
      .inner {
        display: flex;
        margin-top: 10px;

        .innerLeft {
          width: 140px;
          margin-right: 15px;

          .number {
            font-size: 30px;
            font-weight: 800;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
          .btn {
            display: block;
            width: 140px;
            height: 40px;
            background-color: #fff;
            outline: none;
            border: 1px solid #e3e3e3;
            border-radius: 5px;
            margin-bottom: 16px;
            font-weight: 600;
            cursor: pointer;
          }
        }

        .innerRight {
          .rightTitle {
            margin-bottom: 5px;
          }
          .rightContent {
            color: #999;
            margin-bottom: 20px;
          }
        }
      }
    }
    .right {
      width: 50%;
      .footBar {
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        li:hover {
          font-weight: 600;
        }
      }
      .Introduce {
        display: inline-block;
        width: 400px;
        background-color: #dfdfdf;
        font-size: 30px;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 2px 3px 5px 0px grey;
        color: #1b1b1b;

        .name {
          display: inline-block;
          margin: 0 13px;
          font-size: 30px;
        }
      }
      .one {
        margin-top: 30px;
      }
      .two {
        margin-top: 30px;
      }

      .iconWrap {
        display: flex;
        justify-content: space-around;
        width: 230px;
        margin-top: 30px;
        li {
          cursor: pointer;
        }
      }
    }
  }
`;

const Etc = styled.div`
  width: 100%;
  background-color: #282828;
  .etcInner{
    width: 1100px;
    margin: auto;
    text-align: center;
    padding: 20px 16px;
    font-size: 10px;
    letter-spacing: 1px;

    p {
      margin-bottom: 3px;
      color: #a0a0a0;
    }

    .Em {
      color: #acacac;
      display: inline-block;
      margin-top: 10px;
    }
  }
`;
