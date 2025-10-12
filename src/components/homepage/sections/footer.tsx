import Image from "next/image";

export default function Footer() {
    return(
        <section className="bg-gray-800 w-full text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                    <div className="flex items-center justify-center sm:justify-start p-4 rounded-xl">
                        <div className="bg-white p-4 rounded-xl w-54 sm:w-56 md:w-64">
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
                        <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">Gedung Rahayu</h3>
                        <p className="text-sm sm:text-base lg:text-lg mt-4 font-light leading-relaxed">
                            Jl. Raya Cideres - Kadipaten, No 180, Bojong Cideres
                            <br className="block sm:hidden" />
                            Kecamatan. Dawuan - Majalengka
                            <br className="block sm:hidden" />
                            Jawa Barat - Indonesia, 45453
                        </p>
                    </div>

                    <div className="px-4 py-2">
                        <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">Kontak Kami</h3>
                        <p className="text-sm sm:text-base lg:text-lg mt-4 font-light leading-relaxed">
                            Phone : (0233) 661003<br />
                            Fax : (0233) 661082<br />
                            Email : rsudcideres@majalengkakab.go.id<br />
                            WA : 0822-33333-676
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-300">
                        &copy; {new Date().getFullYear()} Rumah Sakit Umum Daerah Cideres, Majalengka. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}