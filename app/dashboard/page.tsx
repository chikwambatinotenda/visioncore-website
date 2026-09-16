import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Client Dashboard", description: "VisionCore client portal dashboard." };

export default function DashboardPage() {
  redirect("/");
}
