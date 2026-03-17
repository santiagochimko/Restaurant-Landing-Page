import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "RESTAURANTE", href: "/#restaurant" },
  { name: "MENÚ", href: "/menu" },
  { name: "CAVA", href: "/cava" },
  { name: "GALERÍA", href: "/#gallery" },
  { name: "HORARIOS", href: "/#schedule" },
  { name: "CONTACTO", href: "/#contact" },
];

export function Navbar() {
  const [isBeyondHero, setIsBeyondHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Invert when scrolled past the hero (roughly h-screen)
      setIsBeyondHero(window.scrollY >= window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-3 md:px-12",
        isBeyondHero
          ? "bg-background/95 backdrop-blur-md shadow-md text-foreground"
          : "bg-primary text-primary-foreground py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
          PISO <span className="text-accent">40</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold tracking-widest hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs font-semibold tracking-widest hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          <button
            className={cn(
              "px-6 py-2 text-[10px] font-bold tracking-[0.2em] transition-all duration-300",
              isBeyondHero
                ? "bg-primary text-primary-foreground hover:bg-accent"
                : "bg-accent text-white hover:bg-white hover:text-black"
            )}
          >
            RESERVAS
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-inherit"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-in fade-in slide-in-from-top-4 text-foreground">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold tracking-widest hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-semibold tracking-widest hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <button className="bg-accent text-white py-3 text-xs font-bold tracking-widest uppercase mt-4">
              RESERVAS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
