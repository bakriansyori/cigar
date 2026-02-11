import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Products = () => {
  return (
    <div className="bg-cigar-dark min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cigar-gold tracking-[0.3em] text-xs uppercase mb-4 font-body">
            Koleksi Lengkap
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-cigar-cream mb-4">
            Koleksi Kami
          </h1>
          <div className="w-16 h-px bg-cigar-gold/40 mx-auto mb-6" />
          <p className="text-cigar-cream/60 font-body max-w-lg mx-auto">
            Temukan cerutu pilihan terbaik dari berbagai penjuru dunia, masing-masing
            dengan karakter dan cita rasa yang unik.
          </p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i}
                className="group border border-cigar-gold/10 hover:border-cigar-gold/30 transition-all duration-300"
              >
                <div className="aspect-square bg-cigar-dark/80 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-cigar-gold/60 text-xs tracking-wider uppercase font-body">
                      {product.origin}
                    </p>
                    <span className="text-cigar-cream/40 text-xs font-body">
                      {product.strength}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-cigar-cream mb-2">
                    {product.name}
                  </h3>
                  <p className="text-cigar-cream/50 text-sm font-body mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-cigar-gold font-serif text-lg">
                      {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
