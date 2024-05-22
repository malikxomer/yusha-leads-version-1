// import Head from "next/head";

import { Navbar, Footer, SignUpForm } from "../../components";

export default function Signup() {
  return (
    <section>
      {/* <Head>
        <title>SIGNUP | INHABIFY</title>
        <link rel="icon" href="/knife.ico" />
        <link
          rel="preload"
          href="/fonts/Roobert-300.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Roobert-400.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Roobert-500.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Roobert-600.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Roobert-700.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Roobert-800.otf"
          as="font"
          crossOrigin=""
        />
      </Head> */}

      <Navbar />
      <main>
        <SignUpForm />
      </main>
      <Footer />
    </section>
  );
}
