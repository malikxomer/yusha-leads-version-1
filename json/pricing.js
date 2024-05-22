import React from "react";
import { StarterIcon, ProfessionalIcon } from "../svg";

export const pricingData = [
  {
    id: 1,
    heading: "Starter",
    caption: "“No upfront cost, pay as you grow”",
    description:
      "Ideal for smaller properties and community teams with ability to self-manage the experience.",
    buttonText: "Get Started",
    icon: <StarterIcon />,
  },
  {
    id: 2,
    heading: "Professional",
    caption: "“Pricing based on tenants outcomes”",
    description:
      "Ideal for large real-estate portfolios owners who want to use a dedicated team that drives tenant experience.",
    buttonText: "Let’s Talk",
    icon: <ProfessionalIcon />,
  },
];
