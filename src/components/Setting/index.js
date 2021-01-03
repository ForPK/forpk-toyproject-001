import React from "react";
import { SettingWrap, SettingForm } from "./styled";
import {
  SettingSectionBusiness,
  SettingSectionMenu,
} from "./SettingSection/index";
import { BtnsWrap } from "../Button/index";

const Setting = () => {
  return (
    <SettingWrap>
      <SettingForm>
        <SettingSectionBusiness />
        <SettingSectionMenu />
        <BtnsWrap />
      </SettingForm>
    </SettingWrap>
  );
};

export default Setting;
