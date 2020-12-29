import React from "react";
import { NutritionInfoWrap, NutritionItemBox, NutritionItem } from "./styled";
import { TitleCenter } from "../Title/styled";

export const Nutrition = () => {
  return (
    <NutritionInfoWrap>
      <TitleCenter>*** 영양성분 ***</TitleCenter>
      <NutritionItemGroup />
    </NutritionInfoWrap>
  );
};

export const NutritionItemGroup = () => {
  return (
    <NutritionItemBox>
      <NutritionItem>- 메뉴이름01</NutritionItem>
      <NutritionItem>- 1회 제공량 : 250 g</NutritionItem>
      <NutritionItem>- 열량 : 152 kcal</NutritionItem>
      <NutritionItem>- 영양성분 : 나트륨 150mg / 단백질 60ml</NutritionItem>
    </NutritionItemBox>
  );
};
