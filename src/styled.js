import styled, { createGlobalStyle, css } from "styled-components";
import { reset } from "styled-reset";
import MontserratRegular from "./font/Montserrat-Regular.ttf";
import MontserratMedium from "./font/Montserrat-Medium.ttf";
import MontserratBold from "./font/Montserrat-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
    ${reset};

    :root {
        --color-main: #d1b2ff;
        --color-sub: #fff;
        --color-point: #5ad8ab;
        --color-point-light: #c6fde9;
        --color-background: #f1e8ff;
        --letter-spacing: .1em;
        --line-height: 1.2em;
        --vertical-middle: 24px;
        --spacing: 40px;
        --spacing-normal: 20px;
        --border-art: 300px 20px 300px 20px/20px 300px 20px 300px;
        --svg-mini: 14px;
    }
 
    * {
        vertical-align: top;
        border: 0;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        overflow-y: scroll;
    }
    

    body {
        font-family: 'Montserrat';
        font-size: 14px;
        font-weight: 500;
        background: var(--color-background);
    }

    html, body {
        width:100%;
    }

    strong {
        font-weight: 800;
    }

    a, button, input {
        font-family: 'Montserrat';
        font-weight: 500;
    }

    h1, h2, h3,
    h4, h5, h6 {
        font-weight:normal;
    }

    img {
        font-size: 100%;
        line-height: 100%;
        vertical-align: top;
    }

    ol, ul, li {
        list-style: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    caption {
        visibility: hidden;
        overflow: hidden;
        width: 0;
        height: 0;
        font-size: 0;
        line-height: 0;
    }

    button {
        background: #eee;
        outline: none;
    }

    input, textarea, select {
        font-size: 14px;
        background: transparent;
        outline: none;
    }

    input[type="submit"],
    button {
        cursor: pointer;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    textarea {
        vertical-align: middle;
    }
    
    address, i {
        font-style: normal;
    }

    ::-webkit-input-placeholder {
        color: #222;
    }

    :-moz-placeholder {
        color: #222;
    }

    ::-moz-placeholder {
        color: #222;
    }

    :-ms-input-placeholder {
        color: #222;
    }

    /* anchor */
    a {
        font-family: 'Montserrat';
        color: #000;
        text-decoration: none;
    }

    a:link,
    a:visited,
    a:hover,
    a:active,
    a:focus {
        text-decoration: none;
    }
    a[href^=tel] {
        text-decoration: inherit;
        color: inherit;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details,
    figcaption, figure, footer,
    header, hgroup, main,
    menu, nav, section, video{
        display: block;
    }

 /*
 * Montserrat https://fonts.google.com/specimen/Montserrat
 */

	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 300;
	  src: url(${MontserratRegular}) format('truetype');
	}
	

	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 500;
	  src: url(${MontserratMedium}) format('truetype');
	}
	
	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 800;
	  src: url(${MontserratBold}) format('truetype');
	}
	
`;

export const PageTemplate = styled.div`
  width: 80%;
  max-width: 500px;
  background: #fff;
  box-shadow: 2px 3px 3px 0px rgba(0, 0, 0, 0.1);
  margin: var(--spacing) auto;
  padding: var(--spacing);

  @media ${(props) => props.theme.mobile} {
    width: 94%;
    padding: var(--spacing) var(--spacing-normal);
  }
`;

export const TextOverflow = css`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VerticalMiddle = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  margin: 0 auto;
`;

export const VerticalUnset = css`
  position: unset;
  top: 0;
  transform: none;
`;
