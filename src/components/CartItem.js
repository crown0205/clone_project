import React from "react";
import Package from "../components/Package";
import Count from "../components/Count";

const OrderItem = () => {
    return (
        <React.Fragment>
            <Package />
            <div>
                <span>선택버튼</span>
                <a>사진</a>
                <div>
                    <a>아이템명</a>
                </div>
                <Count />
                <span>가격</span>
                <button></button>
            </div>
        </React.Fragment>
    );
};

export default OrderItem;
