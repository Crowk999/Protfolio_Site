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
        <p className="text-[16px] text-white/35 max-w-xl mx-auto mb-3 leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          I design and develop fast, responsive websites — using{" "}
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
        className="text-[10px] tracking-[.18em] text-white/20 uppercase"
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
            <div className="flex items-center gap-2 mb-2 text-emerald-400 font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              system: projects.scan()
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Selected Work
            </h2>

            <p className="text-white/50 text-base mt-2">
              output: recent builds and real-world experiments
            </p>
          </div>

          <Link
            href="/My_Works/Project1"
            className="text-base text-white/50 hover:text-white transition font-mono"
          >
            view_all --projects →
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
                  status: deployed
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
      <section className="relative overflow-hidden bg-[#060609] py-16 px-4">
        {/* Grid bg */}
        <div className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10 max-w-5xl mx-auto">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[10px] tracking-[.2em] text-white/20 uppercase font-mono">
            who i am
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">

          {/* Hobbies */}
          <div className="group relative p-6 rounded-2xl border border-white/[0.07] bg-[#0d0f14] hover:border-[rgba(245,158,11,0.2)] hover:bg-[#111420] transition-all duration-250 overflow-hidden flex flex-col">

        {/* Glow */}
        <div className="absolute -top-8 -right-8 w-[120px] h-[120px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(245,158,11,0.13) 0%,transparent 70%)" }} />

        {/* Icon */}
        <div className="w-[38px] h-[38px] rounded-[10px] border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.09)] flex items-center justify-center mb-4 text-[17px]">
          🎧
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 mb-[6px]">
          <h3 className="text-[16px] font-medium text-white/85">Hobbies</h3>
          <span className="text-[10px] tracking-[.1em] uppercase font-mono px-[7px] py-[2px] rounded border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.07)] text-[#FCD34D]">
            anime · books · tech
          </span>
        </div>

        <p className="text-[14px] text-white/30 leading-relaxed mb-4">
          Into anime, building things, and reading about startups. Always curious, always consuming something good.
        </p>

        {/* Hobby rows */}
        <div className="flex flex-col gap-[7px] mb-4">

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(245,158,11,0.05)] hover:border-[rgba(245,158,11,0.18)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">📺</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Anime</div>
                <div className="text-[10px] text-white/28 font-mono truncate">One Piece · AoT · Naruto</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.08)] text-[#FCD34D] flex-shrink-0">
                fav
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(245,158,11,0.05)] hover:border-[rgba(245,158,11,0.18)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">📖</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Books</div>
                <div className="text-[10px] text-white/28 font-mono truncate">Zero to One · Atomic Habits</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.08)] text-[#FCD34D] flex-shrink-0">
                love
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(245,158,11,0.05)] hover:border-[rgba(245,158,11,0.18)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">💻</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Tech</div>
                <div className="text-[10px] text-white/28 font-mono truncate">AI · Open source · Side projects</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.08)] text-[#FCD34D] flex-shrink-0">
                life
              </span>
            </div>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-[5px] mt-auto">
            {["One Piece", "Zero to One", "Building", "AI"].map(t => (
              <span key={t} className="text-[13px] px-2 py-[3px] rounded font-mono border border-[rgba(245,158,11,0.18)] bg-[rgba(245,158,11,0.05)] text-[rgba(252,211,77,0.65)]">
                {t}
              </span>
            ))}
          </div>

        </div>


          {/* Education */}
        <div className="group relative p-6 rounded-2xl border border-[rgba(29,158,117,0.28)] bg-[#0b1a14] hover:border-[rgba(29,158,117,0.5)] hover:bg-[#0d1f18] transition-all duration-250 overflow-hidden flex flex-col"
        style={{ boxShadow: "0 0 40px rgba(29,158,117,0.07),0 8px 32px rgba(0,0,0,0.5)" }}>

        {/* Glow */}
        <div className="absolute -top-8 -right-8 w-[120px] h-[120px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(29,158,117,0.18) 0%,transparent 70%)" }} />

        {/* Bottom shimmer */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(29,158,117,0.25),transparent)" }} />

        {/* Focus badge */}
        <div className="absolute top-3 right-3 text-[9px] tracking-[.1em] uppercase font-mono px-2 py-[2px] rounded-full border border-[rgba(29,158,117,0.28)] bg-[rgba(29,158,117,0.1)] text-[#5DCAA5]">
          focus
        </div>

        {/* Icon */}
        <div className="w-[38px] h-[38px] rounded-[10px] border border-[rgba(29,158,117,0.32)] bg-[rgba(29,158,117,0.12)] flex items-center justify-center mb-4 text-[17px]">
          🎓
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 mb-[6px]">
          <h3 className="text-[16px] font-medium text-white">Education</h3>
          <span className="text-[10px] tracking-[.1em] uppercase font-mono px-[7px] py-[2px] rounded border border-[rgba(29,158,117,0.3)] bg-[rgba(29,158,117,0.08)] text-[#5DCAA5]">
            neb · grade 12
          </span>
        </div>

        <p className="text-[14px] text-white/35 leading-relaxed mb-4">
          Grade 12 NEB student in Nepal, aiming for engineering — focused on Robotics & AI. Disciplined self-learner building beyond the classroom.
        </p>

        {/* Education rows */}
        <div className="flex flex-col gap-[7px] mb-4">

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(29,158,117,0.06)] hover:border-[rgba(29,158,117,0.2)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">🏫</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">NEB Grade 12</div>
                <div className="text-[10px] text-white/28 font-mono truncate">Science · Nepal · Currently enrolled</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(29,158,117,0.22)] bg-[rgba(29,158,117,0.08)] text-[#5DCAA5] flex-shrink-0">
                active
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(29,158,117,0.06)] hover:border-[rgba(29,158,117,0.2)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">🎯</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Target GPA</div>
                <div className="text-[10px] text-white/28 font-mono truncate">4.0 GPA · SLC Board · Nepal</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(245,158,11,0.22)] bg-[rgba(245,158,11,0.08)] text-[#FCD34D] flex-shrink-0">
                goal
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(29,158,117,0.06)] hover:border-[rgba(29,158,117,0.2)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">🤖</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Future Path</div>
                <div className="text-[10px] text-white/28 font-mono truncate">Engineering → Robotics & AI</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(29,158,117,0.22)] bg-[rgba(29,158,117,0.08)] text-[#5DCAA5] flex-shrink-0">
                plan
              </span>
            </div>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-[5px] mt-auto">
            {["Robotics", "AI", "Engineering", "Self-learning", "Discipline"].map(t => (
              <span key={t} className="text-[13px] px-2 py-[3px] rounded font-mono border border-[rgba(29,158,117,0.2)] bg-[rgba(29,158,117,0.06)] text-[rgba(93,202,165,0.75)]">
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Dreams */}
        <div className="group relative p-6 rounded-2xl border border-white/[0.07] bg-[#0d0f14] hover:border-[rgba(127,119,221,0.2)] hover:bg-[#111420] transition-all duration-250 overflow-hidden flex flex-col">

        {/* Glow */}
        <div className="absolute -top-8 -right-8 w-[120px] h-[120px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(127,119,221,0.15) 0%,transparent 70%)" }} />

        {/* Icon */}
        <div className="w-[38px] h-[38px] rounded-[10px] border border-[rgba(127,119,221,0.25)] bg-[rgba(83,74,183,0.09)] flex items-center justify-center mb-4 text-[17px]">
          🚀
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 mb-[6px]">
          <h3 className="text-[16px] font-medium text-white/85">Dreams</h3>
          <span className="text-[10px] tracking-[.1em] uppercase font-mono px-[7px] py-[2px] rounded border border-[rgba(127,119,221,0.25)] bg-[rgba(83,74,183,0.07)] text-[#AFA9EC]">
            unicorn gang
          </span>
        </div>

        <p className="text-[14px] text-white/30 leading-relaxed mb-4">
          Building Nepal's first unicorn — that's not a maybe, that's the plan. Earn while studying, explore the world, move fast.
        </p>

        {/* Dream rows */}
          <div className="flex flex-col gap-[7px] mb-4">

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(127,119,221,0.05)] hover:border-[rgba(127,119,221,0.18)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">🦄</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Nepal's First Unicorn</div>
                <div className="text-[10px] text-white/28 font-mono truncate">$1B startup · Built from Kathmandu</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(127,119,221,0.22)] bg-[rgba(83,74,183,0.1)] text-[#C4B5FD] flex-shrink-0">
                mission
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(127,119,221,0.05)] hover:border-[rgba(127,119,221,0.18)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">💸</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Earn While Studying</div>
                <div className="text-[10px] text-white/28 font-mono truncate">Freelance · Products · No waiting</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(245,158,11,0.22)] bg-[rgba(245,158,11,0.08)] text-[#FCD34D] flex-shrink-0">
                now
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-[9px] rounded-xl bg-white/[0.025] border border-white/[0.05] hover:bg-[rgba(127,119,221,0.05)] hover:border-[rgba(127,119,221,0.18)] transition-all duration-200 cursor-default">
              <span className="text-[15px] w-5 text-center flex-shrink-0">🌍</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/72 mb-[2px]">Explore the World</div>
                <div className="text-[10px] text-white/28 font-mono truncate">Travel fast · Experience everything</div>
              </div>
              <span className="text-[10px] px-[6px] py-[2px] rounded font-mono border border-[rgba(29,158,117,0.22)] bg-[rgba(29,158,117,0.08)] text-[#5DCAA5] flex-shrink-0">
                soon
              </span>
            </div>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-[5px] mt-auto">
            {["Unicorn", "Nepal", "Startup", "Freedom", "Impact"].map(t => (
              <span key={t} className="text-[13px] px-2 py-[3px] rounded font-mono border border-[rgba(127,119,221,0.2)] bg-[rgba(83,74,183,0.06)] text-[rgba(175,169,236,0.75)]">
                {t}
              </span>
            ))}
          </div>

        </div>

        </div>

        {/* Trait pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 max-w-5xl mx-auto">
          {[
            { icon: "🦄", text: "Unicorn founder in making" },
            { icon: "🤖", text: "Robotics & AI bound" },
            { icon: "🌏", text: "Building from Nepal" },
            { icon: "📖", text: "Zero to One mindset" },
            { icon: "💸", text: "Earning while learning" },
            { icon: "🔥", text: "Tech & Building Enthusiast" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-[7px] px-[14px] py-[7px] rounded-full border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.13] hover:bg-white/[0.04] transition-all duration-200 cursor-default">
              <span className="text-[13px] leading-none">{icon}</span>
              <span className="text-[12px] text-white/35 font-medium font-sans">{text}</span>
            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">

        {/* 🌈 Soft ambient glow (controlled, not noisy) */}
        <div className="absolute -top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-72 md:w-96 h-72 md:h-96 bg-purple-500/20 blur-[120px] rounded-full" />

        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* 📦 Card */}
        <div className="relative max-w-3xl mx-auto text-center px-6 py-12 md:py-16
                        rounded-3xl border border-white/10
                        bg-white/[0.03] backdrop-blur-2xl
                        shadow-[0_0_60px_rgba(0,0,0,0.4)]
                        hover:border-white/20 transition-all duration-300">

          {/* heading */}
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
            Let’s build something <span className="text-blue-400">great</span>
          </h2>

          {/* subtext */}
          <p className="mt-4 text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            I’m open to freelance work, collaborations, and impactful ideas.
            If you’re building something meaningful, let’s turn it into reality.
          </p>

          {/* CTA button */}
          <Link
            href="/My_Works/Contacts"
            className="mt-8 inline-flex items-center justify-center
                      px-6 md:px-8 py-3 rounded-xl
                      bg-gradient-to-r from-white to-gray-200
                      text-black font-medium text-sm md:text-base
                      transition-all duration-300
                      hover:scale-[1.05]
                      hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
                      active:scale-95"
          >
            Get in touch
          </Link>

          {/* trust line */}
          <p className="mt-6 text-[11px] md:text-xs text-white/40">
            Usually replies within 24 hours ⚡
          </p>

        </div>
      </section>

    </div>
  );
  }