import Link from "next/link";

const pythonStack = [
  { label: "Python",    color: "text-[#85B7EB] border-[#378ADD]/25 bg-[#378ADD]/10", dot: "bg-[#378ADD]" },
  { label: "Django",    color: "text-[#5DCAA5] border-[#1D9E75]/25 bg-[#1D9E75]/10", dot: "bg-[#1D9E75]" },
  { label: "FastAPI",   color: "text-[#9FE1CB] border-[#5DCAA5]/22 bg-[#5DCAA5]/8",  dot: "bg-[#5DCAA5]" },
  { label: "LangChain", color: "text-[#AFA9EC] border-[#7F77DD]/25 bg-[#534AB7]/10", dot: "bg-[#7F77DD]" },
  { label: "PyTorch",   color: "text-[#F0997B] border-[#D85A30]/22 bg-[#D85A30]/9",  dot: "bg-[#D85A30]" },
];

const jsStack = [
  {label: "NodeJS", color: "text-[#F7DF1E] border-[#F7DF1E]/25 bg-[#F7DF1E]/10", dot: "bg-[#F7DF1E]" },
  { label: "React",   color: "text-[#85B7EB] border-[#378ADD]/22 bg-[#378ADD]/9",     dot: "bg-[#378ADD]" },
  { label: "Next.js", color: "text-white/55 border-white/10 bg-white/5",              dot: "bg-white/40" },
];

const techStack = [
  { label: "Tailwind CSS", color: "border-cyan-400/30 bg-cyan-500/5", dot: "bg-cyan-400" },
  { label: "Linux", color: "border-yellow-400/30 bg-yellow-500/5", dot: "bg-yellow-400" },
  { label: "Git", color: "border-orange-400/30 bg-orange-500/5", dot: "bg-orange-400" },
  { label: "MySQL", color: "border-blue-400/30 bg-blue-500/5", dot: "bg-blue-400" },
  { label: "MongoDB", color: "border-green-400/30 bg-green-500/5", dot: "bg-green-400" },
];

export default function HeroSection() {
  return (
    <section className="w-full px-4 py-10">
      <div
        className="
          relative max-w-3xl mx-auto rounded-[20px] overflow-hidden
          bg-[#0d0d0f] text-center
          px-10 sm:px-20 pt-14 pb-11
        "
      >
        {/* ── Dot-grid background ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── Corner accents ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 w-28 h-28 border-t border-l border-white/[0.07] rounded-tl-[20px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-28 h-28 border-b border-r border-white/[0.07] rounded-br-[20px]"
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Available badge */}
          <div className="inline-flex items-center  px-[14px] py-[6px] rounded-full border border-[#1D9E75]/35 bg-[#1D9E75]/8 mb-8 select-none">
            <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75] animate-pulse shrink-0" />
            <span className="text-[12px] text-[#5DCAA5] tracking-[0.04em]">
              Available for freelance
            </span>
          </div>

          {/* Greeting */}
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/25 mb-[14px]">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-[52px] sm:text-[60px] font-medium tracking-[-0.04em] leading-none text-[#f2f2f4] mb-[10px]">
            Adhrit Sigdel
          </h1>

          {/* Role divider row */}
          <div className="flex items-center justify-center gap-[10px] mb-[22px]">
            <div className="w-8 h-px bg-white/15" />
            <p className="text-[12px] uppercase tracking-[0.07em] text-white/30">
              Full-stack &amp; AI developer
            </p>
            <div className="w-8 h-px bg-white/15" />
          </div>

          {/* Bio */}
          <p className="text-[14.5px] text-white/40 leading-[1.75] max-w-[390px] mb-9">
            I build{" "}
            <span className="text-white/62 font-medium">modern web apps</span>{" "}
            and{" "}
            <span className="text-white/62 font-medium">AI-powered systems</span>{" "}
            — from clean Next.js and TailWind CSS as frontends to Python backends with LangChain, Django and
            PyTorch.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-[10px] mb-11">
            <Link
              href="/My_Works/Project1"
              className="flex items-center gap-[8px] text-[13px] font-medium text-[#0d0d0f] bg-[#f0f0f0] px-[22px] py-[10px] rounded-[10px] hover:opacity-85 transition-opacity"
            >
              View my projects
              <span className="w-[18px] h-[18px] rounded-full bg-black/12 flex items-center justify-center text-[10px] leading-none">
                ↗
              </span>
            </Link>
            <Link
              href="/My_Works/about"
              className="text-[13px] text-white/38 border border-white/10 px-[22px] py-[10px] rounded-[10px] hover:text-white/65 hover:border-white/20 transition-all"
            >
              About me
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.06] mb-7" />

          {/* Tech stack */}
          <div className="w-full flex flex-col gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/20">
              Tech stack
            </p>

            {/* Python / AI group */}
            <div className="flex flex-col gap-[6px]">
              <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-white/18">
                Python / AI
              </p>
              <div className="flex flex-wrap justify-center gap-[7px]">
                {pythonStack.map(({ label, color, dot }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-[6px] px-[11px] py-[5px] rounded-[8px] border ${color} transition-transform duration-150 hover:-translate-y-px cursor-default select-none`}
                  >
                    <span className={`w-[5px] h-[5px] rounded-full shrink-0 ${dot}`} />
                    <span className="text-[12px] font-medium tracking-[-0.01em]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* JavaScript / Frontend group */}
            <div className="flex flex-col gap-[6px]">
              <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-white/18">
                JavaScript / Frontend
              </p>
              <div className="flex flex-wrap justify-center gap-[7px]">
                {jsStack.map(({ label, color, dot }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-[6px] px-[11px] py-[5px] rounded-[8px] border ${color} transition-transform duration-150 hover:-translate-y-px cursor-default select-none`}
                  >
                    <span className={`w-[5px] h-[5px] rounded-full shrink-0 ${dot}`} />
                    <span className="text-[12px] font-medium tracking-[-0.01em]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tech Stack Group */}
          <div className="flex flex-col gap-[8px] mt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.09em] text-white/18">
              Extra Tech Stack
            </p>

            <div className="flex flex-wrap justify-center gap-[7px]">
              {techStack.map(({ label, color, dot }) => (
                <div
                  key={label}
                  className={`flex items-center gap-[6px] px-[11px] py-[5px] rounded-[8px] border ${color} transition-transform duration-150 hover:-translate-y-px cursor-default select-none`}
                >
                  <span className={`w-[5px] h-[5px] rounded-full shrink-0 ${dot}`} />
                  <span className="text-[12px] font-medium tracking-[-0.01em]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-[8px] mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/Crowk999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-[34px] h-[34px] rounded-[9px] border border-white/8 bg-white/4 flex items-center justify-center hover:border-white/16 hover:bg-white/7 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.38)">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://x.com/SigdelAdhrit"
              target="_blank"
              aria-label="LinkedIn"
              className="w-[34px] h-[34px] rounded-[9px] border border-white/8 bg-white/4 flex items-center justify-center hover:border-white/16 hover:bg-white/7 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.38)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/SigdelAdhrit"
              target="_blank"
              aria-label="Twitter"
              className="w-[34px] h-[34px] rounded-[9px] border border-white/8 bg-white/4 flex items-center justify-center hover:border-white/16 hover:bg-white/7 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.38)">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:adhritsigdel@gmail.com"
              aria-label="Email"
              className="w-[34px] h-[34px] rounded-[9px] border border-white/8 bg-white/4 flex items-center justify-center hover:border-white/16 hover:bg-white/7 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


