import styled from "styled-components";
import { ContentContainer } from "../../styles/Common.style";

import { rgba } from "polished";

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.backgrounds.navy};

  .footer-content-wrapper {
    ${ContentContainer};

    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    grid-gap: 1rem 6rem;
    padding: 5rem 0 2rem;

    @media (max-width: 950px) {
      grid-gap: 0rem 6rem;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-gap: 5rem 0;
    }

    .logo-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 16rem;

      > img {
        width: 100%
      }

      /* .links-section {
        display: flex;
        flex-direction: column;
        padding-left: 0.5rem;

        a {
          color: ${({ theme }) => theme.colors.dullWhite};
          font-weight: ${({ theme }) => theme.fontWeight.normal};
          margin-bottom: 1rem;

          &:last-child {
            margin-bottom: 0;
          }

          &:hover {
            color: ${({ theme }) => theme.colors.dullWhite};
          }
        }
      } */
    }

    .logo-wrapper {
      /* margin-top: 1rem; */
      display: flex;

      .logo {
        margin-right: 1rem;

        > svg {
          transition: 0.3s linear all;
          fill: none;
          opacity: 1;

          &:hover {
            transition: 0.3s linear all;
            opacity: 0.6;
          }
        }
      }
    }

    .details-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 1.3rem;

      .footer-heading {
        color: ${({ theme }) => theme.colors.white};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        margin-bottom: 1.5rem;

        @media (max-width: 767px) {
          margin-left: 0;
        }
      }

      .footer-content {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0;
        align-items: center;
        margin-bottom: 1rem;

        .content {
          color: ${({ theme }) => rgba(theme.colors.dullWhite, 0.8)};
          font-size: ${({ theme }) => theme.fontSize.medium};
          font-weight: ${({ theme }) => theme.fontWeight.medium};
        }

        > svg {
          width: 3rem;
        }

        &.location {
          align-items: flex-start;

          .content {
            line-height: 3.2rem;
            max-width: 20rem;
          }

          > svg {
            margin-top: 0.2rem;
          }
        }
      }

      /* .logo-wrapper {
        display: flex;

        .logo {
          margin-right: 1rem;

          > svg {
            transition: 0.3s linear all;
            fill: none;
            opacity: 1;

            &:hover {
              transition: 0.3s linear all;
              opacity: 0.6;
            }
          }
        }
      } */
    }

    .footer-bottom-content {
      grid-column: 1/5;
      grid-row: 2/3;

      display: flex;
      justify-content: space-between;

      @media (max-width: 767px) {
        flex-direction: column-reverse;
        grid-column: 1/2;
        grid-row: 5/5;

        padding-left: 0;
      }

      .copyrights {
        color: ${({ theme }) => rgba(theme.colors.dullWhite, 0.5)};
        font-size: ${({ theme }) => theme.fontSize.medium};
      }

      .pages-link-wrapper {
        padding-right: 0.6rem;

        @media (max-width: 1024px) {
          padding-right: 0rem;
        }

        @media (max-width: 767px) {
          padding-bottom: 1rem;
        }

        .pages-link {
          color: ${({ theme }) => rgba(theme.colors.dullWhite, 0.5)};
          font-weight: ${({ theme }) => theme.fontWeight.normal};
          font-size: ${({ theme }) => theme.fontSize.medium};
          margin-right: 2rem;
          position: relative;

          &:first-child {
            &:after {
              position: absolute;
              border-left: 0.2rem solid
                ${({ theme }) => rgba(theme.colors.dullWhite, 0.5)};
              height: 2rem;
              right: -1.1rem;
              top: 0.1rem;

              content: "";
            }
          }
        }
      }
    }
  }
`;
