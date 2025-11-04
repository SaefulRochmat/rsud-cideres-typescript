import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between max-w-7xl mx-auto mt-24 rounded-xl p-8 font-quicksand">
      <div className="flex items-center justify-center w-full px-3 py-3">
        <Image
          src="https://cinews.id/wp-content/uploads/2025/02/IMG_20250219_142747_Cinews.id_.webp"
          alt="About"
          width={500}
          height={500}
          className="rounded-xl object-cover transition duration-800 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex flex-col w-full px-3 py-3">
        <h3 className="text-[#b12323]/90 font-bold">TENTANG RSUD CIDERES</h3>
        <h1 className="text-xl md:text-4xl font-bold text-gray-800/95">Melayani Masyarakat dengan Sepenuh Hati</h1>
        <p className="text-[#1f1e1e] text-justify mt-1 md:mt-4 text-sm md:text-base">
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