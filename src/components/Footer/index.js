import React from "react";
import { FooterWrap, CopyrightWrap } from "./styled";
import UserInfo from "../UserInfo/index";
import { DefaultGit } from "../Default/index";

const Footer = () => {
  return (
    <FooterWrap>
      <UserInfo />
      <DefaultGit />
      <CopyrightWrap>&copy; 2020. 'For PK'</CopyrightWrap>
    </FooterWrap>
  );
};

export default Footer;
