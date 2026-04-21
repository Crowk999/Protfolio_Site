"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white font-bold transition hover:scale-105 active:scale-95"
            >
              AS
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-blue-500 transition">Home</Link>
              <Link href="/My_Works/about" className="hover:text-blue-500 transition">About</Link>
              <Link href="/My_Works/Project1" className="hover:text-blue-500 transition">Projects</Link>
              <Link href="/My_Works/Contacts" className="hover:text-blue-500 transition">Contact</Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="https://x.com/SigdelAdhrit"
                target="_blank"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* 🌑 BACKDROP */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 📱 MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-black border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>

          <button
            onClick={closeMenu}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-5 space-y-2 text-white/80">
          <Link onClick={closeMenu} href="/" className="py-3 px-3 rounded-lg hover:bg-white/10 transition">
            Home
          </Link>

          <Link onClick={closeMenu} href="/My_Works/about" className="py-3 px-3 rounded-lg hover:bg-white/10 transition">
            About
          </Link>

          <Link onClick={closeMenu} href="/My_Works/Project1" className="py-3 px-3 rounded-lg hover:bg-white/10 transition">
            Projects
          </Link>

          <Link onClick={closeMenu} href="/My_Works/Contacts" className="py-3 px-3 rounded-lg hover:bg-white/10 transition">
            Contact
          </Link>
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-5 w-full px-5">
          <Link
            onClick={closeMenu}
            href="https://x.com/SigdelAdhrit"
            target="_blank"
            className="block text-center w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Hire Me
          </Link>
        </div>
      </aside>
    </>
  );
}