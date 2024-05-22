import React from "react";
import { StarterIcon, ProfessionalIcon } from "../svg";

export const pricingData = [
  {
    id: 1,
    heading: "Starter",
    caption: "“No upfront cost, pay as you grow”",
    description:
      "Ideal for smaller advertisers and community teams with ability to self-manage the experience.",
    buttonText: "Get Started",
    icon: <StarterIcon />,
  },
  {
    id: 2,
    heading: "Professional",
    caption: "“Pricing based on advertisement outcomes”",
    description:
      "Ideal for large advertisement portfolios owners who want to use a dedicated team that drives advertisement experience.",
    buttonText: "Let’s Talk",
    icon: <ProfessionalIcon />,
  },
];
