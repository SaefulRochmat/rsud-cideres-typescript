"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Layanan {
  title: string;
  href: string;
  image: string;
}

const layananList: Layanan[] = [
  {
    title: "Klinik Jantung",
    href: "/layanan",
    image: "https://plus.unsplash.com/premium_photo-1682141109826-2d839ead3df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
  },
  {
    title: "Klinik Mata",
    href: "/layanan",
    image: "https://plus.unsplash.com/premium_photo-1683121056759-834df7725c99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
  {
    title: "Klinik Jiwa",
    href: "/layanan",
    image: "https://rsudmajalengka.co.id/images/services/2149191355_JDpD.jpg",
  },
  {
    title: "Klinik THT",
    href: "/layanan",
    image: "https://plus.unsplash.com/premium_photo-1673958772211-f5817bd9e34a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
  {
    title: "Klinik Kulit dan Kelamin",
    href: "/layanan",
    image: "https://plus.unsplash.com/premium_photo-1661779386497-1f7b9ec4d8f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
];

export default function PelayananSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 font-quicksand">
            Layanan Spesialis
          </h1>
          <p className="text-[#646464] mt-1 text-sm md:text-base">
            Layanan spesialis lengkap dengan perawatan profesional dan teknologi modern.
          </p>
          <div className="w-16 h-[3px] bg-[#ffb120] mt-2 rounded-full"></div>
        </div>
        <Link
          href="/layanan"
          className="text-[#b12323] font-primary font-semibold hover:underline hover:underline-offset-4"
        >
          More →
        </Link>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {layananList.map((item, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item.href}
              className="group flex flex-col items-center justify-center bg-white rounded-2xl p-6 hover:bg-[#b12323] transition duration-400"
            >
              <div className="relative aspect-square min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[200px] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-md group-hover:translate-y-14 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-[#646464] text-center transition-all duration-1000 group-hover:-translate-y-41 md:group-hover:-translate-y-55 group-hover:text-white/80">
                {item.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
