export default function UtilityBar() {
  return (
    <div className="hidden sm:block bg-[#092C42] text-white/85 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <p className="flex items-center gap-2 tracking-wide">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#FC4C00]" fill="none">
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          HARARE, ZIMBABWE <span className="mx-2 text-white/30">|</span> BUILD. DIGITIZE. GROW.
        </p>
        <div className="flex items-center gap-5">
          <a href="mailto:contact@visioncoretechnologies.co.zw" className="flex items-center gap-2 hover:text-[#FC4C00] transition-colors">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#FC4C00]" fill="none"><path d="m4 6 8 6 8-6M5 18h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            contact@visioncoretechnologies.co.zw
          </a>
          <a href="tel:+263776848364" className="flex items-center gap-2 hover:text-[#FC4C00] transition-colors">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#FC4C00]" fill="none"><path d="M6.6 3.5 9 3l2 5-2.2 1.5a13 13 0 0 0 5.7 5.7L16 13l5 2-.5 2.4a2 2 0 0 1-2.2 1.6C10.4 18 6 13.6 5 5.7A2 2 0 0 1 6.6 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            +263 776 848 364
          </a>
        </div>
      </div>
    </div>
  );
}
