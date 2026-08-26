export const SITE_NAME = "1080 Solutions";
export const SITE_LEGAL_NAME = "1080 Solutions Ltd";
export const SITE_URL = "https://www.1080solutions.co.uk";
export const PHONE_DISPLAY = "0800 772 0012";
export const PHONE_TEL = "tel:08007720012";
export const EMAIL = "sales@1080solutions.co.uk";

export const AREAS = [
  "Glasgow",
  "Whitecraigs",
  "Newton Mearns",
  "Giffnock",
  "Clarkston",
  "Bearsden",
  "Milngavie",
  "Bothwell",
  "East Kilbride",
  "Hamilton",
  "Renfrewshire",
  "Lanarkshire",
  "Central Scotland",
] as const;

export interface ServiceLink {
  label: string;
  to: string;
  blurb: string;
}

export const SERVICES: ServiceLink[] = [
  {
    label: "Smart Home Glasgow",
    to: "/smart-home-glasgow",
    blurb: "Complete home automation, designed and installed in Glasgow.",
  },
  {
    label: "Control4",
    to: "/control4-glasgow",
    blurb: "One interface for lighting, AV, heating and security.",
  },
  {
    label: "Home Automation",
    to: "/home-automation-glasgow",
    blurb: "Lighting, climate, blinds and AV working as one system.",
  },
  {
    label: "Smart Lighting",
    to: "/smart-lighting-glasgow",
    blurb: "Lighting design and control on Lutron, KNX and DALI.",
  },
  {
    label: "Lutron",
    to: "/lutron-glasgow",
    blurb: "Lutron lighting, keypads and automated shading.",
  },
  {
    label: "Home Cinema",
    to: "/home-cinema",
    blurb: "Reference-grade Dolby Atmos cinema rooms.",
  },
  {
    label: "Multi-Room Audio & Video",
    to: "/multi-room-audio-and-video",
    blurb: "Music and film in every room, from one system.",
  },
  {
    label: "Networking & Wi-Fi",
    to: "/data-networking-and-wifi",
    blurb: "Enterprise-grade networks for the whole property.",
  },
  {
    label: "Alarms & CCTV",
    to: "/alarms-and-cctv",
    blurb: "Discreet security, engineered into the architecture.",
  },
  {
    label: "Door Entry & Access",
    to: "/door-entry-and-access",
    blurb: "Managed access for family, staff and deliveries.",
  },
];
