import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold mb-3 tracking-wide">
              Adhrit Sigdel
            </h2>

            <p className="text-sm text-white/60 leading-relaxed">
              Building modern web experiences with clean design, smooth UX,
              and efficient code.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest text-white/80">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition  hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/My_Works/about" className="hover:text-white transition hover:translate-x-1 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/My_Works/Project1" className="hover:text-white transition hover:translate-x-1 inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/My_Works/Contacts" className="hover:text-white transition hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest text-white/80">
              Connect
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="https://github.com/Crowk999"
                  target="_blank"
                  className="hover:text-white transition hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] inline-block"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/SigdelAdhrit"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/SigdelAdhrit"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="mailto:adhritsigdel@gmail.com"
                  className="hover:text-white transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">

          <p>
            © {new Date().getFullYear()} Adhrit Sigdel. All rights reserved.
          </p>

          {/* small extra UX touch */}
          <p className="hover:text-white transition cursor-default">
            Built with Next.js⚡
          </p>

        </div>

      </div>
    </footer>
  );
}