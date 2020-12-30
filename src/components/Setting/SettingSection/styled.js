import styled, { css } from "styled-components";

export const SettingGruopDefault = css`
  border: 1px solid var(--color-main);
  border-radius: 5px;
  margin-top: var(--spacing-normal);
`;

export const SettingGruop = styled.div`
  ${SettingGruopDefault};
  padding: 0 var(--spacing-normal) var(--spacing-normal);

  @media ${(props) => props.theme.mobile} {
    padding: 0 10px var(--spacing-normal);
  }
`;
