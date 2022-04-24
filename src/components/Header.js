import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
// 패키지
import styled from 'styled-components';
import { history } from '../redux/configureStore';
// 아이콘
import { BiSearch } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = (props) => {
  //로그인 여부 확인
  const isLogin = useSelector((state) => state.user.isLogin);
  const isToken = localStorage.getItem('token');
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userActions.logoutDB());
  };
  const user = useSelector((state) => state.user.user);
  //postcode에서는 헤더 안 나오게 설정
  if (window.location.pathname === '/postcode') return null;
  return (
    <React.Fragment>
      <HeaderDiv>
        <div className="inner_wrap">
          <div className="topBar flex">
            <div className="delivery">
              <span>샛별 택배</span> 배송안내
            </div>
            {isLogin && isToken ? (
              <ul className="navBar flex login">
                <div className="userWrap">
                  <div className="user">일반</div>
                  <li>
                    {user[0]?.userName}님 <span></span>
                  </li>
                </div>
                <li onClick={logout}>로그아웃</li>
                <li>
                  고객센터 <span></span>
                </li>
              </ul>
            ) : (
              <ul className="navBar flex">
                <li
                  onClick={() => {
                    history.push('/signup');
                  }}
                >
                  회원가입
                </li>
                <li
                  onClick={() => {
                    history.push('/login');
                  }}
                >
                  로그인
                </li>
                <li>
                  고객센터 <span></span>
                </li>
              </ul>
            )}
          </div>
          <div
            className="LogoWrap flex"
            onClick={() => {
              history.push('/');
            }}
          >
            <img
              className="mainLogo"
              src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </HeaderDiv>
      <MenuBarWrap className="menuBarWrap">
        <div className="menuBarInner">
          <div className="menuBar flex">
            <ul className="flex">
              <li
                onClick={() => {
                  history.push('/category/mealkit');
                }}
              >
                <span className="hamBtn">
                  <GiHamburgerMenu />
                </span>
                전체 카테고리
              </li>
              <li
                onClick={() => {
                  history.push('/category/vegetable');
                }}
              >
                신상품
              </li>
              <li
                onClick={() => {
                  history.push('/category/maindish');
                }}
              >
                베스트
              </li>
              <li
                onClick={() => {
                  history.push('/category/bakery');
                }}
              >
                알뜰쇼핑
              </li>
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
              <div
                id="cartBtn"
                onClick={() => {
                  history.push('/cart');
                }}
              >
                <BsCart2 />
              </div>
            </div>
          </div>
        </div>
      </MenuBarWrap>
    </React.Fragment>
  );
};
export default Header;
const HeaderDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 16px 0;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    vertical-align: middle;
    cursor: pointer;
    .delivery {
      border: 1px solid #dedfe1;
      border-radius: 10px;
      padding: 2px 6px;
      width: 121px;
      height: 22px;
      span {
        color: #5f0080;
        font-weight: 600;
      }
    }
  }
  .login.navBar {
    width: 28%;
    position: relative;
    text-align: center;
    li {
      width: 100px;
      &:hover {
        cursor: pointer;
      }
    }
    .userWrap {
      width: 50%;
      display: flex;
      justify-content: space-between;
      .user {
        border: 1px solid #5f0080;
        padding: 1px 9px 0px;
        border-radius: 10px;
        width: 45px;
        height: 17px;
        position: relative;
        top: -2px;
        margin-right: 5px;
      }
    }
    li:nth-child(1),
    li:nth-child(2) {
      color: #5f0080;
      font-weight: 600;
      &::after {
        content: '';
        border-right: 1px solid #aaa;
        width: 1px;
        height: 1px;
        padding-left: 13px;
      }
    }
  }
  .navBar {
    width: 205px;
    width: 26%;
    position: relative;
    li {
      padding: 0 10px;
      &:hover {
        cursor: pointer;
      }
    }
    li:nth-child(1),
    li:nth-child(2) {
      color: #5f0080;
      font-weight: 600;
      &::after {
        content: '';
        border-right: 1px solid #aaa;
        width: 1px;
        height: 1px;
        padding-left: 19px;
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
`;
const MenuBarWrap = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 10px;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #cfcfcf;
  z-index: 2;
  .menuBar {
    width: 100%;
    max-width: 1050px;
    height: 56px;
    align-items: center;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: auto;
    display: flex;
    .hamBtn {
      margin-right: 10px;
      font-size: 16px;
      vertical-align: middle;
    }
    ul {
      width: 58%;
      display: flex;
      justify-content: space-around;
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
      outline: none;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      cursor: pointer;
      &:hover {
        color: #5f0080;
      }
    }
  }
`;
