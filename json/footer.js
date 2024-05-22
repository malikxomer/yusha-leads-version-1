import {
  LinkedInIcon,
  AppleStoreIcon,
  TwitterIcon,
  PlayStoreIcon,
  EmailIcon,
  LocationIcon,
} from "../svg/index";

export const footerData = [
  {
    id: 1,
    heading: "Connect",
    customClass: "contact",
    description: [
      <p className="content">Media Inquires</p>,
      <a className="content" href="mailto:hello@inhabify.com">
        hello@inhabify.com
      </a>,
    ],
  },
  {
    id: 2,
    heading: "Resources",
    customClass: "location",
    description: [
      <a
        className="content"
        href="/terms-and-conditions.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms of Use
      </a>,
      <a
        className="content"
        href="/privacy.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>,
      <a className="content" href="#">
        Careers
      </a>,
    ],
  },

  {
    id: 3,
    heading: "Follow Us",
    iconsList: [
      { icon: <LinkedInIcon />, link: "https://www.linkedin.com/" },
      { icon: <TwitterIcon />, link: "https://www.linkedin.com/" },
    ],
  },
];

export const followUsData = [
  {
    link: "https://apps.apple.com/us/app/inhabify/id1494270276",
    icon: <AppleStoreIcon />,
  },
  { link: "#", icon: <PlayStoreIcon /> },
];
