import React from "react";
import { OrderItemWrap, OrderName } from "./styled";
import { OrderCount, OrderCountNum } from "./OrderCount/index";
import { OrderPrice } from "./OrderPrice/index";
import { BtnDeleteWrap } from "../../Button/index";
import { OrderIndex } from "./OrderIndex/index";

export const OrderItem = ({ result }) => {
  return (
    <OrderItemWrap result={result}>
      <OrderIndex>001</OrderIndex>
      <OrderName>Basic Menu Basic Menu Basic Menu Basic Menu 01</OrderName>
      {result ? <OrderCountNum /> : <OrderCount />}
      <OrderPrice />
      {result ? null : <BtnDeleteWrap />}
    </OrderItemWrap>
  );
};
