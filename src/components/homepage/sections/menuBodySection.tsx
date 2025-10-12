'use client'
import { JSX } from "react";
import { BodyMenu } from "@/types/homepage/bodymenu";
import { Button } from "../ui/button";

export default function MenuBodySection({ menus }: { menus: BodyMenu[] }): JSX.Element {
  const colors: string[] = ['bg-[#0080FF]', 'bg-[#0076FF]', 'bg-[#0070FF]', 'bg-[#0066FF]'];
  return (
    <section className="flex flex-col md:flex-col lg:flex-row gap-2 md:gap-2 lg:gap-0.5 max-w-7xl justify-between items-center mt-1 mx-auto px-1 py-2">
        {menus.map((menu, index) => (
            <div key={index} className={`hover:translate-y-[-10px] transition duration-300 w-full h-[200px] flex flex-col items-start justify-between relative ${colors[index]}`}>
                <h2 className="text-2xl font-semibold text-white absolute top-4 left-4">{menu.title}</h2>
                <Button label={menu.buttonText} onClick={() => alert("Fitur ini belum tersedia")}>
                </Button>
            </div>
        ))}
    </section>
  );
}