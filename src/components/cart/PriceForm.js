import React from "react";
import styled from "styled-components";
import { Grid, DetailSpan } from "../../elements/Index";

const PriceForm = (props) => {
    const { children, bold } = props;

    return (
        <Grid height="36px" width="284px" alignItems="center">
            <Dl>
                <Dt>{children}</Dt>
                <Grid>
                    <DetailSpan
                        size="18px"
                        color="#4c4c4c"
                        lineHeight="19px"
                        bold={bold}
                    >
                        108,350
                    </DetailSpan>
                    <DetailSpan size="16px" color="#4c4c4c">
                        원
                    </DetailSpan>
                </Grid>
            </Dl>
        </Grid>
    );
};

const Dl = styled.dl`
    width: 244px;
    display: flex;
    justify-content: space-between;
`;
const Dt = styled.dt`
    font-size: 16px;
    color: #4c4c4c;
`;

export default PriceForm;
