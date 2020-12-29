import styled from "styled-components";

export const NutritionInfoWrap = styled.div`
  border-top: 4px double #000;
  margin-top: var(--spacing);
`;

export const NutritionItemBox = styled.ul`
  padding: var(--spacing-normal) 0;

  & + & {
    border-top: 1px solid #eee;
  }
`;

export const NutritionItem = styled.li`
  line-height: 1.4em;
`;
