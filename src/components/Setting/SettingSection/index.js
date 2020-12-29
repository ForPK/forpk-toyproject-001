import React from "react";
import { SettingGruop } from "./styled";
import { SectionWrap, SectionTitle } from "../../Title/styled";
import { SettingItemsA, SettingItemsB } from "../SettingItem/index";
import { BtnAddMenu } from "../../Button/index";

export const SettingSectionBusiness = () => {
  return (
    <SectionWrap>
      <SectionTitle>사업자 정보</SectionTitle>
      <SettingGruop>
        <SettingItemsA />
      </SettingGruop>
    </SectionWrap>
  );
};

export const SettingSectionMenu = () => {
  return (
    <SectionWrap>
      <SectionTitle>메뉴 정보</SectionTitle>
      <SettingGruop>
        <SettingItemsB />
      </SettingGruop>
      <BtnAddMenu />
    </SectionWrap>
  );
};
