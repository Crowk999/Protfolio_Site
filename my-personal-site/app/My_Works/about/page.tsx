"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  {/* ── Rotating quotes ── */}
  const quotes = [
    "People Dreams Never End...",
    "I’m gonna be King of the Pirates!",
    "The best error message is the one that never shows up.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
    "“Nothing happened.”",
    "I’m not gonna run away, I never go back on my word. That’s my nindō: my ninja way!",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % quotes.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-28">
      {/* HERO */}
      <section className="relative text-center py-28 overflow-hidden bg-[#060609]">

  {/* ── Grid background ── */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* ── Radial glow ── */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(29,158,117,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Corner blurs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full -z-10"
          style={{ background: "radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full -z-10"
          style={{ background: "radial-gradient(circle, rgba(93,202,165,0.06) 0%, transparent 70%)" }} />

        {/* ── Badge ── */}
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-[6px] 
                rounded-full border border-white/10 
                bg-white/[0.04] backdrop-blur-md
                shadow-[0_0_18px_rgba(16,185,129,0.08)]">

          {/* AI / ML side indicator */}
          <span className="relative flex items-center gap-1">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-500" />
            </span>
          </span>

          {/* Divider */}
          <span className="text-white/20 text-[10px]">|</span>

          {/* Label */}
          <span
            className="text-[12px] font-medium text-white/60 tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            AI / ML + Full Stack Developer
          </span>

          {/* Full Stack side indicator */}
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-blue-500" />
          </span>

        </div>

        {/* ── Heading ── */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.04] text-[#f0f0f2]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Building{" "}
          <span className="relative inline-block">
            <span className="relative z-10">clean</span>
            <span className="absolute left-0 bottom-1 w-full h-[10px] rounded-sm -z-10"
              style={{ background: "rgba(29,158,117,0.25)" }} />
          </span>
          <br />
          <span className="text-white/20">modern web experiences</span>
        </h1>

        {/* ── Bio ── */}
        <p className="text-[18px] text-white/40 max-w-xl mx-auto mb-3 leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          I design and develop fast, responsive websites and AI/ML powered backend systems — using{" "}
          <span className="text-white/70 font-semibold">Next.js, React & Tailwind</span> on the
          frontend and{" "}
          <span className="text-white/70 font-semibold">Django, FastAPI, PyTorch & LangChain</span>{" "}
          on the backend.
        </p>

        {/* ── Motivational quote ── */}
        <div className="relative inline-block mt-6 mb-10 px-7 py-6 md:px-8 md:py-7 rounded-2xl border border-white/[0.08] bg-[#050607]/60 backdrop-blur-xl">

  {/* terminal header line */}
  <div className="flex items-center gap-2 mb-3 text-[11px] font-mono text-white/30">
    <span className="text-emerald-400">$</span>
    <span>echo quote</span>
  </div>

  {/* output */}
  <div className="relative">
    <span className="absolute -top-1 left-0 text-emerald-400 text-xs font-mono">
      output:
    </span>

    <p
      className="text-[16px] md:text-[18px] text-white/40 leading-relaxed pt-4 pl-1 max-w-sm transition-opacity duration-300 font-mono"
      style={{
        opacity: fade ? 1 : 0,
      }}
    >
      {quotes[index]}
    </p>
  </div>

  {/* dots */}
  <div className="flex justify-center gap-2 mt-5">
    {quotes.map((_, i) => (
      <span
        key={i}
        onClick={() => {
          setFade(false);
          setTimeout(() => {
            setIndex(i);
            setFade(true);
          }, 300);
        }}
        className="cursor-pointer transition-all duration-300 rounded-sm"
        style={{
          width: i === index ? "18px" : "6px",
          height: "4px",
          background: i === index ? "#10b981" : "rgba(255,255,255,0.12)",
        }}
      />
    ))}
  </div>

</div>

        {/* ── Ticker rows ── */}
        <div className="w-full overflow-hidden mb-2 py-1 relative">
          <div
            className="flex gap-3"
            style={{
              display: "flex",
              width: "max-content",
              animation: "tickerL 25s linear infinite",
            }}
          >
            {[...Array(3)].flatMap((_, outer) =>
              ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map((t, i) => (
                <span
                  key={`${t}-${outer}-${i}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-medium px-4 py-[6px] rounded-full border border-[rgba(55,138,221,0.25)] bg-[rgba(55,138,221,0.07)] text-[#85B7EB] cursor-default select-none flex-shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className="w-[4px] h-[4px] rounded-full bg-[#85B7EB] inline-block flex-shrink-0" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        <div className="w-full overflow-hidden py-1 relative">
          <div
            className="flex gap-3"
            style={{
              display: "flex",
              width: "max-content",
              animation: "tickerR 20s linear infinite",
            }}
          >
            {[...Array(3)].flatMap((_, outer) =>
              ["Python", "Django", "FastAPI", "LangChain", "PyTorch", "Scikit Learn", "MongoDB", "MySQL"].map((t, i) => (
                <span
                  key={`${t}-${outer}-${i}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-medium px-4 py-[6px] rounded-full border border-[rgba(29,158,117,0.28)] bg-[rgba(29,158,117,0.07)] text-[#5DCAA5] cursor-default select-none flex-shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className="w-[4px] h-[4px] rounded-full bg-[#5DCAA5] inline-block flex-shrink-0" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ── Buttons ── */}
        <div className="flex justify-center gap-3 flex-wrap mt-10">
          <Link
            href="/My_Works/Project1"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#ececee] text-[#070709] text-sm font-semibold transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            View Work
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
          <Link
            href="/My_Works/Contacts"
            className="inline-flex items-center px-7 py-3 rounded-xl border border-white/10 text-white/40 text-sm font-medium transition-all duration-200 hover:border-white/25 hover:text-white/70 hover:bg-white/[0.04] active:scale-[0.98]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Contact
          </Link>
        </div>

    </section>

      {/* FEATURE GRID */}
    <section className="relative overflow-hidden bg-[#060609] py-16 px-4">

    {/* ── Subtle grid bg ── */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
      }}
    />

    {/* ── Section label ── */}
    <div className="flex items-center gap-4 mb-10 max-w-5xl mx-auto">
      <div className="flex-1 h-px bg-white/[0.06]" />
      <span
        className="text-[12px] tracking-[.18em] text-white/50 uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        what i bring
      </span>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>

    {/* ── Cards grid ── */}
    <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">

      {/* Frontend */}
      <div className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[rgba(55,138,221,0.4)] hover:bg-[rgba(55,138,221,0.04)] transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "radial-gradient(circle at top right, rgba(55,138,221,0.12), transparent 70%)" }} />
        <div className="w-9 h-9 rounded-xl border border-[rgba(55,138,221,0.3)] bg-[rgba(55,138,221,0.08)] flex items-center justify-center mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#85B7EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-[15px] text-white/80"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Frontend
          </h3>
          <span className="text-[10px] tracking-[.1em] text-[#85B7EB] uppercase border border-[rgba(55,138,221,0.25)] rounded px-[6px] py-[2px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            react / next
          </span>
        </div>
        <p className="text-[14px] text-white/30 leading-relaxed mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Crafting pixel-perfect, responsive interfaces with React, Next.js, and Tailwind CSS — fast by default, beautiful by design.
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {["React", "Next.js", "TypeScript", "Tailwind"].map(t => (
            <span key={t} className="text-[13px] text-[#85B7EB]/70 px-2 py-[3px] rounded-md border border-[rgba(55,138,221,0.2)] bg-[rgba(55,138,221,0.05)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Backend / AI — center, slightly elevated */}
      <div className="group relative p-6 rounded-2xl border border-[rgba(29,158,117,0.25)] bg-[rgba(29,158,117,0.04)] hover:border-[rgba(29,158,117,0.5)] hover:bg-[rgba(29,158,117,0.07)] transition-all duration-300 overflow-hidden md:-translate-y-2 shadow-lg shadow-black/30">
        <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "radial-gradient(circle at top right, rgba(29,158,117,0.15), transparent 70%)" }} />
        {/* "popular" tag */}
        <div className="absolute top-4 right-4 text-[9px] tracking-[.1em] text-[#5DCAA5] uppercase border border-[rgba(29,158,117,0.3)] rounded-full px-2 py-[2px] bg-[rgba(29,158,117,0.08)]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          primary
        </div>
        <div className="w-9 h-9 rounded-xl border border-[rgba(29,158,117,0.35)] bg-[rgba(29,158,117,0.1)] flex items-center justify-center mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-[15px] text-white/90"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Backend &amp; AI
          </h3>
          <span className="text-[10px] tracking-[.1em] text-[#5DCAA5] uppercase border border-[rgba(29,158,117,0.3)] rounded px-[6px] py-[2px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            python / ai
          </span>
        </div>
        <p className="text-[14px] text-white/35 leading-relaxed mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Building robust APIs and AI-powered systems with Django, FastAPI, LangChain & PyTorch — from REST endpoints to LLM pipelines.
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {["Django", "FastAPI", "LangChain", "PyTorch"].map(t => (
            <span key={t} className="text-[13px] text-[#5DCAA5]/70 px-2 py-[3px] rounded-md border border-[rgba(29,158,117,0.2)] bg-[rgba(29,158,117,0.06)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Design */}
      <div className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[rgba(175,169,236,0.4)] hover:bg-[rgba(83,74,183,0.04)] transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "radial-gradient(circle at top right, rgba(127,119,221,0.12), transparent 70%)" }} />
        <div className="w-9 h-9 rounded-xl border border-[rgba(127,119,221,0.3)] bg-[rgba(83,74,183,0.1)] flex items-center justify-center mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AFA9EC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-[15px] text-white/80"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Design &amp; DevOps
          </h3>
          <span className="text-[10px] tracking-[.1em] text-[#AFA9EC] uppercase border border-[rgba(127,119,221,0.25)] rounded px-[6px] py-[2px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            deploy / design
          </span>
        </div>
        <p className="text-[14px] text-white/30 leading-relaxed mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          From pixel-perfect Figma designs to production deployments — shipping on Vercel, managing infra on Linux, and designing with AI tools.
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {["Vercel", "Render", "Git", "Linux", "Figma", "AI Design"].map(t => (
            <span key={t} className="text-[13px] text-[#AFA9EC]/70 px-2 py-[3px] rounded-md border border-[rgba(127,119,221,0.2)] bg-[rgba(83,74,183,0.06)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
          ))}
        </div>
      </div>

    </div>

    {/* ── Personal trait row ── */}
    <div className="flex flex-wrap justify-center gap-4 mt-10 max-w-5xl mx-auto">
      {[
        { icon: "⚡", text: "Fast learner" },
        { icon: "🔍", text: "Detail oriented" },
        { icon: "🤝", text: "Team player" },
        { icon: "🌏", text: "Based in Nepal" },
        { icon: "🚀", text: "Open to work" },
      ].map(({ icon, text }) => (
        <div key={text}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200 cursor-default">
          <span className="text-[14px]">{icon}</span>
          <span className="text-[12px] text-white/30 font-medium"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {text}
          </span>
        </div>
      ))}
    </div>

  </section>

      {/* PROJECT PREVIEW */}
      <section className="py-16 md:py-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">

          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-sm">
              <span className="flex items-center gap-2 text-white/40 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                system
              </span>
              <span className="text-white/70">projects.scan()</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Selected Work
            </h2>

            <p className="text-[20px] mt-2">
            <span className="text-white font-medium mr-2">output:</span>
            <span className="text-white/50 font-light">
              crafted projects & practical explorations
            </span>
          </p>
          </div>

          <Link
            href="/My_Works/Project1"
            className="inline-block px-5 py-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 rounded-lg transition-all duration-300 font-mono"
          >
            view all projects →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">

          {/* Project 1 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-emerald-400/30 transition">

            <Link
              href="https://adhrit-store.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >

              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-black/30">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>

                <span className="ml-3 text-sm text-white/50 font-mono">
                  ecommerce.build.log
                </span>
              </div>

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/8pckwj2wc/Screenshot%202026-05-15%20at%2014-16-35%20.png"
                  alt="Ecommerce Site"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ecommerce System
                </h3>

                <p className="text-base text-white/60 leading-relaxed mb-4">
                  Full-stack ecommerce platform with authentication, product upload system, cart flow, and admin control.
                </p>

                <div className="text-sm font-mono text-emerald-400">
                  status: deployed & live
                </div>
              </div>

            </Link>
          </div>

          {/* Project 2 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-blue-400/30 transition">

            <Link
              href="https://crowk999.github.io/Chess/chess.html"
              target="_blank"
              rel="noopener noreferrer"
            >

              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-black/30">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>

                <span className="ml-3 text-sm text-white/50 font-mono">
                  chess.runtime.log
                </span>
              </div>

              {/* Image */}
              <div className="h-48 overflow-hidden bg-black">
                <img
                  src="https://ik.imagekit.io/8pckwj2wc/Screenshot_20-4-2026_214749_crowk999.github.io.jpeg"
                  alt="Chess"
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Chess Engine UI
                </h3>

                <p className="text-base text-white/60 leading-relaxed mb-4">
                  Interactive chess interface built for real-time gameplay, logic testing, and UI experimentation.
                </p>

                <div className="text-sm font-mono text-blue-400">
                  status: live
                </div>
              </div>

            </Link>
          </div>

        </div>
      </section>

      {/* Detail section */}
      {/* DEVELOPER SIGNAL */}
      <section className="relative overflow-hidden bg-[#060609] px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Perimeter track */}
            <div className="pointer-events-none absolute -inset-[18px] z-20">
              <div className="absolute inset-0 rounded-[32px] border border-white/[0.035]" />
              {/* Signal 1 */}
              <div className="absolute inset-0 animate-[signalOrbit_7s_linear_infinite]">
                <span className="absolute left-1/2 -top-[4px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-[#A78BFA] shadow-[0_0_16px_4px_rgba(167,139,250,0.5)]" />
              </div>
              {/* Signal 2 */}
              <div className="absolute inset-0 animate-[signalOrbitReverse_10s_linear_infinite]">
                <span className="absolute left-1/2 -top-[3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#60A5FA] shadow-[0_0_14px_3px_rgba(96,165,250,0.45)]" />
              </div>
            </div>
            {/* Main panel */}
            <div className="relative z-10 flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] md:flex-row md:items-stretch">
              {/* Identity */}
              <div className="px-6 py-7 md:w-[38%] md:px-8 md:py-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#A78BFA] shadow-[0_0_10px_rgba(167,139,250,0.7)]" />
                  <span className="font-mono text-xs uppercase tracking-[.16em] text-[#A78BFA]/80">current state</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white/90 md:text-2xl">Building. Learning. Exploring.</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/40">A few things currently shaping what I build.</p>
              </div>
              {/* Divider */}
              <div className="hidden w-px self-stretch bg-white/[0.07] md:block" />
              {/* Details */}
              <div className="grid flex-1 grid-cols-1 border-t border-white/[0.07] sm:grid-cols-3 md:border-t-0">
                {/* Education */}
                <div className="group border-b border-white/[0.07] px-6 py-7 transition hover:bg-white/[0.025] sm:border-b-0 sm:border-r">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/25">studying</span>
                  <p className="mt-3 text-base text-white/80 transition group-hover:text-white">Grade 12</p>
                  <p className="mt-1 text-sm text-white/35">Science · Nepal</p>
                </div>
                {/* Interests */}
                <div className="group border-b border-white/[0.07] px-6 py-7 transition hover:bg-white/[0.025] sm:border-b-0 sm:border-r">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/25">exploring</span>
                  <p className="mt-3 text-base text-white/80 transition group-hover:text-[#A78BFA]">AI · Robotics</p>
                  <p className="mt-1 text-sm text-white/35">Systems & hardware</p>
                </div>
                {/* Outside code */}
                <div className="group px-6 py-7 transition hover:bg-white/[0.025]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/25">off screen</span>
                  <p className="mt-3 text-base text-white/80 transition group-hover:text-[#60A5FA]">Anime · Books</p>
                  <p className="mt-1 text-sm text-white/35">Curiosity never stops</p>
                </div>
              </div>
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#A78BFA]/[0.05] blur-3xl" />
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes signalOrbit {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(90deg); }
            50% { transform: rotate(180deg); }
            75% { transform: rotate(270deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes signalOrbitReverse {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-90deg); }
            50% { transform: rotate(-180deg); }
            75% { transform: rotate(-270deg); }
            100% { transform: rotate(-360deg); }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#060609] px-4 py-20 md:py-28">

        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a0b0e]">

            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_50%,rgba(29,158,117,0.11),transparent_65%)]" />

            <div className="relative px-6 py-12 sm:px-10 md:px-14 md:py-16">

              {/* 0 → 1 journey */}
              <div className="mb-11 flex items-center gap-4">

                <span className="font-mono text-base font-semibold text-white/75">
                  0
                </span>

                <div className="relative h-[3px] flex-1 rounded-full bg-white/[0.08]">

                  <div className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-[#5DCAA5] animate-[drawLine_2s_ease-out_forwards]" />

                  {/* moving car */}
                  <div className="absolute top-1/2 -translate-y-1/2 animate-[driveCar_4s_ease-in-out_infinite]">

                    <div className="relative">
                      <svg
                        width="34"
                        height="22"
                        viewBox="0 0 34 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_9px_rgba(93,202,165,0.75)]"
                      >
                        <path
                          d="M5 14L8 7H23L29 11L32 14V17H5V14Z"
                          fill="#5DCAA5"
                        />
                        <path
                          d="M11 7L14 3H21L25 7"
                          stroke="#8BE8C8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M14 7H23"
                          stroke="#060609"
                          strokeWidth="1.5"
                        />
                        <circle cx="10" cy="17" r="3" fill="#060609" stroke="#5DCAA5" strokeWidth="1.5" />
                        <circle cx="27" cy="17" r="3" fill="#060609" stroke="#5DCAA5" strokeWidth="1.5" />
                      </svg>

                      <div className="absolute left-1/2 top-full h-5 w-12 -translate-x-1/2 bg-[#5DCAA5]/20 blur-md" />
                    </div>

                  </div>

                </div>

                <span className="font-mono text-base font-semibold text-[#5DCAA5]">
                  1
                </span>

              </div>


              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

                <div className="max-w-3xl">

                  <p
                    className="mb-5 text-lg font-medium tracking-tight text-[#5DCAA5] md:text-xl"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Let's work together
                  </p>

                  <h2
                    className="text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[58px] md:text-[72px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Have something
                    <br />
                    <span className="text-white/38">worth building?</span>
                  </h2>

                  <p
                    className="mt-7 max-w-xl text-[16px] leading-[1.7] text-white/50 md:text-[18px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    I enjoy working on products, experiments, and ideas that solve real problems. Tell me what you're thinking.
                  </p>

                </div>


                <Link
                  href="/My_Works/Contacts"
                  className="group flex w-fit items-center gap-4 rounded-lg border border-white/[0.12] bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#5DCAA5]/50 hover:bg-[#5DCAA5] hover:text-[#060609]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Get in touch

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-black/20">
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </Link>

              </div>


              {/* Bottom statement */}
              <div className="mt-14 border-t border-white/[0.08] pt-7">

                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                  <div>

                    <p
                      className="text-sm font-medium uppercase tracking-[0.12em] text-white/35"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      next destination
                    </p>

                    <p
                      className="mt-2 text-2xl font-medium tracking-[-0.025em] text-white/80 sm:text-3xl md:text-4xl"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Build something meaningful.
                    </p>

                  </div>

                  <div className="flex items-center gap-2 font-mono text-sm text-white/40">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#5DCAA5] shadow-[0_0_10px_rgba(93,202,165,0.7)]" />
                    <span>open to ideas</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>


        <style jsx>{`
          @keyframes drawLine {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }

          @keyframes driveCar {
            0% {
              left: 0%;
              transform: translateX(-5px) translateY(-50%);
            }

            10% {
              left: 8%;
            }

            45% {
              left: 48%;
            }

            75% {
              left: 82%;
            }

            92% {
              left: 100%;
              transform: translateX(-28px) translateY(-50%);
            }

            100% {
              left: 100%;
              transform: translateX(-28px) translateY(-50%);
            }
          }
        `}</style>

      </section>

    </div>
  );
  }