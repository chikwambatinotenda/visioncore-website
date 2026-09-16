import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const creativePackages = [
  {
    name: "Brand Starter",
    description: "Essential brand identity package for emerging startups and small businesses.",
    deliverables: [
      "Primary Logo Design (with 1 mockup concept & 2 revision rounds)",
      "Business Card Design & Print-Ready Files",
      "Letterhead & Stamp Design",
      "Basic Brand Style Sheet (Colors & Typography)",
    ],
    action: "Request Quote",
  },
  {
    name: "Corporate Identity",
    description: "A complete corporate identity system for established businesses and professional firms.",
    deliverables: [
      "Premium Logo Design (3 Mockups + Source Vectors)",
      "Complete Company Profile Design (up to 8 pages)",
      "Business Cards, Letterhead & Envelope Design",
      "Invoice & Receipt Book Templates (Excel / PDF)",
      "Flyer & Tri-Fold Brochure Design",
      "Social Media Branding (Profile & Cover Banners)",
    ],
    action: "Request Quote",
  },
  {
    name: "Enterprise / Growth Plus",
    description: "Full-service branding, marketing collateral, and ongoing design support.",
    deliverables: [
      "Full Brand Identity Guidelines & Usage System",
      "Premium Corporate Profile & Pitch Deck Presentation",
      "Custom Print Collateral (Brochures, Banners, Signage)",
      "Stationaries (Invoice, Quotation, Receipt, Voucher Templates)",
      "Email Signature & Digital Stationery Templates",
      "Monthly Graphic Design Support (Social Media / Promo Artwork)",
    ],
    action: "Request Quote",
  },
];

export const metadata: Metadata = {
  title: "VisionCore Creative | Branding & Corporate Identity",
  description:
    "Brand identity, logo design and corporate design systems that give your business a professional, consistent presence.",
};

export default function CreativePage() {
  return <ServicePageTemplate slug="creative" packageOverrides={creativePackages} compactPackages />;
}
