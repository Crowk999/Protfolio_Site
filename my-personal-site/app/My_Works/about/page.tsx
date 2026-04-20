import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-28">

      {/* HERO */}
      <section className="relative text-center py-24">
        
        {/* subtle background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient from-gray-50 to-white" />

        <p className="text-lg text-gray-500 mb-4 tracking-wide ">
          Full Stack Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Building clean <br />
          <span className="text-gray-400">modern web experiences</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          I design and develop fast, responsive websites using modern tools
          like Next.js, React and Tailwind CSS as Frontend as well as Django Fastapi PyTorch and LangChain as Backend with a focus on simplicity and
          performance.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/My_Works/Project1"
            className="px-7 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition duration-300"
          >
            View Work
          </Link>

          <Link
            href="/My_Works/Contacts"
            className="px-7 py-3 rounded-xl  bg-black text-white hover:bg-gray-800 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="group p-6 rounded-2xl border transition duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Frontend
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crafting responsive interfaces with React, Next.js, and TailWind CSS frameworks.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border  hover:shadow-lg transition duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Backend
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building APIs and handling data efficiently with scalable architecture and AI Integration.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border transition duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Design
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating clean, user-focused layouts with attention to detail and usability.
            </p>
          </div>


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
            <Link href="/">
            <div className="h-40 mb-4 overflow-hidden rounded-lg">
              <img
                src="https://ik.imagekit.io/8pckwj2wc/Screenshot_20-4-2026_214242_localhost.jpeg"
                alt="Portfolio Preview"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Portfolio Website
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              A modern developer portfolio built with Next.js and Tailwind.
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
                alt="Portfolio Preview"
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
      <section className="text-center py-20 rounded-2xl border  from-gray-50 to-white">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s build something great
        </h2>

        <p className="text-gray-600 mb-8">
          I’m open to freelance work and collaborations.
        </p>

        <Link
          href="/My_Works/Contacts"
          className="px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition duration-300
        ">
        
          Get in touch
        </Link>
      </section>

    </div>
  );
}