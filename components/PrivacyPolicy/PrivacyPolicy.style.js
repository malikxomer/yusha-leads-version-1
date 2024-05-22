import styled from "styled-components";

const PrivacyPolicyStyled = styled.section`
  padding: 1rem 3rem;

  .page-main-container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }

  .intro-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }

  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;

    .section-inner-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1.5rem;
    }

    .section-list-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1.5rem;
    }

    .section-points-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1.5rem;
      list-style: inside;
    }
  }

  .table-of-contents {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;

    .heading {
      padding-bottom: 2rem;
    }
  }

  a {
    color: #2828ff;
    font-weight: unset;
    text-decoration: underline;
    width: max-content;
  }

  .data-table {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-top: 0.1rem solid black;
    border-left: 0.1rem solid black;

    .table-column {
      border-bottom: 0.1rem solid black;
      border-right: 0.1rem solid black;
      padding: 0.5rem;
    }
  }
`;

export default PrivacyPolicyStyled;
