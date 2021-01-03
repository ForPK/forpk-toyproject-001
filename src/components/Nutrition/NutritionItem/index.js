import React from "react";
import { NutritionItemBox, NutritionItem } from "./styled";

export const NutritionItemWrap = () => {
  return (
    <NutritionItemBox>
      <NutritionItem>- 메뉴이름01</NutritionItem>
      <NutritionItem>- 1회 제공량 : 250 g</NutritionItem>
      <NutritionItem>- 열량 : 152 kcal</NutritionItem>
      <NutritionItem>- 영양성분 : 나트륨 150mg / 단백질 60ml</NutritionItem>
    </NutritionItemBox>
  );
};
