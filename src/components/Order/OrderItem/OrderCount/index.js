import React, { useState } from "react";
import {
  OrderCountWrap,
  OrderCountBox,
  OrderCountInputNum,
  OrderCountBtn,
  OrderCountNumWrap,
} from "./styled";
import { VerticalMiddle } from "../../../../styled";

export const OrderCount = () => {
  const [countNum, setCountNum] = useState(1);

  const onDecrease = () => {
    if (countNum > 0) {
      setCountNum((prevNum) => prevNum - 1);
    }
  };

  const onIncrease = () => {
    setCountNum((prevNum) => prevNum + 1);
  };

  const inputNumChange = (e) => {
    setCountNum(parseInt(e.target.value));
  };

  return (
    <OrderCountWrap>
      <VerticalMiddle>
        <OrderCountBox>
          <OrderCountBtn onClick={onDecrease}>-</OrderCountBtn>
          <OrderCountInputNum onChange={inputNumChange} value={countNum} />
          <OrderCountBtn onClick={onIncrease}>+</OrderCountBtn>
        </OrderCountBox>
      </VerticalMiddle>
    </OrderCountWrap>
  );
};

export const OrderCountNum = () => {
  return (
    <OrderCountWrap>
      <VerticalMiddle>
        <OrderCountNumWrap>1</OrderCountNumWrap>
      </VerticalMiddle>
    </OrderCountWrap>
  );
};
