import styled from "styled-components";

export const InputFieldStyle = styled.section`
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  position: relative;

  .field-label {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.h5};
    color: ${({ theme }) => theme.colors.label};
    margin-bottom: 0.7rem;
  }

  .input-field,
  input[type="number"],
  select {
    background: ${({ theme }) => theme.backgrounds.white};
    border: 0.1rem solid ${({ theme }) => theme.border.grey};
    border-radius: 0.4rem;
    height: 4.8rem;
    padding: 0 2rem;
    width: 100%;
    transition: 0.3s linear all;

    font-size: ${({ theme }) => theme.fontSize.h5};
    color: ${({ theme }) => theme.colors.label};
    font-weight: ${({ theme }) => theme.fontWeight.normal};

    &.textarea-field {
      height: unset;
      min-height: 13rem;
      resize: none;
      width: 100%;
    }

    &:focus {
      transition: 0.3s linear all;
      border-color: transparent;
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.border.info};
      -webkit-box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.border.info};
      outline: none;
    }

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.h5};
      color: ${({ theme }) => theme.colors.lighter};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
    }
  }

  .error-message {
    position: absolute;
    bottom: -2.5rem;
    right: 0;
    color: red;
    font-size: 1.2rem;
  }

  .ant-row {
    &.ant-form-item {
      margin: 0;
      height: 4.8rem;

      .ant-form-item-control-input {
        height: 4.8rem;

        .ant-select {
          display: flex;
          align-items: center;
          transition: 0.3s linear all;
          font-size: ${({ theme }) => theme.fontSize.h5};
          color: ${({ theme }) => theme.colors.label};
          font-weight: ${({ theme }) => theme.fontWeight.normal};

          .ant-select-selector {
            display: flex;
            align-items: center;
            padding: 0 2rem;
            height: 4.8rem;
            border: 0.1rem solid ${({ theme }) => theme.border.grey};
            border-radius: 0.4rem;

            .ant-select-selection-item {
              max-width: 17ch;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;

              @media (max-width: 1100px) {
                max-width: 14ch;
              }

              @media (max-width: 950px) {
                max-width: 30ch;
              }

              @media (max-width: 767px) {
                max-width: 35ch;
              }

              @media (max-width: 510px) {
                max-width: 25ch;
              }

              @media (max-width: 410px) {
                max-width: 18ch;
              }
            }

            .ant-select-selection-search {
              display: flex;
              align-items: center;
              padding: 0 1rem;
            }
          }

          &.ant-select-focused {
            transition: 0.3s linear all;

            .ant-select-selector {
              border-color: transparent;
              box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.border.info};
              -webkit-box-shadow: 0 0 0 0.2rem
                ${({ theme }) => theme.border.info};
            }
          }
        }
      }
    }
  }
`;

export default InputFieldStyle;
