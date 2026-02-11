import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Flame, Leaf, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const
    }
  })
};
const Index = () => {
  const featured = products.slice(0, 3);
  return <div className="bg-cigar-dark min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cigar-dark via-cigar-dark/90 to-cigar-dark" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cigar-gold/30 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }}>
            <p className="text-cigar-gold/80 tracking-[0.3em] text-xs uppercase mb-6 font-body">
              Premium Cigar Collection
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-cigar-cream leading-tight mb-6">
              Seni dalam{" "}
              <span className="text-cigar-gold italic">Setiap Gulungan</span>
            </h1>
            <p className="text-cigar-cream/60 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl mx-auto">Rasakan kemewahan cerutu pilihan seluruh dunia, dipilih dengan cermat untuk para penikmat sejati.</p>
            <Link to="/products" className="inline-block border-2 border-cigar-gold text-cigar-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-cigar-gold hover:text-cigar-dark transition-all duration-300 font-body">
              Lihat Koleksi
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2
        }} className="w-px h-12 bg-gradient-to-b from-cigar-gold/60 to-transparent" />
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeUp} custom={0}>
            <p className="text-cigar-gold tracking-[0.3em] text-xs uppercase mb-4 font-body">
              Tentang Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cigar-cream mb-8">
              Tradisi & Keahlian
            </h2>
            <div className="w-16 h-px bg-cigar-gold/40 mx-auto mb-8" />
            <p className="text-cigar-cream/60 text-lg leading-relaxed font-body">Adwaya Prana didirikan dengan satu visi: menghadirkan cerutu terbaik dunia kepada para penikmat di Indonesia. Setiap cerutu dipilih langsung dari perkebunan terbaik di Indonesia — digulung dengan tangan oleh pengrajin berpengalaman yang telah mewarisi keahlian turun-temurun.</p>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-24 px-6 bg-cigar-dark/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeUp} custom={0} className="text-center mb-16">
            <p className="text-cigar-gold tracking-[0.3em] text-xs uppercase mb-4 font-body">
              Mengapa Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cigar-cream">
              Keunggulan Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: Award,
            title: "Kualitas Premium",
            desc: "Hanya tembakau kelas terbaik dari perkebunan ternama."
          }, {
            icon: Flame,
            title: "Hand-Rolled",
            desc: "Setiap cerutu digulung tangan oleh pengrajin ahli."
          }, {
            icon: Leaf,
            title: "100% Natural",
            desc: "Tanpa bahan kimia, murni daun tembakau alami."
          }, {
            icon: Star,
            title: "Rasa Autentik",
            desc: "Profil rasa khas yang tak tertandingi."
          }].map((item, i) => <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-50px"
          }} variants={fadeUp} custom={i + 1} className="text-center p-6 border border-cigar-gold/10 hover:border-cigar-gold/30 transition-colors">
                <item.icon className="w-8 h-8 text-cigar-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg text-cigar-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-cigar-cream/50 text-sm font-body">
                  {item.desc}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeUp} custom={0} className="text-center mb-16">
            <p className="text-cigar-gold tracking-[0.3em] text-xs uppercase mb-4 font-body">
              Pilihan Terbaik
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cigar-cream">
              Produk Unggulan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product, i) => <motion.div key={product.id} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-50px"
          }} variants={fadeUp} custom={i + 1} className="group border border-cigar-gold/10 hover:border-cigar-gold/30 transition-all duration-300">
                <div className="aspect-[4/3] bg-cigar-dark/80 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                <div className="p-6">
                  <p className="text-cigar-gold/60 text-xs tracking-wider uppercase mb-1 font-body">
                    {product.origin}
                  </p>
                  <h3 className="font-serif text-xl text-cigar-cream mb-2">
                    {product.name}
                  </h3>
                  <p className="text-cigar-cream/50 text-sm font-body mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-cigar-gold font-serif text-lg">
                    {product.price}
                  </p>
                </div>
              </motion.div>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="inline-block border border-cigar-gold/40 text-cigar-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-cigar-gold hover:text-cigar-dark transition-all duration-300 font-body">
              Lihat Semua Koleksi
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;