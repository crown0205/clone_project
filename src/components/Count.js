import React from "react";
import styled from "styled-components";

import { Button, Input } from "../elements/Index";

const Count = () => {
    const [count, setCount] = React.useState(1);

    const countMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const countPlus = () => {
        setCount(count + 1);
    };

    return (
        <React.Fragment>
            <Buttonbox>
                <Button
                    small
                    size="30px"
                    src={
                        "https://res.kurly.com/pc/service/common/2009/ico_minus_on.svg"
                    }
                    _onClick={countMinus}
                >
                    -
                </Button>
                <Input
                    countInput
                    value={count}
                    width="26px"
                    height="30px"
                ></Input>
                <Button
                    small
                    size="30px"
                    src={
                        "https://res.kurly.com/pc/service/common/2009/ico_plus_on.svg"
                    }
                    _onClick={countPlus}
                >
                    +
                </Button>
            </Buttonbox>
        </React.Fragment>
    );
};

const Buttonbox = styled.div`
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    width: 88px;
    // height: 32px;
    max-height: 35px;
    // padding: 0px;
    display: flex;
    position: absolute;
    background: #fff;
`;

export default Count;
