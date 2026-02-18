import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LANGS: { code: Language; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome ? "bg-cigar-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl tracking-widest text-cigar-gold">ADWAYA PRANA</Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase">
            {t("nav.home")}
          </Link>
          <Link to="/products" className="text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase">
            {t("nav.collection")}
          </Link>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase"
            >
              <Globe size={15} />
              {language.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute top-full mt-2 right-0 bg-cigar-dark border border-cigar-gold/20 shadow-lg min-w-[80px]">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLanguage(l.code); setLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm font-body transition-colors ${language === l.code ? "text-cigar-gold" : "text-cigar-cream/70 hover:text-cigar-gold"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-cigar-gold" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cigar-dark/95 backdrop-blur-md border-t border-cigar-gold/20 px-6 pb-6 space-y-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase">
            {t("nav.home")}
          </Link>
          <Link to="/products" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wider text-cigar-cream/80 hover:text-cigar-gold transition-colors uppercase">
            {t("nav.collection")}
          </Link>
          {/* Mobile language switcher */}
          <div className="flex gap-3 pt-2 border-t border-cigar-gold/10">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLanguage(l.code); setMobileOpen(false); }}
                className={`text-sm font-body tracking-wider transition-colors ${language === l.code ? "text-cigar-gold" : "text-cigar-cream/50 hover:text-cigar-gold"}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
