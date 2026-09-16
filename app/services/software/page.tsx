import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const softwarePackages = [
  {
    name: "AI Chatbots & Automation",
    description: "Intelligent conversational bots and workflow automations to save team hours.",
    deliverables: [
      "WhatsApp & Web AI Customer Support Chatbots",
      "Zapier / Webhook Business Process Workflows",
      "Auto Triage & Google Sheets / CRM Sync",
      "Instant Lead Capture & Notification Bots",
      "Integration with Existing Support Channels",
    ],
    action: "Request Quote",
  },
  {
    name: "Mobile & Web Applications",
    description: "High-performance mobile apps and web platforms built for customer growth.",
    deliverables: [
      "Cross-Platform Mobile Apps (Android & iOS)",
      "Custom Web Dashboards & Client Portals",
      "User Authentication & Role-Based Permissions",
      "Payment Gateway & Push Notification Systems",
      "App Store & Play Store Deployment Setup",
    ],
    action: "Request Quote",
  },
  {
    name: "Enterprise ERP & Custom Systems",
    description: "Bespoke internal software solutions engineered for operational efficiency.",
    deliverables: [
      "Custom Internal ERP, Inventory & CRM Systems",
      "Secure Database Architecture & API Development",
      "Staff Management & Department Workflows",
      "Real-Time Analytics & Reporting Dashboards",
      "On-Premise or Cloud Hosting Setup & Support",
    ],
    action: "Request Quote",
  },
];

export const metadata: Metadata = {
  title: "VisionCore Software | Custom Business Systems",
  description:
    "Custom business systems, internal portals and automation built on secure, scalable, cloud-ready platforms.",
};

export default function SoftwarePage() {
  return <ServicePageTemplate slug="software" packageOverrides={softwarePackages} compactPackages compactTitle="Custom Software & Automation" compactLabel="VISIONCORE SOFTWARE" compactDescription="Tailored software solutions, mobile applications, and AI integrations built for business scalability." />;
}
