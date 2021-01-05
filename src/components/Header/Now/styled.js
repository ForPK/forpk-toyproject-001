import styled from "styled-components";

export const NowWrap = styled.div`
  padding-top: var(--spacing-normal);
`;

export const NowItem = styled.p`
  text-align: center;
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);

  span {
    display: inline-block;
  }
  span + span {
    margin-left: 5px;
  }
`;
