import React from "react";
import { TotalWrap, TotalTextWrap, TotalNumWrap } from "./styled";

export const Total = () => {
  return (
    <TotalWrap>
      <TotalTextWrap>Total</TotalTextWrap>
      <TotalNumWrap>0원</TotalNumWrap>
    </TotalWrap>
  );
};
