import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

/* new */
import type { Metadata, Viewport } from "next";
import PWARegister from "./components/PWARegister";

export const metadata: Metadata = {
  title: "Adhrit Sigdel | Portfolio",
  description:
    "Full-stack Developer & AI Enthusiast",
  manifest: "/manifest.json",
  applicationName: "Adhrit Sigdel",
  appleWebApp: {
    capable: true,
    title: "Adhrit",
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1
};


/*old */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
      <body>
       <header className="sticky top-0 z-50 bg-black shadow-md">
          <NavBar />
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <PWARegister />
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}