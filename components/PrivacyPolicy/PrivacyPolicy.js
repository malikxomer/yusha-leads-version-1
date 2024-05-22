import PrivacyPolicyStyled from "./PrivacyPolicy.style";
import { privacyData } from "../../json/privacy";

const PrivacyPolicy = () => (
  <PrivacyPolicyStyled>
    {privacyData.map((privacyData, index) => (
      <article key={`policy-${index}`} className="page-main-container">
        <h2>{privacyData.mainHeading}</h2>
        <p>{privacyData.lastUpdate}</p>
        <div className="intro-wrapper">
          {privacyData.intro.map((introductionData, index) => (
            <p key={`introduction-paragraph-${index}`}>{introductionData}</p>
          ))}
        </div>

        {privacyData.tableOfContents && (
          <article className="table-of-contents">
            <h4 className="heading">TABLE OF CONTENTS</h4>
            {privacyData.tableOfContents.map((tableData, index) => (
              <a href={`#${tableData.id}`} key={`table-content-${index}`}>
                {tableData.heading}
              </a>
            ))}
          </article>
        )}

        {privacyData.paragraphSection.map((paragraphData, index) => (
          <article
            id={paragraphData.id}
            key={`paragraph-no-${index}`}
            className="section-wrapper"
          >
            <h3>{paragraphData.heading}</h3>

            {paragraphData.paragraphContent.map((paragraphContent, index) => (
              <section
                key={`subparagraph-${index}`}
                className="section-inner-wrapper"
              >
                {paragraphContent.subHeading && (
                  <h4>{paragraphContent.subHeading}</h4>
                )}

                {paragraphContent.content &&
                  paragraphContent.content.map((paragraph, index) => (
                    <p key={`paragraph-${index}`}>{paragraph}</p>
                  ))}

                {paragraphContent.numberedList && (
                  <section>
                    {paragraphContent.numberedList.map((data, index) => (
                      <p key={`numbered-list-${index}`}>{data}</p>
                    ))}
                  </section>
                )}

                {paragraphContent.paragraphList && (
                  <article className="section-list-wrapper">
                    {paragraphContent.paragraphList[0].caption && (
                      <p>{paragraphContent.paragraphList[0].caption}</p>
                    )}

                    <ul className="section-points-wrapper">
                      {paragraphContent.paragraphList[0].points.map(
                        (data, index) => (
                          <li key={`list-point-${index}`}>{data}</li>
                        )
                      )}
                    </ul>
                  </article>
                )}

                {paragraphContent.tableData && (
                  <article className="data-table">
                    {paragraphContent.tableData.map((tableData, index) => (
                      <p key={index} className="table-column">
                        {tableData}
                      </p>
                    ))}
                  </article>
                )}

                {paragraphContent.pastContent && (
                  <>
                    {paragraphContent.pastHeading && (
                      <h4>{paragraphContent.pastHeading}</h4>
                    )}
                    {paragraphContent.pastContent.map((paragraph, index) => (
                      <p key={`paragraph-${index}`}>{paragraph}</p>
                    ))}
                  </>
                )}
              </section>
            ))}
          </article>
        ))}
      </article>
    ))}
  </PrivacyPolicyStyled>
);

export default PrivacyPolicy;
