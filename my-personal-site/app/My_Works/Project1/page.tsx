"use client";
import { div, video } from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with authentication, great logic , and admin dashboard.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot_23-4-2026_202044_localhost.jpeg?updatedAt=1776955016010",
    tags: ["React", "Django", "MySQL", "Tailwind CSS"],
    link: "https://github.com/Crowk999/Ecom_Store",
    videoId:null,
  },
  
  {
    title: "Crypto Tracker",
    description:
      "Modern Crypto Tracker for looking at you crypto Portfolio.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot__2__-3sAxwlti.png?updatedAt=1763804900681",
    tags: ["JavaScript", "Simple CSS"],
    link: "https://crowk999.github.io/Crypto_tracker/crypto.html",
    videoId:null,
  },
  {
    title: "Portfolio Website",
    description:
      "Minimal, animated personal portfolio with smooth UX and responsiveness.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot_20-4-2026_214242_localhost.jpeg",
    tags: ["Next.js", "FastAPI", "Tailwind CSS"],
    link: "/",
    videoId:"QiPKAeE-H7k",
  },
  {
    title: "CHESS GAME",
    description:
      "A Chess Game to play with your Friends in your Free Time.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot_20-4-2026_214749_crowk999.github.io.jpeg",
    tags: ["Java Script", "CSS", "Chess Logic"],
    link: "https://crowk999.github.io/Chess/chess.html",
    videoId:"eSrArRaDDD0?si=sN117zll1tWZwn0f",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A Tic Tac Toe Game to play with your Friends in your Free Time.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot_21-4-2026_201027_crowk999.github.io.jpeg",
    tags: ["Java Script", "CSS", "Game Logic"],
    link: "https://crowk999.github.io/Just_game/game.html",
    videoId:"qpkMUDfBZ0Q?si=FM0B1M9R6ObM9qQl",
  },
  {
    title: "AIR CANVAS",
    description:
      "A Canvas in whic you can draw in your Camera with finger and different Colours",
    image: null,
    tags: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/Crowk999/Air-Canvas",
    videoId:null,
  },
  {
    title: "E-Commerce Project",
    description:
    "Full-stack shopping platform with authentication, data storage, adding product and admin dashboard.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot%202026-05-15%20at%2014-16-35%20.png",
    tags: ["NextJs", "Django", "MySQL", "Tailwind CSS", "SupaBase"],
    link: "https://adhrit-store.vercel.app/",
    videoId:"7YgcpBKTULo?si=2w5tfkaY1l_2pMvH",
  },
];



export default function Project() {
  const[videoId, setVideoId] = useState<string | null>(null);
  const[videoIsOpen, setVideoIsOpen] = useState(false);

  const videoOpen = (id:string | null) =>{
    setVideoId(id);
    setVideoIsOpen(true);
  }

  const videoClose = () =>{
    setVideoId(null);
    setVideoIsOpen(false);
  }

  useEffect(() => {
    if (videoIsOpen ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [videoIsOpen]);

  return (
    <section className="relative min-h-screen rounded-b-3xl bg-[#050507] text-white px-6 py-24 overflow-hidden">

      {/* 🔮 subtle ambient glow (NOT blue anymore) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[180px] -z-10" />

      {/* 🧠 header */}
      <div className="relative text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
            Work
          </span>
        </h2>

        <p className="text-white/40 mt-4 text-lg">
          Real projects. Real systems. No fluff.
        </p>
      </div>

      {/* 🚀 grid */}
      <div className="relative max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
          >

            {/* image */}
          <div className="relative h-52 w-full overflow-hidden rounded-lg group">

            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-white/40">
                No Image
              </div>
            )}

            {/* dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          </div>

            {/* content */}
            <div className="p-6">
              <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition">
                {project.title}
              </h3>

              <p className="text-white/40 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* link */}
             <div className="flex items-center justify-between mt-6">
                {/* View Project */}
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 hover:shadow-md transition-all duration-300"
                >
                  🔗 View Project
                </a>

                {/* Video Demo */}
                <button onClick={()=>{
                  videoOpen(project.videoId)}}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#1D9E75]/80 to-[#1D9E75]/40 rounded-lg transition-all duration-300 hover:from-[#1D9E75] hover:to-[#0f5f47] hover:shadow-md hover:scale-105">
                  ▶   Video
                </button>
              </div>
            </div>


            {/* 🔥 premium hover glow (subtle, not loud) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
            </div>

          </div>
        ))}
      </div>
      {videoIsOpen && (
        videoId ? (
    // 🎬 VIDEO MODAL
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">

        <div className="relative bg-white p-3 rounded-xl">

          {/* ❌ Close Button */}
          <button
            onClick={videoClose}
            className="absolute -top-3 -right-3 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            ✕
          </button>

          {/* 🎬 Video */}
          <div className="w-[90vw] max-w-xl aspect-video">
            <iframe
              className="w-full h-full rounded"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allowFullScreen
            />
          </div>

          </div>
        </div>
    ) : (
    // ❌ NO VIDEO BOX (only if user clicked)
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">

      <div className="relative bg-white p-6 rounded-xl text-center">

        <h2 className="text-lg text-black font-semibold">No Video Available</h2>

        <button
          onClick={videoClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>

      </div>

    </div>
  )
  )}
    </section>
  );
}
