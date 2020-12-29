import React from "react";
import { OrderPriceWrap } from "./styled";
import { VerticalMiddle } from "../../../../styled";

export const OrderPrice = () => {
  return (
    <OrderPriceWrap>
      <VerticalMiddle>₩ 12,000</VerticalMiddle>
    </OrderPriceWrap>
  );
};
