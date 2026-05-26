"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => { closeMenu(); }, [pathname]);

  // Closing scroll when side bar opened 
  

useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  const links = [
    { href: "/",                   label: "Home" },
    { href: "/My_Works/about",     label: "About" },
    { href: "/My_Works/Project1",  label: "Projects" },
    { href: "/My_Works/Contacts",  label: "Contact" },
  ];

  const isActive = (href:string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nav-link-animate { animation: slideIn 0.3s ease both; }
      `}</style>

      {/* ── Header ── */}
      <header
        className="w-full sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(6,6,9,0.92)"
            : "rgba(6,6,9,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex items-center justify-between h-[60px]">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] hover:border-[rgba(29,158,117,0.5)] hover:bg-[rgba(29,158,117,0.08)] transition-all duration-200 group"
            >
              <span
                className="text-[13px] font-bold text-white/70 group-hover:text-[#5DCAA5] transition-colors duration-200"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                AS
              </span>
              {/* green corner dot */}
              <span className="absolute -top-[3px] -right-[3px] w-[6px] h-[6px] rounded-full bg-[#1D9E75] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative px-4 py-[6px] rounded-lg text-[13px] font-medium transition-all duration-200 group"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: isActive(href) ? "#f0f0f2" : "rgba(255,255,255,0.35)",
                  }}
                >
                  {/* active bg */}
                  {isActive(href) && (
                    <span className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]" />
                  )}
                  {/* hover bg */}
                  <span className="absolute inset-0 rounded-lg bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="relative">{label}</span>
                  {/* active green underline */}
                  {isActive(href) && (
                    <span className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1D9E75]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:adhritsigdel@gmail.com"
                className="flex items-center gap-2 px-4 py-[7px] rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/40 text-[12px] font-medium hover:border-white/20 hover:text-white/70 hover:bg-white/[0.06] transition-all duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email
              </a>
              <a
                href="https://x.com/SigdelAdhrit"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-[7px] rounded-lg bg-[#ececee] text-[#070709] text-[12px] font-semibold hover:bg-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Hire Me ↗
              </a>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200"
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px] bg-white/50 rounded-full" />
              <span className="block w-4 h-[1.5px] bg-white/50 rounded-full" />
              <span className="block w-5 h-[1.5px] bg-white/50 rounded-full" />
            </button>

          </div>
        </div>
      </header>

      {/* ── Backdrop ── */}
      <div
        onClick={closeMenu}
        className="fixed inset-0 z-40 transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: open ? "blur(4px)" : "none",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* ── Mobile sidebar ── */}
      <aside
        className="fixed top-0 left-0 h-full w-[280px] z-50 flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          background: "#060609",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 h-[60px] border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center">
              <span
                className="text-[11px] font-bold text-white/60"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                AS
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-[12px] font-semibold text-white/70 leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Adhrit Sigdel
              </span>
              <span
                className="text-[9px] text-white/25 leading-none mt-[2px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                // developer
              </span>
            </div>
          </div>
          <button
            onClick={closeMenu}
            className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/[0.07] transition-all duration-200"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Sidebar links */}
        <nav className="flex flex-col gap-1 p-4 flex-1">
          <p
            className="text-[9px] tracking-[.14em] text-white/20 uppercase px-3 mb-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            navigation
          </p>
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              onClick={closeMenu}
              href={href}
              className="nav-link-animate flex items-center justify-between px-3 py-[10px] rounded-xl transition-all duration-200"
              style={{
                animationDelay: `${i * 0.05}s`,
                background: isActive(href) ? "rgba(29,158,117,0.08)" : "transparent",
                border: isActive(href) ? "1px solid rgba(29,158,117,0.2)" : "1px solid transparent",
                color: isActive(href) ? "#5DCAA5" : "rgba(255,255,255,0.4)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {label}
              {isActive(href) && (
                <span className="w-[5px] h-[5px] rounded-full bg-[#1D9E75]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-white/[0.06] flex flex-col gap-3">
          {/* Nepal tag */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <span className="text-[14px]">🇳🇵</span>
            <div className="flex flex-col gap-[1px]">
              <span
                className="text-[11px] text-white/50 font-medium leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Kathmandu, Nepal
              </span>
              <span
                className="text-[9px] text-white/20 leading-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                UTC +5:45
              </span>
            </div>
            <div className="ml-auto flex items-center gap-[4px]">
              <span className="w-[5px] h-[5px] rounded-full bg-[#1D9E75] animate-[pulseGreen_1.4s_ease-in-out_infinite]" />
              <span
                className="text-[9px] text-[#5DCAA5]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                available
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://x.com/SigdelAdhrit"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="block text-center w-full py-[10px] rounded-xl bg-[#ececee] text-[#070709] text-[13px] font-semibold hover:bg-white transition-all duration-200"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Hire Me ↗
          </a>
        </div>
      </aside>

      <style>{`
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
      `}</style>
    </>
  );
}