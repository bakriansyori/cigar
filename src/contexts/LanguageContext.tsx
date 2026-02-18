import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "id" | "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.collection": "Koleksi",

    // Index - Hero
    "hero.label": "Premium Cigar Collection",
    "hero.title1": "Seni dalam",
    "hero.title2": "Setiap Gulungan",
    "hero.subtitle": "Rasakan kemewahan cerutu pilihan, dipilih dengan cermat untuk para penikmat sejati.",
    "hero.cta": "Lihat Koleksi",

    // Index - About
    "about.label": "Tentang Kami",
    "about.title": "Tradisi & Keahlian",
    "about.desc": "Adwaya Prana didirikan dengan satu visi: menghadirkan cerutu terbaik dunia kepada para penikmat di dunia. Setiap cerutu dipilih langsung dari perkebunan terbaik di Indonesia — digulung dengan tangan oleh pengrajin berpengalaman yang telah mewarisi keahlian turun-temurun.",

    // Index - Why Us
    "why.label": "Mengapa Kami",
    "why.title": "Keunggulan Kami",
    "why.q1.title": "Kualitas Premium",
    "why.q1.desc": "Hanya tembakau kelas terbaik dari perkebunan ternama.",
    "why.q2.title": "Hand-Rolled",
    "why.q2.desc": "Setiap cerutu digulung tangan oleh pengrajin ahli.",
    "why.q3.title": "100% Natural",
    "why.q3.desc": "Tanpa bahan kimia, murni daun tembakau alami.",
    "why.q4.title": "Rasa Autentik",
    "why.q4.desc": "Profil rasa khas yang terjaga dan tak tertandingi.",

    // Index - Featured
    "featured.label": "Pilihan Terbaik",
    "featured.title": "Produk Unggulan",
    "featured.cta": "Lihat Semua Koleksi",

    // Products page
    "products.label": "Koleksi Lengkap",
    "products.title": "Koleksi Kami",
    "products.subtitle": "Temukan cerutu pilihan terbaik dari berbagai penjuru dunia, masing-masing dengan karakter dan cita rasa yang unik.",

    // Footer
    "footer.tagline": "Menghadirkan cerutu pilihan terbaik, untuk para penikmat sejati.",
    "footer.nav": "Navigasi",
    "footer.contact": "Hubungi Kami",
    "footer.home": "Beranda",
    "footer.collection": "Koleksi",
    "footer.copyright": "Semua hak dilindungi.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.collection": "Collection",

    // Index - Hero
    "hero.label": "Premium Cigar Collection",
    "hero.title1": "The Art in",
    "hero.title2": "Every Roll",
    "hero.subtitle": "Experience the luxury of handpicked cigars, carefully selected for true connoisseurs.",
    "hero.cta": "View Collection",

    // Index - About
    "about.label": "About Us",
    "about.title": "Tradition & Craftsmanship",
    "about.desc": "Adwaya Prana was founded with one vision: to bring the world's finest cigars to connoisseurs everywhere. Every cigar is sourced directly from the best plantations in Indonesia — hand-rolled by experienced craftsmen who have inherited generations of expertise.",

    // Index - Why Us
    "why.label": "Why Us",
    "why.title": "Our Excellence",
    "why.q1.title": "Premium Quality",
    "why.q1.desc": "Only the finest tobacco from renowned plantations.",
    "why.q2.title": "Hand-Rolled",
    "why.q2.desc": "Every cigar hand-rolled by expert craftsmen.",
    "why.q3.title": "100% Natural",
    "why.q3.desc": "No chemicals, pure natural tobacco leaves.",
    "why.q4.title": "Authentic Taste",
    "why.q4.desc": "Distinctive flavor profiles, preserved and unmatched.",

    // Index - Featured
    "featured.label": "Top Picks",
    "featured.title": "Featured Products",
    "featured.cta": "View All Collection",

    // Products page
    "products.label": "Full Collection",
    "products.title": "Our Collection",
    "products.subtitle": "Discover the finest cigars from around the world, each with its own unique character and flavor.",

    // Footer
    "footer.tagline": "Bringing you the finest cigars, for true connoisseurs.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact Us",
    "footer.home": "Home",
    "footer.collection": "Collection",
    "footer.copyright": "All rights reserved.",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.collection": "المجموعة",

    // Index - Hero
    "hero.label": "مجموعة السيجار الفاخرة",
    "hero.title1": "فن",
    "hero.title2": "في كل لفة",
    "hero.subtitle": "استمتع بفخامة السيجار المختار بعناية، لعشاق الجودة الحقيقيين.",
    "hero.cta": "عرض المجموعة",

    // Index - About
    "about.label": "من نحن",
    "about.title": "التقاليد والحرفية",
    "about.desc": "تأسست أدوايا برانا برؤية واحدة: تقديم أفضل سيجار في العالم لعشاق الجودة في كل مكان. يتم اختيار كل سيجار مباشرة من أفضل المزارع في إندونيسيا — ملفوف يدويًا من قِبَل حرفيين متمرسين توارثوا هذه المهارة جيلًا بعد جيل.",

    // Index - Why Us
    "why.label": "لماذا نحن",
    "why.title": "تميزنا",
    "why.q1.title": "جودة فاخرة",
    "why.q1.desc": "أجود التبغ من أشهر المزارع.",
    "why.q2.title": "ملفوف يدويًا",
    "why.q2.desc": "كل سيجار ملفوف يدويًا من قِبَل حرفيين.",
    "why.q3.title": "طبيعي 100%",
    "why.q3.desc": "بدون مواد كيميائية، أوراق تبغ طبيعية خالصة.",
    "why.q4.title": "مذاق أصيل",
    "why.q4.desc": "نكهات مميزة محفوظة لا مثيل لها.",

    // Index - Featured
    "featured.label": "أفضل الاختيارات",
    "featured.title": "المنتجات المميزة",
    "featured.cta": "عرض كامل المجموعة",

    // Products page
    "products.label": "المجموعة الكاملة",
    "products.title": "مجموعتنا",
    "products.subtitle": "اكتشف أفضل أنواع السيجار من جميع أنحاء العالم، كل منها بشخصيته ونكهته الفريدة.",

    // Footer
    "footer.tagline": "نقدم لكم أفضل السيجار، لعشاق الجودة الحقيقيين.",
    "footer.nav": "التنقل",
    "footer.contact": "تواصل معنا",
    "footer.home": "الرئيسية",
    "footer.collection": "المجموعة",
    "footer.copyright": "جميع الحقوق محفوظة.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("id");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "id";
  }, []);

  const t = (key: string): string => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL: language === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
