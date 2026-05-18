"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import OrbitWidget from "./orbit";

const groups = [
  {
    label: "backend / ai",
    chips: [
      { l: "Python", color: "blue" },
      { l: "Django", color: "teal" },
      { l: "FastAPI", color: "mint" },
      { l: "LangChain", color: "purple" },
      { l: "Scikit Learn", color: "blue" },
      { l: "PyTorch", color: "orange" },
    ],
  },
  {
    label: "frontend",
    chips: [
      { l: "Next.js", color: "white" },
      { l: "React", color: "blue" },
      { l: "TypeScript", color: "yellow" },
      { l: "Tailwind CSS", color: "teal" },
      { l: "Node.js", color: "green" },
    ],
  },
  {
    label: "tools",
    chips: [
      { l: "Linux", color: "mint" },
      { l: "Git", color: "purple" },
      { l: "MySQL", color: "orange" },
      { l: "MongoDB", color: "green" },
      { l: "Vercel", color: "white" },
    ],
  },
];

const chipStyles: Record<string, string> = {
  blue:   "text-[#85B7EB] border-[rgba(55,138,221,0.3)]   bg-[rgba(55,138,221,0.08)]   hover:bg-[rgba(55,138,221,0.14)]   before:bg-[#85B7EB]",
  teal:   "text-[#5DCAA5] border-[rgba(29,158,117,0.3)]   bg-[rgba(29,158,117,0.08)]   hover:bg-[rgba(29,158,117,0.14)]   before:bg-[#5DCAA5]",
  mint:   "text-[#9FE1CB] border-[rgba(93,202,165,0.25)]  bg-[rgba(93,202,165,0.07)]   hover:bg-[rgba(93,202,165,0.13)]   before:bg-[#9FE1CB]",
  purple: "text-[#AFA9EC] border-[rgba(127,119,221,0.3)]  bg-[rgba(83,74,183,0.1)]     hover:bg-[rgba(83,74,183,0.16)]    before:bg-[#AFA9EC]",
  orange: "text-[#F0997B] border-[rgba(216,90,48,0.28)]   bg-[rgba(216,90,48,0.08)]    hover:bg-[rgba(216,90,48,0.14)]    before:bg-[#F0997B]",
  yellow: "text-[#E8D22A] border-[rgba(232,210,42,0.25)]  bg-[rgba(232,210,42,0.07)]   hover:bg-[rgba(232,210,42,0.13)]   before:bg-[#E8D22A]",
  white:  "text-[rgba(255,255,255,0.42)] border-[rgba(255,255,255,0.11)] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] before:bg-[rgba(255,255,255,0.35)]",
  green:  "text-[#86C940] border-[rgba(99,153,34,0.3)]    bg-[rgba(99,153,34,0.08)]    hover:bg-[rgba(99,153,34,0.14)]    before:bg-[#86C940]",
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className="bg-[#060609] rounded-[18px] overflow-hidden font-mono w-full max-w-[820px] mx-auto"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 py-[11px] border-b border-white/[0.06]">
        <div className="flex gap-[6px]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57] block" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E] block" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#28C840] block" />
        </div>
        <span className="text-[11px] text-white/[0.18] tracking-[.08em]">portfolio.adhrit.dev</span>
        <div className="flex items-center gap-[5px] text-[10px] text-[#1D9E75] tracking-[.06em]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#1D9E75] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
          live
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px]">

        {/* LEFT */}
        <div className="px-6 sm:px-9 pt-9 pb-8 flex flex-col justify-between gap-8 border-b sm:border-b-0 sm:border-r border-white/[0.05]">
          <div>
            {/* Tag row */}
            <div
              className="flex items-center gap-2 mb-6"
              style={{ animation: mounted ? "fadeUp .4s ease both" : "none" }}
            >
              <span className="text-[10px] tracking-[.1em] text-white/25 uppercase px-[9px] py-1 border border-white/[0.09] rounded-[4px]">
                v2.0
              </span>
              <span className="flex items-center gap-[5px] text-[10px] text-[#5DCAA5] tracking-[.07em] px-[9px] py-1 border border-[rgba(29,158,117,0.28)] rounded-[4px] bg-[rgba(29,158,117,0.07)]">
                <span className="w-[5px] h-[5px] rounded-full bg-[#1D9E75] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
                open to work
              </span>
            </div>

            {/* Name */}
            <p className="text-[10px] tracking-[.14em] text-white/[0.18] uppercase mb-[6px]">// developer</p>
            <h1
              className="text-[42px] sm:text-[50px] font-medium leading-[.95] tracking-[-0.04em] text-[#f0f0f2] mb-[6px]"
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              Adhrit
              <br />
              <span className="text-white/25">Sigdel</span>
              <span
                className="inline-block w-[3px] h-[38px] sm:h-[42px] bg-[#5DCAA5] ml-[3px] align-middle animate-[blink_.85s_step-end_infinite]"
              />
            </h1>

            {/* Role row */}
            <div className="flex items-center gap-[10px] my-4">
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="text-[10px] tracking-[.1em] text-white/20 uppercase whitespace-nowrap">
                Full-stack &amp; AI
              </span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            {/* Bio */}
            <p
              className="text-[13px] text-white/35 leading-[1.8] max-w-[330px] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              Building{" "}
              <strong className="text-white/60 font-medium">modern web apps</strong> and{" "}
              <strong className="text-white/60 font-medium">AI-powered systems</strong> — clean
              Next.js frontends, Python backends with LangChain, Django &amp; PyTorch.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/My_Works/Project1"
              className="inline-flex items-center gap-[6px] text-[12px] font-medium text-[#070709] bg-[#ececee] px-[18px] py-[9px] rounded-[8px] transition-opacity hover:opacity-80"
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              View projects ↗
            </Link>
            <Link
              href="/My_Works/Contacts"
              className="inline-flex items-center text-[12px] text-white/30 px-[18px] py-[9px] rounded-[8px] border border-white/10 transition-all hover:text-white/55 hover:border-white/20"
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              About me
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="px-4 py-6 flex flex-col gap-3 bg-[#070709]">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-[7px]">
            {[
              { val: "10+", lbl: "projects" },
              { val: "1+",  lbl: "years" },
              { val: "5",   lbl: "frameworks" },
              { val: "∞",   lbl: "coffee" },
              { val: "17",  lbl: "Age" },
              { val: "∞",  lbl: "imagination" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="bg-[#0c0c10] border border-white/[0.07] rounded-[8px] px-[11px] py-[10px]">
                <div
                  className="text-[22px] font-medium text-[#f0f0f2] leading-none mb-[3px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
                >
                  {val}
                </div>
                <div className="text-[9px] text-white/25 tracking-[.07em] uppercase">{lbl}</div>
              </div>
            ))}
            {/* for that spining orbit */}
            <div>
              <OrbitWidget />
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-[6px] justify-center mt-auto">
            {/* GitHub */}
            <a href="https://github.com/Crowk999" target="_blank" rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-[8px] border border-white/[0.08] bg-white/[0.04] flex items-center justify-center transition-all hover:border-white/20 hover:bg-white/[0.09]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.4)">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="https://x.com/SigdelAdhrit" target="_blank" rel="noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-[8px] border border-white/[0.08] bg-white/[0.04] flex items-center justify-center transition-all hover:border-white/20 hover:bg-white/[0.09]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.4)">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-[8px] border border-white/[0.08] bg-white/[0.04] flex items-center justify-center transition-all hover:border-white/20 hover:bg-white/[0.09]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,.4)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:adhritsigdel@gmail.com"
              aria-label="Email"
              className="w-8 h-8 rounded-[8px] border border-white/[0.08] bg-white/[0.04] flex items-center justify-center transition-all hover:border-white/20 hover:bg-white/[0.09]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Tech Stack ── */}
      <div className="border-t border-white/[0.05] px-4 sm:px-6 py-6">
        {/* Section header */}
        <div className="flex items-center gap-[10px] mb-4">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[9px] tracking-[.14em] text-white/[0.18] uppercase">tech stack</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-[14px]">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[10px]">
              <span className="text-[9px] tracking-[.1em] text-white/20 uppercase sm:min-w-[72px] sm:text-right">
                {g.label}
              </span>
              <div className="flex flex-wrap gap-[6px]">
                {g.chips.map(({ l, color }) => (
                  <div
                    key={l}
                    className={`
                      inline-flex items-center gap-[5px] px-[10px] py-[5px] rounded-[6px] border
                      text-[11px] font-medium tracking-[-0.01em] cursor-default
                      transition-transform duration-150 hover:-translate-y-[2px]
                      relative before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:flex-shrink-0
                      ${chipStyles[color]}
                    `}
                    style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
                  >
                    <span
                      className={`w-[4px] h-[4px] rounded-full flex-shrink-0 ${
                        color === "blue"   ? "bg-[#85B7EB]" :
                        color === "teal"   ? "bg-[#5DCAA5]" :
                        color === "mint"   ? "bg-[#9FE1CB]" :
                        color === "purple" ? "bg-[#AFA9EC]" :
                        color === "orange" ? "bg-[#F0997B]" :
                        color === "yellow" ? "bg-[#E8D22A]" :
                        color === "green"  ? "bg-[#86C940]" :
                        "bg-white/35"
                      }`}
                    />
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Nepal origin ── */}
      <div className="mt-5 pt-4 border-t border-white/[0.05]">
        <div className="flex items-center justify-between px-1">

          {/* Left — flag stripe + location */}
          <div className="flex items-center gap-3">
            {/* Nepal flag color stripes */}
            <div className="flex gap-[3px]">
              <div className="w-[3px] h-8 rounded-full bg-[#DC143C]" />
              <div className="w-[3px] h-8 rounded-full bg-[#003893]" />
              <div className="w-[3px] h-8 rounded-full bg-[#FFFFFF]/20" />
            </div>
            <div className="flex flex-col gap-[3px]">
              <span
                className="text-[8px] tracking-[.16em] text-white/20 uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                based in
              </span>
              <span
                className="text-[13px] font-semibold text-white/60"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                🇳🇵 Kathmandu, Nepal
              </span>
              <span
                className="text-[9px] text-white/20"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                UTC +5:45 · only ±45min zone
              </span>
            </div>
          </div>

          {/* Right — availability */}
          <div className="flex flex-col items-end gap-[4px]">
            <div className="flex items-center gap-[5px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
              <span
                className="text-[10px] text-[#5DCAA5] tracking-[.08em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                available
              </span>
            </div>
            <span
              className="text-[9px] text-white/20"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              open to remote
            </span>
          </div>

        </div>
      </div>

      {/* Keyframe styles injected globally */}
      <style>{`
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; }
          50%       { opacity: .3; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}


