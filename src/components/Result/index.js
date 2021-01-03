import React from "react";
import { BtnHomeWrap } from "../Button/index";
import Order from "../Order/index";
import Total from "../Total/index";
import { Nutrition } from "../Nutrition/index";

const Result = () => {
  return (
    <>
      <Order result />
      <Total />
      <Nutrition />
      <BtnHomeWrap />
    </>
  );
};

export default Result;
