import { BodyMenu } from "@/types/homepage/bodymenu";
import { CardData } from "@/types/homepage/carddatas";
import { navItem } from "@/types/homepage/navbar"
import { SliderProps } from "@/types/homepage/slider"
import { Berita } from "@/types/homepage/berita"

export const Nav_Items: navItem[] = [
    {label: "Beranda", href: "/"},
    {label: "Profil", href: "/profil"},
    {label: "Layanan", href: "/layanan"},
    {label: "Penunjang", href: "/penunjang"},
    {label: "Informasi Pengadaan", href: "/informasi-pengadaan"},
    {label: "Informasi Publik", href: "/informasi-publik"},
    {label: "Kontak", href: "/kontak"},
];

export const SLIDES: SliderProps[] = [
    {
        id: 1,
        imageUrl: "https://plus.unsplash.com/premium_photo-1681995284211-b0ea14a73cbc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
        title: "RSUD Cideres",
        description: "Memberikan layanan kesehatan terbaik kepada masyarakat"
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        title: "Fasilitas Lengkap & Modern",
        description: "Didukung fasilitas lengkap, kami memastikan layanan medis yang optimal untuk seluruh keluarga."
    },
    {
        id: 3,
        imageUrl: "https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
        title: "Dokter & Tenaga Medis Berkualitas",
        description: "Kami siap melayani Anda dengan ramah serta mengutamakan kenyamanan dan keselamatan pasien."
    }
]

export const BoyMenus: BodyMenu[] = [
    {
        title: "Pendaftaran Online",
        buttonText: "Daftar Sekarang"
    },
    {
        title: "Informasi Dokter",
        buttonText: "Lihat Dokter"
    },
    {
        title: "Informasi Tempat Tidur",
        buttonText: "Lihat Tempat Tidur"
    },
    {
        title: "Jadwal Poliklinik",
        buttonText: "Lihat Jadwal"
    },
]

export const cardData: CardData[] = [
    {
      title: "Dokter Berkualitas",
      subtitle: "KESEHATAN ANDA PRIORITAS",
      description: "Kami mengutamakan pasien dengan pelayanan terbaik. Dengan dokter yang berpengalaman dan tenaga medis profesional.",
    },
    {
      title: "Layanan 24 Jam",
      subtitle: "PERAWATAN KUALITAS TERBAIK",
      description: "Menyediakan layanan kesehatan 24 jam dengan standar tinggi. Tim medis kami siap memberikan perawatan profesional kapan pun.",
    },
    {
      title: "Selalu Hadir untuk Anda",
      subtitle: "INSTALASI GAWAT DARURAT (IGD)",
      description: "Siap melayani kebutuhan darurat dengan cepat dan tepat. Tim medis berpengalaman selalu siaga 24 jam memberikan penanganan pasien kondisi darurat.",
    },
  ];

export const beritaData: Berita[] = [
    {
        id: 1,
        judul: "RSUD Cideres Luncurkan Layanan Rawat Jalan Digital",
        isi: "Rumah Sakit Umum Daerah (RSUD) Cideres resmi meluncurkan sistem pendaftaran rawat jalan berbasis digital. Melalui aplikasi ini, pasien dapat mendaftar dari rumah tanpa harus antre di loket. Direktur RSUD Cideres menyebut inovasi ini diharapkan dapat mempercepat proses administrasi dan meningkatkan kenyamanan pasien.",
        gambar: "https://plus.unsplash.com/premium_photo-1664298484957-0105d6f398cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        tanggal: "2025-10-15",
        link: "Baca Selengkapnya"
    },
    {
        id: 2,
        judul: "Program Donor Darah Bersama PMI dan RSUD Cideres",
        isi: "Dalam rangka memperingati Hari Kesehatan Nasional, RSUD Cideres bekerja sama dengan Palang Merah Indonesia (PMI) menggelar kegiatan donor darah massal. Acara ini berhasil mengumpulkan lebih dari 150 kantong darah yang akan disalurkan ke pasien-pasien yang membutuhkan di wilayah Majalengka.",
        gambar: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1016",
        tanggal: "2025-10-28",
        link: "Baca Selengkapnya"
    },
    {
        id: 3,
        judul: "Pelatihan Higienitas untuk Tenaga Kesehatan RSUD Cideres",
        isi: "RSUD Cideres mengadakan pelatihan rutin mengenai higienitas dan pengendalian infeksi bagi tenaga kesehatan. Kegiatan ini bertujuan memastikan seluruh staf rumah sakit menerapkan protokol kebersihan yang optimal, guna menjaga keselamatan pasien dan petugas medis.",
        gambar: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=870&auto=format&fit=crop",
        tanggal: "2025-09-10",
        link: "Baca Selengkapnya"
    },
    {
        id: 4,
        judul: "Inovasi Layanan Kesehatan Anak di RSUD Cideres",
        isi: "Unit Kesehatan Anak RSUD Cideres kini dilengkapi dengan ruang bermain edukatif untuk membantu anak-anak merasa lebih nyaman saat menjalani perawatan. Selain itu, dokter anak juga memberikan edukasi kepada orang tua mengenai pentingnya imunisasi dan gizi seimbang.",
        gambar: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=870&auto=format&fit=crop",
        tanggal: "2025-08-20",
        link: "Baca Selengkapnya"
    },
    {
        id: 5,
        judul: "RSUD Cideres Tambah 20 Tempat Tidur untuk Ruang Rawat Inap",
        isi: "Dalam upaya meningkatkan kapasitas pelayanan, RSUD Cideres menambah 20 tempat tidur baru di ruang rawat inap kelas III. Peningkatan ini dilakukan untuk menampung lonjakan pasien dan memberikan pelayanan yang lebih memadai bagi masyarakat sekitar.",
        gambar: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=870&auto=format&fit=crop",
        tanggal: "2025-07-05",
        link: "Baca Selengkapnya"
    },
    {
        id: 6,
        judul: "RSUD Cideres Adakan Pemeriksaan Kesehatan Gratis",
        isi: "Sebagai bentuk pengabdian kepada masyarakat, RSUD Cideres menggelar program pemeriksaan kesehatan gratis bagi warga di sekitar rumah sakit. Layanan meliputi pemeriksaan tekanan darah, gula darah, dan konsultasi gizi. Kegiatan ini diharapkan meningkatkan kesadaran masyarakat terhadap pentingnya deteksi dini penyakit.",
        gambar: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=870&auto=format&fit=crop",
        tanggal: "2025-06-22",
        link: "Baca Selengkapnya"
    },
];
