import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const growthPackages = [
  {
    name: "SEO & Local Search Starter",
    description: "Essential search visibility and local SEO configuration for growing businesses.",
    deliverables: [
      "On-Page Technical SEO Audit & Keyword Optimization",
      "Google Business Profile Setup & Local Map Optimization",
      "Monthly Search Ranking Performance Reports",
      "Site Speed & Mobile Usability Enhancements",
      "Basic Content & Meta Tag Revisions",
    ],
    action: "Request Quote",
  },
  {
    name: "Growth Marketing & Social Media",
    description: "Complete social media management and lead generation campaign management.",
    deliverables: [
      "Multi-Platform Content Creation (Graphics & Captions)",
      "Target Ad Campaign Management (Facebook, LinkedIn, Google Ads)",
      "WhatsApp Lead Capture & Automated Response Workflows",
      "Audience Targeting & Analytics Performance Tracking",
      "Bi-Weekly Campaign Strategy & Optimization Meetings",
    ],
    action: "Request Quote",
  },
  {
    name: "Enterprise Brand Growth Scaling",
    description: "Full-scale digital growth engine, continuous conversion optimization, and brand positioning.",
    deliverables: [
      "Complete Multi-Channel Digital Marketing Strategy",
      "Custom Conversion Rate Optimization (CRO) & Landing Pages",
      "Corporate Email Marketing & Automation Workflows",
      "Video Ad Creation & High-End Graphic Asset Production",
      "Dedicated Growth Account Manager & Monthly ROI Reporting",
    ],
    action: "Request Quote",
  },
];

export const metadata: Metadata = {
  title: "VisionCore Growth | Digital Marketing & Business Growth",
  description:
    "Digital marketing, social media and visibility strategies that turn an audience into enquiries.",
};

export default function GrowthPage() {
  return <ServicePageTemplate slug="growth" packageOverrides={growthPackages} compactPackages compactTitle="Digital Marketing & Growth" compactLabel="VISIONCORE GROWTH" compactDescription="Data-driven marketing, SEO optimization, and social media campaigns engineered to generate leads." />;
}
