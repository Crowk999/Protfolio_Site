import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}