import styled from "styled-components";
import Scrollspy from "react-scrollspy";

import { MaxContainer, ContentContainer } from "../../styles/Common.style";

export const NavbarStyle = styled.header`
  ${MaxContainer};

  position: fixed;
  top: 0;
  height: 11.4rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.backgrounds.white};
  box-shadow: 0 -0.5rem 2rem 0 ${({ theme }) => theme.shadow.primary};

  @media (max-width: 950px) {
    height: 8rem;
  }

  .navbar-container {
    ${ContentContainer};

    height: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 950px) {
      height: 8rem;
    }

    .navbar-branding-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 950px) {
        width: 100%;
      }
    }

    .navbar-branding {
      img {
        cursor: pointer;
        height: 11.4rem;

        @media (max-width: 950px) {
          height: 8rem;
        }
      }
    }

    .menu-toggle-button {
      background: none;
      border: 0;
      margin: 0;
      display: inline-flex;
      flex-direction: column;
      outline: none;

      .toggle-menu-bar {
        transition: all 300ms linear;
        width: 2.2rem;
        height: 0.2rem;
        border-radius: 0.1rem;
        margin-top: 0.4rem;
        background: ${({ theme }) => theme.backgrounds.blue};

        &:first-child {
          margin-top: 0;
        }
      }

      @media (min-width: 951px) {
        display: none;
      }

      &.show-nav {
        .toggle-menu-bar {
          transition: all 300ms linear;
          &:first-child {
            transform: translateY(0) rotate(45deg);
          }

          &:nth-child(2) {
            display: none;
          }

          &:last-child {
            transform: translateY(-0.55rem) rotate(-45deg);
          }
        }
      }
    }

    .nav-links-wrapper {
      display: flex;
      align-items: center;

      @media (max-width: 950px) {
        display: none;
      }

      // .nav-buttons-group {
      //   display: grid;
      //   grid-column-gap: 2rem;
      //   grid-template-columns: max-content max-content;
      // }
    }

    &.navbar-wrapper-mobile {
      .nav-links-wrapper {
        @media (max-width: 950px) {
          animation: VisibleAnimation 0.5s forwards;

          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          width: 100vw;
          padding: 4rem 2rem;

          position: fixed;
          top: 8rem;
          left: 0;

          background: ${({ theme }) => theme.backgrounds.white};
          border-top: 0.3rem solid ${({ theme }) => theme.backgrounds.blue};

          .nav-links {
            @media (max-width: 950px) {
              margin-bottom: 3rem;
            }
          }
        }
      }
    }
  }

  @keyframes VisibleAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NavLinksStyle = styled(Scrollspy)`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  list-style: none;
  height: 100%;

  @media (max-width: 950px) {
    flex-direction: column;
    height: unset;
  }

  .nav-links {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 5rem;

    @media (max-width: 1050px) {
      padding-right: 2.5rem;
    }

    @media (max-width: 950px) {
      padding-right: 0;
    }

    &:last-child {
      padding-right: 0;
      margin-right: 8rem;

      @media (max-width: 1050px) {
        margin-right: 4rem;
      }

      @media (max-width: 950px) {
        margin-right: 0;
      }
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      border-bottom: 0.4rem solid transparent;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    > a {
      transition: all 0.3s linear;
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    &.active-link {
      &:after {
        transition: all 0.3s linear;
        /* border-bottom: 0.4rem solid ${({ theme }) => theme.colors.blue}; */
      }

      > a {
        transition: all 0.3s linear;
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;
