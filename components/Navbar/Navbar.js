"use client"
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

import { CustomButton } from "../../components";
import { NavbarStyle, NavLinksStyle } from "./Navbar.style";

// const QuestionMark = () => <span style={{ fontFamily: "sans-serif" }}>?</span>;

const NavLinks = (props) => {
  const { setToggleNav } = props;

  return (
    <NavLinksStyle
      offset={-100}
      items={[
        // "why-inhabify",
        "platform-capabilities",
        "how-it-works",
        "pricing",
        // "testimonials",
      ]}
      currentClassName="active-link"
    >
      {/* <li className="nav-links" onClick={() => setToggleNav(false)}>
        <CustomButton
          type="inline"
          url="#why-inhabify"
          title={
            <>
              Why inhabify
              <QuestionMark />
            </>
          }
        />
      </li> */}
      <li className="nav-links" onClick={() => setToggleNav(false)}>
        <CustomButton
          type="inline"
          url="#platform-capabilities"
          title="Capabilities"
        />
      </li>
      <li className="nav-links" onClick={() => setToggleNav(false)}>
        <CustomButton
          type="inline"
          url="#how-it-works"
          title={
            <>
              How It Works
              {/* <QuestionMark /> */}
            </>
          }
          // title="How It Works?"
        />
      </li>
      <li className="nav-links" onClick={() => setToggleNav(false)}>
        <CustomButton type="inline" url="#pricing" title="Pricing" />
      </li>
      {/* <li className="nav-links" onClick={() => setToggleNav(false)}>
        <CustomButton type="inline" url="#testimonials" title="Testimonials" />
      </li> */}
    </NavLinksStyle>
  );
};

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const navbarToggler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <NavbarStyle>
      <nav
        className={classNames({
          "navbar-container": true,
          "navbar-wrapper-mobile": toggleNav,
          "navbar-wrapper-hidden": !toggleNav,
        })}
      >
        <picture className="navbar-branding-wrapper">
          <figure className="navbar-branding">
            <Link href="/">
              <img loading="lazy" src="/icons/yusha-logo.png" />
            </Link>
          </figure>

          <button
            className={classNames({
              "menu-toggle-button": true,
              "show-nav": toggleNav,
            })}
            onClick={navbarToggler}
          >
            <span className="toggle-menu-bar" />
            <span className="toggle-menu-bar" />
            <span className="toggle-menu-bar" />
          </button>
        </picture>

        <section className="nav-links-wrapper">
          <NavLinks setToggleNav={setToggleNav} />

          <section className="nav-buttons-group">
            {/* <CustomButton
              url="https://app.inhabify.io/users/sign_in"
              title="Login"
              button="light"
              eventClick={() => setToggleNav(false)}
            /> */}

            <CustomButton
              url="#contact-form"
              title="Get a Quote"
              button="dark"
              eventClick={() => setToggleNav(false)}
            />
          </section>
        </section>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
