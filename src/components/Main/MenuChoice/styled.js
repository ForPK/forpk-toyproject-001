import styled from "styled-components";

export const MenuChoiceWrap = styled.div`
  padding-top: var(--spacing);
`;

export const MenuChoiceBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 5px;
`;
