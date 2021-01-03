import React from "react";
import { NutritionInfoWrap } from "./styled";
import { NutritionItemWrap } from "./NutritionItem/index";
import { TitleCenter } from "../Title/styled";

export const Nutrition = () => {
  return (
    <NutritionInfoWrap>
      <TitleCenter>*** 영양성분 ***</TitleCenter>
      <NutritionItemWrap />
    </NutritionInfoWrap>
  );
};
