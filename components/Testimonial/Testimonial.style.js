import styled from "styled-components";

import { ContentContainer } from "../../styles/Common.style";

export const TestimonialStyle = styled.section`
  background: white;
  position: relative;

  #testimonials {
    position: absolute;
    margin-top: -12rem;
    height: 100%;
  }

  .testimonial-tabs-wrapper {
    ${ContentContainer};

    padding: 7rem 0 12rem;

    .ant-tabs-nav {
      margin: 0;
      display: none;

      &:before {
        content: none;
      }

      .ant-tabs-nav-wrap {
        .ant-tabs-nav-list {
          width: 100%;
          justify-content: space-evenly;
          flex-wrap: wrap;

          .ant-tabs-tab {
            align-items: flex-start;
            margin: 0;
            padding: 0;

            .ant-tabs-tab-btn {
              .tab-logo {
                > img {
                  visibility: hidden;
                  /* transition: opacity 0.3s linear;
                  opacity: ${({ theme }) => theme.opacity.normal}; */
                }
              }
            }

            &.ant-tabs-tab-active {
              .ant-tabs-tab-btn {
                .tab-logo {
                  > img {
                    transition: opacity 0.3s linear;
                    opacity: ${({ theme }) => theme.opacity.medium};
                  }
                }
              }
            }
          }

          .ant-tabs-ink-bar {
            display: none;
          }
        }
      }
    }

    .ant-tabs-content-holder {
      background: url("/images/testimonials/testimonials-background.png")
        no-repeat;
      background-size: 100% 100%;
      image-rendering: pixelated;

      .ant-tabs-content {
        .ant-tabs-tabpane {
          padding: 5rem 10rem;

          @media (max-width: 767px) {
            padding: 4rem;
          }

          @media (max-width: 600px) {
            padding: 3rem 2rem;
          }

          .tab-content-wrapper {
            display: flex;
            flex-direction: column;

            > svg {
              height: 4.2rem;
            }

            .testimonial-description {
              font-weight: ${({ theme }) => theme.fontWeight.bold};
              color: ${({ theme }) => theme.colors.white};
              text-align: center;
              margin-top: 3rem;
              /* max-width: 100rem;
              margin: auto; */

              @media only screen and (max-width: 600px) {
                font-size: ${({ theme }) => theme.fontSize.h4};
              }
            }

            .testimonial-author {
              font-weight: ${({ theme }) => theme.fontWeight.bold};
              color: ${({ theme }) => theme.colors.white};
              text-align: center;
              margin-top: 3rem;
            }
          }
        }
      }
    }
  }
`;
