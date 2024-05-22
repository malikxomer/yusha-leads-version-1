import { css } from "styled-components";

export const MaxContainer = css`
  width: 100vw;
`;

export const ContentContainer = css`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1220px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const RightImageContainer = css`
  max-width: 126.5rem;
  margin-left: auto;
`;

export const MediumContainer = css`
  max-width: 130rem;
  width: 100%;
  margin: auto;

  @media (max-width: 1220px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const topMargin = css`
  margin-top: 11.4rem;

  @media (max-width: 950px) {
    margin-top: 8rem;
  }
`;
