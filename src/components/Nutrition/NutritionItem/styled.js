import styled from "styled-components";

export const NutritionItemBox = styled.ul`
  padding: var(--spacing-normal) 0;

  & + & {
    border-top: 1px solid #eee;
  }
`;

export const NutritionItem = styled.li`
  line-height: 1.4em;
`;
