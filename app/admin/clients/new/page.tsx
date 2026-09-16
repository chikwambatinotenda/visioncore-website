import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "New Client & Job" };

export default function NewClientPage() {
  redirect("/");
}
