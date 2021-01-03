import styled, { css } from "styled-components";
import { SettingGruopDefault } from "../Setting/SettingSection/styled";

const BtnDefault = css`
  display: block;
  width: 100%;
  font-size: 24px;
  text-align: center;
  border-radius: var(--border-art);
  color: #fff;
  padding: 10px;

  @media ${(props) => props.theme.mobile} {
    font-size: 18px;
  }
`;

export const BtnBigWrap = styled.div`
  text-align: center;
  margin-top: var(--spacing);

  button + button {
    margin-top: 10px;
  }
`;

export const BtnSmallWrap = styled.div`
  display: inline-block;
  position: relative;
  max-width: 20px;
  text-align: right;

  svg {
    width: var(--svg-mini);
    height: var(--svg-mini);
    fill: #000;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const BtnBlack = styled.button`
  ${BtnDefault};
  background: #000;
`;

export const BtnHomeCompo = styled.button`
  ${BtnDefault};
  background: var(--color-main);
`;

export const BtnPoint = styled.button`
  ${BtnDefault};
  background: var(--color-point);
`;

/* Header - User Setting Button */
export const BtnUserSettingWrap = styled.button`
  font-size: 16px;
  line-height: 20px;
  color: #666;
  border-radius: 3px;
  padding: 2px 7px;

  svg {
    width: var(--svg-mini);
    height: var(--svg-mini);
    fill: #666;
    cursor: pointer;
    margin-top: 3px;
  }
`;

const BtnAddDefault = css`
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  padding: 10px;
  margin-top: var(--spacing);
`;

const SvgDefault = css`
  width: 20px;
  height: 20px;
  fill: #000;
`;

export const BtnAddNutritionWrap = styled.div`
  ${BtnAddDefault};
  border: 1px solid #ccc;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
  svg {
    ${SvgDefault}
  }
`;

export const BtnAddMenuWrap = styled.button`
  ${SettingGruopDefault};
  ${BtnAddDefault};
  display: block;
  position: relative;
  width: 100%;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  background: #fff;
`;
