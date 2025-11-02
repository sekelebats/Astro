export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "10-tips-meningkatkan-produktivitas-kerja-di-era-digital",
    title: "10 Tips Meningkatkan Produktivitas Kerja di Era Digital",
    excerpt: "Bekerja di era digital membutuhkan strategi khusus. Pelajari 10 tips efektif untuk meningkatkan produktivitas Anda dan mencapai work-life balance yang lebih baik...",
    content: `Di era digital yang serba cepat ini, produktivitas menjadi kunci kesuksesan. Berikut adalah 10 tips yang dapat membantu Anda bekerja lebih efisien:

1. Gunakan teknik Pomodoro untuk manajemen waktu
2. Batasi notifikasi smartphone
3. Buat to-do list harian yang realistis
4. Manfaatkan tools produktivitas seperti Notion atau Trello
5. Atur workspace yang nyaman dan minim distraksi

Dengan menerapkan tips-tips ini secara konsisten, Anda akan merasakan peningkatan signifikan dalam produktivitas kerja Anda.`,
    author: "Sarah Johnson",
    date: "2025-10-25",
    category: "Produktivitas",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
  },
  {
    id: 2,
    slug: "panduan-lengkap-memulai-bisnis-online-untuk-pemula",
    title: "Panduan Lengkap Memulai Bisnis Online untuk Pemula",
    excerpt: "Ingin memulai bisnis online tapi bingung harus mulai dari mana? Panduan komprehensif ini akan membantu Anda memahami langkah-langkah fundamental...",
    content: `Memulai bisnis online tidak harus rumit. Berikut panduan lengkapnya:

1. Tentukan niche atau produk yang ingin dijual
2. Riset pasar dan kompetitor
3. Buat business plan sederhana
4. Pilih platform yang tepat (marketplace atau website sendiri)
5. Setup sistem pembayaran dan logistik
6. Mulai marketing di social media

Yang terpenting adalah memulai dengan skala kecil dan terus belajar dari feedback pelanggan.`,
    author: "Michael Chen",
    date: "2025-10-22",
    category: "Bisnis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 3,
    slug: "tren-teknologi-ai-yang-akan-mengubah-dunia-di-2025",
    title: "Tren Teknologi AI yang Akan Mengubah Dunia di 2025",
    excerpt: "Artificial Intelligence terus berkembang pesat. Simak prediksi tren teknologi AI yang akan membawa perubahan besar dalam berbagai industri tahun ini...",
    content: `Teknologi AI di tahun 2025 mengalami perkembangan yang luar biasa:

1. AI Generatif semakin canggih untuk konten kreatif
2. Automation dalam customer service dengan chatbot pintar
3. AI dalam healthcare untuk diagnosis lebih akurat
4. Personalisasi pengalaman pengguna di e-commerce
5. AI untuk sustainability dan climate change

Perubahan ini akan membuka peluang baru sekaligus tantangan dalam adaptasi teknologi.`,
    author: "Dr. Amanda Lee",
    date: "2025-10-18",
    category: "Teknologi",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 4,
    slug: "resep-sehat-menu-diet-mediterranean-untuk-kesehatan-optimal",
    title: "Resep Sehat: Menu Diet Mediterranean untuk Kesehatan Optimal",
    excerpt: "Diet Mediterranean dikenal sebagai salah satu pola makan paling sehat di dunia. Pelajari resep-resep praktis dan manfaatnya untuk kesehatan jangka panjang...",
    content: `Diet Mediterranean fokus pada makanan whole foods dan lemak sehat:

1. Konsumsi banyak sayuran dan buah segar
2. Gunakan olive oil sebagai sumber lemak utama
3. Makan ikan minimal 2x seminggu
4. Batasi daging merah
5. Nikmati kacang-kacangan dan biji-bijian

Pola makan ini terbukti menurunkan risiko penyakit jantung dan meningkatkan kualitas hidup.`,
    author: "Chef Maria Rodriguez",
    date: "2025-10-15",
    category: "Kesehatan",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
  },
  {
    id: 5,
    slug: "strategi-content-marketing-yang-efektif-di-media-sosial",
    title: "Strategi Content Marketing yang Efektif di Media Sosial",
    excerpt: "Content is king, tapi distribution is queen. Temukan strategi jitu untuk membuat konten yang engaging dan meningkatkan reach di berbagai platform sosial media...",
    content: `Content marketing yang efektif memerlukan strategi matang:

1. Kenali audience dan pain points mereka
2. Buat content calendar yang konsisten
3. Variasikan format konten (video, carousel, infografis)
4. Gunakan storytelling yang relatable
5. Engage dengan audience melalui komentar dan DM
6. Analisis performa dan optimize

Konsistensi dan autentisitas adalah kunci sukses content marketing di era digital ini.`,
    author: "David Thompson",
    date: "2025-10-12",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80"
  },
  {
    id: 6,
    slug: "5-aplikasi-produktivitas-wajib-untuk-remote-worker",
    title: "5 Aplikasi Produktivitas Wajib untuk Remote Worker",
    excerpt: "Remote work membutuhkan tools yang tepat. Temukan 5 aplikasi produktivitas yang akan membuat pekerjaan remote Anda lebih efisien dan terorganisir...",
    content: `Bekerja remote memerlukan tools yang tepat untuk tetap produktif:

1. Notion untuk dokumentasi dan project management
2. Slack untuk komunikasi tim yang efektif
3. Toggl untuk time tracking
4. Zoom untuk video conference berkualitas
5. Todoist untuk task management personal

Dengan kombinasi tools ini, remote work akan lebih mudah dan produktif.`,
    author: "Sarah Johnson",
    date: "2025-10-10",
    category: "Produktivitas",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
  },
  {
    id: 7,
    slug: "membangun-personal-brand-di-era-digital",
    title: "Membangun Personal Brand di Era Digital",
    excerpt: "Personal branding bukan hanya untuk influencer. Pelajari cara membangun personal brand yang kuat dan autentik untuk kemajuan karir Anda...",
    content: `Personal brand adalah aset penting di era digital:

1. Tentukan value proposition Anda
2. Konsisten dalam messaging di semua platform
3. Share knowledge dan expertise secara regular
4. Network dengan profesional di industri Anda
5. Be authentic dan tunjukkan personality

Personal brand yang kuat membuka banyak peluang karir dan bisnis.`,
    author: "David Thompson",
    date: "2025-10-08",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
  }
];

export const categories = ["Semua", "Produktivitas", "Bisnis", "Teknologi", "Kesehatan", "Marketing"];
