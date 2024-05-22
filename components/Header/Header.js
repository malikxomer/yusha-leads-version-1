import { CustomButton } from "../../components";
import { headerData } from "../../json/header";
import { HeaderStyle, CarouselStyle } from "./Header.style";

const Header = () => (
  <CarouselStyle autoplay effect="fade">
    {headerData.map((header, index) => (
      <HeaderStyle key={index} background={header.background}>
        <section className="header-container">
          <span id="why-inhabify" />
          <article className="header-inner-container">
            <article className="header-content-wrapper">
              <h6 className="welcome-heading">{header.title}</h6>
              <h1 className="main-heading">{header.heading}</h1>
              <h4 className="caption-heading">{header.caption}</h4>
              <CustomButton
                url={header.buttonId}
                title={header.buttonText}
                button="primary"
              />
            </article>
            <figure className="header-image-wrapper">
              {header.backgroundMobile && <img src={header.backgroundMobile} />}
            </figure>
          </article>
        </section>
      </HeaderStyle>
    ))}
  </CarouselStyle>
);

export default Header;
