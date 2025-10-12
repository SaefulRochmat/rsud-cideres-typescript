export default function ContactBar() {
    return(
        <section className="flex flex-col md:flex-row gap-5 justify-between rounded-lg max-w-7xl mx-auto p-4 font-quicksand">
            <div className="w-full md:w-[20%] md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] md:hover:scale-105 cursor-pointer">
                <h1 className="text-md font-medium">(0233) 661003</h1>
                <p className="text-sm text-[#006BFF]">Telepon Resmi</p>
            </div>
            <div className="w-full md:w-[20%] md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] md:hover:scale-105 cursor-pointer">
                <h1 className="text-md font-medium">07.00 s/d 11.00 WIB</h1>
                <p className="text-sm text-[#006BFF]">Pendaftaran Rawat Jalan</p>
            </div>
            <div className="w-full md:w-[25%] md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] md:hover:scale-105 cursor-pointer">
                <h1 className="text-md font-medium">rsudcideres@majalengka.go.id</h1>   
                <p className="text-sm text-[#006BFF]">Email Resmi</p>
            </div>
            <div className="w-full md:w-[25%] md:border-r border-gray-500 hover:border-red-500 transform transition duration-300 ease-in-out hover:-translate-x-[-10px] md:hover:scale-105 cursor-pointer">
                <h1 className="text-md font-medium">Jl. Raya Cideres - Kadipaten No. 180</h1>
                <p className="text-sm text-[#006BFF]">Alamat Rumah Sakit</p>
            </div>
        </section>
    );
}