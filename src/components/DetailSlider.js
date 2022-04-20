import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const DetailSlider = () => {
  const list = useSelector(state => state.item.list);

  let items = [];

  for (let i = 0; i < 9; i++) {
    items.push(list[i]);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Slider {...settings}>
      {items.map((item, idx) => {
        return (
          <Wrap key={`detailItem_${idx}`} >
            <img
              className="itemImg"
              src={item.itemImg}
              alt="#"
            />
            <div className="itemWrap">
              <p className="itemTitle">{item.itemName}</p>
              <p className="itemPrice">{item.itemPrice}</p>
            </div>
          </Wrap>
        );
      })}
    </Slider>
  );
};

const Wrap = styled.div`
  width: 178px !important;
  height: 320px;
  border: 1px solid #ddd;
  /* background-color: #aaa; */

  .itemImg {
    width: 178px;
    height: 229px;
  }
  .itemWrap {
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;

    .itemTitle {
      height: 35px;
    }
  }

  .slick-slide,
  .slick-active .slick-current {
    width: 178px !important;
  }
`;

export default DetailSlider;
