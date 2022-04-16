import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { history } from "../redux/configureStore"

const Header = () => {


  return (
    <React.Fragment>
      <HeaderDiv>
        <div className="inner_wrap">
          <div className="topBar flex">
            <div>
              <span>샛별 택배</span> 배송안내 ﹥
            </div>
            <ul className="navBar flex">
              {/* 유저 로그인시 */}
              {/* <div className="user">일반</div>
              <li>아무개 님 <span></span></li> */}
              <li onClick={()=> {
                history.push("/signup");
              }}>회원가입</li>
              <li onClick={(e)=> {
                history.push("/login");
              }}>로그인</li>
              <li>
                고객센터 <span></span>
              </li>
            </ul>
          </div>

          <div className="LogoWrap flex" onClick={()=>{
            history.push("/")
          }}>
            {/* <div className="mainLogo"></div> */}
            <img
              className="mainLogo"
              src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
            ></img>
          </div>

          <div className="menuBar flex">
            <ul className="flex">
              <li onClick={()=>{
                history.push("/category")
              }}>
                <span className="hamBtn">
                  <GiHamburgerMenu />
                </span>
                전체 카테고리
              </li>
              <li onClick={()=>{
                history.push("/category")
              }}>신상품</li>
              <li onClick={()=>{
                history.push("/category")
              }}>베스트</li>
              <li onClick={()=>{
                history.push("/category")
              }}>알뜰쇼핑</li>
              <li>특가/혜택</li>
            </ul>
            <form>
              <input placeholder="검색어를 입력해주세요." />
              <button className="serBtn">
                <BiSearch />
              </button>
            </form>

            <div className="iconWrap flex">
              <div id="mapBtn">
                <FiMapPin />
              </div>
              <div id="heartBtn">
                <AiOutlineHeart />
              </div>
              <div id="cartBtn" onClick={()=> {
                history.push("/cart")
              }}>
                <BsCart2 />
              </div>
            </div>
          </div>
        </div>
      </HeaderDiv>
    </React.Fragment>
  );
};

export default Header;

const HeaderDiv = styled.div`
  width: 100%;
  height: 180px;
  padding-top: 10px;

  box-shadow: 0 1px 5px #cfcfcf;

  .flex {
    display: flex;
    justify-content: space-between;
  }
  .point {
    cursor: pointer;
  }

  .inner_wrap {
    max-width: 1050px;
    width: 98%;
    height: 100%;
    margin: auto;
  }

  .topBar {
    font-size: 12px;
    cursor: pointer;

    div {
      border: 1px solid #dedfe1;
      border-radius: 10px;
      padding: 2px 6px;

      span {
        color: #5f0080;
        font-weight: 600;
      }
    }
  }

  .navBar {
    width: 18%;
    position: relative;
    li{
      &:hover {
        cursor: pointer;
      }
    }

    .user {
      border: 1px solid #5f0080;
      padding: 1px 9px 0px;
      border-radius: 10px;
      height: 17px;
      position: relative;
      left: 7px;
      top: -2px;
    }

    li:nth-child(1), li:nth-child(2) {
      color: #5f0080;
      font-weight: 600;
      &::after {
        content: "";
        border-right: 1px solid #aaa;
        width: 1px;
        height: 1px;

        padding-left: 15px;
      }
    }

    span {
      display: inline-block;
      background: url(https://res.kurly.com/pc/ico/1908/ico_down_16x10.png)
        no-repeat 0 0;
      background-size: 8px 5px;
      width: 8px;
      height: 5px;
    }
  }

  .LogoWrap {
    .mainLogo {
      margin: auto;
      height: 79px;
      width: 103px;
      cursor: pointer;
    }
  }

  .menuBar {
    height: 56px;
    align-items: center;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-top: 10px;

    .hamBtn {
      margin-right: 10px;
      font-size: 16px;
      vertical-align: middle;
    }

    ul {
      width: 58%;
      li {
        cursor: pointer;

        &:hover {
          color: #5f0080;
        }
      }
    }
  }

  form {
    position: relative;

    input {
      width: 245px;
      height: 36px;
      padding: 0 10px;
      border-radius: 20px;
      border: none;
      background-color: #f7f7f7;
      font-size: 12px;
      line-height: 16px;
    }

    .serBtn {
      border: none;
      border-radius: 50%;
      font-size: 22px;
      position: absolute;
      right: 10px;
      top: 5px;
      cursor: pointer;
      background-color: #f7f7f7;
    }
  }

  .iconWrap {
    width: 13%;
    font-size: 26px;
    align-items: center;

    div {
      cursor: pointer;
      &:hover {
        color: #5f0080;
      }
    }
  }
`;
//  Logo img
// https://res.kurly.com/images/marketkurly/logo/logo_x2.png
