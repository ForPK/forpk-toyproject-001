import React from "react";
import {
  OrderCountWrap,
  OrderCountBox,
  OrderCountInputNum,
  OrderCountBtn,
  OrderCountNumWrap,
} from "./styled";
import { VerticalMiddle } from "../../../../styled";

export const OrderCount = () => {
  return (
    <OrderCountWrap>
      <VerticalMiddle>
        <OrderCountBox>
          <OrderCountBtn>-</OrderCountBtn>
          <OrderCountInputNum type="text" value={1} />
          <OrderCountBtn>+</OrderCountBtn>
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
