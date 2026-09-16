import type { Metadata } from "next";
import { redirect } from "next/navigation";
import SignInForm from "@/components/ui/SignInForm";

export const metadata: Metadata = { title: "Sign In", description: "Sign in to the VisionCore client portal." };

export default function SignInPage() { redirect("/"); }
