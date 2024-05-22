"use client"
import { ContactFormStyle } from "./GetDemo.style";
import { demoData } from "../../json/demo";
import { CustomList, ContactForm } from "../../components";

const GetDemo = () => (
  <ContactFormStyle>
    <span id="contact-form" />
    <section className="demo-container">
      <article className="demo-content-wrapper">
        <h2 className="form-heading">
          See Yusha Leads in action with a quotation from our team
        </h2>
        {demoData.map((data, index) => (
          <section key={index}>
            <h4 className="form-subheading">{data.description}</h4>
            {/* <CustomList list={data.list} /> */}
          </section>
        ))}
      </article>
      <ContactForm />
    </section>
  </ContactFormStyle>
);

export default GetDemo;
