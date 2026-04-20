"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black-200 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-sm font-bold tracking-tight text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:border-white/50">
            <span className="relative text-lg" >
              AS

              {/* Glow effect on click / active */}
              <span className="absolute inset-0 rounded-full scale-100 opacity-0 group-active:opacity-100 group-active:scale-150 transition-all duration-300 border border-white/60 blur-sm"></span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/My_Works/about" className="hover:text-blue-600 transition">
              About
            </Link>  
            <Link href="/My_Works/Project1" className="hover:text-blue-600 transition">
              Projects
            </Link>
            
            <Link href="/My_Works/Contacts" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          {/* Button (right side) */}
          <div className="hidden md:block">
            <Link
              href="/My_Works/Contacts"
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden border rounded-lg p-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="flex flex-col px-4 py-4 space-y-3 text-sm">
            <Link href="/" target="_blank" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/My_Works/about" target="_blank" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/My_Works/Project1" target="_blank" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/My_Works/Contacts" target="_blank" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}