import { createGlobalStyle } from "styled-components";
import { FontStyle } from "./Fonts.style";
import { topMargin } from "./Common.style";

const BaseStyle = createGlobalStyle` 
  ${FontStyle};

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

    body{
      color: ${({ theme }) => theme.colors.primary};

      h1{
        font-size: ${({ theme }) => theme.fontSize.h1};

        @media (max-width: 600px) {
        font-size: 5rem;
      }
      }

      h2{
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSize.h2};
        font-weight: ${({ theme }) => theme.fontWeight.bold};

        @media (max-width: 600px) {
        font-size: 3.8rem;
      }
      }

      h3{
        font-size: ${({ theme }) => theme.fontSize.h3};
      }

      h4{
        font-size: ${({ theme }) => theme.fontSize.h4};
      }

      h5{
        font-size: 1.8rem;

        @media (max-width: 600px) {
        font-size: 1.6rem;
      }
      }

      h6{
        font-size: ${({ theme }) => theme.fontSize.h6};
      }

      p{
        font-size: 1.4rem;
        
      }

      a{
        font-size: 1.6rem;
        text-decoration: none;
        cursor: pointer;
        color: #041b36;
        font-weight: bold;
      }

      main{
        ${topMargin};
      }

      // Chrome, Safari, Edge, Opera //
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    }
  }
  `;

export default BaseStyle;
