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
    description: "Cerutu premium dengan cita rasa woody, earthy dan spicy dengan warna cokelat hitam yang maskulin.",
    origin: "Havana",
    strength: "Medium",
    price: "Rp 1.499.000",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Gran Habano Vintage",
    description: "Dibalut daun tembakau pilihan dengan aroma khas tanah dan rempah.",
    origin: "Honduras",
    strength: "Full",
    price: "Rp 380.000",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Oro Fino Petit",
    description: "Cerutu ringan dengan sentuhan manis dan aroma bunga yang halus.",
    origin: "Dominika",
    strength: "Mild",
    price: "Rp 250.000",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Tierra Noble Robusto",
    description: "Robusto klasik dengan karakter kuat dan finish yang panjang.",
    origin: "Nikaragua",
    strength: "Full",
    price: "Rp 520.000",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Corona de Oro",
    description: "Corona elegan dengan perpaduan rasa kopi dan karamel.",
    origin: "Kuba",
    strength: "Medium",
    price: "Rp 350.000",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    name: "Selva Oscura Toro",
    description: "Toro gelap dengan intensitas tinggi dan aroma lada hitam.",
    origin: "Meksiko",
    strength: "Full",
    price: "Rp 480.000",
    image: "/placeholder.svg",
  },
  {
    id: "7",
    name: "Brisa del Mar Churchill",
    description: "Churchill premium dengan rasa creamy dan sentuhan garam laut.",
    origin: "Dominika",
    strength: "Medium",
    price: "Rp 420.000",
    image: "/placeholder.svg",
  },
  {
    id: "8",
    name: "Fuego Sagrado Lancero",
    description: "Lancero langka dengan kompleksitas rasa dan aroma kayu cedar.",
    origin: "Honduras",
    strength: "Medium-Full",
    price: "Rp 550.000",
    image: "/placeholder.svg",
  },
];
