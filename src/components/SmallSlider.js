import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SmallItem from "./SmallItem";
import SmallModal from "./SmallModal";

const SmallSlider = ({ random_list }) => {
  const [isModal, setIsModal] = useState(false);

  // Item list Action
  const card_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <React.Fragment>
      <div className="itemListWrap">
        <p className="title">이 상품 어때요?</p>
        <Slider className="itemList" {...card_settings}>
          {random_list.map((item, idx) => {
            return (
              <SmallItem
                key={`item_${idx}`}
                item={item}
                setIsModal={setIsModal}
              />
            );
          })}
        </Slider>
      </div>

      {isModal ? <SmallModal setIsModal={setIsModal} /> : null}
    </React.Fragment>
  );
};

export default SmallSlider;
