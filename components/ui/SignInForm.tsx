"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.localStorage.setItem("visioncore-auth", "true");
    window.setTimeout(() => router.push("/dashboard"), 400);
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <label className="block text-sm font-medium text-[#092C42]">
        Email
        <input
          type="email"
          required
          className="mt-2 w-full rounded-md border border-[#092C42]/15 px-4 py-3 text-sm outline-none focus:border-[#FC4C00] focus:ring-1 focus:ring-[#FC4C00]"
          placeholder="you@company.com"
        />
      </label>
      <label className="block text-sm font-medium text-[#092C42]">
        Password
        <input
          type="password"
          required
          className="mt-2 w-full rounded-md border border-[#092C42]/15 px-4 py-3 text-sm outline-none focus:border-[#FC4C00] focus:ring-1 focus:ring-[#FC4C00]"
          placeholder="Password"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="min-h-11 w-full rounded-full bg-[#FF4D15] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E03E0A] disabled:opacity-70"
      >
        {loading ? "SIGNING IN..." : "SIGN IN"}
      </button>
    </form>
  );
}
