export type ServiceDivision = {
  slug: "creative" | "web" | "software" | "cloud" | "growth";
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  offerings: string[];
  packages: { name: string; description: string; deliverables: string[]; price: string }[];
};

export const services: ServiceDivision[] = [
  {
    slug: "creative",
    name: "VisionCore Creative",
    shortName: "Creative",
    tagline: "Branding & Corporate Identity",
    description:
      "Brand identity, logo design and corporate design systems that give a business a professional, consistent presence.",
    href: "/services/creative",
    cta: "BUILD YOUR BRAND",
    offerings: [
      "Brand identity & logo design",
      "Corporate identity systems",
      "Company profiles & marketing materials",
      "Presentation & digital brand assets",
    ],
    packages: [
      {
        name: "Brand Starter",
        description: "A focused identity package for new businesses.",
        deliverables: ["Logo design", "Colour & typography system", "Basic brand guide"],
        price: "From request",
      },
      {
        name: "Corporate Identity",
        description: "A complete identity system for established businesses.",
        deliverables: ["Full brand guide", "Company profile", "Marketing templates"],
        price: "Request a quote",
      },
      {
        name: "Marketing Design",
        description: "Ongoing design support for campaigns and content.",
        deliverables: ["Social media artwork", "Presentation decks", "Print materials"],
        price: "Request a quote",
      },
    ],
  },
  {
    slug: "web",
    name: "VisionCore Web",
    shortName: "Web",
    tagline: "Websites & Digital Experiences",
    description:
      "Corporate websites, business platforms and digital experiences that represent a business well and convert visitors.",
    href: "/services/web",
    cta: "BUILD YOUR WEBSITE",
    offerings: [
      "Corporate & business websites",
      "Landing pages & e-commerce",
      "Web applications & client portals",
      "Responsive design & deployment",
    ],
    packages: [
      {
        name: "Website Starter",
        description: "Professional business website package.",
        deliverables: ["5 pages", "Responsive design", "Contact form", "Basic SEO", "Deployment"],
        price: "From request",
      },
      {
        name: "Business Website",
        description: "A larger website for growing businesses.",
        deliverables: ["Up to 10 pages", "Content structure", "SEO foundation", "Analytics setup"],
        price: "Request a quote",
      },
      {
        name: "E-commerce",
        description: "A digital storefront built to sell online.",
        deliverables: ["Product catalogue", "Checkout & payments", "Order management"],
        price: "Request a quote",
      },
      {
        name: "Custom Platform",
        description: "A tailored web application for specific business needs.",
        deliverables: ["Custom features", "Client portal", "Ongoing support"],
        price: "Request a quote",
      },
    ],
  },
  {
    slug: "software",
    name: "VisionCore Software",
    shortName: "Software",
    tagline: "Custom Business Systems",
    description:
      "Custom business systems, internal portals and automation that help teams operate more efficiently.",
    href: "/services/software",
    cta: "BUILD YOUR SYSTEM",
    offerings: [
      "Custom business systems & dashboards",
      "Internal portals & workflow tools",
      "Automation & API integrations",
      "Secure, scalable, cloud-ready platforms",
    ],
    packages: [
      {
        name: "Custom Business System",
        description: "A tailored system designed around a specific workflow.",
        deliverables: ["Requirements mapping", "Custom build", "Deployment & training"],
        price: "Request a quote",
      },
      {
        name: "Internal Portal",
        description: "A secure portal for staff or partners.",
        deliverables: ["User accounts", "Role-based access", "Core workflows"],
        price: "Request a quote",
      },
      {
        name: "Automation",
        description: "Automating repetitive manual processes.",
        deliverables: ["Process review", "Automation build", "Integration support"],
        price: "Request a quote",
      },
    ],
  },
  {
    slug: "cloud",
    name: "VisionCore Cloud",
    shortName: "Cloud",
    tagline: "Digital Infrastructure",
    description:
      "Domains, hosting, business email and cloud infrastructure that keep a business online and reliable.",
    href: "/services/cloud",
    cta: "POWER YOUR DIGITAL INFRASTRUCTURE",
    offerings: [
      "Domain registration & hosting",
      "Business email & cloud deployment",
      "Backups & infrastructure setup",
      "Technical support & management",
    ],
    packages: [
      {
        name: "Business Email",
        description: "Professional email on your own domain.",
        deliverables: ["Custom domain email", "Mailbox setup", "Basic support"],
        price: "From request",
      },
      {
        name: "Hosting",
        description: "Reliable hosting for websites and applications.",
        deliverables: ["Managed hosting", "SSL & security", "Monitoring"],
        price: "Request a quote",
      },
      {
        name: "Infrastructure",
        description: "Cloud infrastructure setup for growing systems.",
        deliverables: ["Cloud deployment", "Backups", "Ongoing management"],
        price: "Request a quote",
      },
    ],
  },
  {
    slug: "growth",
    name: "VisionCore Growth",
    shortName: "Growth",
    tagline: "Digital Marketing & Business Growth",
    description:
      "Digital marketing, social media and visibility strategies that turn an audience into enquiries.",
    href: "/services/growth",
    cta: "GROW YOUR BUSINESS",
    offerings: [
      "Social media management & content strategy",
      "SEO & Google Business Profile support",
      "Google & Meta advertising",
      "Online visibility & lead generation",
    ],
    packages: [
      {
        name: "Social Media Starter",
        description: "Consistent, professional social media presence.",
        deliverables: ["Content calendar", "Post design", "Monthly reporting"],
        price: "From request",
      },
      {
        name: "Digital Visibility",
        description: "Improving how a business is found online.",
        deliverables: ["SEO foundation", "Google Business Profile", "Visibility report"],
        price: "Request a quote",
      },
      {
        name: "Growth Campaign",
        description: "Targeted campaigns to generate leads.",
        deliverables: ["Ad strategy", "Campaign management", "Performance tracking"],
        price: "Request a quote",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
