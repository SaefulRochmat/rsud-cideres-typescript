'use client'
import Image from "next/image";
import useAOS from "@/hooks/homepage/useAOS"

export default function AboutSection() {
  //untuk AOS
  useAOS();
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between max-w-7xl mx-auto mt-24 rounded-xl p-2 md:p-8 font-quicksand">
      <div data-aos="fade-right" className="flex items-center justify-center w-full px-3 py-3">
        <Image
          src="https://cinews.id/wp-content/uploads/2025/02/IMG_20250219_142747_Cinews.id_.webp"
          alt="About"
          width={500}
          height={500}
          className="rounded-xl object-cover transition duration-1000 ease-in-out hover:scale-105"
        />
      </div>
      <div data-aos="fade-up" className="flex flex-col w-full px-3 py-3">
        <h3 className="text-[#C62D30] font-bold">TENTANG RSUD CIDERES</h3>
        <h1 className="text-xl md:text-4xl font-bold text-[#010000]">Melayani Masyarakat dengan Sepenuh Hati</h1>
        <p className="text-[#1f1e1e] mt-1 md:mt-4 text-sm md:text-base">
          RSUD CIDERES adalah rumah sakit yang berdedikasi untuk memberikan
          layanan kesehatan terbaik kepada masyarakat. Dengan tim dokter
          profesional dan peralatan modern, kami berkomitmen untuk memberikan
          perawatan kesehatan yang berkualitas tinggi. Dengan terus berinovasi dan memberikan layanan yang terbaik, RSUD CIDERES menjadi pilihan
          utama bagi masyarakat yang membutuhkan perawatan kesehatan.
        </p>
        <p className="text-[#1f1e1e] text-justify mt-1 md:mt-4 text-sm md:text-base">
          Direktur RSUD Cideres
        </p>
      </div>
    </div>
  );
}