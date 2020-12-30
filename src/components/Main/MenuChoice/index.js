import React from "react";
import { MenuChoiceWrap, MenuChoiceBox } from "./styled.js";
import { MenuChoiceItem } from "./MenuChoiceItem/index";
import { DefaultText } from "../../Default/index";

export const MenuChoice = () => {
  return (
    <MenuChoiceWrap>
      <MenuChoiceBox>
        <MenuChoiceItem />
        <MenuChoiceItem />
        <MenuChoiceItem />
        <MenuChoiceItem />
        <MenuChoiceItem />
        <MenuChoiceItem />
      </MenuChoiceBox>
      <DefaultText>
        <strong>'USER SETTING'</strong>을 설정해주세요.
      </DefaultText>
    </MenuChoiceWrap>
  );
};
