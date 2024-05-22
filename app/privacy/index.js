import Head from "next/head";

import { PrivacyPolicy } from "../../components";

export default function Privacy() {
  return (
    <section>
      <Head>
        <title>INHABIFY</title>
        <link rel="icon" href="/knife.ico" />
      </Head>

      <article>
        <PrivacyPolicy />
      </article>
    </section>
  );
}
