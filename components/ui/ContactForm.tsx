"use client";

import { FormEvent, useState } from "react";

const services = ["Software Engineering", "Cloud & Infrastructure", "Digital Transformation", "Creative Tech & Web"];
const budgets = ["Less than $100", "$100 - $500", "$500 - $1,000", "$1,000 - $2,000", "$2,000 - $5,000", "$5,000 or more"];
const input = "mt-2 min-h-11 w-full rounded-lg border border-[#092C42]/15 bg-white px-4 py-3 text-sm text-[#092C42] outline-none transition placeholder:text-[#092C42]/40 focus:ring-2 focus:ring-[#FF4D15] focus:border-transparent";

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggleService(service: string) {
    setSelectedServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 900);
  }

  if (submitted) {
    return <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"><div><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">✓</div><h3 className="mt-5 text-xl font-bold text-[#092C42]">Enquiry sent successfully.</h3><p className="mt-2 text-sm text-slate-600">Thank you. Our team will review your enquiry and get back to you shortly.</p></div></div>;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#092C42]">Name<input required name="name" className={input} placeholder="Your name" /></label>
        <label className="text-sm font-semibold text-[#092C42]">Company<input name="company" className={input} placeholder="Company name" /></label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#092C42]">Email<input required type="email" name="email" className={input} placeholder="you@company.com" /></label>
        <label className="text-sm font-semibold text-[#092C42]">Phone<input name="phone" className={input} placeholder="Phone number" /></label>
      </div>
      <fieldset className="mt-5"><legend className="text-sm font-semibold text-[#092C42]">Services you need</legend><div className="mt-2 flex flex-wrap gap-2">{services.map((service) => <button key={service} type="button" aria-pressed={selectedServices.includes(service)} onClick={() => toggleService(service)} className={`min-h-11 rounded-full border px-3 py-2 text-xs font-medium transition-colors ${selectedServices.includes(service) ? "border-[#FF4D15] bg-[#FF4D15] text-white" : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>{service}</button>)}</div></fieldset>
      <label className="mt-5 block text-sm font-semibold text-[#092C42]">Project description<textarea required name="description" rows={5} className={input} placeholder="Tell us what you are trying to build, improve or grow." /></label>
      <fieldset className="mt-5"><legend className="text-sm font-semibold text-[#092C42]">Budget range <span className="font-normal text-slate-400">(optional)</span></legend><div className="mt-2 flex flex-wrap gap-2">{budgets.map((option) => <button key={option} type="button" aria-pressed={budget === option} onClick={() => setBudget(option)} className={`min-h-11 rounded-full border px-3 py-2 text-xs transition-colors ${budget === option ? "border-[#FF4D15] bg-[#FF4D15] font-medium text-white" : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>{option}</button>)}</div></fieldset>
      <button type="submit" disabled={submitting} className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-[#FF4D15] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#E03E0A] disabled:cursor-wait disabled:opacity-70">{submitting ? "Sending Enquiry..." : "SEND ENQUIRY →"}</button>
    </form>
  );
}
