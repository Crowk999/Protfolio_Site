"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import OrbitWidget from "./orbit";
import { SiPython, SiTypescript, SiC, SiRust, SiGnubash, SiReact, SiNextdotjs, SiTailwindcss, SiDjango, SiFastapi, SiNodedotjs, SiPydantic, SiPytorch, SiScikitlearn, SiLangchain, SiNumpy, SiPandas, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiLinux, SiGit, SiDocker, SiVercel,
  SiFigma } from "react-icons/si";
import { FaGithub, FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const groups = [
  {
    label: "languages",
    chips: [
      { l: "Python", color: "blue", icon: SiPython },
      { l: "TypeScript", color: "yellow", icon: SiTypescript },
      { l: "C", color: "mint", icon: SiC },
      { l: "Rust", color: "purple", icon: SiRust },
      { l: "Bash", color: "green", icon: SiGnubash },
    ],
  },

  {
    label: "frontend",
    chips: [
      { l: "React", color: "blue", icon: SiReact },
      { l: "Next.js", color: "white", icon: SiNextdotjs },
      { l: "Tailwind CSS", color: "teal", icon: SiTailwindcss },
    ],
  },

  {
    label: "backend",
    chips: [
      { l: "Django", color: "teal", icon: SiDjango },
      { l: "Django REST Framework", color: "orange", icon: SiDjango },
      { l: "FastAPI", color: "orange", icon: SiFastapi },
      { l: "Node.js", color: "green", icon: SiNodedotjs },
      { l: "Pydantic", color: "mint", icon: SiPydantic },
    ],
  },

  {
    label: "ai / ml",
    chips: [
      { l: "PyTorch", color: "orange", icon: SiPytorch },
      { l: "Scikit-learn", color: "blue", icon: SiScikitlearn },
      { l: "LangChain", color: "purple", icon: SiLangchain },
      { l: "NumPy", color: "blue", icon: SiNumpy },
      { l: "Pandas", color: "teal", icon: SiPandas },
    ],
  },

  {
    label: "databases",
    chips: [
      { l: "PostgreSQL", color: "blue", icon: SiPostgresql },
      { l: "MySQL", color: "orange", icon: SiMysql },
      { l: "MongoDB", color: "green", icon: SiMongodb },
      { l: "Redis", color: "teal", icon: SiRedis },
    ],
  },

  {
    label: "devops / tools",
    chips: [
      { l: "Linux", color: "mint", icon: SiLinux },
      { l: "Git", color: "purple", icon: SiGit },
      { l: "Docker", color: "blue", icon: SiDocker },
      { l: "Vercel", color: "white", icon: SiVercel },
      { l: "Figma", color: "teal", icon: SiFigma },
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
  {/* Window controls */}
  <div className="flex gap-[6px]">
    <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57] block" />
    <span className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E] block" />
    <span className="w-[10px] h-[10px] rounded-full bg-[#28C840] block" />
  </div>

  {/* Address */}
  <span className="text-[12px] sm:text-[13px] text-white/[0.45] tracking-[.07em]">
    portfolio.adhrit.dev
  </span>

  {/* Status */}
  <div className="flex items-center gap-[5px] text-[11px] sm:text-[12px] text-[#5DCAA5] tracking-[.06em]">
    <span className="w-[6px] h-[6px] rounded-full bg-[#5DCAA5] shadow-[0_0_8px_rgba(93,202,165,0.55)] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
    live
  </div>
</div>

{/* Main grid */}
<div className="grid grid-cols-1 sm:grid-cols-[1fr_200px]">

  {/* LEFT */}
  <div className="px-6 sm:px-9 pt-6 pb-8 flex flex-col justify-between gap-8 border-b sm:border-b-0 sm:border-r border-white/[0.05]">

    <div>

      {/* Banner */}
      <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-4 border border-white/[0.06]">
        <img
          src="https://ik.imagekit.io/8pckwj2wc/luffy_long.jpg"
          alt="Profile banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#060609]/90" />

        {/* subtle bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060609]/40 to-transparent" />
      </div>

      {/* Profile + Tags */}
      <div className="flex items-end gap-3 -mt-10 mb-6 relative z-10">

        {/* Profile */}
        <div className="relative">
          <img
            src="https://ik.imagekit.io/8pckwj2wc/luffy2pic.jpg"
            alt="Adhrit Sigdel"
            className="
              w-20 h-20 sm:w-24 sm:h-24
              rounded-xl
              border-[3px] border-[#060609]
              object-cover
              shadow-[0_8px_30px_rgba(0,0,0,0.65)]
            "
          />

          {/* Online indicator */}
          <span
            className="
              absolute
              right-[-2px]
              bottom-[-2px]
              w-[11px]
              h-[11px]
              rounded-full
              bg-[#5DCAA5]
              border-[2px]
              border-[#060609]
              shadow-[0_0_9px_rgba(93,202,165,0.5)]
            "
          />
        </div>

        {/* Tags */}
        <div
          className="flex flex-wrap items-center gap-2 pb-[2px]"
          style={{
            animation: mounted ? "fadeUp .4s ease both" : "none",
          }}
        >
          <span
            className="
              text-[10px]
              tracking-[.12em]
              text-white/[0.38]
              uppercase
              px-[8px]
              py-[4px]
              border
              border-white/[0.09]
              bg-white/[0.02]
              rounded-[5px]
            "
          >
            v2.0
          </span>

          <span
            className="
              flex items-center gap-[5px]
              text-[10px]
              text-[#5DCAA5]
              tracking-[.07em]
              px-[8px]
              py-[4px]
              border
              border-[#5DCAA5]/20
              rounded-[5px]
              bg-[#5DCAA5]/[0.06]
            "
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#5DCAA5] shadow-[0_0_7px_rgba(93,202,165,0.6)] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
            open to work
          </span>
        </div>
      </div>

      {/* Identity */}
      <div>

        <p className="text-[11px] tracking-[.18em] text-[#5DCAA5]/55 uppercase mb-[9px]">
          // developer
        </p>

        <h1
          className="
            text-[42px] sm:text-[56px]
            font-semibold
            leading-[0.94]
            tracking-[-0.05em]
            text-[#f5f5f7]
            mb-[15px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
          }}
        >
          Adhrit
          <br />

          <span className="text-white/[0.32]">
            Sigdel
          </span>

          <span
            className="
              inline-block
              w-[2px]
              h-[36px]
              sm:h-[46px]
              bg-[#5DCAA5]
              ml-[7px]
              align-middle
              shadow-[0_0_12px_rgba(93,202,165,0.35)]
              animate-[blink_.9s_step-end_infinite]
            "
          />
        </h1>

        {/* Role */}
        <div className="flex items-center gap-[9px] mb-[18px]">

          <span
            className="
              inline-flex items-center gap-[7px]
              px-[9px] py-[5px]
              rounded-[6px]
              border
              border-[#5DCAA5]/20
              bg-[#5DCAA5]/[0.06]
              text-[10px]
              sm:text-[11px]
              font-medium
              tracking-[.08em]
              text-[#5DCAA5]/80
              uppercase
            "
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#5DCAA5] shadow-[0_0_7px_rgba(93,202,165,0.7)]" />
            Full-stack & AI
          </span>

          <span className="text-[10px] text-white/[0.18]">
            •
          </span>

          <span className="text-[10px] tracking-[.08em] text-white/[0.30] uppercase">
            Builder
          </span>

        </div>

        {/* Bio */}
        <p
          className="
            text-[15px]
            text-white/[0.58]
            leading-[1.75]
            max-w-[390px]
            mb-[25px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
          }}
        >
          Building{" "}
          <span className="text-white/[0.88] font-medium">
            modern web applications
          </span>{" "}
          and{" "}
          <span className="text-white/[0.88] font-medium">
            AI-powered systems
          </span>{" "}
          with Next.js, Python, Django, and PyTorch.
        </p>

      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-[8px] flex-wrap">

      <Link
        href="/My_Works/Project1"
        className="
          group
          inline-flex items-center gap-[7px]
          text-[12px]
          font-medium
          text-[#08090a]
          bg-[#e8e8ea]
          px-[17px] py-[9px]
          rounded-[7px]
          transition-all duration-300
          hover:bg-white
          hover:-translate-y-[1px]
          shadow-[0_4px_18px_rgba(255,255,255,0.06)]
        "
        style={{
          fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
        }}
      >
        View projects

        <span className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
          ↗
        </span>
      </Link>

      <Link
        href="/My_Works/about"
        className="
          inline-flex items-center
          text-[12px]
          font-medium
          text-white/[0.52]
          px-[17px] py-[9px]
          rounded-[7px]
          border border-white/[0.10]
          bg-white/[0.025]
          transition-all duration-300
          hover:text-white/[0.85]
          hover:bg-white/[0.05]
          hover:border-white/[0.17]
          hover:-translate-y-[1px]
        "
        style={{
          fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
        }}
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
            <div
              key={g.label}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[10px]"
            >
              <span className="text-[12px] tracking-[.1em] text-white/30 uppercase sm:min-w-[72px] sm:text-right">
                {g.label}
              </span>

              <div className="flex flex-wrap gap-[6px]">
                {g.chips.map(({ l, color, icon: Icon }) => (
                  <div
                    key={l}
                    className={`
                      inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-[6px] border
                      text-[13px] font-medium tracking-[-0.01em] cursor-default
                      transition-transform duration-150 hover:-translate-y-[2px]
                      ${chipStyles[color]}
                    `}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
                    }}
                  >
                    <Icon className="w-[14px] h-[14px] flex-shrink-0" />
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
    <div className="flex items-center sm:flex-col sm:items-end gap-2 sm:gap-[5px]">

  <div className="flex items-center gap-[7px]">

    <span className="relative flex h-[7px] w-[7px]">
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#5DCAA5] opacity-35 animate-ping" />
      <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#5DCAA5] shadow-[0_0_8px_rgba(93,202,165,0.55)]" />
    </span>

    <span className="text-[12px] text-[#5DCAA5] uppercase tracking-[.12em] font-medium">
      Available
    </span>

  </div>

  <span className="text-[12px] text-white/55 tracking-[.02em]">
    Remote · Freelance · Projects
  </span>

</div>

  </div>
</div>
      
    </div>

  );
}


