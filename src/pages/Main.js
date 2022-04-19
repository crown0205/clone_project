import React from "react";

// 패키지
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// 모듈
import { actionCreators as itemActions } from "../redux/modules/item";

// 캐로셀
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 컴포넌트
import SmallItem from "../components/SmallItem";

const Main = () => {
  const dispatch = useDispatch();
  const item_list = useSelector(state => state.item?.list);
  const item_length = item_list?.length;

    // 빈 배열을 밖에다가 선언해주면 if문 안에서 작동하면 안으로 넣어준다.
    let random_list = [];

  if (item_length) {
    for (let i = 0; i < 8; i++) {
      let randomNum = Math.floor(Math.random() * item_list?.length);

      //   // 중복체크
      if (random_list.indexOf(randomNum) === -1) {
        //     //  리스트에서 중복되지 않은 리스트만 뽑아서 배열에 담음.
        random_list.push(item_list[randomNum]);
      } else {
        //     // 중복된 값이 나오면 i를 빼주어 다시 한번더 값을 만들어낸다.
        i--;
      }
    }
  }

  console.log(random_list);

  // 사이트 접속시 item 목록 불러오기
  React.useEffect(() => {
    dispatch(itemActions.setItemsDB());
  }, []);

  // banner Action
  const banner_settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Item list Action
  const card_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  //

  return (
    <React.Fragment>
      <Wrap>
        {/* 메인 배너 */}
        <div className="bannerWrap">
          <Slider {...banner_settings}>
            <div>
              <img
                className="card"
                src="https://img-cf.kurly.com/banner/main/pc/img/46b0eed9-0c77-4731-829b-f6f32727a2c3"
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
            <Slider className="itemList" {...card_settings}>
              {random_list.map((item, idx) => {
                return <SmallItem key={`item_${idx}`} {...item} />;
              })}
            </Slider>
          </div>

          {/* 배너 */}
          <div className="banner" />
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
    max-width: 1900px;
    height: 370px;
    margin: auto;
    overflow: hidden;
    .card {
      min-width: 1050px;
      max-width: auto;
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
      .itemList {
        min-width: 1050px;
        .slick-next {
          right: -6px;
          background-image: url("https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_60_60.svg ");
        }
        .slick-prev {
          z-index: 9999;
          left: -28px;
          background-image: url("https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_60_60.svg ");
        }
        .slick-prev,
        .slick-next {
          top: 40%;
          border-radius: 50%;
          width: 60px;
          height: 60px;
        }
        .slick-prev:before,
        .slick-next:before {
          color: transparent;
        }
      }
    }
    /* 배너 */
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
