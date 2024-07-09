"use client";

import { navItems } from "@constants";
import images from "@constants/images";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-4/5 mx-auto mt-5 flex items-center justify-between font-poppins font-medium">
      <div className="flex items-center gap-1">
        <Image src={images.Logo} alt="Logo" className="w-40 hover:fill-slate-400" />
      </div>
      <div className="hidden lg:flex items-center gap-20">
        <ul className="flex items-center gap-5">
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className="relative text-black hover:text-gray-700 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              <Link href={navItem.href}>{navItem.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <button className="py-2 px-3 border-2 border-black hover:bg-black hover:text-white hover:rounded-lg duration-300 transition-all">
            Subscribe
          </button>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center p-5 z-50">
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5">
            <X className="w-6 h-6" />
          </button>
          <ul className="flex flex-col items-center gap-5">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className="relative text-black hover:text-gray-700 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              >
                <Link href={navItem.href}>{navItem.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-5 mt-5">
            <button className="py-2 px-3 border-2 border-black hover:bg-black hover:text-white hover:rounded-lg duration-300 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
