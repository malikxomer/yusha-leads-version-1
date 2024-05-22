import styled from "styled-components";
import { Form } from "formik";

const ContactFormStyle = styled(Form)`
  display: grid;
  grid-template-areas:
    "email name"
    /* "name name" */
    /* "company role" */
    /* "country phone" */
    "company phone"
    "message message"
    "button button"
    "success success";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, max-content);
  grid-gap: 3.5rem 2rem;

  background: ${({ theme }) => theme.backgrounds.white};
  /* border: 0.2rem solid ${({ theme }) => theme.border.info}; */
  box-shadow: 0 1.6rem 4.2rem ${({ theme }) => theme.shadow.info};
  border-radius: 1rem;
  padding: 5.5rem 5rem 4rem;

  @media (max-width: 767px) {
    grid-template-areas:
      "email"
      "name"
      "company"
      /* "role"
      "country" */
      "phone"
      "message"
      "button"
      "success";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, max-content);
    grid-gap: 3rem 2rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 5.5rem 2rem 4rem;
  }

  /* .form-button {
    grid-area: button;

    transition: all 0.3s linear;
    cursor: pointer;
    background: ${({ theme }) => theme.backgrounds.blue};
    border: 0.3rem solid ${({ theme }) => theme.border.highlight};
    border-radius: 0.4rem;
    max-width: 20rem;
    padding: 1rem;
    cursor: pointer;

    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.h5};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      transition: all 0.3s linear;
      color: ${({ theme }) => theme.colors.active};
      background: ${({ theme }) => theme.backgrounds.white};
    }

    &:focus {
      outline: none;
    }
  } */

  .form-message {
    grid-area: success;

    font-size: ${({ theme }) => theme.fontSize.medium};
    /* justify-self: center; */

    /* background: ${({ theme }) => theme.backgrounds.success}; */
    /* padding: 0.5rem 3rem; */
    /* border-radius: 0.5rem; */
  }
`;

export default ContactFormStyle;
