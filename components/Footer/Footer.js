import { footerData, followUsData } from "../../json/footer";
import { FooterStyle } from "./Footer.style";

const date = new Date().getFullYear();

const Footer = () => (
  <FooterStyle>
    <section className="footer-content-wrapper">
      <figure className="logo-section">
        <img src="/icons/footer-logo.png" className="logo" />

        {/* <section className="logo-wrapper">
          {followUsData.map((data, index) => (
            <a
              key={index}
              className="logo"
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.icon}
            </a>
          ))}
        </section> */}
      </figure>

      {footerData.map((footerItem) => (
        <article className="details-wrapper" key={footerItem.id}>
          {footerItem.heading && (
            <h4 className="footer-heading">{footerItem.heading}</h4>
          )}
          {footerItem.description &&
            footerItem.description.map((data, index) => (
              <section
                className={`footer-content ${footerItem.customClass}`}
                key={index}
              >
                {/* <p className="content">
                  </p> */}
                {data}
              </section>
            ))}

          {footerItem.iconsList && (
            <section className="logo-wrapper">
              {footerItem.iconsList.map((iconsData, index) => (
                <a
                  key={index}
                  href={iconsData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo"
                >
                  {iconsData.icon}
                </a>
              ))}
            </section>
          )}
        </article>
      ))}
      <section className="footer-bottom-content">
        <p className="copyrights">© Yusha Leads. {date}. All rights reserved</p>

        {/* <article className="pages-link-wrapper">
          <a
            href="/privacy"
            className="pages-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="pages-link"
          >
            Terms &amp; conditions
          </a>
        </article> */}
      </section>
    </section>
  </FooterStyle>
);

export default Footer;
