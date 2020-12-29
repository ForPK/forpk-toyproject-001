import styled, { css } from "styled-components";

export const OrderItemWrap = styled.div`
  display: grid;
  grid-template-columns: 30px 3.5fr 2fr 2.5fr 14px;
  column-gap: var(--spacing-normal);

  & + & {
    margin-top: var(--spacing-normal);
  }
  ${(props) =>
    props.result &&
    css`
      grid-template-columns: 30px 4.5fr 1fr 2.5fr;
    `};
`;

export const OrderName = styled.h4`
  word-break: break-all;
  line-height: var(--line-height);
`;
