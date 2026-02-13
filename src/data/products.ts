export interface Product {
  id: string;
  name: string;
  description: string;
  origin: string;
  strength: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Pilar Gold Exclusive Perla",
    description: "Cerutu Parejo Premium dengan panjang 102mm dan ring 40, menonjolkan profil rasa woody, earthy, dan spicy dengan balutan warna cokelat hitam yang maskulin. Karakter rasa yang kuat dan intens ini tersimpan sempurna di dalam kotak eksklusif berisi 10 batang berkualitas.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 1.499.000",
    image: "/images/Pilar_Gold_Exclusive_Perla.webp",
  },
  {
    id: "2",
    name: "Pilar Gold Exclusive Mareva",
    description: "Cerutu Torpedo Premium yang dibalut daun tembakau pilihan (panjang 129mm, ring 42), menawarkan simfoni rasa creamy, nutty, woody, dan spicy. Kemewahan rasa yang kompleks ini tersaji secara elegan dalam balutan kotak eksklusif berisi 10 cerutu pilihan.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 1.699.000",
    image: "/images/Pilar_Gold_Exclusive_Mareva.webp",
  },
  {
    id: "3",
    name: "Pilar Gold Exclusive Grand Corona",
    description: "Cerutu Parejo Premium dengan dimensi panjang 138mm dan ring 48, menghadirkan pengalaman menghisap yang lembut dengan catatan rasa creamy, sweety, nutty, dan woody. Koleksi istimewa ini dikemas rapi dalam kotak eksklusif yang berisi 10 batang cerutu premium.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 2.499.000",
    image: "/images/Pilar_Gold_Exclusive_GrandCorona.webp",
  },
  {
    id: "4",
    name: "Pilar Panatella Gold",
    description: "Hadir dengan balutan daun tembakau berkualitas, Panatella cigarillos premium (120mm, ring 33) menawarkan perpaduan rasa woody dan floral yang halus. Produk ini dikemas secara eksklusif dalam kotak berisi 2 batang untuk menjaga kesegaran aromanya.",
    origin: "Havana",
    strength: "Mild to Medium",
    price: "Rp 249.000",
    image: "/images/Pilar_Panatella_Gold.webp",
  },
  {
    id: "5",
    name: "Pilar Panatella Silver",
    description: "Nikmati mahakarya tembakau Havana dalam wujud Panatella Parejo yang elegan. Dengan panjang 108mm dan ring 38, setiap hisapannya memberikan profil rasa soft, woody, dan creamy yang konsisten. Hadir dalam kemasan kotak eksklusif berisi 2 cerutu untuk menjaga kesegaran dan cita rasa autentiknya.",
    origin: "Havana",
    strength: "Mild to Medium",
    price: "Rp 289.000",
    image: "/images/Pilar_Panatella_Silver.webp",
  },
  {
    id: "6",
    name: "BIN Sakera Piramides",
    description: "Piramide premium dengan karakter tembakau matang dan aroma khas Kuba, hadir dalam ukuran 160mm dengan ring 54. Dikemas secara istimewa dalam tube pelindung untuk menjaga kesegaran aromanya, koleksi ini tersaji rapi dalam kotak eksklusif yang berisi 3 batang cerutu pilihan.",
    origin: "Havana",
    strength: "Medium to Full",
    price: "Rp 899.000",
    image: "/images/BIN_Sakera_Piramides.webp",
  },
  {
    id: "7",
    name: "BIN Classy Cigar",
    description: "Classy Cigar Parejo; harmoni aroma tembakau Kuba dalam ukuran 124mm dan ring 50 yang prestisius. Tersaji sempurna dalam kemasan kotak eksklusif berisi 3 tube, menjamin kualitas dan aroma tetap terjaga hingga ke tangan Anda.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 699.000",
    image: "/images/BIN_Classy_Cigar.webp",
  },
  {
    id: "8",
    name: "Gran Cigarro",
    description: "Elegansi bertemu dengan cita rasa klasik pada Gran Cigarro. Parejo sempurna dan balutan aroma khas Kuba menjadikannya simbol gaya hidup yang prestisius. Tersedia dalam kemasan kotak eksklusif berisi 3 tube, menjadikannya pilihan hadiah yang sempurna atau koleksi pribadi yang sangat berkelas.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 699.000",
    image: "/images/Gran_cigarro.webp",
  },
  {
    id: "9",
    name: "The Ambassador",
    description: "Nikmati perjalanan rasa yang kompleks dari The Ambassador (170mm, ring 48), mulai dari sentuhan toast yang gurih hingga manisnya honey-cocoa yang memikat. Koleksi prestisius ini dikemas sempurna dalam tube individual untuk menjaga kesegaran aromanya, tersedia dalam kemasan kotak eksklusif isi 3 batang.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 550.000",
    image: "/images/The_Ambassador.webp",
  },
  {
    id: "10",
    name: "Don Agusto",
    description: "Don Agusto Paperpack isi 3 Tubos; perpaduan antara tradisi tembakau Havana terbaik dan kemasan modern yang prestisius. Setiap kotak berisi 3 batang cerutu pilihan dalam balutan tube untuk menjamin kualitas rasa tetap prima hingga hisapan terakhir.",
    origin: "Havana",
    strength: "Medium-Full",
    price: "Rp 550.000",
    image: "/images/Don_Agusto.webp",
  },
  {
    id: "11",
    name: "Exclusive Gift",
    description: "Sampaikan apresiasi Anda dengan cara yang paling berkelas melalui Cigar Exclusive Gift Set. Tak sekadar cerutu premium, setiap kotak kayu dirancang khusus untuk menjadi kenangan abadi dengan opsi kustomisasi emblem eksklusif dan ukiran pesan personal Anda. Sebuah hadiah mahakarya bagi mereka yang layak mendapatkan penghormatan tertinggi.",
    origin: "Havana",
    strength: "Medium-Full",
    price: "Contact us for special price",
    image: "/images/Exclusive_Gift.webp",
  },
];
