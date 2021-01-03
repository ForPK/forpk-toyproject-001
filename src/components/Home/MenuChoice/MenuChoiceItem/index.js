import React from "react";
import {
  MenuChoiceItemWrap,
  MenuChoiceItemName,
  MenuChoiceItemPrice,
  MenuChoiceItemCheck,
} from "./styled";
import { AiFillCheckCircle } from "react-icons/ai";

export const MenuChoiceItem = () => {
  return (
    <MenuChoiceItemWrap title={"Basic Menu01"}>
      <MenuChoiceItemName>Basic Menu01</MenuChoiceItemName>
      <MenuChoiceItemPrice>₩ 20,000</MenuChoiceItemPrice>
      <MenuChoiceItemCheck>
        <AiFillCheckCircle />
      </MenuChoiceItemCheck>
    </MenuChoiceItemWrap>
  );
};
