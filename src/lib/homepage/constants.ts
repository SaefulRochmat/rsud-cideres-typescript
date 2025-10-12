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
        imageUrl: "https://images.unsplash.com/photo-1611307742746-43cbea512c37?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "First Slide",
        description: "This is the first slide."
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1618856921788-9bc0b6ff8ca2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Second Slide",
        description: "This is the second slide."
    },
    {
        id: 3,
        imageUrl: "https://plus.unsplash.com/premium_photo-1676580191820-f5a69ca8ee16?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Third Slide",
        description: "This is the third slide."
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
      description: "Kami mengutamakan pasien dengan pelayanan terbaik. Dengan dokter yang berpengalaman dan tenaga medis profesional",
    },
    {
      title: "Layanan 24 Jam",
      subtitle: "PERAWATAN KUALITAS TERBAIK",
      description: "Menyediakan layanan kesehatan 24 jam dengan standar tinggi. Tim medis kami siap memberikan perawatan profesional kapan pun.",
    },
    {
      title: "Selalu Hadir untuk Anda",
      subtitle: "INSTALASI GAWAT DARURAT (IGD)",
      description: "Siap melayani kebutuhan darurat dengan cepat dan tepat. Tim medis berpengalaman selalu siaga 24 jam memberikan penanganan pasien kondisi darurat",
    },
  ];

export const beritaData: Berita[] = [
    {
        id: 1,
        judul: "Judul Berita 1",
        isi: "Isi berita 1",
        gambar: "https://images.unsplash.com/photo-1611307742746-43cbea512c37?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tanggal: "2023-01-01",
        buttonText: "Baca Selengkapnya"
    },
    {
        id: 2,
        judul: "Judul Berita 2",
        isi: "Isi berita 2",
        gambar: "https://images.unsplash.com/photo-1618856921788-9bc0b6ff8ca2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tanggal: "2023-01-02",
        buttonText: "Baca Selengkapnya"
    },
    {
        id: 3,
        judul: "Judul Berita 3",
        isi: "Isi berita 3",
        gambar: "https://plus.unsplash.com/premium_photo-1676580191820-f5a69ca8ee16?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tanggal: "2023-01-03",
        buttonText: "Baca Selengkapnya"     
    },
    {
        id: 4,
        judul: "Judul Berita 4",
        isi: "Isi berita 4",
        gambar: "https://images.unsplash.com/photo-1618856921788-9bc0b6ff8ca2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tanggal: "2023-01-04",
        buttonText: "Baca Selengkapnya"                 
    },
    {
        id: 5,
        judul: "Judul Berita 5",
        isi: "Isi berita 5",
        gambar: "https://images.unsplash.com/photo-1618856921788-9bc0b6ff8ca2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tanggal: "2023-01-05",
        buttonText: "Baca Selengkapnya"                 
    },
    {
        id: 6,
        judul: "Judul Berita 6",
        isi: "Isi berita 6",
        gambar: "https://images.unsplash.com/photo-1618856921788-9bc0b6ff8ca2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tanggal: "2023-01-06",
        buttonText: "Baca Selengkapnya"                 
    },
]