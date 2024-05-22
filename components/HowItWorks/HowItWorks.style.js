import styled from "styled-components";
import { ContentContainer } from "../../styles/Common.style";

export const CustomImageSectionStyle = styled.section`
  display: grid;
  /* grid-row-gap: 5rem; */

  .inner-card-wrapper {
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    column-gap: 15rem;
    align-items: center;
    grid-template-areas: "picture content";
    padding-bottom: 12rem;
    padding-top: 9rem;

    position: relative;

    &:before {
      position: absolute;
      background: ${({ theme }) => theme.border.secondary};
      height: 0.2rem;
      width: 60%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;

      content: "";
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      &:before {
        content: none;
      }
    }

    &.reverse {
      grid-template-columns: 1fr 0.4fr;
      grid-template-areas: "content picture";

      @media (max-width: 950px) {
        grid-template-columns: 1fr;
        grid-template-areas:
          "picture"
          "content";
      }
    }

    @media (max-width: 950px) {
      grid-template-columns: 1fr;
      row-gap: 3rem;
      grid-template-areas:
        "picture"
        "content";
    }

    .card-content-wrapper {
      grid-area: content;

      .card-content-heading {
      }

      .designations {
        margin-bottom: 4rem;
      }
    }

    .card-image-wrapper {
      grid-area: picture;

      > img {
        width: 100%;
      }
    }
  }
`;

export const HowItWorksStyle = styled.section`
  /* background-color: #f1f1f1; */
  position: relative;
  background-image: url("/images/how-it-works/background.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 951px) {
    padding-bottom: 6rem;
  }

  #how-it-works {
    position: absolute;
    margin-top: -12rem;
    height: 100%;
  }

  .how-it-works-container {
    ${ContentContainer};

    /* padding: 0 0 7.5rem; */

    .how-it-works-heading {
      text-align: center;
      padding: 3rem 0 5rem;
    }
  }
`;
