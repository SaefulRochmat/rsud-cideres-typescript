'use client'
import Image from "next/image";
import useAOS from "@/hooks/homepage/useAOS";

export default function Footer() {
    useAOS()
    return(
        <section data-aos="fade-up" className="bg-gray-800 w-full py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                    <div className="flex items-center justify-center sm:justify-start p-4 rounded-xl">
                        <div className="bg-white p-4 rounded-xl w-54 sm:w-56 md:w-64 transition duration-1000 ease-in-out hover:scale-105">
                            <Image
                                src="http://rsudcideres.majalengkakab.go.id/vendor/front/assets/img/logo-header.png"
                                alt="Logo RSUD Cideres"
                                width={400}
                                height={200}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="px-4 py-2">
                        <h3 className="text-lg font-semibold text-white">Gedung Rahayu</h3>
                        <div className="bg-[#C62D30] w-28 h-1 rounded-full mt-1 mb-4"></div>
                        <p className="text-sm mt-4 leading-relaxed text-[#a1a1a1] transition duration-300 ease-in-out hover:text-[#FFD166]">
                            Jl. Raya Cideres - Kadipaten, No 180, Bojong Cideres
                            <br className="block sm:hidden" />
                            Kecamatan. Dawuan - Majalengka
                            <br className="block sm:hidden" />
                            Jawa Barat - Indonesia, 45453
                        </p>
                    </div>

                    <div className="px-4 py-2">
                        <h3 className="text-lg font-semibold text-white">Kontak Kami</h3>
                        <div className="bg-[#C62D30] w-28 h-1 rounded-full mt-1 mb-4"></div>
                        <p className="text-sm mt-4 leading-relaxed text-[#a1a1a1] transition duration-300 ease-in-out hover:text-[#FFD166]">
                            Phone : (0233) 661003<br />
                            Fax : (0233) 661082<br />
                            Email : rsudcideres@majalengkakab.go.id<br />
                            WA : 0822-33333-676
                        </p>
                    </div>
                </div>
                <hr className="text-[#535353]"></hr>
                <div className="text-center mt-8">
                    <p className="text-sm text-[#a1a1a1]">
                        &copy; {new Date().getFullYear()} Rumah Sakit Umum Daerah Cideres, Majalengka. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}