import styled, { css } from "styled-components";

const SelectPoint = css`
  box-shadow: inset 0 -7px 0 var(--color-point-light);
`;

export const SettingItemWrap = styled.div`
  padding-top: var(--spacing-normal);

  select {
    display: inline-block;
    ${SelectPoint};
    padding: 0;
    margin-right: 5px;
  }
`;

const InputTitleDefault = css`
  position: relative;
  color: #333;
`;

export const Label = styled.label`
  ${InputTitleDefault};
`;

export const InputTitle = styled.h3`
  ${InputTitleDefault};
`;

const InputDefault = css`
  font-size: 20px;
  border: none;
  padding: 5px 10px;
`;

export const Input = styled.input`
  ${InputDefault};
  width: 100%;
  padding-right: 80px;

  &#business-logo {
    font-size: 14px;
    line-height: 1;
  }
`;

export const InputMenuLabel = styled.label`
  display: block;
  padding-bottom: 10px;
`;

export const UnitDefault = css`
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  text-align: right;
  margin: 0 5px 8px;
`;

export const Unit = styled.span`
  ${UnitDefault};
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;

  select {
    text-align-last: right;
  }
`;

export const LabelSelectWrap = styled.div`
  display: flex;
`;

export const SelectNutrition = styled.select`
  padding: 0 10px 0;
`;

export const SelectUnit = styled.select`
  ${SelectPoint};
  ${UnitDefault};
`;

export const NuritionWrap = styled.div`
  padding: 0 10px;
`;
