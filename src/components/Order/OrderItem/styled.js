import styled, { css } from "styled-components";
// import { OrderResult } from '../index';
import { VerticalUnset } from "../../../styled";

export const OrderItemWrap = styled.div`
  display: grid;
  grid-template-columns: 30px 3.5fr 2fr 2.5fr 14px;
  column-gap: var(--spacing-normal);

  & + & {
    margin-top: var(--spacing-normal);
  }

  ${
    (props) => console.log(props.result)
    // props.result &&
    // css`
    //   grid-template-columns: 30px 4.5fr 1fr 2.5fr;
    // `
  };

  @media ${(props) => props.theme.mobile} {
    row-gap: 10px;

    div:first-child {
      // index
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    div:nth-child(2) {
      // menu name
      grid-column: 2 /5;
      grid-row: 1 / 2;
    }

    div:nth-child(3) {
      // count
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      & > div {
        ${VerticalUnset}
      }
    }
    div:nth-child(4) {
      // price
      grid-column: 3 / 5;
      grid-row: 2 / 3;
      & > div {
        ${VerticalUnset}
      }
    }
    div:nth-child(5) {
      // btn-delete
      grid-column: 5 / 6;
      grid-row: 1 / 3;
    }
  } ;
`;

export const OrderName = styled.div`
  word-break: break-all;
  line-height: var(--line-height);
`;
