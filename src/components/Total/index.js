import React from "react";
import { TotalWrap, TotalTextWrap, TotalNumWrap } from "./styled";

const Total = () => {
  return (
    <TotalWrap>
      <TotalTextWrap>Total</TotalTextWrap>
      <TotalNumWrap>0원</TotalNumWrap>
    </TotalWrap>
  );
};

export default Total;
