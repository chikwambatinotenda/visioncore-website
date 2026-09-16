import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin" };

export default function AdminPage() { return <section className="min-h-[65vh] bg-[#092C42] px-6 py-24 text-white"><div className="mx-auto max-w-3xl"><p className="text-xs font-semibold tracking-[0.2em] text-[#FC4C00]">PRIVATE AREA</p><h1 className="mt-4 text-4xl font-extrabold">ADMIN DASHBOARD.</h1><p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">This private management area is reserved for authenticated VisionCore administrators. Service packages, portfolio items, enquiries and careers content will be managed here as the platform develops.</p></div></section>; }
