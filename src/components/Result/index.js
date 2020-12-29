import React from "react";
import { BtnMainWrap } from "../Button/index";
import { OrderResult } from "../Order/index";
import { Total } from "../Total/index";
import { Nutrition } from "../Nutrition/index";

export const Result = () => {
  return (
    <>
      <OrderResult />
      <Total />
      <Nutrition />
      <BtnMainWrap />
    </>
  );
};
