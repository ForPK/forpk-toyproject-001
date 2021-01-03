import React from "react";
import {
  BtnBigWrap,
  BtnUserSettingWrap,
  BtnSmallWrap,
  BtnBlack,
  BtnHomeCompo,
  BtnPoint,
  BtnAddNutritionWrap,
  BtnAddMenuWrap,
} from "./styled";
import { VerticalMiddle } from "../../styled";
import { MdSettings } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { BsPlus, BsPlusCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

export const BtnUserSetting = () => {
  let history = useHistory();
  const goSetting = () => {
    history.push("/setting");
  };
  return (
    <>
      <BtnBigWrap>
        <BtnUserSettingWrap onClick={goSetting}>
          USER SETTINGS <MdSettings />
        </BtnUserSettingWrap>
      </BtnBigWrap>
    </>
  );
};

const BtnHome = () => {
  let history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return <BtnHomeCompo onClick={goHome}>Home</BtnHomeCompo>;
};

export const BtnHomeWrap = () => {
  return (
    <BtnBigWrap>
      <BtnHome />
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
      <BtnHome />
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
