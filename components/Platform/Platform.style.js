import styled from "styled-components";
import { Collapse } from "antd";

import { MediumContainer, ContentContainer } from "../../styles/Common.style";

export const PlatformStyle = styled.section`
  /* background-image: linear-gradient(
    ${({ theme }) => theme.backgrounds.white},
    ${({ theme }) => theme.backgrounds.info}
  ); */

  .platform-color-container {
    background: url("/icons/platform-background.jpeg") no-repeat;
    background-size: 100% 100%;
    padding: 9.5rem 0;
    position: relative;

    @media (max-width: 950px) {
      padding: 9.5rem 0 18rem;
    }

    #platform-capabilities {
      position: absolute;
      margin-top: -12rem;
      height: 100%;
    }
  }

  .platform-wrapper {
    ${ContentContainer};

    padding-bottom: 7.5rem;

    .platform-heading {
      text-align: center;
      padding-bottom: 7rem;
    }

    .content-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5rem;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }

      .section-wrapper {
        display: grid;
        grid-template-columns: 4.8rem 1fr;
        grid-template-rows: minmax(4rem, 5rem);
        gap: 1.5rem 2rem;

        grid-template-areas:
          "icon heading"
          ". description";

        svg {
          grid-area: icon;

          @media (max-width: 600px) {
            width: 3.5rem;
          }
        }

        .heading {
          grid-area: heading;

          align-self: center;
          font-size: ${({ theme }) => theme.fontSize.large};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          color: ${({ theme }) => theme.colors.primary};
        }

        .description {
          grid-area: description;

          color: ${({ theme }) => theme.colors.lightGray};
          font-weight: ${({ theme }) => theme.fontWeight.normal};
        }
      }
    }
  }
`;
