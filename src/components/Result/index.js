import React from "react";
import { BtnMainWrap } from "../Button/index";
import { Order } from "../Order/index";
import { Total } from "../Total/index";
import { Nutrition } from "../Nutrition/index";

export const Result = () => {
  return (
    <>
      <Order result />
      <Total />
      <Nutrition />
      <BtnMainWrap />
    </>
  );
};
