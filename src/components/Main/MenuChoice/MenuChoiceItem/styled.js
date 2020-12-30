import styled from "styled-components";
import { TextOverflow } from "../../../../styled";

export const MenuChoiceItemWrap = styled.li`
  position: relative;
  border: 2px solid var(--color-main);
  border-radius: var(--border-art);
  cursor: pointer;
  transition: 0.3s;
  padding: 15px 10px;

  &:hover {
    background: #f8f4ff;
  }
`;

export const MenuChoiceItemName = styled.h4`
  width: 90%;
  ${TextOverflow};
`;

export const MenuChoiceItemPrice = styled.span`
  display: block;
  font-size: 14px;
  color: var(--color-point);
  margin-top: 5px;
`;

export const MenuChoiceItemCheck = styled.span`
  opacity: 1;
  position: absolute;
  top: 5px;
  right: 5px;

  svg {
    width: var(--svg-mini);
    height: var(--svg-mini);
  }
`;
