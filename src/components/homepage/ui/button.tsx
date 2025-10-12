import React from "react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
    fullWidth?: boolean;
}

export function Button ({label, onClick, fullWidth}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`${
                fullWidth ? "w-full" : ""
            } hover:translate-y-[-5px] ease-in-out transition duration-300 bg-white text-[#0F67B1] font-bold py-2 px-4 rounded-md absolute left-4 bottom-4 cursor-pointer`}
        >
            {label}
        </button>
    );
}