import React from "react";
import { OrderItemWrap, OrderName } from "./styled";
import { OrderCount, OrderCountNum } from "./OrderCount/index";
import { OrderPrice } from "./OrderPrice/index";
import { BtnDeleteWrap } from "../../Button/index";
import { OrderIndex } from "./OrderIndex/index";

export const OrderItem = () => {
  return (
    <OrderItemWrap>
      <OrderIndex />
      <OrderName>Basic Menu Basic Menu Basic Menu Basic Menu 01</OrderName>
      <OrderCount />
      <OrderPrice />
      <BtnDeleteWrap />
    </OrderItemWrap>
  );
};

export const OrderItemResult = () => {
  return (
    <OrderItemWrap>
      <OrderIndex>001</OrderIndex>
      <OrderName>Basic Menu Basic Menu Basic Menu 01</OrderName>
      <OrderCountNum />
      <OrderPrice />
    </OrderItemWrap>
  );
};
