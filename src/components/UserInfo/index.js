import React from "react";
import { UserInfoWrap, UserInfoBox, UserInfoItem } from "./styled";

export const UserInfo = () => {
  return (
    <UserInfoWrap>
      <UserInfoBox>
        <UserInfoItem></UserInfoItem>
        <UserInfoItem>상호명 / 대표자</UserInfoItem>
        <UserInfoItem>서울특별시 어쩌구저쩌구 금은동</UserInfoItem>
        <UserInfoItem>Tel 02-000-0000</UserInfoItem>
      </UserInfoBox>
    </UserInfoWrap>
  );
};
