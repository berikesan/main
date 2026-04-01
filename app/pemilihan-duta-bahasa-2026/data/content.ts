// Reference site base URL for images
const IMG_BASE = "https://digital-creative.id/wp-content/uploads";

export const EVENT_DATE = "2026-03-07T09:00:00+08:00";

export const EVENT_INFO = {
  title: "TAKLIMAT",
  subtitle: "Finalis Duta Bahasa Provinsi Bali 2026",
  tagline: 'Sastraning Nawasena "Masa Depan Sastra yang Cerah"',
  date: "Sabtu, 7 Maret 2026",
  time: "09.00 WITA - Selesai",
  venue: "Ruang Taksu, Gedung Dharma Negara Alaya Denpasar",
  mapsUrl: "https://maps.app.goo.gl/xoxqF98tR3MvT5QeA",
  sambutan:
    "Pemilihan Duta Bahasa Provinsi Bali merupakan perhelatan yang dilaksanakan oleh Balai Bahasa Provinsi Bali Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) Republik Indonesia dengan bersinergi bersama Duta Bahasa Provinsi Bali sebagai upaya untuk menumbuhkan kesadaran generasi muda terutama dalam ruang lingkup sastra, literasi, dan kebahasaan.",
  invitation:
    "Pada perhelatan tahun ini, kami mengundang saudara/i untuk hadir dalam agenda puncak final Pemilihan Duta Bahasa Provinsi Bali 2026 yang dilaksanakan pada:",
  closing:
    'Demikian undangan ini kami sampaikan. Kami imbau kepada saudara/i agar dapat melakukan konfirmasi kehadiran dengan mengisi formulir "Konfirmasi Kehadiran" di bawah ini. Atas perhatian dan kehadiran saudara/i kami ucapkan terima kasih.',
  slogan:
    "Tri Gatra Bangun Bahasa\nUtamakan bahasa Indonesia\nLestarikan bahasa daerah\nKuasai bahasa asing\nSalam Literasi!",
};

export const IMAGES = {
  logoEvent: `${IMG_BASE}/2024/05/Untitled-16.png`,
  logoDubas: `${IMG_BASE}/2024/05/Logo-Dubas-Bali.png`,
  swastyastu: `${IMG_BASE}/2023/09/swastyastu.png`,
  orgLogos: `${IMG_BASE}/2022/05/2-1024x307.png`,
  santih: `${IMG_BASE}/2024/05/santih-1-768x320.png`,
};

export interface Person {
  name: string;
  title?: string;
  university?: string;
  image: string;
}

export const WINNERS: Person[] = [
  {
    name: "Duta Bahasa Provinsi Bali 2025",
    title: "Duta Bahasa 2025",
    image: `${IMG_BASE}/2024/05/Duta-Bahasa-Provinsi-Bali-2023-scaled.jpg`,
  },
  {
    name: "dr. Ni Putu Elshinthia Suryaningsih, S.Ked",
    title: "Wakil 1",
    image: `${IMG_BASE}/2024/05/Wakil-I-Duta-Bahasa-Provinsi-Bali-2023-scaled.jpg`,
  },
  {
    name: "Ida Ayu Alit Srilaksmi",
    title: "Wakil 2",
    image: `${IMG_BASE}/2024/05/Wakil-II-Duta-Bahasa-Provinsi-Bali-2023-1-scaled.jpg`,
  },
];

