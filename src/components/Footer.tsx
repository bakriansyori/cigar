import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-cigar-dark border-t border-cigar-gold/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest text-cigar-gold mb-4">ADWAYA PRANA</h3>
            <p className="text-cigar-cream/60 text-sm leading-relaxed font-body">
              Menghadirkan cerutu pilihan terbaik, untuk para penikmat sejati.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-cigar-gold uppercase mb-4">
              Navigasi
            </h4>
            <div className="space-y-2">
              <Link to="/" className="block text-cigar-cream/60 hover:text-cigar-gold text-sm transition-colors font-body">
                Beranda
              </Link>
              <Link to="/products" className="block text-cigar-cream/60 hover:text-cigar-gold text-sm transition-colors font-body">
                Koleksi
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-cigar-gold uppercase mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-2 text-cigar-cream/60 text-sm font-body">
              <p>email : pranaadwaya@gmail.com</p>
              <p>Whatsapp : +62 812 8709 8907</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cigar-gold/10 text-center">
          <p className="text-cigar-cream/40 text-xs tracking-wider font-body">
            © {new Date().getFullYear()} Adwaya Prana. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
