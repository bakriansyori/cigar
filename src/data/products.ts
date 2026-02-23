export interface ProductDescription {
  id: string;
  en: string;
  ar: string;
}

export interface ProductName {
  id: string;
  en: string;
  ar: string;
}

export interface Product {
  id: string;
  name: ProductName;
  description: ProductDescription;
  origin: string;
  strength: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: {
      id: "Pilar Gold Exclusive Perla",
      en: "Pilar Gold Exclusive Perla",
      ar: "بيلار جولد إكسكلوسيف بيرلا",
    },
    description: {
      id: "Cerutu Parejo Premium dengan panjang 102mm dan ring 40, menonjolkan profil rasa woody, earthy, dan spicy dengan balutan warna cokelat hitam yang maskulin. Karakter rasa yang kuat dan intens ini tersimpan sempurna di dalam kotak eksklusif berisi 10 batang berkualitas.",
      en: "A Premium Parejo Cigar measuring 102mm with a ring gauge of 40, showcasing a bold flavor profile of woody, earthy, and spicy notes wrapped in a masculine dark brown leaf. This intense and powerful character is perfectly preserved in an exclusive box of 10 quality cigars.",
      ar: "سيجار باريخو فاخر بطول 102 ملم وقطر حلقة 40، يتميز بنكهات خشبية وترابية وحارة مع لفافة بنية داكنة تعكس الطابع الرجولي. هذه الشخصية القوية والمكثفة محفوظة بشكل مثالي في علبة حصرية تحتوي على 10 سيجارات عالية الجودة.",
    },
    origin: "Havana",
    strength: "Medium",
    price: "Rp 1.499.000",
    image: "/images/Pilar_Gold_Exclusive_Perla.webp",
  },
  {
    id: "2",
    name: {
      id: "Pilar Gold Exclusive Mareva",
      en: "Pilar Gold Exclusive Mareva",
      ar: "بيلار جولد إكسكلوسيف ماريفا",
    },
    description: {
      id: "Cerutu Torpedo Premium yang dibalut daun tembakau pilihan (panjang 129mm, ring 42), menawarkan simfoni rasa creamy, nutty, woody, dan spicy. Kemewahan rasa yang kompleks ini tersaji secara elegan dalam balutan kotak eksklusif berisi 10 cerutu pilihan.",
      en: "A Premium Torpedo Cigar wrapped in select tobacco leaves (129mm, ring 42), offering a symphony of creamy, nutty, woody, and spicy flavors. This complex luxury of taste is elegantly presented in an exclusive box of 10 hand-selected cigars.",
      ar: "سيجار تورييدو فاخر ملفوف بأوراق تبغ مختارة (129 ملم، حلقة 42)، يقدم سيمفونية من النكهات الكريمية والمكسرات والخشبية والحارة. تُقدَّم هذه التجربة الفاخرة المعقدة بأناقة في علبة حصرية تحتوي على 10 سيجارات مختارة.",
    },
    origin: "Havana",
    strength: "Medium",
    price: "Rp 1.699.000",
    image: "/images/Pilar_Gold_Exclusive_Mareva.webp",
  },
  {
    id: "3",
    name: {
      id: "Pilar Gold Exclusive Grand Corona",
      en: "Pilar Gold Exclusive Grand Corona",
      ar: "بيلار جولد إكسكلوسيف جراند كورونا",
    },
    description: {
      id: "Cerutu Parejo Premium dengan dimensi panjang 138mm dan ring 48, menghadirkan pengalaman menghisap yang lembut dengan catatan rasa creamy, sweety, nutty, dan woody. Koleksi istimewa ini dikemas rapi dalam kotak eksklusif yang berisi 10 batang cerutu premium.",
      en: "A Premium Parejo Cigar with dimensions of 138mm and a ring gauge of 48, delivering a smooth smoking experience with notes of cream, sweetness, nuts, and wood. This special collection is neatly packaged in an exclusive box containing 10 premium cigars.",
      ar: "سيجار باريخو فاخر بأبعاد 138 ملم وقطر حلقة 48، يقدم تجربة تدخين ناعمة مع نكهات الكريمة والحلاوة والمكسرات والخشب. تُعبَّأ هذه المجموعة الخاصة بعناية في علبة حصرية تحتوي على 10 سيجارات فاخرة.",
    },
    origin: "Havana",
    strength: "Medium",
    price: "Rp 2.499.000",
    image: "/images/Pilar_Gold_Exclusive_GrandCorona.webp",
  },
  {
    id: "4",
    name: {
      id: "Pilar Panatella Gold",
      en: "Pilar Panatella Gold",
      ar: "بيلار باناتيلا جولد",
    },
    description: {
      id: "Hadir dengan balutan daun tembakau berkualitas, Panatella cigarillos premium (120mm, ring 33) menawarkan perpaduan rasa woody dan floral yang halus. Produk ini dikemas secara eksklusif dalam kotak berisi 2 batang untuk menjaga kesegaran aromanya.",
      en: "Wrapped in quality tobacco leaves, this premium Panatella cigarillo (120mm, ring 33) offers a refined blend of woody and floral flavors. Exclusively packaged in a box of 2 to preserve the freshness of its aroma.",
      ar: "ملفوف بأوراق تبغ عالية الجودة، يقدم هذا السيجاريلو باناتيلا الفاخر (120 ملم، حلقة 33) مزيجًا راقيًا من النكهات الخشبية والزهرية. معبأ حصريًا في علبة تحتوي على 2 للحفاظ على نضارة عطره.",
    },
    origin: "Havana",
    strength: "Mild to Medium",
    price: "Rp 249.000",
    image: "/images/Pilar_Panatella_Gold.webp",
  },
  {
    id: "5",
    name: {
      id: "Pilar Panatella Silver",
      en: "Pilar Panatella Silver",
      ar: "بيلار باناتيلا سيلفر",
    },
    description: {
      id: "Nikmati mahakarya tembakau Havana dalam wujud Panatella Parejo yang elegan. Dengan panjang 108mm dan ring 38, setiap hisapannya memberikan profil rasa soft, woody, dan creamy yang konsisten. Hadir dalam kemasan kotak eksklusif berisi 2 cerutu untuk menjaga kesegaran dan cita rasa autentiknya.",
      en: "Experience the masterpiece of Havana tobacco in the form of an elegant Panatella Parejo. At 108mm with a ring gauge of 38, every draw delivers a consistent profile of soft, woody, and creamy flavors. Available in an exclusive box of 2 cigars to preserve its freshness and authentic taste.",
      ar: "استمتع بتحفة تبغ هافانا في صورة باناتيلا باريخو الأنيقة. بطول 108 ملم وحلقة 38، توفر كل نفخة ملفًا ثابتًا من النكهات الناعمة والخشبية والكريمية. متوفر في علبة حصرية تحتوي على 2 سيجارة للحفاظ على نضارتها وطعمها الأصيل.",
    },
    origin: "Havana",
    strength: "Mild to Medium",
    price: "Rp 289.000",
    image: "/images/Pilar_Panatella_Silver.webp",
  },
  {
    id: "6",
    name: {
      id: "Don Juan",
      en: "Don Juan",
      ar: "",
    },
    description: {
      id: "Parejo klasik, cerutu ini memiliki Ring 40 yang pas dan nyaman di jemari, serta panjang 103 mm yang ideal untuk sesi singkat yang intens. Dibuat dari perpaduan Full Havana Tobacco dan dikemas eksklusif dalam kotak kayu berisi 5 batang untuk menjaga kesegaran rasa otentik Kuba tetap terjaga hingga hisapan terakhir.",
      en: "",
      ar: "",
    },
    origin: "Havana",
    strength: "Medium to Full",
    price: "Rp 169.000",
    image: "/images/DonJuan.webp",
  },
  {
    id: "7",
    name: {
      id: "Sakera Piramides",
      en: "Sakera Piramides",
      ar: "ساكيرا بيراميدس",
    },
    description: {
      id: "Piramide premium dengan karakter tembakau matang dan aroma khas Kuba, hadir dalam ukuran 160mm dengan ring 54. Dikemas secara istimewa dalam tube pelindung untuk menjaga kesegaran aromanya, koleksi ini tersaji rapi dalam kotak eksklusif yang berisi 3 batang cerutu pilihan.",
      en: "A premium Piramide with a rich, mature tobacco character and a distinctive Cuban aroma, sized at 160mm with a ring gauge of 54. Specially packaged in protective tubes to preserve its freshness, this collection is neatly presented in an exclusive box of 3 hand-selected cigars.",
      ar: "بيراميدس فاخر بشخصية تبغ ناضجة وغنية وعطر كوبي مميز، بحجم 160 ملم وحلقة 54. معبأ خصيصًا في أنابيب واقية للحفاظ على نضارته، وتُقدَّم هذه المجموعة بأناقة في علبة حصرية تحتوي على 3 سيجارات مختارة.",
    },
    origin: "Havana",
    strength: "Medium to Full",
    price: "Rp 729.000/pack (3 tubes)",
    image: "/images/BIN_Sakera_Piramides.webp",
  },
  {
    id: "8",
    name: {
      id: "Classy Cigar",
      en: "Classy Cigar",
      ar: "كلاسي سيجار",
    },
    description: {
      id: "Classy Cigar Parejo; harmoni aroma tembakau Kuba dalam ukuran 124mm dan ring 50 yang prestisius. Tersaji sempurna dalam kemasan kotak eksklusif berisi 3 tube, menjamin kualitas dan aroma tetap terjaga hingga ke tangan Anda.",
      en: "Classy Cigar Parejo — a harmonious blend of Cuban tobacco aromas in a prestigious 124mm size with a ring gauge of 50. Perfectly presented in an exclusive box of 3 tubes, guaranteeing quality and aroma are preserved until they reach your hands.",
      ar: "كلاسي سيجار باريخو — مزيج متناسق من عطور التبغ الكوبي بحجم مرموق 124 ملم وحلقة 50. يُقدَّم بشكل مثالي في علبة حصرية تحتوي على 3 أنابيب، مما يضمن الحفاظ على الجودة والعطر حتى يصل إلى يديك.",
    },
    origin: "Havana",
    strength: "Medium",
    price: "Rp 539.000/pack (3 tubes)",
    image: "/images/BIN_Classy_Cigar.webp",
  },
  {
    id: "9",
    name: {
      id: "Gran Cigarro",
      en: "Gran Cigarro",
      ar: "جران سيجارو",
    },
    description: {
      id: "Elegansi bertemu dengan cita rasa klasik pada Gran Cigarro. Parejo sempurna dan balutan aroma khas Kuba menjadikannya simbol gaya hidup yang prestisius. Tersedia dalam kemasan kotak eksklusif berisi 3 tube, menjadikannya pilihan hadiah yang sempurna atau koleksi pribadi yang sangat berkelas.",
      en: "Elegance meets classic flavor in Gran Cigarro. Its perfect Parejo form and distinctive Cuban aroma make it a symbol of a prestigious lifestyle. Available in an exclusive box of 3 tubes, it is the perfect gift choice or a highly refined personal collection.",
      ar: "تلتقي الأناقة بالنكهة الكلاسيكية في جران سيجارو. شكله المثالي كباريخو وعطره الكوبي المميز يجعله رمزًا لأسلوب الحياة الراقي. متوفر في علبة حصرية تحتوي على 3 أنابيب، مما يجعله هدية مثالية أو مقتنى شخصيًا بالغ الأناقة.",
    },
    origin: "Havana",
    strength: "Medium",
    price: "Rp 519.000/pack (3 tubes)",
    image: "/images/Gran_cigarro.webp",
  },
  {
    id: "10",
    name: {
      id: "The Ambassador",
      en: "The Ambassador",
      ar: "ذا أمباسادور",
    },
    description: {
      id: "Nikmati perjalanan rasa yang kompleks dari The Ambassador (170mm, ring 48), mulai dari sentuhan toast yang gurih hingga manisnya honey-cocoa yang memikat. Koleksi prestisius ini dikemas sempurna dalam tube individual untuk menjaga kesegaran aromanya, tersedia dalam kemasan kotak eksklusif isi 3 batang.",
      en: "Enjoy the complex flavor journey of The Ambassador (170mm, ring 48), from savory toast touches to the captivating sweetness of honey-cocoa. This prestigious collection is perfectly packaged in individual tubes to preserve its aroma, available in an exclusive box of 3 cigars.",
      ar: "استمتع برحلة النكهات المعقدة لـ ذا أمباسادور (170 ملم، حلقة 48)، من لمسات الخبز المحمص اللذيذة إلى حلاوة العسل والكاكاو الآسرة. تُعبَّأ هذه المجموعة المرموقة بشكل مثالي في أنابيب فردية للحفاظ على عطرها، متوفرة في علبة حصرية تحتوي على 3 سيجارات.",
    },
    origin: "Havana",
    strength: "Medium",
    price: "Rp 580.000/pack (3 tubes)",
    image: "/images/The_Ambassador.webp",
  },
  {
    id: "11",
    name: {
      id: "Don Agusto",
      en: "Don Agusto",
      ar: "دون أغوستو",
    },
    description: {
      id: "Don Agusto Paperpack isi 3 Tubos; perpaduan antara tradisi tembakau Havana terbaik dan kemasan modern yang prestisius. Setiap kotak berisi 3 batang cerutu pilihan dalam balutan tube untuk menjamin kualitas rasa tetap prima hingga hisapan terakhir.",
      en: "Don Agusto Paperpack of 3 Tubos; a blend of the finest Havana tobacco tradition and prestigious modern packaging. Each box contains 3 select cigars wrapped in tubes to ensure the quality of flavor remains prime until the very last draw.",
      ar: "دون أغوستو بابيرباك يحتوي على 3 توبوس؛ مزيج بين أفضل تقاليد تبغ هافانا والتعبئة العصرية المرموقة. تحتوي كل علبة على 3 سيجارات مختارة مُغلَّفة في أنابيب لضمان بقاء جودة النكهة في أعلى مستوياتها حتى آخر نفخة.",
    },
    origin: "Havana",
    strength: "Medium-Full",
    price: "Rp 639.000",
    image: "/images/Don_Agusto.webp",
  },
  {
    id: "12",
    name: {
      id: "Exclusive Gift",
      en: "Exclusive Gift",
      ar: "هدية حصرية",
    },
    description: {
      id: "Sampaikan apresiasi Anda dengan cara yang paling berkelas melalui Cigar Exclusive Gift Set. Tak sekadar cerutu premium, setiap kotak kayu dirancang khusus untuk menjadi kenangan abadi dengan opsi kustomisasi emblem eksklusif dan ukiran pesan personal Anda. Sebuah hadiah mahakarya bagi mereka yang layak mendapatkan penghormatan tertinggi.",
      en: "Express your appreciation in the most refined way with the Cigar Exclusive Gift Set. More than just a premium cigar, each wooden box is specially crafted to become a lasting memory with options for exclusive emblem customization and personal message engraving. A masterpiece gift for those who deserve the highest honor.",
      ar: "عبّر عن تقديرك بأرقى الأساليب من خلال طقم الهدايا الحصري للسيجار. أكثر من مجرد سيجار فاخر، كل علبة خشبية مُصمَّمة خصيصًا لتكون ذكرى خالدة مع خيارات تخصيص الشعار الحصري ونقش الرسائل الشخصية. هدية تحفة فنية لمن يستحق أعلى تقدير.",
    },
    origin: "Havana",
    strength: "Medium-Full",
    price: "Contact us for special price",
    image: "/images/Exclusive_Gift.webp",
  },
];