export const FINALISTS: Person[] = [
  { name: "Finalis 1", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/1-finalis-1024x1024.png` },
  { name: "Ratu Ayu Allysia Luna Sita Manik Mas", university: "Universitas Pendidikan Ganesha", image: `${IMG_BASE}/2024/05/2-Ratu-Ayu-Allysia-Luna-Sita-Manik-Mas-1024x1024.png` },
  { name: "I Dewa Gede Hadi Nugraha", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/3-I-Dewa-Gede-Hadi-Nugraha-1024x1024.png` },
  { name: "Putu Mayeni Savitri Sastra", university: "Universitas Warmadewa", image: `${IMG_BASE}/2024/05/4-Putu-Mayeni-Savitri-Sastra-1024x1024.png` },
  { name: "Ketut Teguh Virgiawan", university: "Universitas Hindu Negeri", image: `${IMG_BASE}/2024/05/5-Ketut-Teguh-Virgiawan-1024x1024.png` },
  { name: "Ni Putu Jessica Sasi", university: "Universitas Pendidikan Ganesha", image: `${IMG_BASE}/2024/05/6-Ni-Putu-Jessica-Sasi-1024x1024.png` },
  { name: "I Putu Candra Arta Wiguna", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/7-I-Putu-Candra-Arta-Wiguna-1024x1024.png` },
  { name: "Ni Nyoman Ayu Sintya Dewi", university: "Institut Desain & Bisnis Bali", image: `${IMG_BASE}/2024/05/8-Ni-Nyoman-Ayu-Sintya-Dewi-1024x1024.png` },
  { name: "I Putu Aprika Apsarendra Putra", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/9-I-Putu-Aprika-Apsarendra-Putra-1-1024x1024.png` },
  { name: "Ni Komang Sri Krisna Dewi", university: "Universitas Warmadewa", image: `${IMG_BASE}/2024/05/10-Ni-Komang-Sri-Krisna-Dewi-1024x1024.png` },
  { name: "Wayan Gede Adi Suastawan, S.Pd", university: "Universitas Pendidikan Ganesha", image: `${IMG_BASE}/2024/05/11-Wayan-Gede-Adi-Suastawan-S.Pd_-1024x1024.png` },
  { name: "Ni Putu Taris Aprilia Dewi", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/12-Ni-Putu-Taris-Aprilia-Dewi-1024x1024.png` },
  { name: "I Made Doddy Krisna Prayogha", university: "Universitas Pendidikan Ganesha", image: `${IMG_BASE}/2024/05/13-I-Made-Doddy-Krisna-Prayogha-1024x1024.png` },
  { name: "Ayu Gita Pramesthi", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/14-Ayu-Gita-Pramesthi-1024x1024.png` },
  { name: "Komang Danda Widya Anugrah", university: "Universitas Hindu Negeri", image: `${IMG_BASE}/2024/05/15-Komang-Danda-Widya-Anugrah-1024x1024.png` },
  { name: "Gusti Ayu Putu Wiwit Sukmayanti", university: "STIKI Indonesia", image: `${IMG_BASE}/2024/05/16-Gusti-Ayu-Putu-Wiwit-Sukmayanti-1024x1024.png` },
  { name: "Anak Agung Made Maha Prema Putra", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/17-Anak-Agung-Made-Maha-Prema-Putra-1024x1024.png` },
  { name: "Ni Wayan Santi Ariani", university: "Universitas Warmadewa", image: `${IMG_BASE}/2024/05/18-Ni-Wayan-Santi-Ariani-1024x1024.png` },
  { name: "Ida Bagus Made Astawa Ari Putra", university: "Universitas Hindu Negeri", image: `${IMG_BASE}/2024/05/19-Ida-Bagus-Made-Astawa-Ari-Putra-1024x1024.png` },
  { name: "Zahwa Alya Arifin", university: "Universitas Udayana", image: `${IMG_BASE}/2024/05/20-Zahwa-Alya-Arifin-1024x1024.png` },
];

export const GALLERY_IMAGES = [
  `${IMG_BASE}/2024/05/JGN4331-scaled.jpeg`,
  `${IMG_BASE}/2024/05/DCL03791-scaled.jpg`,
  `${IMG_BASE}/2024/05/DCL03955-1-scaled.jpg`,
  `${IMG_BASE}/2024/05/DCL04135-scaled.jpg`,
  `${IMG_BASE}/2024/05/DCL02390-scaled.jpg`,
  `${IMG_BASE}/2024/05/DCL02412-scaled.jpg`,
  `${IMG_BASE}/2024/05/DCL02413-scaled.jpg`,
  `${IMG_BASE}/2024/05/DCL02991-scaled.jpg`,
  `${IMG_BASE}/2024/05/DCL02993-scaled.jpg`,
];
