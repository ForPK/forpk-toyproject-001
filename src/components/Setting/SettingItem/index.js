import React from "react";
import {
  SettingItemWrap,
  Label,
  InputTitle,
  InputWrap,
  Input,
  Unit,
  LabelSelectWrap,
  NuritionWrap,
  SelectNutrition,
  SelectUnit,
} from "./styled";
import { BtnDeleteWrap, BtnAddNutrition } from "../../Button/index";

export const SettingItemsA = () => {
  return (
    <>
      <SettingItemBasic id={"business-name"} type={"text"}>
        상호명
      </SettingItemBasic>

      <SettingItemBasic id={"business-boss"} type={"text"}>
        대표자
      </SettingItemBasic>

      <SettingItemBasic id={"business-tel"} type={"tel"}>
        전화번호
      </SettingItemBasic>

      <SettingItemBasic id={"business-address"} type={"text"}>
        주소
      </SettingItemBasic>

      <SettingItemBasic id={"business-logo"} type={"file"}>
        로고파일
      </SettingItemBasic>
    </>
  );
};

export const SettingItemsB = () => {
  return (
    <>
      <SettingItemBasic id={"name"} type={"text"}>
        메뉴명
      </SettingItemBasic>

      <SettingItemUnit id={"price"} unit={"원"}>
        가격
      </SettingItemUnit>

      <SettingItemWrap>
        <InputTitle>영양성분</InputTitle>
        <NuritionWrap>
          <SettingItemUnit id={"serving-per"} unit={"g"}>
            1회 제공량
          </SettingItemUnit>
          <SettingItemUnit id={"calories"} unit={"kcal"}>
            열량
          </SettingItemUnit>
          <SettingItemSelect />
          <BtnAddNutrition />
        </NuritionWrap>
      </SettingItemWrap>
    </>
  );
};

export const SettingItemBasic = ({ id, type, children }) => {
  return (
    <SettingItemWrap>
      <Label htmlFor={id}>{children}</Label>
      <InputWrap>
        <Input id={id} type={type} />
      </InputWrap>
    </SettingItemWrap>
  );
};

export const SettingItemUnit = ({ id, children, unit }) => {
  return (
    <SettingItemWrap>
      <Label htmlFor={id}>{children}</Label>

      <InputWrap>
        <Input id={id} type="text" />
        <Unit>{unit}</Unit>
      </InputWrap>
    </SettingItemWrap>
  );
};

const SettingItemSelect = ({ id, children }) => {
  return (
    <SettingItemWrap>
      <LabelSelectWrap>
        -
        <SelectNutrition>
          <option selected>영양소 선택</option>
          <option value={"나트륨"}>나트륨</option>
          <option valule={"단백질"}>단백질</option>
          <option value={"포화지방"}>포화지방</option>
          <option value={"당류"}>당류</option>
          <option value={"콜레스테롤"}>콜레스테롤</option>
          <option value={"탄수화물"}>탄수화물</option>
          <option value={"식이섬유"}>식이섬유</option>
          <option value={"비타민A"}>비타민A</option>
          <option value={"비타민B"}>비타민B</option>
          <option value={"비타민C"}>비타민C</option>
          <option value={"비타민D"}>비타민D</option>
          <option value={"철분"}>철분</option>
          <option value={"칼슘"}>칼슘</option>
        </SelectNutrition>
        <BtnDeleteWrap />
      </LabelSelectWrap>
      <Label htmlFor={id}>{children}</Label>
      <InputWrap>
        <Input id={id} />
        <SelectUnit>
          <option selected>단위 선택</option>
          <option value={"g"}>g</option>
          <option value={"mg"}>mg</option>
        </SelectUnit>
      </InputWrap>
    </SettingItemWrap>
  );
};
