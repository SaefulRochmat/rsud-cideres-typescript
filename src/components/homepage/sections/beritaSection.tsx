'use client';
import Image from "next/image";
import { Berita } from "@/types/homepage/berita";

export default function BeritaSection({berita}: {berita: Berita[]}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-7xl mx-auto mt-12 px-1 py-2 cursor-pointer">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-[#006BFF] underline underline-offset-4 decoration-yellow-600">Berita Terkini</h2>
            <button className="text-center text-[#006BFF] font-semibold w-[140px] md:w-[180px] lg:w-[200px] h-[40px] md:h-[50px] border border-[#006BFF] hover:bg-[#006BFF] hover:text-white hover:font-bold rounded-lg cursor-pointer">Lihat Semua</button>
        </div>
      {berita.slice(0, 6).map((item) => (
        <div key={item.id} className="flex flex-col gap-4 mt-2 py-4 px-2 bg-white shadow-[0_0_4px_rgba(25,25,25,0.50)] transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-[0_0_8px_rgba(0,107,255,0.8)]">
            <Image src={item.gambar} alt={item.judul} 
                width={300}
                height={200}
                className="w-full h-[180px] md:h-[220px] lg:h-[300px] object-cover" 
            />
            <h3 className="text-base md:text-lg lg:text-xl font-bold mt-2">{item.judul}</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{item.tanggal}</p>
            <p className="text-xs md:text-sm mt-2">{item.isi}</p>
            <button className="flex justify-center p-2 md:p-4 mt-4 md:mt-8 w-full md:w-[180px] lg:w-[200px] border hover:border-[#006BFF] hover:text-[#006BFF] rounded-lg cursor-pointer">{item.buttonText}</button>
        </div>
      ))}
    </section>
  )
}