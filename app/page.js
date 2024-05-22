"use client";
import {
  Navbar,
  Header,
  Platform,
  HowItWorks,
  Pricing,
  Testimonial,
  GetDemo,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Platform />
        <HowItWorks />
        <Pricing />
        <Testimonial />
        <GetDemo />
      </main>
      <Footer />
    </>
  );
}
