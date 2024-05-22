import styled from "styled-components";
import { Form } from "formik";

export const SignUpWrapperStyled = styled.section`
  padding: 3rem 0;

  @media (max-width: 767px) {
    padding: 3rem 1.5rem;
  }
`;

export const SignUpFormStyle = styled(Form)`
  display: grid;
  grid-template-areas:
    "building building"
    "email email"
    "name name"
    "unit unit"
    "phone phone"
    "button button"
    "success success";
  max-width: 500px;
  margin: 5rem auto;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, max-content);
  grid-gap: 2.5rem 2rem;

  background: ${({ theme }) => theme.backgrounds.white};
  box-shadow: 0 1.6rem 4.2rem ${({ theme }) => theme.shadow.info};
  border-radius: 1rem;
  padding: 5.5rem 5rem 4rem;

  @media (max-width: 767px) {
    grid-template-areas:
      "building"
      "email"
      "name"
      "unit"
      "phone"
      "button"
      "success";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, max-content);
    grid-gap: 2.5rem 2rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 5.5rem 2rem 4rem;
  }

  .form-message {
    grid-area: success;

    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  button {
    justify-self: flex-start;
  }
`;
