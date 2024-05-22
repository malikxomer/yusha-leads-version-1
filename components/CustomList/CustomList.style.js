import styled from "styled-components";

export const CustomListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem 0;
  list-style: none;

  .listed-item {
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-gap: 0 1.5rem;

    svg {
      width: 1.7rem;
      height: 1.7rem;
      margin-top: 0.8rem;
    }

    .item-description {
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      line-height: 3.4rem;
    }
  }
`;
