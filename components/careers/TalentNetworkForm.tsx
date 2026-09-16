"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "mt-2 min-h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#0A192F] outline-none transition focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15";

export default function TalentNetworkForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">
            ✓
          </div>
          <h3 className="mt-5 text-xl font-bold text-[#0A192F]">Thank you!</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Your CV has been registered in our Talent Network.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#0A192F]">
          Full Name
          <input
            required
            name="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </label>
        <label className="text-sm font-semibold text-[#0A192F]">
          Email Address
          <input
            required
            type="email"
            name="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#0A192F]">
          Primary Department / Field
          <select
            required
            name="department"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select an area
            </option>
            <option>Software Engineering / Web Development</option>
            <option>Cloud &amp; IT Infrastructure</option>
            <option>Digital Transformation &amp; Consulting</option>
            <option>UI/UX Design &amp; Creative Tech</option>
            <option>Accounting &amp; Finance</option>
            <option>Marketing &amp; Sales</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-[#0A192F]">
          Qualification / Experience
          <select
            required
            name="experience"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select your level
            </option>
            <option>Student Attachment / Industrial Attachment</option>
            <option>Graduate Trainee</option>
            <option>Junior (1-2 years)</option>
            <option>Mid-Level (3-5 years)</option>
            <option>Senior / Lead (5+ years)</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-[#0A192F]">
        LinkedIn / Portfolio URL <span className="font-normal text-slate-400">(Optional)</span>
        <input
          type="url"
          name="portfolio"
          className={inputClass}
          placeholder="https://"
        />
      </label>

      <label className="mt-5 block cursor-pointer rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-5 text-center transition hover:border-[#FF4D15]/50">
        <span className="block text-sm font-semibold text-[#0A192F]">
          Upload your CV / Resume
        </span>
        <span className="mt-1 block text-xs text-slate-500">
          PDF or DOCX, up to 10MB
        </span>
        <input
          required
          type="file"
          name="cv"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="mt-3 block w-full text-xs text-slate-500 file:mr-3 file:rounded-full file:border-0 file:bg-[#FF4D15]/10 file:px-3 file:py-2 file:font-semibold file:text-[#FF4D15]"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-slate-600">
        <input
          type="checkbox"
          name="updates"
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#FF4D15]"
        />
        I agree to receive VisionCore company news, tech insights, and career updates.
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-[#FF4D15] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#E03E0A] disabled:cursor-wait disabled:opacity-70"
      >
        {submitting ? "Registering your details..." : "Register CV for Future Opportunities →"}
      </button>
    </form>
  );
}
