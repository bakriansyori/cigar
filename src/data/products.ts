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
    description: "Cerutu parejo premium dengan panjang 102mm dan ring 40 yang bercita rasa woody, earthy dan spicy dengan warna cokelat hitam yang maskulin.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 1.499.000",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Pilar Gold Exclusive Mareva",
    description: "Cerutu torpedo premium dibalut daun tembakau pilihan dengan panjang 129mm ring 42, bercita rasa creamy, nutty, woody dan spicy.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 1.699.000",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Pilar Gold Exclusive Grand Corona",
    description: "Cerutu parejo premium dengan panjang 138mm dan ring 48 bercita rasa creamy, sweety, nutty dan woody.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 2.499.000",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Pilar Panatella Gold",
    description: "Panatella cigarillos premium memiliki panjang 120mm dan ring 33 dengan karakter lembut bercita rasa woody, creamy, floral.",
    origin: "Havana",
    strength: "Mild to Medium",
    price: "Rp 2500.000",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Pilar Panatella Silver",
    description: "Panatella Parejo elegan berukuran 108mm dan ring 38 dengan perpaduan rasa woody, creamy dan coffee memberikan kenikmatan tiada duanya.",
    origin: "Havana",
    strength: "Mild to Medium",
    price: "Rp 290.000",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    name: "BIN Sakera Piramides",
    description: "Piramide dengan tembakau yang lebih matang dan aroma khas tembakau kuba berukuran 160mm dan ring 54 dibungkus dengan tube sehingga cita rasa tembakau terjaga.",
    origin: "Havana",
    strength: "Medium to Full",
    price: "Rp 900.000",
    image: "/placeholder.svg",
  },
  {
    id: "7",
    name: "BIN Classy Cigar",
    description: "Parejo berukuran 124mm dengan ring 50 dan aroma khas tembakau kuba.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 700.000",
    image: "/placeholder.svg",
  },
  {
    id: "8",
    name: "Gran Cigarro",
    description: "Parejo berukuran 136mm dan ring 48 ter.",
    origin: "Honduras",
    strength: "Medium-Full",
    price: "Rp 550.000",
    image: "/placeholder.svg",
  },
  {
    id: "9",
    name: "Fuego Sagrado Lancero",
    description: "Lancero langka dengan kompleksitas rasa dan aroma kayu cedar.",
    origin: "Honduras",
    strength: "Medium-Full",
    price: "Rp 550.000",
    image: "/placeholder.svg",
  },
];
