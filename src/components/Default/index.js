import React from "react";
import {
  DefaultGitWrap,
  MyGitAddress,
  MyGitIconWrap,
  DefaultTextWrap,
} from "./styled";
import { ImEye } from "react-icons/im";

export const DefaultGit = () => {
  return (
    <DefaultGitWrap>
      <MyGitIconWrap>
        <ImEye />
      </MyGitIconWrap>
      <MyGitAddress
        href="https://github.com/ForPK"
        target="_blank"
        rel="noreferrer"
      >
        For PK's Github
      </MyGitAddress>
    </DefaultGitWrap>
  );
};

export const DefaultText = ({ children }) => {
  return <DefaultTextWrap>{children}</DefaultTextWrap>;
};
