import styled from "styled-components";

const checkBg = (props) => {
  switch (props) {
    case "dark":
      return ({ theme }) => theme.backgrounds.primary;
    case "light":
      return ({ theme }) => theme.backgrounds.white;
    default:
      return ({ theme }) => theme.backgrounds.blue;
  }
};

const checkBorder = (props) => {
  switch (props) {
    case "dark":
      return ({ theme }) => theme.border.dark;
    case "light":
      return ({ theme }) => theme.border.dark;
    default:
      return ({ theme }) => theme.border.highlight;
  }
};

const checkColor = (props) => {
  switch (props) {
    case "dark":
      return ({ theme }) => theme.colors.white;
    case "light":
      return ({ theme }) => theme.colors.primary;
    default:
      return ({ theme }) => theme.colors.white;
  }
};

const checkBgHover = (props) => {
  switch (props) {
    case "dark":
      return ({ theme }) => theme.backgrounds.white;
    case "light":
      return ({ theme }) => theme.backgrounds.primary;
    default:
      return ({ theme }) => theme.backgrounds.white;
  }
};

const checkColorHover = (props) => {
  switch (props) {
    case "dark":
      return ({ theme }) => theme.colors.primary;
    case "light":
      return ({ theme }) => theme.colors.white;
    default:
      return ({ theme }) => theme.colors.blue;
  }
};

export const LargeButtonStyle = styled.a`
  background: ${(props) => checkBg(props.button)};
  color: ${(props) => checkColor(props.button)};
  padding: 1.3rem 2.2rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: 3px solid ${(props) => checkBorder(props.button)};
  width: max-content;
  height: max-content;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: ${(props) => checkColorHover(props.button)};
    background: ${(props) => checkBgHover(props.button)};
    transition: all 0.3s linear;
  }

  &:focus {
    outline: none;
  }
`;

export const InlineButtonStyle = styled.a`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;

  &:hover {
  }

  &:focus {
    outline: none;
  }
`;
