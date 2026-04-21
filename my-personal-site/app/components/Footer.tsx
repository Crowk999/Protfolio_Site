import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-200 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Adhrit Sigdel</h2>
            <p className="text-sm text-gray-600">
              Building modern web experiences with clean design and efficient code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-black transition">Home</Link></li>
              <li> <Link href="/My_Works/about" className="hover:text-black transition"> About</Link></li>
              <li><Link href="/My_Works/Project1" className="hover:text-black transition">Projects</Link></li>
              <li><Link href="/My_Works/Contacts" className="hover:text-black transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://github.com/Crowk999" className="hover:text-black transition">GitHub</a></li>
              <li><a href="https://x.com/SigdelAdhrit" target="_blank" className="hover:text-black transition">LinkedIn</a></li>
              <li><a href="https://x.com/SigdelAdhrit" target="_blank" className="hover:text-black transition">Twitter</a></li>
              <li><a href="mailto:adhritsigdel@gmail.com" className="hover:text-black transition">Email</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Adhrit Sigdel. All rights reserved.
        </div>

      </div>
    </footer>
  );
}