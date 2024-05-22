import styled from "styled-components";
import { Carousel } from "antd";

export const HeaderStyle = styled.section`
  width: 100%;

  .header-container {
    max-width: 168rem;
    margin: auto;
    position: relative;

    #why-inhabify {
      position: absolute;
      margin-top: -13rem;
      height: 100%;
    }
  }

  .header-inner-container {
    max-width: 168rem;
    margin-left: 5rem;
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 4.5rem;

    @media (max-width: 1366px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1.2fr;
    }

    @media (max-width: 950px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr max-content;
      grid-row-gap: 5rem;
      margin-right: 5rem;
    }

    @media (max-width: 600px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  .header-content-wrapper {
    display: grid;
    grid-gap: 1rem 0;
    padding: 9rem 0px 0 0;
    max-width: 60rem;
    margin-left: auto;

    @media (max-width: 1440px) {
      margin-left: unset;
    }

    @media (max-width: 600px) {
      padding: 6rem 0px 0 0;
      margin-left: unset;
    }

    .welcome-heading {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fontWeight.bolder};
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .main-heading {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      line-height: 1.4;

      @media (max-width: 600px) {
        font-size: 4rem;
      }
    }

    .caption-heading {
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: 1.5;
      margin-bottom: 2.5rem;
    }
  }

  .header-image-wrapper {
    background: url(${(props) => props.background}) no-repeat;
    background-size: contain;
    background-position: 18rem 0;

    @media (max-width: 1440px) {
      background-position: 10rem 0;
    }

    @media (max-width: 1366px) {
      background-position: 6rem 0;
    }

    @media (max-width: 1200px) {
      background-position: 0 0;
    }

    @media (max-width: 950px) {
      background: none;
      height: max-content;
    }

    > img {
      width: 100%;

      @media (min-width: 951px) {
        display: none;
      }
    }
  }
`;

export const CarouselStyle = styled(Carousel)`
  .slick-dots {
    z-index: 5;

    @media (max-width: 450px) {
      bottom: 0rem;
    }

    > li {
      width: 1.2rem;
      height: 1.2rem;

      > button {
        background: ${({ theme }) => theme.backgrounds.blue};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
      }
      &.slick-active {
        width: 1.2rem;
        height: 1.2rem;

        > button {
          background: ${({ theme }) => theme.backgrounds.blue};
          opacity: 1;
        }
      }
    }
  }
`;
