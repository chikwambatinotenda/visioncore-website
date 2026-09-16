export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  badges?: string[];
  image?: string;
  challenge: string;
  approach: string;
  solution: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sky-house-finishing",
    title: "Sky House Finishing — Full Digital Launch",
    category: "360° Digital Transformation",
    summary: "360° execution from scratch: Created brand identity, custom website, Google Business Profile, local SEO ranking, and managed hosting support.",
    badges: ["Brand & Identity", "Web & Cloud Hosting", "SEO & Google Profile"],
    image: "/Portfolio/SkyHouse/skyhouse-desktop-web.png",
    challenge: "Sky House Finishing needed a credible digital foundation from the ground up.",
    approach: "VisionCore connected brand, web, infrastructure and local visibility into one coordinated launch.",
    solution: "A complete digital presence spanning identity, website, Google Business Profile, local SEO and managed hosting support.",
    result: "A clear, discoverable and professionally presented digital home for the business.",
  },
  {
    slug: "corporate-website-relaunch",
    title: "Corporate Website Relaunch",
    category: "VisionCore Web",
    summary: "A modern, responsive website built to replace an outdated online presence.",
    challenge:
      "The business had an outdated website that did not reflect its scale or professionalism, and was losing enquiries to competitors with stronger digital presences.",
    approach:
      "VisionCore mapped the business's core services and audience, then designed an information structure focused on clarity and conversion.",
    solution:
      "A responsive corporate website was built with clear service pages, a streamlined enquiry process and a design system aligned to the brand.",
    result:
      "The business gained a professional digital presence with a clear path from visitor to enquiry.",
  },
  {
    slug: "brand-identity-system",
    title: "Brand Identity System",
    category: "VisionCore Creative",
    summary: "A complete corporate identity system for a growing business.",
    challenge:
      "The business had an inconsistent visual identity across materials, making it look less established than it was.",
    approach:
      "VisionCore developed a cohesive identity system covering logo usage, colour, typography and layout principles.",
    solution:
      "A full brand guide, company profile and marketing templates were delivered for consistent use across the business.",
    result:
      "The business now presents a consistent, professional identity across every touchpoint.",
  },
  {
    slug: "operations-dashboard",
    title: "Internal Operations Dashboard",
    category: "VisionCore Software",
    summary: "A custom dashboard built to replace manual spreadsheet-based tracking.",
    challenge:
      "The business relied on manual spreadsheets to track operations, creating errors and slowing decision-making.",
    approach:
      "VisionCore reviewed the existing workflow and designed a system that reflected how the team actually worked.",
    solution:
      "A secure, cloud-ready dashboard was built to centralise operations data and support day-to-day decisions.",
    result: "The business reduced manual tracking effort and gained clearer visibility into operations.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
