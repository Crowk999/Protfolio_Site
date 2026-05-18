"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  {/* ── Rotating quotes ── */}
  const quotes = [
    "Code is not just syntax — it's the closest thing to magic the real world has to offer.",
    "First, solve the problem. Then, write the code.",
    "The best error message is the one that never shows up.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
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
      }, 400);
    }, 30000);
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
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-[6px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#1D9E75]" />
          </span>
          <span className="text-[12px] font-medium text-white/40 tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Full Stack Developer
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
        <div className="relative inline-block mt-6 mb-10 px-6 py-4 rounded-2xl border border-white/[0.07] bg-white/[0.03]">
          <span className="absolute -top-3 left-6 text-3xl text-[#1D9E75] leading-none select-none">"</span>
          <p
            className="text-[13px] text-white/30 italic leading-relaxed max-w-sm transition-opacity duration-400"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              opacity: fade ? 1 : 0,
            }}
          >
            {quotes[index]}
          </p>
          <div className="flex justify-center gap-[5px] mt-3">
            {quotes.map((_, i) => (
              <span
                key={i}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => { setIndex(i); setFade(true); }, 400);
                }}
                className="cursor-pointer rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "16px" : "5px",
                  height: "5px",
                  background: i === index ? "#1D9E75" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          <span className="absolute -bottom-4 right-6 text-3xl text-[#1D9E75] leading-none select-none rotate-180">"</span>
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
            {[...Array(3)].flatMap(() =>
              ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map((t, i) => (
                <span
                  key={`${t}-${i}`}
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
            {[...Array(3)].flatMap(() =>
              ["Python", "Django", "FastAPI", "LangChain", "PyTorch", "Scikit Learn", "MongoDB", "MySQL"].map((t, i) => (
                <span
                  key={`${t}-${i}`}
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
          <span className="text-[9px] tracking-[.1em] text-[#85B7EB] uppercase border border-[rgba(55,138,221,0.25)] rounded px-[6px] py-[2px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            react / next
          </span>
        </div>
        <p className="text-[13px] text-white/30 leading-relaxed mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Crafting pixel-perfect, responsive interfaces with React, Next.js, and Tailwind CSS — fast by default, beautiful by design.
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {["React", "Next.js", "TypeScript", "Tailwind"].map(t => (
            <span key={t} className="text-[10px] text-[#85B7EB]/70 px-2 py-[3px] rounded-md border border-[rgba(55,138,221,0.2)] bg-[rgba(55,138,221,0.05)]"
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
          <span className="text-[9px] tracking-[.1em] text-[#5DCAA5] uppercase border border-[rgba(29,158,117,0.3)] rounded px-[6px] py-[2px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            python / ai
          </span>
        </div>
        <p className="text-[13px] text-white/35 leading-relaxed mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Building robust APIs and AI-powered systems with Django, FastAPI, LangChain & PyTorch — from REST endpoints to LLM pipelines.
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {["Django", "FastAPI", "LangChain", "PyTorch"].map(t => (
            <span key={t} className="text-[10px] text-[#5DCAA5]/70 px-2 py-[3px] rounded-md border border-[rgba(29,158,117,0.2)] bg-[rgba(29,158,117,0.06)]"
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
          <span className="text-[9px] tracking-[.1em] text-[#AFA9EC] uppercase border border-[rgba(127,119,221,0.25)] rounded px-[6px] py-[2px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            deploy / design
          </span>
        </div>
        <p className="text-[13px] text-white/30 leading-relaxed mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          From pixel-perfect Figma designs to production deployments — shipping on Vercel, managing infra on Linux, and designing with AI tools.
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {["Vercel", "Render", "Git", "Linux", "Figma", "AI Design"].map(t => (
            <span key={t} className="text-[10px] text-[#AFA9EC]/70 px-2 py-[3px] rounded-md border border-[rgba(127,119,221,0.2)] bg-[rgba(83,74,183,0.06)]"
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
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Selected Work</h2>
            <p className="text-gray-500 text-sm">
              A few recent projects I’ve worked on
            </p>
          </div>

          <Link
            href="/My_Works/Project1"
            className="text-sm text-gray-500 hover:text-white transition"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="group border rounded-2xl p-6 hover:shadow-lg transition duration-300">
            <Link href="https://adhrit-store.vercel.app/">
            <div className="h-40 mb-4 overflow-hidden rounded-lg">
              <img
                src="https://ik.imagekit.io/8pckwj2wc/Screenshot%202026-05-15%20at%2014-16-35%20.png"
                alt="Ecommerce Site"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Ecommerce Site
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              A Ecommerce Site where admin can upload products people can login and save and buy products.
            </p>

            <span className="text-sm underline cursor-pointer">
              View Project
            </span>
            </Link>
          </div>

          <div className="group border rounded-2xl p-6 hover:shadow-lg transition duration-300">
            <Link href="https://crowk999.github.io/Chess/chess.html" target="_blank">
            <div className="h-40 mb-4 overflow-hidden rounded-lg">
              <img
                src="https://ik.imagekit.io/8pckwj2wc/Screenshot_20-4-2026_214749_crowk999.github.io.jpeg"
                alt="Chess"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Chess Game
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              A Fun Chess Game to play with each other in free times.
            </p>

            <span className="text-sm underline cursor-pointer">
              View Project
            </span>
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">

      {/* 🌈 background glow blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* 📦 main card */}
      <div className="relative max-w-4xl mx-auto text-center px-6 py-14 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl hover:shadow-blue-500/10 transition">

        {/* heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Let’s build something great
        </h2>

        {/* subtext */}
        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          I’m open to freelance work, collaborations, and interesting ideas.
          If you have something exciting, let’s bring it to life.
        </p>

        {/* CTA button */}
        <Link
          href="/My_Works/Contacts"
          className="inline-block px-8 py-3 rounded-xl bg-white text-black font-medium
          transition-all duration-300
          hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          active:scale-95"
        >
          Get in touch
        </Link>

        {/* small trust line */}
        <p className="mt-6 text-xs text-white/40">
          Usually replies within 24 hours ⚡
        </p>

      </div>
    </section>

    </div>
  );
  }