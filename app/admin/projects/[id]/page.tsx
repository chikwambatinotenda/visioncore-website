import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Admin Project Manager" };

export default async function AdminProjectPage({ params }: { params: Promise<{ id: string }> }) {
  redirect("/");
}
