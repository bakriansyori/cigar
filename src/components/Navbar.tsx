import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-cigar-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl tracking-widest text-cigar-gold">
          CASA DORADA
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase"
          >
            Beranda
          </Link>
          <Link
            to="/products"
            className="text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase"
          >
            Koleksi
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cigar-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cigar-dark/95 backdrop-blur-md border-t border-cigar-gold/20 px-6 pb-6 space-y-4">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase"
          >
            Beranda
          </Link>
          <Link
            to="/products"
            onClick={() => setMobileOpen(false)}
            className="block text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase"
          >
            Koleksi
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
