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
    image: "https://images.unsplash.com/photo-1576765608619-6e8caa3f7f34?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Klinik Jiwa",
    href: "/layanan",
    image: "https://images.unsplash.com/photo-1581093458791-9d6cc51b41a6?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Klinik THT",
    href: "/layanan",
    image: "https://images.unsplash.com/photo-1612277794798-731b3ffe9c63?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Klinik Kulit dan Kelamin",
    href: "/layanan",
    image: "https://images.unsplash.com/photo-1620212181398-71b4d07c2295?q=80&w=600&auto=format&fit=crop",
  },
];

export default function PelayananSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Layanan Spesialis
          </h2>
          <p className="text-gray-500 mt-1 text-base md:text-lg">
            Layanan spesialis lengkap dengan perawatan profesional dan teknologi modern.
          </p>
          <div className="w-16 h-[3px] bg-yellow-500 mt-2 rounded-full"></div>
        </div>
        <Link
          href="/layanan"
          className="text-green-600 font-medium hover:underline hover:underline-offset-4"
        >
          More →
        </Link>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {layananList.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item.href}
              className="group flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:bg-[#b12323] transition-all duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-md group-hover:translate-y-12 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 text-center transition-all duration-500 group-hover:-translate-y-28">
                {item.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
