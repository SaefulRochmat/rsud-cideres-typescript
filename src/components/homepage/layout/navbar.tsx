'use client'
import Link from "next/link";
import { useState } from "react";
import { Nav_Items } from "@/lib/homepage/constants";
import { navItem } from "@/types/homepage/navbar";
import { Button } from "@/components/homepage/ui/button"
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    }
    return(
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-start">
                    <Link href="/">
                        <Image
                            src="http://rsudcideres.majalengkakab.go.id/vendor/front/assets/img/logo-header.png"
                            alt="logo"
                            width={250}
                            height={200}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-8 items-center text-xl font-semibold">
                    {Nav_Items.map((item: navItem) => (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            className="text-[#006BFF] underline-offset-6 hover:text-red-400 transition duration-400 ease-in-out"
                        >
                            {item.label}
                        </Link>
                    ))}
                    {/**<Button label="Login" onClick={() => alert("Fitur ini belum tersedia")} fullWidth={false}>
                    </Button>*/}
                </div>

                {/* Button Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1"
                    aria-label="Toggle Menu"
                >
                    <span className="w-6 h-1 bg-gray-800"></span>
                    <span className="w-6 h-1 bg-gray-800"></span>
                    <span className="w-6 h-1 bg-gray-800"></span>
                </button>

                {/* Menu Mobile */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
                        <div className="flex flex-col gap-4 items-center py-4">
                            {Nav_Items.map((item: navItem) => (
                                <Link 
                                    key={item.href} 
                                    href={item.href}
                                    target={item.external ? "_blank" : "_self"}
                                    className="text-gray-700 hover:text-gray-600 transition"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button label="Login" onClick={() => redirect("/login")} fullWidth={true}>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}