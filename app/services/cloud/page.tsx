import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const cloudPackages = [
  {
    name: "Cloud Starter & Hosting",
    description: "Reliable web hosting, domain setups, and business email infrastructure.",
    deliverables: [
      "Domain Configuration & Secure SSL Setup",
      "Business Email Setup (Google Workspace / Microsoft 365)",
      "High-Speed Web Hosting Management",
      "Monthly System Updates & Uptime Monitoring",
      "Basic DNS & Firewall Rules",
    ],
    action: "Request Quote",
  },
  {
    name: "Cloud Migration & Managed Infrastructure",
    description: "End-to-end cloud server migration, server hardening, and active infrastructure management.",
    deliverables: [
      "Cloud Server Migration (AWS, Vercel, DigitalOcean, Linode)",
      "Server Hardening & Security Configuration",
      "Active Load Balancing & Automated Backups",
      "24/7 Server Monitoring & Incident Alerting",
      "Performance Tuning & Database Optimization",
    ],
    action: "Request Quote",
  },
  {
    name: "Enterprise Hybrid Infrastructure",
    description: "Advanced network, server, and backup systems for growing enterprises.",
    deliverables: [
      "Hybrid On-Premise & Cloud Infrastructure Setup",
      "Fortinet / Cisco Network Firewall & VPN Configuration",
      "Automated Disaster Recovery & Veeam Data Protection",
      "Active Directory / Microsoft Entra ID Identity Management",
      "SLA-Backed Priority Technical Support",
    ],
    action: "Request Quote",
  },
];

export const metadata: Metadata = {
  title: "VisionCore Cloud | Digital Infrastructure",
  description:
    "Domains, hosting, business email and cloud infrastructure that keep your business online and reliable.",
};

export default function CloudPage() {
  return <ServicePageTemplate slug="cloud" packageOverrides={cloudPackages} compactPackages compactTitle="Cloud & Infrastructure Solutions" compactLabel="VISIONCORE CLOUD" compactDescription="Secure cloud hosting, server management, network infrastructure, and data backup solutions." />;
}
