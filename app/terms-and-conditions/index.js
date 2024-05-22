import Head from "next/head";

import { TermsAndConditions } from "../../components";

export default function TermsConditions() {
  return (
    <section>
      <Head>
        <title>INHABIFY</title>
        <link rel="icon" href="/knife.ico" />
      </Head>

      <article>
        <TermsAndConditions />
      </article>
    </section>
  );
}
