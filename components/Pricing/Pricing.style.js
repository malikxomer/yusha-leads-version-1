import styled from "styled-components";

import { ContentContainer } from "../../styles/Common.style";

const PricingStyle = styled.section`
  position: relative;

  padding-bottom: 12rem;

  #pricing {
    position: absolute;
    margin-top: -12rem;
    height: 100%;
  }

  .pricing-container {
    margin: 6.5rem 0 8rem;
  }

  .pricing-container {
    ${ContentContainer};

    /* padding: 0 0 7.5rem; */

    .pricing-heading {
      text-align: center;
      padding: 7rem 0 5rem;

      @media (max-width: 951px) {
        padding: 7rem 0 10rem;
      }
    }

    .pricing-cards-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 6.5rem;
      justify-content: center;
      align-items: center;

      @media (max-width: 950px) {
        grid-template-columns: 1fr;
        row-gap: 13.5rem;
        justify-items: center;
      }

      .pricing-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 0.1rem solid ${({ theme }) => theme.border.highlight};
        max-width: 56.5rem;
        max-height: 39rem;
        border-radius: 1rem;
        padding: 10rem 2rem 4rem;

        position: relative;

        @media (max-width: 950px) {
          padding: 10rem 2rem 4rem;
          max-height: 45rem;
        }

        .card-icon {
          position: absolute;

          top: -9.1rem;
          left: 50%;
          transform: translateX(-50%);

          @media (max-width: 950px) {
            top: -7.1rem;

            > svg {
              height: 14rem;
            }
          }
        }

        .card-heading {
          font-size: ${({ theme }) => theme.fontSize.intermediate};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          margin-bottom: 1.5rem;
        }

        .card-caption {
          margin-bottom: 0.7rem;
          text-align: center;
        }

        .card-description {
          max-width: 48rem;
          text-align: center;
          color: ${({ theme }) => theme.colors.silver};
          font-weight: ${({ theme }) => theme.fontWeight.normal};
          margin-bottom: 3.5rem;
        }
      }
    }
  }
`;

export default PricingStyle;
