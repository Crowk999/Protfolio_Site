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
      <header> <NavBar /> </header>
      
      <body>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
      <footer>
        <Footer />
      </footer>
        
    </html>
  );
}