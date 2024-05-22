import {
  ManageTenantIcon,
  ExperienceCurationIcon,
  ManageTeamIcon,
  ServiceConsumption,
  PlatformAnalyticsIcon,
  ServiceExecutionIcon,
} from "../svg/index";

const platformData = [
  {
    id: 1,
    header: "24/7 Customer Support",
    icon: <ManageTenantIcon />,
    description:
      "Round-the-clock assistance and guidance to address any inquiries or issues promptly, ensuring seamless customer experience.",
  },
  {
    id: 2,
    header: "Dependable Partner",
    icon: <ExperienceCurationIcon />,
    description:
      "Our advanced anti-fraud systems ensure real-time human traffic without end-of-month surprises.",
  },
  {
    id: 3,
    header: "Intended demographic",
    icon: <ManageTeamIcon />,
    description:
      "Identify and engage your intended demographic with precision and effectiveness.",
  },
  {
    id: 4,
    header: "Media Procurement and Enhancement",
    icon: <ServiceConsumption />,
    description:
      "Strategic acquisition and fine-tuning of media placements for maximum impact and efficiency.",
  },
  {
    id: 5,
    header: "Conversion Optimization",
    icon: <PlatformAnalyticsIcon />,
    description:
      "Tactics to enhance conversion rates and maximize returns from ad traffic.",
  },
  {
    id: 6,
    header: "Targeted Audience Research",
    icon: <ServiceExecutionIcon />,
    description:
      "Comprehensive analysis to pinpoint the right audience demographics and behaviors.",
  },
];

export default platformData;
