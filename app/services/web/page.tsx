import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const webPackages = [
  {
    name: "Website Starter",
    description: "Essential web presence for startups, individuals, and small local businesses.",
    deliverables: [
      "1 to 3 Page Responsive Website",
      "Mobile & Tablet Optimization",
      "Contact Form & WhatsApp Integration",
      "Basic SEO Setup & Speed Optimization",
      "Domain & Hosting Setup Assistance",
    ],
    action: "Request Quote",
  },
  {
    name: "Business Website & E-commerce",
    description: "High-converting corporate site or full online store for growing brands.",
    deliverables: [
      "Up to 8 Custom Designed Pages or Full E-Commerce Store",
      "Product Catalog & Payment Gateway Integration",
      "Content Management System (CMS Integration)",
      "Advanced On-Page SEO & Analytics Tracking",
      "Fast Performance & Security Configuration",
    ],
    action: "Request Quote",
  },
  {
    name: "Custom Web Application",
    description: "Bespoke web portals and software platforms tailored to complex workflows.",
    deliverables: [
      "Custom Frontend (Next.js / React) & API Integration",
      "Secure Client / Admin Dashboard Portals",
      "Database Design & Webhook Workflows",
      "Role-Based Authentication & Permissions",
      "Ongoing Maintenance & Technical Support",
    ],
    action: "Request Quote",
  },
];

export const metadata: Metadata = {
  title: "VisionCore Web | Websites & Digital Experiences",
  description:
    "Corporate websites, business platforms and digital experiences designed to represent your business and convert visitors.",
};

export default function WebPage() {
  return <ServicePageTemplate slug="web" packageOverrides={webPackages} compactPackages compactTitle="Web Packages" compactLabel="VISIONCORE WEB" compactDescription="Starting points for web work. Every engagement can be tailored to your business." />;
}
