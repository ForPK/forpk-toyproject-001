import styled from "styled-components";

export const OrderCountWrap = styled.div`
  display: inline-block;
  position: relative;
`;

export const OrderCountBox = styled.div``;

export const OrderCountBtn = styled.button`
  display: inline-block;
  width: 24%;
  font-size: 14px;
  font-weight: 500;
  padding: 3px;
`;

export const OrderCountInputNum = styled.input`
  display: inline-block;
  width: 50%;
  text-align: center;
  padding: 3px;
`;

export const OrderCountNumWrap = styled.div`
  color: #777;
  text-align: right;

  @media ${(props) => props.theme.mobile} {
    text-align: left;
  }
`;
