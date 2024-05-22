import { HowItWorksStyle, CustomImageSectionStyle } from "./HowItWorks.style";
import { howItWorksData } from "../../json/howItWorks";
import { CustomList } from "../../components";

const CustomImageSection = () => (
  <CustomImageSectionStyle>
    {howItWorksData.map((cardsData) => {
      const { id, direction, heading, list, imageSrc } = cardsData;
      return (
        <section key={id} className={`inner-card-wrapper ${direction}`}>
          <article className="card-content-wrapper">
            <h2 className="card-content-heading">{heading}</h2>
            <CustomList list={list} />
          </article>
          <figure className="card-image-wrapper">
            <img src={imageSrc} />
          </figure>
        </section>
      );
    })}
  </CustomImageSectionStyle>
);

const HowItWorks = () => (
  <HowItWorksStyle>
    <span id="how-it-works" />
    <article className="how-it-works-container">
      <h2 className="how-it-works-heading">How it works</h2>
      <CustomImageSection />
    </article>
  </HowItWorksStyle>
);

export default HowItWorks;
