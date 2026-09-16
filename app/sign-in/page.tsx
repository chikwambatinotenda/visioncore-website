import type { Metadata } from "next";
import SignInForm from "@/components/ui/SignInForm";

export const metadata: Metadata = { title: "Sign In", description: "Sign in to the VisionCore client portal." };

export default function SignInPage() { return <section className="flex min-h-[65vh] items-center justify-center bg-white px-6 py-20"><div className="w-full max-w-md"><p className="text-xs font-semibold tracking-[0.2em] text-[#FC4C00]">CLIENT PORTAL</p><h1 className="mt-3 text-3xl font-extrabold text-[#092C42]">SIGN IN.</h1><p className="mt-3 text-sm leading-relaxed text-[#092C42]/65">Client portal access is being prepared. We will connect this entry point to secure authentication as the portal becomes available.</p><SignInForm /></div></section>; }
