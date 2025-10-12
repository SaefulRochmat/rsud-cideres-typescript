import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between max-w-7xl mx-auto mt-18 rounded-xl p-8 font-quicksand">
      <div className="w-full px-3 py-3 items-center justify-center">
        <Image
          src="https://cinews.id/wp-content/uploads/2025/02/IMG_20250219_142747_Cinews.id_.webp"
          alt="About"
          width={800}
          height={400}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 w-full px-3 py-3">
        <h3 className="text-[#006BFF] text-lg font-semibold underline underline-offset-4 decoration-yellow-600">TENTANG RSUD CIDERES</h3>
        <h1 className="text-4xl font-semibold">Melayani Masyarakat dengan Sepenuh Hati</h1>
        <p className="text-lg mt-7 text-justify">
          RSUD CIDERES adalah rumah sakit yang berdedikasi untuk memberikan
          layanan kesehatan terbaik kepada masyarakat. Dengan tim dokter
          profesional dan peralatan modern, kami berkomitmen untuk memberikan
          perawatan kesehatan yang berkualitas tinggi. Dengan terus berinovasi
          dan memberikan layanan yang terbaik, RSUD CIDERES menjadi pilihan
          utama bagi masyarakat yang membutuhkan perawatan kesehatan.
        </p>
      </div>
    </div>
  );
}