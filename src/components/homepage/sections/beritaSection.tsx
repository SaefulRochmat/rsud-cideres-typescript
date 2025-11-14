'use client';
import Image from "next/image";
import { Berita } from "@/types/homepage/berita";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import useAOS from "@/hooks/homepage/useAOS";

export default function BeritaSection({berita}: {berita: Berita[]}) {
  useAOS()
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-6 max-w-7xl mx-auto mt-6 px-2 py-4 md:px-4 md:py-6 bg-[#F5F6FA] rounded-2xl">
      {/* Header */}
      <div data-aos="fade-up" className="col-span-2 md:col-span-3 flex flex-col items-center justify-center mb-4">
        <h1 className="text-xl md:text-2xl font-quicksand font-extrabold text-gray-800 tracking-wider">
          BERITA & INFORMASI
        </h1>
        <p className="text-[#646464] mt-1 text-sm md:text-base">
          Berita & Informasi Seputar Kesehatan.
        </p>
      </div>

      {/* Card berita */}
      {berita.slice(0, 6).map((item) => (
        <div
          data-aos="fade-up"
          key={item.id}
          className="flex flex-col bg-white rounded-none overflow-hidden transition-all duration-300 group px-4 py-6 cursor-pointer"
        >
          {/* Gambar dengan efek hover shimmer + scale */}
          <Link href={item.link} className="relative rounded-3xl overflow-hidden aspect-[3/2]">
            <Image
              src={item.gambar}
              alt={item.judul}
              fill
              className="absolute h-full w-full object-cover transition-all group-hover:scale-105 duration-1000"
            />
            {/* shimmer effect disesuaikan ke ukuran gambar */}
            <div className="
              absolute inset-0 
              overflow-hidden
            ">
              <div
                className="
                  absolute top-0 left-[-30%] 
                  w-[40%] h-full 
                  bg-gradient-to-r from-white/0 via-white/50 to-white/0 
                  blur-sm -rotate-12 
                  opacity-0 
                  group-hover:opacity-70 
                  group-hover:left-[130%] 
                  transition-all duration-1000 ease-in-out
                "
              />
            </div>
          </Link>

          {/* Konten */}
          <div className="flex flex-col gap-1 mt-3">
            <h1 className="text-xl md:text-lg lg:text-xl line-clamp-3 font-bold text-[#646464] transition-colors duration-300 group-hover:text-gray-800">
              {item.judul}
            </h1> 
            <h3 className="text-xs md:text-sm text-[#646464]">{item.tanggal}</h3>
            <p className="text-xs md:text-sm text-[#646464] mt-2 line-clamp-3">
              {item.isi}
            </p>
            <Link
              href={item.link || "#"}
              className="flex items-center gap-2 text-[#b12323] text-sm font-semibold mt-3 hover:underline transition-colors"
            >
              {item.link}<MdOutlineKeyboardDoubleArrowRight className="text-lg transition duration-700 group-hover:translate-x-8"/>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}