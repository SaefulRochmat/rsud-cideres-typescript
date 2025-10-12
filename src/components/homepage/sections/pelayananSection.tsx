import Link from "next/link";

export default function PelayananSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl px-2 py-2 mx-auto mt-8">
            <div className="flex flex-col gap-6 px-4 py-2">
                <h1 className="font-semibold text-3xl text-[#006BFF] underline underline-offset-10 decoration-yellow-600">Pelayanan Unggulan</h1>
                <p className="mt-2 text-justify text-xl">Kami menyediakan berbagai layanan unggulan untuk memenuhi kebutuhan Anda. Dengan tim profesional dan berpengalaman, kami siap memberikan solusi terbaik bagi Anda.</p>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-2xl font-light">
                <div className="flex flex-row justify-between pb-4 border-b-1 border-slate-500/40 hover:-translate-y-[5px] transition-all duration-300 ease-in-out">
                    <Link href="/layanan" className="text-[#006BFF] hover:underline underline-offset-8 decoration-red-500">Tumbuh kembang anak</Link>
                    <Link href="/layanan" className="text-[#006BFF]">❯</Link>
                </div>
                <div className="flex flex-row justify-between pb-4 border-b-1 border-slate-500/40 hover:-translate-y-[3px] transition-all duration-300 ease-in-out">
                    <Link href="/layanan" className="text-[#006BFF] hover:underline underline-offset-8 decoration-red-500">Urologi</Link>
                    <Link href="/layanan" className="text-[#006BFF]">❯</Link>
                </div>
                <div className="flex flex-row justify-between pb-4 border-b-1 border-slate-500/40 hover:-translate-y-[3px] transition-all duration-300 ease-in-out">
                    <Link href="/layanan" className="text-[#006BFF] hover:underline underline-offset-8 decoration-red-500">Jantung</Link>
                    <Link href="/layanan" className="text-[#006BFF]">❯</Link>
                </div>
                <div className="flex flex-row justify-between pb-4 border-b-1 border-slate-500/40 hover:-translate-y-[3px] transition-all duration-300 ease-in-out">
                    <Link href="/layanan" className="text-[#006BFF] hover:underline underline-offset-8 decoration-red-500">Poli anak</Link>
                    <Link href="/layanan" className="text-[#006BFF]">❯</Link>
                </div>
                <div className="flex flex-row justify-between pb-4 border-b-1 border-slate-500/40 hover:-translate-y-[3px] transition-all duration-300 ease-in-out">
                    <Link href="/layanan" className="text-[#006BFF] hover:underline underline-offset-8 decoration-red-500">Bedah syaraf</Link>
                    <Link href="/layanan" className="text-[#006BFF]">❯</Link>
                </div>
            </div>
        </section>
    );
}