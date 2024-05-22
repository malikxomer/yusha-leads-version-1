import platformData from "../../json/platform";
import { PlatformStyle } from "./Platform.style";

const Platform = () => {
  return (
    <PlatformStyle>
      <section className="platform-color-container">
        <span id="platform-capabilities" />
        <section className="platform-wrapper">
          <h2 className="platform-heading">Capabilities</h2>
          <article className="content-container">
            {platformData.map((data) => (
              <section className="section-wrapper" key={data.id}>
                {data.icon}
                <h4 className="heading">{data.header}</h4>
                <h5 className="description">{data.description}</h5>
              </section>
            ))}
          </article>
        </section>
      </section>
    </PlatformStyle>
  );
};

export default Platform;
