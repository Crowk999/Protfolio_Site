import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with authentication, payments, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "#",
  },
  {
    title: "AI SaaS Dashboard",
    description:
      "Modern AI analytics dashboard with real-time insights and charts.",
    image: "/projects/ai.jpg",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Minimal, animated personal portfolio with smooth UX and responsiveness.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#",
  },
];

export default function Project() {
  return (
    <section className="relative min-h-screen bg-[#050507] text-white px-6 py-24 overflow-hidden">

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
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover scale-105 group-hover:scale-115 transition duration-700"
              />

              {/* darker overlay instead of blue */}
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
                href={project.link}
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
