import { CustomButton } from "../../components";

import PricingStyle from "./Pricing.style";
import { pricingData } from "../../json/pricing";

const Pricing = () => (
  <PricingStyle>
    <span id="pricing" />
    <article className="pricing-container">
      <h2 className="pricing-heading">Pricing</h2>

      <section className="pricing-cards-container">
        {pricingData.map((pricingData) => {
          const {
            id,
            heading,
            caption,
            description,
            buttonText,
            icon,
          } = pricingData;
          return (
            <article className="pricing-card">
              <figure className="card-icon">{icon}</figure>
              <h3 className="card-heading">{heading}</h3>
              <h4 className="card-caption">{caption}</h4>
              <h5 className="card-description">{description}</h5>
              {/* <CustomButton
                as="button"
                title={buttonText}
                button="primary"
                eventClick={() => console.log("omer")}
              /> */}
            </article>
          );
        })}
      </section>
    </article>
  </PricingStyle>
);

export default Pricing;
