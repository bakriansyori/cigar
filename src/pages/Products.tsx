import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t, language } = useLanguage();

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
            {t("products.label")}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-cigar-cream mb-4">
            {t("products.title")}
          </h1>
          <div className="w-16 h-px bg-cigar-gold/40 mx-auto mb-6" />
          <p className="text-cigar-cream/60 font-body max-w-lg mx-auto">
            {t("products.subtitle")}
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
                className="group relative border border-cigar-gold/10 hover:border-cigar-gold/30 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-[3/4] bg-cigar-dark/80 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
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
                    {product.name[language]}
                  </h3>
                  <p className="text-cigar-cream/50 text-sm font-body mb-4 line-clamp-2">
                    {product.description[language]}
                  </p>
                  <div className="flex items-center justify-between">
                    <a href="https://wa.me/6281287098907" target="_blank" rel="noopener noreferrer" className="text-cigar-gold font-serif text-sm hover:text-cigar-cream transition-colors">
                      {t("products.contact")}
                    </a>
                  </div>
                </div>

                {/* Hover overlay with full description */}
                <AnimatePresence>
                  {hoveredProduct?.id === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 z-10 bg-cigar-dark/95 border border-cigar-gold/30 flex flex-col overflow-y-auto"
                    >
                      <div className="flex-shrink-0 aspect-[4/3] flex items-center justify-center overflow-hidden p-6">
                        <img
                          src={product.image}
                          alt={product.name[language]}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-5 flex-1">
                        <p className="text-cigar-gold/60 text-xs tracking-wider uppercase font-body mb-1">
                          {product.origin} · {product.strength}
                        </p>
                        <h3 className="font-serif text-lg text-cigar-cream mb-3">
                          {product.name[language]}
                        </h3>
                        <p className="text-cigar-cream/70 text-sm font-body leading-relaxed mb-4">
                          {product.description[language]}
                        </p>
                        <a href="https://wa.me/6281287098907" target="_blank" rel="noopener noreferrer" className="text-cigar-gold font-serif text-sm hover:text-cigar-cream transition-colors">
                          {t("products.contact")}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="bg-cigar-dark border-cigar-gold/20 max-w-2xl p-0 max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">{selectedProduct?.name[language]}</DialogTitle>
          <DialogDescription className="sr-only">{selectedProduct?.description[language]}</DialogDescription>
          {selectedProduct && (
            <div className="flex flex-col">
              <div className="aspect-[4/3] bg-cigar-dark/90 flex items-center justify-center p-8">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name[language]}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-cigar-gold/60 text-xs tracking-wider uppercase font-body">
                  {selectedProduct.origin} · {selectedProduct.strength}
                </p>
                <h3 className="font-serif text-2xl text-cigar-cream">
                  {selectedProduct.name[language]}
                </h3>
                <p className="text-cigar-cream/70 text-sm font-body leading-relaxed">
                  {selectedProduct.description[language]}
                </p>
                <a href="https://wa.me/6281287098907" target="_blank" rel="noopener noreferrer" className="text-cigar-gold font-serif text-base pt-2 hover:text-cigar-cream transition-colors inline-block">
                  {t("products.contact")}
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
