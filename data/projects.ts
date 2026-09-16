export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  category: string;
  summary: string;
  badges: string[];
  image: string;
  gallery: string[];
  highlights: string[];
  liveUrl?: string;
  techStack?: string[];
};

export const projects: Project[] = [
  {
    slug: "sky-house-finishing",
    title: "Sky House Finishing - Full Digital Launch",
    client: "Sky House Finishing",
    location: "Cape Town, South Africa",
    category: "360° Digital Transformation",
    summary: "360° execution from scratch: brand identity, custom web platform, Google Business Profile, local SEO and managed hosting support.",
    badges: ["Branding", "Web", "SEO"],
    image: "/Portfolio/SkyHouse/skyhouse-desktop-web.png",
    gallery: [
      "/Portfolio/SkyHouse/WhatsApp Image 2026-09-12 at 10.33.25.jpeg",
      "/Portfolio/SkyHouse/skyhouse-desktop-web.png",
      "/Portfolio/SkyHouse/WhatsApp Image 2026-09-11 at 16.28.04 (1).jpeg",
    ],
    liveUrl: "https://skyhousefinishing.co.zw",
    techStack: ["Next.js 14", "Tailwind CSS", "Google Cloud"],
    highlights: [
      "Brand Identity & Print Assets Created from Scratch",
      "Custom Web Architecture & Hosting Deployment",
      "Google Business Profile Setup & 5.0 Star Local Indexing",
      "Ongoing SLA Maintenance & Technical Support",
    ],
  },
  {
    slug: "corporate-website-relaunch",
    title: "Corporate Website Relaunch",
    client: "Confidential business client",
    location: "Zimbabwe",
    category: "VisionCore Web",
    summary: "A modern, responsive website built to replace an outdated online presence.",
    badges: ["Web", "Strategy"],
    image: "",
    gallery: [],
    highlights: ["Clear service architecture", "Responsive digital experience", "Streamlined enquiry journey"],
  },
  {
    slug: "brand-identity-system",
    title: "Brand Identity System",
    client: "Confidential business client",
    location: "Zimbabwe",
    category: "VisionCore Creative",
    summary: "A complete corporate identity system for a growing business.",
    badges: ["Branding", "Identity"],
    image: "",
    gallery: [],
    highlights: ["Cohesive visual system", "Company profile", "Marketing templates"],
  },
  {
    slug: "operations-dashboard",
    title: "Internal Operations Dashboard",
    client: "Confidential business client",
    location: "Zimbabwe",
    category: "VisionCore Software",
    summary: "A custom dashboard built to replace manual spreadsheet-based tracking.",
    badges: ["Software", "Automation"],
    image: "",
    gallery: [],
    highlights: ["Centralized operations visibility", "Workflow support", "Cloud-ready system"],
  },
];
