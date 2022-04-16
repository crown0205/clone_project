import React from "react";
import styled from "styled-components";

// 캐로셀
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 아이콘
import { BsCart2 } from "react-icons/bs";

const Main = () => {

  const banner_settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
  };

  var card_settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Wrap>
        <div className="bannerWrap">
          <Slider {...banner_settings}>
            <div>
              <img
                className="card"
                src="https://res.kurly.com/images/event/2022/0407/tomato/pc/main_v2.png"
                alt="#"
              />
            </div>
            <div>
              <img
                className="card"
                src="https://img-cf.kurly.com/banner/main/pc/img/2fc6b874-164b-41bc-9d09-e3fcf9e4c804"
                alt="#"
              />
            </div>
            <div>
              <img
                className="card"
                src="https://img-cf.kurly.com/banner/main/pc/img/fa8ecd2d-b420-4805-9d9a-d158caa7c8a4"
                alt="#"
              />
            </div>
            <div>
              <img
                className="card"
                src="https://img-cf.kurly.com/banner/main/pc/img/33729ca6-1a24-40d0-9f55-454c9955d267"
                alt="#"
              />
            </div>
          </Slider>
        </div>

        {/* 상품 목록 */}
        <div className="innerWrap">
          <div className="itemListWrap">
            <p className="title">이 상품 어때요?</p>
            <Slider {...card_settings}>
              <div>
                <div className="itemImg">
                  {/* 이미지 class 속성으로 크기 묶어주고, img에 cusur 주기. 반복해서 할꺼닌깐, component로 만들어서 받아오자. 그리고 배너 작업 들어가면 될듯. */}
                  <img
                    src="https://img-cf.kurly.com/shop/data/goods/1623311791794l0.jpg"
                    width="249px"
                    height="320px"
                  ></img>
                  <button className="cardBtn">
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
              <div>
                <div className="itemImg">
                  {/* 이미지 class 속성으로 크기 묶어주고, img에 cusur 주기. 반복해서 할꺼닌깐, component로 만들어서 받아오자. 그리고 배너 작업 들어가면 될듯. */}
                  <img
                    src="https://img-cf.kurly.com/shop/data/goods/1623311791794l0.jpg"
                    width="249px"
                    height="320px"
                  ></img>
                  <button className="cardBtn">
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
              <div>
                <div className="itemImg">
                  {/* 이미지 class 속성으로 크기 묶어주고, img에 cusur 주기. 반복해서 할꺼닌깐, component로 만들어서 받아오자. 그리고 배너 작업 들어가면 될듯. */}
                  <img
                    src="https://img-cf.kurly.com/shop/data/goods/1623311791794l0.jpg"
                    width="249px"
                    height="320px"
                  ></img>
                  <button className="cardBtn">
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
              <div>
                <div className="itemImg">
                  {/* 이미지 class 속성으로 크기 묶어주고, img에 cusur 주기. 반복해서 할꺼닌깐, component로 만들어서 받아오자. 그리고 배너 작업 들어가면 될듯. */}
                  <img
                    src="https://img-cf.kurly.com/shop/data/goods/1623311791794l0.jpg"
                    width="249px"
                    height="320px"
                  ></img>
                  <button className="cardBtn">
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
              <div>
                <div className="itemImg">
                  {/* 이미지 class 속성으로 크기 묶어주고, img에 cusur 주기. 반복해서 할꺼닌깐, component로 만들어서 받아오자. 그리고 배너 작업 들어가면 될듯. */}
                  <img
                    src="https://img-cf.kurly.com/shop/data/goods/1623311791794l0.jpg"
                    width="249px"
                    height="320px"
                  ></img>
                  <button className="cardBtn">
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
              <div>
                <div className="itemImg">
                  {/* 이미지 class 속성으로 크기 묶어주고, img에 cusur 주기. 반복해서 할꺼닌깐, component로 만들어서 받아오자. 그리고 배너 작업 들어가면 될듯. */}
                  <img
                    src="https://img-cf.kurly.com/shop/data/goods/1623311791794l0.jpg"
                    width="249px"
                    height="320px"
                  ></img>
                  <button className="cardBtn">
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
            </Slider>
            {/* <div className="prevBtn Btn"></div>
            <div className="nextBtn Btn"></div> */}
          </div>

          <div className="banner"></div>
        </div>
      </Wrap>
    </React.Fragment>
  );
};

export default Main;

const Wrap = styled.div`
  /* 캐러셀 */
  width: 100%;
  height: 370px;

  .bannerWrap {
    max-width: 1400px;
    height: 100%;
    margin: auto;

    .card {
      max-width: 1400px;
      min-width: 1050px;
      width: 100%;
      height: 370px;
    }
  }

  .slick-dots {
    top: 338px;
    li.slick-active button:before {
      color: #fff;
    }
    li button:before {
      color: #fff;
    }
  }

  /* 상품 목록 */
  .innerWrap {
    width: 100%;
    /* overflow: hidden; */

    .itemListWrap {
      max-width: 1100px;
      width: 95%;
      height: 584px;
      margin: 50px auto 0;
      padding: 32px 0px 40px;
      position: relative;

      .title {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        color: #333333;
        text-align: center;
        margin-bottom: 27px;
      }

      ul {
        display: flex;
        /* overflow: hidden; */

        li {
          width: 267px;
          height: auto;
          max-height: 434px;
          padding: 0 9px;

          .itemImg {
            width: 249px;
            height: 320px;
            /* background-image: url("https://img-cf.kurly.com/shop/data/goods/1493359362774l0.jpg"); */
            background-color: #eee;
            background-size: contain;
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
        }
      }
      .Btn {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 230px;
        cursor: pointer;
      }

      .prevBtn {
        background-image: url("https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_60_60.svg ");
        left: -25px;
      }

      .nextBtn {
        background-image: url("https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_60_60.svg ");
        right: -35px;
      }
    }

    .banner {
      width: 1099px;
      height: 140px;
      margin: 0 auto 60px;
      background-image: url("https://img-cf.kurly.com/banner/random-band/pc/img/3be8f9eb-9a5e-45c5-ae92-0cba9a5df0aa");
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;
