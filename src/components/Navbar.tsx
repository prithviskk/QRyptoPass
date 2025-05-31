"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFilm,
  FaCalendarAlt,
  FaTheaterMasks,
  FaFutbol,
  FaRunning,
  FaUserCircle,
  FaBars,
  FaTimes
} from "react-icons/fa";
import logo from "../../public/logo.png";

const navItems = [
  { name: "Movies", href: "/movies", icon: <FaFilm /> },
  { name: "Events", href: "/events", icon: <FaCalendarAlt /> },
  { name: "Plays", href: "/plays", icon: <FaTheaterMasks /> },
  { name: "Sports", href: "/sports", icon: <FaFutbol /> },
  { name: "Activities", href: "/activities", icon: <FaRunning /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-[#2E151B] h-16 fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-6">
        {/* Hamburger button */}
        <div className="flex items-center gap-3">
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link href="/" className="hidden md:flex items-center gap-2">
  <Image src={logo} alt="Logo" width={40} height={40} />
 <span className="text-3xl font-bold text-transparent bg-clip-text bg-[repeating-linear-gradient(180deg,#2E151B_0,#2E151B_1.5px,#fff_10px,#fff_20px)]">
  QRyptoPass
</span>

</Link>

        </div>

        {/* Horizontal Menu - medium and up */}
        <div className="hidden md:flex gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 lg:gap-2 text-white no-underline font-h hover:bg-[#502F4C] px-2 lg:px-3 py-2 rounded transition-colors duration-200"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden lg:inline">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Search + User - medium and up */}
        <div className="flex items-center gap-2 md:gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-3 py-1 rounded bg-white text-black text-sm focus:outline-none"
          />
          <Link
            href="/profile"
            className="flex items-center gap-1 md:gap-2 text-white no-underline font-h hover:bg-[#502F4C] px-2 md:px-3 py-2 rounded transition-colors duration-200"
          >
            <FaUserCircle className="text-xl" />
            <span className="hidden lg:inline">User</span>
          </Link>
        </div>
      </nav>

      {/* Side Menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-64 h-full bg-[#2E151B] z-40 p-4 shadow-lg flex flex-col gap-4">
          {/* Search input for small screens */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
          />

          {/* Nav items */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 text-white font-h hover:bg-[#502F4C] px-3 py-2 rounded transition-colors duration-200"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}

          
        </div>
      )}
    </>
  );
}
