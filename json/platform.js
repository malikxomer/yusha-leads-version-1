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
    header: "Curate Living Experience",
    icon: <ManageTenantIcon />,
    description:
      "Curate services that fits the needs of tenants and offer unique experiences to differentiate from the competition.",
  },
  {
    id: 2,
    header: "Dashboard",
    icon: <ExperienceCurationIcon />,
    description:
      "Gather insights about tenants, track service revenue mix, and optimize the living experience with a few clicks.",
  },
  {
    id: 3,
    header: "Manage Tenants",
    icon: <ManageTeamIcon />,
    description:
      "On-board and manage tenants that will utilize the curated services.  Test new services before larger community roll-outs.",
  },
  {
    id: 4,
    header: "Digital Ecosystem",
    icon: <ServiceConsumption />,
    description:
      "Collect digital payments, communicate with tenants across platforms, and more through pre-built third-party API integrations.",
  },
  {
    id: 5,
    header: "Manage Team & Partners",
    icon: <PlatformAnalyticsIcon />,
    description:
      "Manage team members efficiently and quickly add external partners as needed.",
  },
  {
    id: 6,
    header: "Human + AI",
    icon: <ServiceExecutionIcon />,
    description:
      "Utilize built-in integrations with AI based virtual voice assistants to offer a unified living experience.",
  },
];

export default platformData;
