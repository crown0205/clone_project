import React from "react";

// 패키지
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { actionCreators as itemActions } from "../redux/modules/item";

// 컴포넌트
import BigItem from "../components/BigItem";

const Category = (props) => {
  const params = props.match.params
  const list = useSelector(state => (state.item.list))
  const dispatch = useDispatch()

  console.log(list)

  React.useEffect(()=>{
    dispatch(itemActions.setCategoryDB(params))
  },[params])

  return (
    <React.Fragment>
      <Wrap>
        <div className="innerWrap">
          {/* 카테고리 배너 */}
          <div className="bannerWrap">
            <img src="https://img-cf.kurly.com/category/banner/pc/62aa0430-3ec9-4029-842f-36d8c21d9318" alt=""></img>
          </div>

          <p className="title">신상품</p>
          <div className="navBarWrap">
            <div className="allLength">총 {625}개</div>
            <ul className="navbar">
              <li>추천순</li>
              <li>신상품순</li>
              <li>판매량순</li>
              <li>혜택순</li>
              <li>낮은 가격순</li>
              <li>높은 가격순</li>
            </ul>
          </div>

          <div className="itemWrap">
            {list.map((item, idx) => {
              return (
                <BigItem key={`category_${idx}`} {...item} />
              )
            })}
          </div>
        </div>
      </Wrap>
    </React.Fragment>
  );
};

export default Category;

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;

  .innerWrap {
    max-width: 1050px;
    width: 100%;
    margin: auto;

    .title {
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      color: #333333;
      text-align: center;
      margin-bottom: 27px;
      margin-top: 50px;
    }

    .navBarWrap{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .allLength{
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0;
      }
      
      .navbar {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
        letter-spacing: 0;
        display: flex;
        width: 35%;
        justify-content: space-between;

        li::after {
          content:"";
          padding-left: 10px;
          border-right: 2px solid #e5e5e5;
        }
        li:nth-child(2) {
          color: #333333;
          font-weight: 600;
        }

        li:nth-child(6){
          &::after {
            border: none;
          }
        }
      }
    }

    .itemWrap {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: repeat(3, 680px); */
      grid-gap: 1rem;
      overflow: hidden;

    }
  }
`;
