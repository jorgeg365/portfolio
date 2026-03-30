export default function Resume() {
  const resumePath = "/jorge-grullon-resume-2026.pdf";

  return (
    <div className="min-h-screen font-sans px-6 py-16 relative z-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 relative z-20">Resume</h1>
          <p className="text-lg sm:text-xl leading-8 text-white/85 relative z-20 max-w-3xl mx-auto">
            View Jorge Grullon&apos;s resume directly on this page, open it in a
            new tab, or download a copy.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-20">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/20"
          >
            Open Resume
          </a>
          <a
            href={resumePath}
            download
            className="rounded-full border border-blue-300/40 bg-blue-400/20 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-400/30"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-5 backdrop-blur-sm relative z-20 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
          <iframe
            src={`${resumePath}#view=FitH`}
            title="Jorge Grullon Resume"
            className="h-[70vh] sm:h-[78vh] w-full rounded-2xl bg-white"
          />
        </div>
      </div>
    </div>
  );
}
