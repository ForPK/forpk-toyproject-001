import React from "react";
import { OrderWrap } from "./styled";
import { OrderItem } from "./OrderItem/index";
import { DefaultText } from "../Default/index";

const Order = ({ result }) => {
  return (
    <OrderWrap>
      <OrderItem result={result} />
      {result ? null : <DefaultText>위 메뉴를 먼저 선택해주세요.</DefaultText>}
    </OrderWrap>
  );
};

export default Order;
