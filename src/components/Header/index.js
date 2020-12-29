import React from "react";
import { HeaderWrap } from "./styled";
import { Logo } from "./Logo/index";
import { BtnUserSetting } from "../Button/index";
import { Now } from "./Now/index";

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo />
      <BtnUserSetting />
      <Now />
    </HeaderWrap>
  );
};
