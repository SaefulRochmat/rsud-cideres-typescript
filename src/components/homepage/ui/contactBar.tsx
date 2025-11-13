'use client'
import useAOS from "@/hooks/homepage/useAOS";

export default function ContactBar() {
    // ✅ panggil hook untuk inisialisasi AOS
    useAOS();
    return(
        <section data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-4 text-center md:text-start gap-8 rounded-lg max-w-7xl mx-auto p-6 font-quicksand">
            <div className="w-full md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] cursor-pointer">
                <h1 className="text-md font-medium">(0233) 661003</h1>
                <p className="text-sm text-[#C62D30]">Telepon Resmi</p>
            </div>
            <div className="w-full md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] cursor-pointer">
                <h1 className="text-md font-medium">07.00 s/d 11.00 WIB</h1>
                <p className="text-sm text-[#C62D30]">Pendaftaran Rawat Jalan</p>
            </div>
            <div className="w-full md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] cursor-pointer">
                <h1 className="text-md font-medium">rsudcideres@majalengka.go.id</h1>   
                <p className="text-sm text-[#C62D30]">Email Resmi</p>
            </div>
            <div className="w-full md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] cursor-pointer">
                <h1 className="text-md font-medium">Jl. Raya Cideres - Kadipaten No. 180</h1>
                <p className="text-sm text-[#C62D30]">Alamat Rumah Sakit</p>
            </div>
        </section>
    );
}