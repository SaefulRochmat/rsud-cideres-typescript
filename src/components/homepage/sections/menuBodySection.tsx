'use client'
import { JSX } from "react";
import { BodyMenu } from "@/types/homepage/bodymenu";
import { GiHeartPlus, GiStethoscope} from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IconType } from "react-icons";

export default function MenuBodySection({ menus }: { menus: BodyMenu[] }): JSX.Element {
  const icons: IconType[] = [GiHeartPlus, GiStethoscope, FaCalendarCheck, IoPhonePortraitOutline];
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto py-8 px-4 bg-[#F5F6FA] rounded-2xl cursor-pointer">
      {menus.map((menu, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-2 p-6 flex flex-col justify-between border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#C62D30]/10 p-3 rounded-xl">
                <Icon className="w-6 h-6 text-[#C62D30]" />
              </div>
              <h2 className="text-xl font-semibold text-[#2E2E2E]">{menu.title}</h2>
            </div>
          </div>
        );
      })}
    </section>
  );
}
