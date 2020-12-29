import styled from "styled-components";

export const DefaultTextWrap = styled.p`
  /* display: none; */
  width: 100%;
  line-height: 1.3em;
  text-align: center;
  background: #eee;
  padding: var(--spacing-normal) 10px;
`;

export const DefaultGitWrap = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  padding: var(--spacing) 0;
  margin-top: var(--spacing-normal);
`;

export const MyGitAddress = styled.a`
  position: relative;
  z-index: 3;
`;

export const MyGitIconWrap = styled.span`
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    fill: #000000;
  }
`;
