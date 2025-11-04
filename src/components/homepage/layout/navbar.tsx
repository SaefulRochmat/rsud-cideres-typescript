'use client'
import Link from "next/link";
import { useState } from "react";
import { Nav_Items } from "@/lib/homepage/constants";
import { navItem } from "@/types/homepage/navbar";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    }
    return(
        <nav className="fixed top-0 left-0 w-full bg-white/80 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-start">
                    <Link href="/">
                        <Image
                            src="http://rsudcideres.majalengkakab.go.id/vendor/front/assets/img/logo-header.png"
                            alt="logo"
                            width={350}
                            height={300}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-8 items-center font-semibold">
                    {Nav_Items.map((item: navItem) => (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            className="text-[#646464] underline-offset-6 hover:text-[#f53030] transition duration-400 ease-in-out"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Button Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 hover:scale-105 transition duration-300 ease-in-out"
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    <span
                        className={`w-6 h-1 bg-gray-800 transition-all duration-300 ease-in-out ${
                            isOpen ? 'translate-y-[6px] rotate-45' : ''
                        }`}
                    ></span>
                    <span
                        className={`w-6 h-1 bg-gray-800 transition-all duration-300 ease-in-out ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    ></span>
                    <span
                        className={`w-6 h-1 bg-gray-800 transition-all duration-300 ease-in-out ${
                            isOpen ? '-translate-y-[6px] -rotate-45' : ''
                        }`}
                    ></span>
                </button>

                {/* Menu Mobile */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-white ${
                        isOpen
                            ? 'opacity-100 translate-y-0 max-h-[60vh] shadow-md pointer-events-auto'
                            : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'
                    } transition-all duration-300 ease-out overflow-hidden`}
                    aria-hidden={!isOpen}
                >
                    <div className="flex flex-col gap-4 items-center py-4 px-2">
                        {Nav_Items.map((item: navItem) => (
                            <Link 
                                key={item.href} 
                                href={item.href}
                                target={item.external ? "_blank" : "_self"}
                                className="w-full text-gray-700 hover:text-red-500 hover:shadow-md hover:-translate-y-1 transition duration-300 px-5 py-2"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}