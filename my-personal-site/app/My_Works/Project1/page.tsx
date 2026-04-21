import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with authentication, payments, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Django", "MySQL", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Crypto Tracker",
    description:
      "Modern Crypto Tracker for looking at you crypto Portfolio.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot__2__-3sAxwlti.png?updatedAt=1763804900681",
    tags: ["JavaScript", "Simple CSS"],
    link: "https://crowk999.github.io/Crypto_tracker/crypto.html",
  },
  {
    title: "Portfolio Website",
    description:
      "Minimal, animated personal portfolio with smooth UX and responsiveness.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot_20-4-2026_214242_localhost.jpeg",
    tags: ["Next.js", "FastAPI", "Tailwind CSS"],
    link: "/",
  },
  {
    title: "CHESS GAME",
    description:
      "A Chess Game to play with your Friends in your Free Time.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot_20-4-2026_214749_crowk999.github.io.jpeg",
    tags: ["Java Script", "CSS", "Chess Logic"],
    link: "https://crowk999.github.io/Chess/chess.html",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A Tic Tac Toe Game to play with your Friends in your Free Time.",
    image: "https://ik.imagekit.io/8pckwj2wc/Screenshot_21-4-2026_201027_crowk999.github.io.jpeg",
    tags: ["Java Script", "CSS", "Game Logic"],
    link: "https://crowk999.github.io/Just_game/game.html",
  },
  {
    title: "AIR CANVAS",
    description:
      "A Canvas in whic you can draw in your Camera with finger and different Colours",
    image: "/projects/air-canvas.jpg",
    tags: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/Crowk999/Air-Canvas",
  },
];

export default function Project() {
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
  
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

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
              <a
                href={project.link} target="_blank"
                className="inline-flex items-center gap-2 mt-6 text-sm text-white/60 hover:text-white transition"
              >
                View Project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* 🔥 premium hover glow (subtle, not loud) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
