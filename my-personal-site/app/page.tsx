"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import OrbitWidget from "./orbit";
import { FaGithub, FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const groups = [
  {
    label: "backend / ai",
    chips: [
      { l: "Python", color: "blue" },
      { l: "Django", color: "teal" },
      { l: "FastAPI", color: "orange" },
      { l: "Pydantic", color: "mint" },
      { l: "LangChain", color: "purple" },
      { l: "Scikit Learn", color: "blue" },
      { l: "PyTorch", color: "orange" },
      { l: "Numpy", color: "blue" },
      { l: "Pandas", color: "teal" },
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
      { l: "Figma", color: "teal" },
      { l: "Render", color: "yellow" },
    ],
  },
  {
    label: "lowlevel language",
    chips: [
      { l: "C", color: "mint" },
      { l: "Rust", color: "purple" },
      
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
        <span className="text-[13px] text-white/60 tracking-[.08em]">portfolio.adhrit.dev</span>
        <div className="flex items-center gap-[5px] text-[13px] text-[#1D9E75] tracking-[.06em]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#1D9E75] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
          live
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px]">

        {/* LEFT */}
        <div className="px-6 sm:px-9 pt-6 pb-8 flex flex-col justify-between gap-8 border-b sm:border-b-0 sm:border-r border-white/[0.05]">

          <div>

            {/* 🔴 Banner */}
            <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-4">
              <img
                src="https://ik.imagekit.io/8pckwj2wc/luffy_long.jpg"
                alt="banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
            </div>

            {/* 🔵 Profile + Tag Row */}
            <div className="flex items-center gap-3 -mt-12 mb-5">

              {/* Profile */}
              <img
                src="https://ik.imagekit.io/8pckwj2wc/luffy2pic.jpg"
                alt="profile"
                className="
                  w-20 h-20 sm:w-24 sm:h-24 
                  rounded-xl 
                  border-4 border-[#060609] 
                  object-cover 
                  shadow-[0_0_30px_rgba(0,0,0,0.8)]
                "
              />

              {/* Tags */}
              <div
                className="flex flex-wrap gap-2"
                style={{ animation: mounted ? "fadeUp .4s ease both" : "none" }}
              >
                <span className="text-[11px] tracking-[.12em] text-white/25 uppercase px-[8px] py-[4px] border border-white/[0.09] rounded-[5px]">
                  v2.0
                </span>

                <span className="flex items-center gap-[5px] text-[10px] text-[#5DCAA5] tracking-[.07em] px-[8px] py-[4px] border border-[rgba(29,158,117,0.28)] rounded-[5px] bg-[rgba(29,158,117,0.07)]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
                  open to work
                </span>
              </div>
            </div>

            {/* 👨‍💻 Name */}
            <p className="text-[12px] tracking-[.18em] text-white/[0.25] uppercase mb-[6px]">
              // developer
            </p>

            <h1
              className="
                text-[40px] sm:text-[52px] 
                font-semibold 
                leading-[0.95] 
                tracking-[-0.045em] 
                text-[#f5f5f7] 
                mb-[6px]
              "
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              Adhrit
              <br />
              <span className="text-white/20">Sigdel</span>
              <span className="inline-block w-[3px] h-[36px] sm:h-[42px] bg-[#5DCAA5] ml-[4px] align-middle animate-[blink_.9s_step-end_infinite]" />
            </h1>

            {/* 🧩 Role */}
            <div className="flex items-center gap-[10px] my-4">
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="text-[13px] tracking-[.12em] text-white/40 uppercase whitespace-nowrap">
                Full-stack & AI
              </span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            {/* 🧾 Bio */}
            <p
              className="text-[15px] text-white/50 leading-[1.75] max-w-[360px] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              Building{" "}
              <span className="text-white/80 font-medium">modern web apps</span> and{" "}
              <span className="text-white/80 font-medium">AI-powered systems</span> — 
              clean Next.js frontends, Python backends with LangChain, Django & PyTorch.
            </p>
          </div>

          {/* 🔘 Buttons */}
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/My_Works/Project1"
              className="
                inline-flex items-center gap-[6px] 
                text-[12px] font-medium 
                text-[#070709] bg-[#ececee] 
                px-[18px] py-[9px] 
                rounded-[8px] 
                transition-all duration-300 
                hover:opacity-80 hover:scale-[1.02]
              "
              style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
            >
              View projects ↗
            </Link>

            <Link
              href="/My_Works/about"
              className="
                inline-flex items-center 
                text-[13px] text-white/45 
                px-[18px] py-[9px] 
                rounded-[8px] 
                border border-white/10 
                transition-all duration-300 
                hover:text-white/70 hover:border-white/20
              "
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
                <div className="text-[9px] text-white/50 tracking-[.07em] uppercase">{lbl}</div>
              </div>
            ))}
            {/* for that spining orbit */}
            <div className="flex justify-center md:block">
              <OrbitWidget />
            </div>
          </div>

          {/* Socials */}
          <div className="mt-auto flex flex-col gap-2">
            
            {/* GitHub */}
            <a
              href="https://github.com/Crowk999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-[10px] 
              bg-white/[0.05] border border-white/[0.08] 
              hover:bg-white/[0.12] hover:border-white/20 
              transition-all duration-200 hover:scale-[1.03]"
            >
              <FaGithub className="text-[18px] text-white/80" />
              <span className="text-[13px] text-white/80">GitHub</span>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/SigdelAdhrit"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-[10px] 
              bg-white/[0.05] border border-white/[0.08] 
              hover:bg-white/[0.12] hover:border-white/20 
              transition-all duration-200 hover:scale-[1.03]"
            >
              <FaXTwitter className="text-[18px] text-white/80" />
              <span className="text-[13px] text-white/80">Twitter</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-[10px] 
              bg-white/[0.05] border border-white/[0.08] 
              hover:bg-white/[0.12] hover:border-white/20 
              transition-all duration-200 hover:scale-[1.03]"
            >
              <FaLinkedin className="text-[18px] text-white/80" />
              <span className="text-[13px] text-white/80">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:adhritsigdel@gmail.com"
              className="flex items-center gap-3 px-3 py-2 rounded-[10px] 
              bg-white/[0.05] border border-white/[0.08] 
              hover:bg-white/[0.12] hover:border-white/20 
              transition-all duration-200 hover:scale-[1.03]"
            >
              <FaEnvelope className="text-[18px] text-white/80" />
              <span className="text-[13px] text-white/80">Email</span>
            </a>

          </div>
        </div>
      </div>

      {/* ── Tech Stack ── */}
      <div className="border-t border-white/[0.05] px-4 sm:px-6 py-6">
        {/* Section header */}
        <div className="flex items-center gap-[10px] mb-4">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[13px] tracking-[.14em] text-white/[0.44] uppercase">tech stack</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-[14px]">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[10px]">
              <span className="text-[12px] tracking-[.1em] text-white/30 uppercase sm:min-w-[72px] sm:text-right">
                {g.label}
              </span>
              <div className="flex flex-wrap gap-[6px]">
                {g.chips.map(({ l, color }) => (
                  <div
                    key={l}
                    className={`
                      inline-flex items-center gap-[5px] px-[10px] py-[5px] rounded-[6px] border
                      text-[13px] font-medium tracking-[-0.01em] cursor-default
                      transition-transform duration-150 hover:-translate-y-[2px]
                      relative before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:flex-shrink-0
                      ${chipStyles[color]}
                    `}
                    style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
                  >
                    <span
                      className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${
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
    <div className="mt-6 pt-5 border-t border-white/[0.06]">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 px-1">

      {/* LEFT — Location */}
      <div className="flex items-center gap-4">

        {/* Flag */}
        <div className="flex flex-col gap-[3px]">
          <div className="w-[3px] h-10 rounded-full bg-[#DC143C]" />
          <div className="w-[3px] h-10 rounded-full bg-[#003893]" />
          <div className="w-[3px] h-10 rounded-full bg-white/20" />
        </div>

        {/* Text */}
        <div className="flex flex-col leading-tight">

          <span className="text-[11px] tracking-[0.25em] text-white/30 uppercase font-mono">
            based in
          </span>

          <span
            className="text-[15px] md:text-[16px] font-semibold text-white/75"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            🇳🇵 Kathmandu, Nepal
          </span>

          <span className="text-[12px] text-white/30 font-mono">
            UTC +5:45 · Nepal Standard Time
          </span>

        </div>
    </div>

    {/* RIGHT — Availability */}
    <div className="flex items-center sm:flex-col sm:items-end gap-3 sm:gap-1">

      <div className="flex items-center gap-2">

        <span className="relative flex h-[7px] w-[7px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
          <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-500" />
        </span>

        <span className="text-[14px] text-emerald-300 uppercase tracking-wider font-mono">
          available
        </span>

      </div>

      <span className="text-[14px] text-white/40 font-mono">
        open for remote work
      </span>

    </div>

  </div>
</div>
      
    </div>

  );
}


