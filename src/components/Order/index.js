import React from "react";
import { OrderWrap } from "./styled";
import { OrderItem, OrderItemResult } from "./OrderItem/index";
import { DefaultText } from "../Default/index";

export const Order = () => {
  return (
    <OrderWrap>
      <OrderItem />
      <DefaultText>위 메뉴를 먼저 선택해주세요.</DefaultText>
    </OrderWrap>
  );
};

export const OrderResult = () => {
  return (
    <OrderWrap result>
      <OrderItemResult />
    </OrderWrap>
  );
};
