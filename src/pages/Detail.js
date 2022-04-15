import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

const Detail = () => {
    return (
        <React.Fragment>
            <Grid>
                <Grid>
                    <Grid>
                        <image src="https://firebasestorage.googleapis.com/v0/b/react-homework1.appspot.com/o/images%2FdetailItemImage.PNG?alt=media&token=c5c771d3-2cf7-4c49-8c59-52024d7d7c68" />
                    </Grid>
                    <Grid>
                        <Grid>상품명</Grid>
                        <Grid>가격</Grid>
                        <Grid>상세정보이미지</Grid>
                        <Grid>수량</Grid>
                        <Grid>
                            <Grid>가격</Grid>
                            <Grid>장바구니 담기</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>연관상품(배너이미지)</Grid>
                <Grid>상품설명, 고객리뷰, 문의내용</Grid>
                <Grid>상세설명이미지</Grid>
                <Grid>밑에는 어떻게 처리하지?</Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Detail;
