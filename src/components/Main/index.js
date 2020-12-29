import React from "react";
import { MainWrap } from "./styled";
import { MenuChoice } from "./MenuChoice/index";
import { Order } from "../Order/index";
import { Total } from "../Total/index";
import { BtnFinishWrap } from "../Button/index";

export const Main = () => {
  return (
    <MainWrap>
      <MenuChoice />
      <Order />
      <Total />
      <BtnFinishWrap />
    </MainWrap>
  );
};
