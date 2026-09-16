"use client";

export default function SignInForm() {
  return (
    <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
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
        className="w-full rounded-md bg-[#FC4C00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e34400]"
      >
        SIGN IN
      </button>
    </form>
  );
}
