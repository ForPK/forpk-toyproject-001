import React from "react";
import {
  BtnBigWrap,
  BtnUserSettingWrap,
  BtnSmallWrap,
  BtnBlack,
  BtnMain,
  BtnPoint,
  BtnAddNutritionWrap,
  BtnAddMenuWrap,
} from "./styled";
import { VerticalMiddle } from "../../styled";
import { MdSettings } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { BsPlus, BsPlusCircleFill } from "react-icons/bs";

export const BtnUserSetting = () => {
  return (
    <BtnBigWrap>
      <BtnUserSettingWrap>
        USER SETTINGS <MdSettings />
      </BtnUserSettingWrap>
    </BtnBigWrap>
  );
};

export const BtnMainWrap = () => {
  return (
    <BtnBigWrap>
      <BtnMain>MAIN</BtnMain>
    </BtnBigWrap>
  );
};

export const BtnFinishWrap = () => {
  return (
    <BtnBigWrap>
      <BtnBlack>FINISH</BtnBlack>
    </BtnBigWrap>
  );
};

export const BtnsWrap = () => {
  return (
    <BtnBigWrap>
      <BtnBlack>SAVE</BtnBlack>
      <BtnMain>MAIN</BtnMain>
      <BtnPoint>RESET</BtnPoint>
    </BtnBigWrap>
  );
};

export const BtnDeleteWrap = () => {
  return (
    <BtnSmallWrap>
      <VerticalMiddle>
        <MdCancel />
      </VerticalMiddle>
    </BtnSmallWrap>
  );
};

export const BtnAddNutrition = () => {
  return (
    <BtnAddNutritionWrap>
      <BsPlus />
    </BtnAddNutritionWrap>
  );
};

export const BtnAddMenu = () => {
  return (
    <BtnAddMenuWrap>
      <BsPlusCircleFill />
    </BtnAddMenuWrap>
  );
};
