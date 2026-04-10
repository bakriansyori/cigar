import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-cigar-dark border-t border-cigar-gold/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-3xl md:text-4xl tracking-widest text-cigar-gold mb-4" style={{ fontFamily: "'Cirkus', serif" }}>ADWAYA PRANA</h3>
            <p className="text-cigar-cream/60 text-sm leading-relaxed font-body">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-cigar-gold uppercase mb-4">
              {t("footer.nav")}
            </h4>
            <div className="space-y-2">
              <Link to="/" className="block text-cigar-cream/60 hover:text-cigar-gold text-sm transition-colors font-body">
                {t("footer.home")}
              </Link>
              <Link to="/products" className="block text-cigar-cream/60 hover:text-cigar-gold text-sm transition-colors font-body">
                {t("footer.collection")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-cigar-gold uppercase mb-4">
              {t("footer.contact")}
            </h4>
            <div className="space-y-2 text-cigar-cream/60 text-sm font-body">
              <a href="mailto:pranaadwaya@gmail.com" className="hover:text-cigar-gold transition-colors">email : pranaadwaya@gmail.com</a>
              <p><a href="https://wa.me/6281287098907" target="_blank" rel="noopener noreferrer" className="hover:text-cigar-gold transition-colors">Whatsapp : +62 812 8709 8907</a></p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cigar-gold/10 text-center">
          <p className="text-cigar-cream/40 text-xs tracking-wider font-body">
            © {new Date().getFullYear()} Adwaya Prana. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
