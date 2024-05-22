import styled from "styled-components";

const TermsAndConditionsStyled = styled.section`
  padding: 1rem 3rem;

  a {
    color: #2828ff;
    font-weight: unset;
    text-decoration: underline;
    width: max-content;
  }

  .page-main-container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }

  .paragraphs-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5rem;
  }

  .paragraphs-inner-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  .paragraphs-text {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;

export default TermsAndConditionsStyled;
