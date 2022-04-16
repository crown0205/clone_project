import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const DetailSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Wrap>
            <Slider {...settings}>
                <div>
                    <img
                        className="card"
                        src="https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2F1.PNG?alt=media&token=1412770d-fbc3-4f24-a064-800fed675cfb"
                        alt="#"
                    />
                </div>
                <div>
                    <img
                        className="card"
                        src="https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2F2.PNG?alt=media&token=ac86f73d-2b63-473f-be4a-29557c64f405"
                        alt="#"
                    />
                </div>
                <div>
                    <img
                        className="card"
                        src="https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2F3.PNG?alt=media&token=7949f470-d86d-4755-bdbb-6c3af053b095"
                        alt="#"
                    />
                </div>
                <div>
                    <img
                        className="card"
                        src="https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2F4.PNG?alt=media&token=0415c70a-5410-4593-8422-5cc1a1a667c7"
                        alt="#"
                    />
                </div>
                <div>
                    <img
                        className="card"
                        src="https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2F5.PNG?alt=media&token=2ce766e1-85fe-4768-bc1a-4c350b8597a6"
                        alt="#"
                    />
                </div>
                <div>
                    <img
                        className="card"
                        src="https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2F6.PNG?alt=media&token=b74a9b4f-8dd4-432b-bc63-47e53efd27c6"
                        alt="#"
                    />
                </div>
            </Slider>
        </Wrap>
    );
};

const Wrap = styled.div`
    width: 100%;
    height: 320px;

    .card {
        width: 100%;
    }
`;

export default DetailSlider;
