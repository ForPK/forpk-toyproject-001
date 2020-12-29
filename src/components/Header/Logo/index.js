import React from "react";
import { LogoWrap } from "./styled";
import LogoFile from "./forpk.png";

export const Logo = () => {
  return (
    <LogoWrap>
      <img src={LogoFile} alt="logo" />
    </LogoWrap>
  );
};
