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
        #price: "Rp 1.499.000",
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
            id: "C99",
            en: "C99",
            ar: "سي 99",
        },
        description: {
            id: "Elegant Box Pressed Cigar, kelembutan rasa Connecticut yang extra mild dalam dimensi 99mm dan ring 33 yang ramping. Tersedia dalam pilihan kemasan kotak kayu isi 16 atau acrylic isi 20 yang modern, memastikan setiap batang cerutu tetap presisi dan kaya aroma.",
            en: "An Elegant Box Pressed Cigar offering the extra mild smoothness of Connecticut tobacco in a sleek 99mm length with a ring gauge of 33. Available in a wooden box of 16 or a modern acrylic case of 20, ensuring every cigar remains precise and rich in aroma.",
            ar: "سيجار بوكس بريسد أنيق يقدم نعومة تبغ كونيتيكت فائقة النعومة بطول 99 ملم وحلقة 33 رشيقة. متوفر في علبة خشبية تحتوي على 16 أو علبة أكريليك عصرية تحتوي على 20، لضمان بقاء كل سيجار دقيقًا وغنيًا بالعطر.",
        },
        origin: "Connecticut",
        strength: "Light",
        price: "Rp 295.000",
        image: "/images/c99.webp",
    },
    {
        id: "7",
        name: {
            id: "NFC Red",
            en: "NFC Red",
            ar: "إن إف سي ريد",
        },
        description: {
            id: "Modern Box Pressed Cigar, perpaduan harmonis tembakau Indonesia dan Havana short filler dalam balutan panjang 108mm yang elegan. Dengan kekuatan mild dan ring 33, cerutu ini menawarkan Cuban Taste yang pas untuk durasi 15-20 menit, tersaji praktis dalam kemasan paper pack isi 4 batang yang mudah dibawa ke mana saja.",
            en: "A Modern Box Pressed Cigar blending Indonesian and Havana short filler tobacco in an elegant 108mm length. With a mild strength and ring gauge of 33, it delivers an authentic Cuban taste for 15-20 minutes, conveniently packed in a paper pack of 4 cigars for on-the-go enjoyment.",
            ar: "سيجار بوكس بريسد عصري يمزج تبغ إندونيسيا وهافانا شورت فيلر بطول 108 ملم أنيق. بقوة خفيفة وحلقة 33، يقدم مذاقًا كوبيًا أصيلًا لمدة 15-20 دقيقة، معبأ بشكل عملي في عبوة ورقية تحتوي على 4 سيجارات.",
        },
        origin: "Indonesia",
        strength: "Light",
        price: "Rp 45.000",
        image: "/images/nfcred.webp",
    },
    {
        id: "8",
        name: {
            id: "Jember Cigar",
            en: "Jember Cigar",
            ar: "سيجار جمبر",
        },
        description: {
            id: "Authentic Perfecto Cigar, mahakarya tembakau asli Indonesia yang ikonik dengan panjang 125mm dan ring 46. Menawarkan kekayaan rasa lokal yang spesifik melalui perpaduan Long Filler berkualitas tinggi, tersaji elegan dalam pilihan kotak kayu isi 10 atau kemasan kertas isi 5 yang praktis.",
            en: "An Authentic Perfecto Cigar — an iconic masterpiece of genuine Indonesian tobacco at 125mm with a ring gauge of 46. Offering a distinctive richness of local flavors through a high-quality Long Filler blend, elegantly presented in a wooden box of 10 or a practical paper pack of 5.",
            ar: "سيجار بيرفيكتو أصيل — تحفة فنية أيقونية من التبغ الإندونيسي الأصيل بطول 125 ملم وحلقة 46. يقدم ثراءً مميزًا من النكهات المحلية من خلال مزيج لونغ فيلر عالي الجودة، يُقدَّم بأناقة في علبة خشبية تحتوي على 10 أو عبوة ورقية عملية تحتوي على 5.",
        },
        origin: "Indonesia",
        strength: "Light",
        price: "Rp 280.000",
        image: "/images/jember.webp",
    },
    {
        id: "9",
        name: {
            id: "Don Juan",
            en: "Don Juan",
            ar: "دون خوان",
        },
        description: {
            id: "Parejo klasik, cerutu ini memiliki Ring 40 yang pas dan nyaman di jemari, serta panjang 103 mm yang ideal untuk sesi singkat yang intens. Dibuat dari perpaduan Full Havana Tobacco dan dikemas eksklusif dalam kotak kayu berisi 5 batang untuk menjaga kesegaran rasa otentik Kuba tetap terjaga hingga hisapan terakhir.",
            en: "A classic Parejo cigar with a ring gauge of 40 that fits comfortably in the fingers, and a length of 103mm ideal for short yet intense sessions. Crafted from a blend of Full Havana Tobacco and exclusively packaged in a wooden box of 5 cigars to preserve the authentic Cuban flavor until the very last draw.",
            ar: "سيجار باريخو كلاسيكي بحلقة 40 يتناسب بشكل مريح بين الأصابع، وبطول 103 ملم مثالي للجلسات القصيرة والمكثفة. مصنوع من مزيج تبغ هافانا الكامل ومعبأ حصريًا في علبة خشبية تحتوي على 5 سيجارات للحفاظ على النكهة الكوبية الأصيلة حتى آخر نفخة.",
        },
        origin: "Havana",
        strength: "Light",
        price: "Rp 169.000/pack (5 cigars)",
        image: "/images/DonJuan.webp",
    },
    {
        id: "10",
        name: {
            id: "El Nino",
            en: "El Nino",
            ar: "إل نينو",
        },
        description: {
            id: "Exquisite Cigarillos perpaduan rasa woody, creamy, serta sentuhan karamel dan floral yang elegan dalam ukuran 104mm. Dengan ring 27 yang ramping, cerutu ini menggunakan tembakau Havana berkualitas tinggi untuk memberikan pengalaman menghisap yang halus selama 14-16 menit. Tersaji sempurna dalam kotak kayu eksklusif berisi 20 batang, menjamin keaslian cita rasa tetap terjaga.",
            en: "Exquisite Cigarillos blending woody, creamy, caramel, and floral notes in an elegant 104mm size. With a slim ring gauge of 27, these cigarillos use high-quality Havana tobacco for a smooth 14-16 minute smoking experience. Perfectly presented in an exclusive wooden box of 20, ensuring authentic flavor is preserved.",
            ar: "سيجاريلوس رائعة تمزج نكهات خشبية وكريمية وكراميل وزهرية بأناقة في حجم 104 ملم. بحلقة 27 رشيقة، تستخدم تبغ هافانا عالي الجودة لتجربة تدخين ناعمة لمدة 14-16 دقيقة. تُقدَّم بشكل مثالي في علبة خشبية حصرية تحتوي على 20، لضمان الحفاظ على النكهة الأصيلة.",
        },
        origin: "Havana",
        strength: "Light Medium",
        price: "Rp 300.000",
        image: "/images/elnino.webp",
    },
    {
        id: "11",
        name: {
            id: "Boslucks Half Corona",
            en: "Boslucks Half Corona",
            ar: "بوسلاكس هاف كورونا",
        },
        description: {
            id: "Premium Parejo Cigar, perpaduan rasa earthy dan spicy yang menantang dalam dimensi 127mm dan ring 44 yang mantap. Menggunakan Long Filler tembakau Havana pilihan dengan kekuatan medium, cerutu ini tersaji elegan dalam pilihan kotak kayu isi 10 atau kemasan kertas isi 5 untuk kenikmatan durasi 25 menit yang berkesan.",
            en: "A Premium Parejo Cigar with a bold blend of earthy and spicy flavors in a solid 127mm length with a ring gauge of 44. Using select Havana Long Filler tobacco at medium strength, elegantly presented in a wooden box of 10 or a paper pack of 5 for a memorable 25-minute experience.",
            ar: "سيجار باريخو فاخر بمزيج جريء من النكهات الترابية والحارة بطول 127 ملم وحلقة 44 متينة. يستخدم لونغ فيلر تبغ هافانا مختار بقوة متوسطة، يُقدَّم بأناقة في علبة خشبية تحتوي على 10 أو عبوة ورقية تحتوي على 5 لتجربة لا تُنسى لمدة 25 دقيقة.",
        },
        origin: "Havana",
        strength: "Light Medium",
        price: "Rp 570.000",
        image: "/images/boslucks_h.webp",
    },
    {
        id: "12",
        name: {
            id: "Mini Cigar",
            en: "Mini Cigar",
            ar: "ميني سيجار",
        },
        description: {
            id: "Charming Mini Cigarillos, perpaduan rasa woody, creamy, dan karamel yang memikat dalam ukuran praktis 91mm. Dengan ring 22, cerutu ini menawarkan kekuatan medium yang kaya dari short filler tembakau Havana pilihan. Tersaji elegan dalam kemasan Tin (kaleng) berisi 20 batang, menjamin kualitas dan aroma tetap terjaga untuk kenikmatan instan selama 10-12 menit",
            en: "Charming Mini Cigarillos with a captivating blend of woody, creamy, and caramel flavors in a practical 91mm size. With a ring gauge of 22, these cigarillos deliver a rich medium strength from select Havana short filler tobacco. Elegantly packaged in a tin of 20, ensuring quality and aroma are preserved for a 10-12 minute instant indulgence.",
            ar: "سيجاريلوس ميني ساحرة بمزيج آسر من النكهات الخشبية والكريمية والكراميل بحجم عملي 91 ملم. بحلقة 22، تقدم قوة متوسطة غنية من شورت فيلر تبغ هافانا المختار. معبأة بأناقة في علبة معدنية تحتوي على 20، لضمان الحفاظ على الجودة والعطر لمتعة فورية تدوم 10-12 دقيقة.",
        },
        origin: "Havana",
        strength: "Medium",
        price: "Rp 300.000",
        image: "/images/mini_cigar.webp",
    },
    {
        id: "13",
        name: {
            id: "Cigarmaster",
            en: "Cigarmaster",
            ar: "سيجارماستر",
        },
        description: {
            id: "Premium Box Pressed Cigar, keahlian cita rasa Kuba yang intens dalam balutan panjang 114mm dan 30 yang elegan. Dengan kekuatan medium (5/9) dari perpaduan medium filler tembakau Havana pilihan, cerutu ini menawarkan pengalaman menghisap yang padat dan kaya aroma selama 11 menit. Tersaji sempurna dalam kotak kayu eksklusif berisi 16 batang, menjamin kemewahan dan kualitas tetap terjaga hingga ke tangan Anda.",
            en: "A Premium Box Pressed Cigar delivering an intense Cuban flavor experience in an elegant 114mm length with a ring gauge of 30. With medium strength (5/9) from select Havana medium filler tobacco, it offers a dense and aromatic 11-minute smoking session. Perfectly presented in an exclusive wooden box of 16, ensuring luxury and quality are preserved.",
            ar: "سيجار بوكس بريسد فاخر يقدم تجربة نكهة كوبية مكثفة بطول 114 ملم أنيق وحلقة 30. بقوة متوسطة (5/9) من تبغ هافانا ميديوم فيلر المختار، يوفر جلسة تدخين كثيفة وعطرية لمدة 11 دقيقة. يُقدَّم بشكل مثالي في علبة خشبية حصرية تحتوي على 16، لضمان الحفاظ على الفخامة والجودة.",
        },
        origin: "Havana",
        strength: "Medium",
        price: "Rp 315.000",
        image: "/images/cigarmaster.webp",
    },
    {
        id: "14",
        name: {
            id: "Maumere",
            en: "Maumere",
            ar: "مومري",
        },
        description: {
            id: "Classic Parejo Cigar, perpaduan rasa earthy dan spicy yang mendalam dalam dimensi 127mm dan ring 44 yang proporsional. Dengan kekuatan medium dari Long Filler tembakau Havana pilihan, cerutu ini menawarkan pengalaman menghisap yang kaya selama 25 menit. Tersaji eksklusif dalam kotak kayu isi 10 atau kemasan kertas isi 5 yang praktis, menjaga harmoni aroma tetap sempurna hingga Anda nikmati.",
            en: "A Classic Parejo Cigar with a deep blend of earthy and spicy flavors in a proportional 127mm length with a ring gauge of 44. With medium strength from select Havana Long Filler tobacco, it offers a rich 25-minute smoking experience. Exclusively presented in a wooden box of 10 or a practical paper pack of 5, preserving the perfect harmony of aroma.",
            ar: "سيجار باريخو كلاسيكي بمزيج عميق من النكهات الترابية والحارة بطول 127 ملم متناسب وحلقة 44. بقوة متوسطة من لونغ فيلر تبغ هافانا المختار، يقدم تجربة تدخين غنية لمدة 25 دقيقة. يُقدَّم حصريًا في علبة خشبية تحتوي على 10 أو عبوة ورقية عملية تحتوي على 5، للحفاظ على تناغم العطر المثالي.",
        },
        origin: "Havana",
        strength: "Medium",
        price: "Rp 305.000",
        image: "/images/maumere.webp",
    },
    {
        id: "15",
        name: {
            id: "Boslucks Corona",
            en: "Boslucks Corona",
            ar: "بوسلاكس كورونا",
        },
        description: {
            id: "Grand Parejo Cigar, simfoni rasa earthy dan spicy yang intens dalam dimensi 138mm dan ring 48 yang dominan. Menggunakan Long Filler tembakau Havana pilihan dengan kekuatan medium, cerutu ini menawarkan durasi kenikmatan hingga 27 menit. Tersedia dalam kemasan kotak kayu isi 10, paper pack isi 5, atau foil satuan untuk menjaga kesegaran aroma di setiap kesempatan.",
            en: "A Grand Parejo Cigar with an intense symphony of earthy and spicy flavors in a dominant 138mm length with a ring gauge of 48. Using select Havana Long Filler tobacco at medium strength, it delivers up to 27 minutes of enjoyment. Available in a wooden box of 10, paper pack of 5, or individual foil wraps to keep the aroma fresh for every occasion.",
            ar: "سيجار جراند باريخو بسيمفونية مكثفة من النكهات الترابية والحارة بطول 138 ملم مهيمن وحلقة 48. يستخدم لونغ فيلر تبغ هافانا المختار بقوة متوسطة، ويقدم متعة تصل إلى 27 دقيقة. متوفر في علبة خشبية تحتوي على 10، أو عبوة ورقية تحتوي على 5، أو رقائق فردية للحفاظ على نضارة العطر في كل مناسبة.",
        },
        origin: "Havana",
        strength: "Medium",
        price: "Rp 580.000",
        image: "/images/boslucks_c.webp",
    },
    {
        id: "16",
        name: {
            id: "The Ambassador Grand Corona",
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
        price: "Rp 589.000/pack (3 tubes)",
        image: "/images/ambassador_g.webp",
    },
    {
        id: "17",
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
        price: "Rp 439.000/pack (3 tubes)",
        image: "/images/gran_cigarro.webp",
    },
    {
        id: "18",
        name: {
            id: "Boslucks Escuro 44",
            en: "Boslucks Escuro 44",
            ar: "بوسلاكس إسكورو 44",
        },
        description: {
            id: "Premium Parejo Cigar with Tail, keunikan rasa mild to medium yang memadukan sensasi earthy dan spicy dalam ukuran 111mm dan ring 44 yang elegan. Dibalut dengan Broadleaf Tobacco wrapper yang eksklusif dan Long Filler Havana pilihan, cerutu best seller ini menawarkan durasi kenikmatan 27 menit. Tersaji istimewa dalam kemasan kotak isi 6 batang yang menjamin kualitas serta kemewahan cita rasa tetap terjaga.",
            en: "A Premium Parejo Cigar with Tail, featuring a unique mild-to-medium blend of earthy and spicy sensations in an elegant 111mm length with a ring gauge of 44. Wrapped in an exclusive Broadleaf Tobacco wrapper with select Havana Long Filler, this best seller offers 27 minutes of enjoyment. Specially presented in a box of 6, ensuring quality and flavor luxury are preserved.",
            ar: "سيجار باريخو فاخر بذيل، يتميز بمزيج فريد من القوة الخفيفة إلى المتوسطة مع أحاسيس ترابية وحارة بطول 111 ملم أنيق وحلقة 44. ملفوف بلفافة تبغ برودليف حصرية ولونغ فيلر هافانا مختار، يقدم هذا المنتج الأكثر مبيعًا متعة لمدة 27 دقيقة. يُقدَّم بشكل مميز في علبة تحتوي على 6 لضمان الحفاظ على الجودة وفخامة النكهة.",
        },
        origin: "Havana",
        strength: "Medium",
        price: "Rp 352.000",
        image: "/images/boslucks_e.webp",
    },
    {
        id: "19",
        name: {
            id: "Boslucks Robusto",
            en: "Boslucks Robusto",
            ar: "بوسلاكس روبوستو",
        },
        description: {
            id: "Classy Cigar Parejo, harmoni aroma tembakau Kuba dalam ukuran 124mm dan ring 50 yang prestisius. Dengan profil rasa medium to full yang kaya akan nuansa woody, nutty, dan spicy, cerutu best seller ini menawarkan durasi kenikmatan hingga 33 menit. Tersaji sempurna dalam kemasan kotak kayu isi 10 atau kotak kertas eksklusif isi 3, menjaga kualitas dan aroma tetap terjaga hingga ke tangan Anda.",
            en: "A Classy Cigar Parejo with a harmonious blend of Cuban tobacco aromas in a prestigious 124mm size with a ring gauge of 50. Featuring a rich medium-to-full flavor profile of woody, nutty, and spicy notes, this best seller offers up to 33 minutes of enjoyment. Perfectly presented in a wooden box of 10 or an exclusive paper box of 3, preserving quality and aroma.",
            ar: "سيجار كلاسي باريخو بمزيج متناسق من عطور التبغ الكوبي بحجم مرموق 124 ملم وحلقة 50. يتميز بملف نكهة غني من المتوسط إلى الكامل مع نكهات خشبية ومكسرات وحارة، يقدم هذا المنتج الأكثر مبيعًا متعة تصل إلى 33 دقيقة. يُقدَّم بشكل مثالي في علبة خشبية تحتوي على 10 أو علبة ورقية حصرية تحتوي على 3، للحفاظ على الجودة والعطر.",
        },
        origin: "Havana",
        strength: "Medium Full",
        price: "Rp 590.000",
        image: "/images/boslucks_r.webp",
    },
    {
        id: "20",
        name: {
            id: "Classy Cigar",
            en: "Classy Cigar",
            ar: "كلاسي سيجار",
        },
        description: {
            id: "Classy Cigar Parejo, harmoni aroma tembakau Kuba dalam ukuran 124mm dan ring 50 yang prestisius. Tersaji sempurna dalam kemasan kotak eksklusif berisi 3 tube, menjamin kualitas dan aroma tetap terjaga hingga ke tangan Anda.",
            en: "Classy Cigar Parejo — a harmonious blend of Cuban tobacco aromas in a prestigious 124mm size with a ring gauge of 50. Perfectly presented in an exclusive box of 3 tubes, guaranteeing quality and aroma are preserved until they reach your hands.",
            ar: "كلاسي سيجار باريخو — مزيج متناسق من عطور التبغ الكوبي بحجم مرموق 124 ملم وحلقة 50. يُقدَّم بشكل مثالي في علبة حصرية تحتوي على 3 أنابيب، مما يضمن الحفاظ على الجودة والعطر حتى يصل إلى يديك.",
        },
        origin: "Havana",
        strength: "Medium Full",
        price: "Rp 469.000/pack (3 tubes)",
        image: "/images/classy_cigar.webp",
    },
    {
        id: "21",
        name: {
            id: "Don Agusto",
            en: "Don Agusto",
            ar: "دون أغوستو",
        },
        description: {
            id: "Premium Parejo Cigar, simfoni cita rasa full body yang kaya dengan nuansa woody, nutty, dan spicy dalam dimensi 140mm yang mengesankan. Dengan ring 54 yang prestisius dan Long Filler tembakau Havana pilihan, cerutu ini menawarkan durasi kenikmatan mendalam hingga 50 menit. Tersaji sempurna dalam pilihan kemasan kotak kayu isi 10, isi 5, atau kemasan tube satuan yang eksklusif, menjamin kualitas dan aroma tetap terjaga hingga ke tangan Anda.",
            en: "Don Agusto Paperpack of 3 Tubos; a blend of the finest Havana tobacco tradition and prestigious modern packaging. Each box contains 3 select cigars wrapped in tubes to ensure the quality of flavor remains prime until the very last draw.",
            ar: "دون أغوستو بابيرباك يحتوي على 3 توبوس؛ مزيج بين أفضل تقاليد تبغ هافانا والتعبئة العصرية المرموقة. تحتوي كل علبة على 3 سيجارات مختارة مُغلَّفة في أنابيب لضمان بقاء جودة النكهة في أعلى مستوياتها حتى آخر نفخة.",
        },
        origin: "Havana",
        strength: "Full",
        price: "Rp 639.000",
        image: "/images/don_agusto.webp",
    },
    {
        id: "22",
        name: {
            id: "El Bomba",
            en: "El Bomba",
            ar: "إل بومبا",
        },
        description: {
            id: "Premium Parejo Cigar, ledakan cita rasa woody, karamel, dan nutty yang intens dalam ukuran 105mm dengan ring gauge 58 yang sangat mantap. Menggunakan Long Filler Havana Tobacco (Seco dan Ligero) dengan kekuatan strong, cerutu ini dirancang untuk kepuasan durasi 34 menit. Tersaji eksklusif dalam kotak kayu berisi 5 batang, menghadirkan kualitas premium bagi para penikmat cerutu sejati.",
            en: "A Premium Parejo Cigar delivering an explosive burst of woody, caramel, and nutty flavors in a 105mm size with a powerful ring gauge of 58. Using Havana Long Filler Tobacco (Seco and Ligero) at strong strength, this cigar is designed for 34 minutes of satisfaction. Exclusively presented in a wooden box of 5, delivering premium quality for true cigar connoisseurs.",
            ar: "سيجار باريخو فاخر يقدم انفجارًا من النكهات الخشبية والكراميل والمكسرات المكثفة بحجم 105 ملم وحلقة 58 قوية. يستخدم لونغ فيلر تبغ هافانا (سيكو وليجيرو) بقوة عالية، مُصمَّم لإرضاء يدوم 34 دقيقة. يُقدَّم حصريًا في علبة خشبية تحتوي على 5، لتقديم جودة فاخرة لعشاق السيجار الحقيقيين.",
        },
        origin: "Havana",
        strength: "Full",
        price: "Rp 640.000",
        image: "/images/elbomba.webp",
    },
    {
        id: "23",
        name: {
            id: "Boslucks Maduro",
            en: "Boslucks Maduro",
            ar: "بوسلاكس مادورو",
        },
        description: {
            id: "Premium Parejo Cigar, simfoni rasa full body dengan nuansa woody, kopi, dan earthy yang mendalam dalam dimensi 118mm dan ring 52 yang dominan. Menggunakan Long Filler Havana Tobacco (Seco dan Ligero) dengan kekuatan 7/9, cerutu ini menawarkan durasi kenikmatan hingga 38 menit. Tersaji eksklusif dalam kotak kayu berisi 6 batang, menghadirkan kualitas premium bagi penikmat cerutu yang mendambakan karakter kuat dan mantap.",
            en: "A Premium Parejo Cigar with a full-body symphony of deep woody, coffee, and earthy notes in a dominant 118mm length with a ring gauge of 52. Using Havana Long Filler Tobacco (Seco and Ligero) at 7/9 strength, it offers up to 38 minutes of enjoyment. Exclusively presented in a wooden box of 6, delivering premium quality for those who crave a bold and powerful character.",
            ar: "سيجار باريخو فاخر بسيمفونية كاملة الجسم من النكهات الخشبية والقهوة والترابية العميقة بطول 118 ملم مهيمن وحلقة 52. يستخدم لونغ فيلر تبغ هافانا (سيكو وليجيرو) بقوة 7/9، ويقدم متعة تصل إلى 38 دقيقة. يُقدَّم حصريًا في علبة خشبية تحتوي على 6، لتقديم جودة فاخرة لمن يتوقون إلى شخصية جريئة وقوية.",
        },
        origin: "Havana",
        strength: "Full",
        price: "Rp 590.000",
        image: "/images/boslucks_m.webp",
    },
    {
        id: "24",
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
        strength: "Medium Full",
        price: "Rp 729.000/pack (3 tubes)",
        image: "/images/sakera_p.webp",
    },
    {
        id: "25",
        name: {
            id: "Stay Gold",
            en: "Stay Gold",
            ar: "ستاي جولد",
        },
        description: {
            id: "Premium Pyramid Cigar, kemewahan cita rasa full body dengan nuansa woody, creamy, serta sentuhan earthy dan spicy yang kompleks dalam ukuran 101mm. Dengan bentuk Pyramid yang artistik dan ring gauge 50, cerutu ini menggunakan wrapper Maduro Havana pilihan dengan kekuatan 7/9 untuk durasi kenikmatan 35 menit. Tersaji istimewa dalam kemasan kotak kertas eksklusif isi 3 batang, menghadirkan standar tertinggi bagi penikmat cerutu premium.",
            en: "A Premium Pyramid Cigar offering a luxurious full-body experience with complex woody, creamy, earthy, and spicy notes in a 101mm size. With an artistic Pyramid shape and a ring gauge of 50, it features a select Maduro Havana wrapper at 7/9 strength for 35 minutes of enjoyment. Specially presented in an exclusive paper box of 3, setting the highest standard for premium cigar enthusiasts.",
            ar: "سيجار بيراميد فاخر يقدم تجربة فاخرة كاملة الجسم مع نكهات خشبية وكريمية وترابية وحارة معقدة بحجم 101 ملم. بشكله الهرمي الفني وحلقة 50، يتميز بلفافة مادورو هافانا مختارة بقوة 7/9 لمتعة تدوم 35 دقيقة. يُقدَّم بشكل مميز في علبة ورقية حصرية تحتوي على 3، لتقديم أعلى المعايير لعشاق السيجار الفاخر.",
        },
        origin: "Havana",
        strength: "Full",
        price: "Rp 370.000",
        image: "/images/stay_gold.webp",
    },
    {
        id: "26",
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
  {
        id: "27",
        name: {
            id: "Bulk quantity",
            en: "Partnership & Exclusive Corporate Offers",
            ar: "",
        },
        description: {
            id: "Untuk pembelian dalam jumlah banyak atau kebutuhan korporasi, kami menyediakan layanan khusus dengan harga kompetitif. Silakan hubungi tim kami melalui WhatsApp yang tertera di halaman ini untuk konsultasi cepat, atau kirimkan permintaan Quotation (Penawaran Harga) resmi melalui Email kami. Kami siap melayani kebutuhan stok bisnis atau acara spesial Anda dengan pelayanan profesional.",
            en: "",
            ar: "",
        },
        origin: "As Request",
        strength: "As Request",
        price: "Contact us for special price",
        image: "/images/Exclusive_Gift.webp",
    },
];
