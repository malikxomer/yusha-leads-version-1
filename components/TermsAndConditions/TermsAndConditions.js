import TermsAndConditionsStyled from "./TermsAndConditions.style";
import { termsAndContitionsData } from "../../json/termsAndContitions";

const TermsAndConditions = () => (
  <TermsAndConditionsStyled>
    {termsAndContitionsData.map((termsData, index) => (
      <article key={`policy-${index}`} className="page-main-container">
        <h2>{termsData.mainHeading}</h2>
        <p>{termsData.lastUpdate}</p>

        <article className="paragraphs-wrapper">
          {termsData.paragraphContent.map((paragraphData, index) => (
            <section key={`paragraph-section-${index}`} className="paragraphs-inner-wrapper">
              <h4>{paragraphData.heading}</h4>
              <article className="paragraphs-text">
                {paragraphData.paragraph.map((paragraphContent, index) => (
                  <div key={`paragraph-no-${index}`}>{paragraphContent}</div>
                ))}
              </article>
            </section>
          ))}
        </article>
      </article>
    ))}
  </TermsAndConditionsStyled>
);

export default TermsAndConditions;
