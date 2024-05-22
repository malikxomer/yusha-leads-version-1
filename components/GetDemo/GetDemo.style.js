import styled from "styled-components";

import { ContentContainer } from "../../styles/Common.style";

export const ContactFormStyle = styled.section`
  background: url("/icons/contact-form-bg.jpeg") no-repeat;
  background-size: 100% 100%;
  position: relative;

  #contact-form {
    position: absolute;
    margin-top: -13rem;
    height: 100%;
  }

  .demo-container {
    ${ContentContainer};

    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-gap: 0 10rem;
    padding-bottom: 7.5rem;

    @media (max-width: 950px) {
      grid-template-columns: 1fr;
      grid-gap: 5rem 0;
    }

    .demo-content-wrapper {
      display: grid;
      grid-gap: 1.5rem 0;
      padding-top: 11rem;
      height: max-content;

      .form-heading {
        @media only screen and (max-width: 600px) {
          font-size: ${({ theme }) => theme.fontSize.h3};
        }
      }

      .form-subheading {
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        margin-bottom: 1rem;
      }
    }
  }
`;
