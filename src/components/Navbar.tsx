"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFilm, FaCalendarAlt, FaTheaterMasks, FaFutbol, FaRunning, FaBars, FaUserCircle } from "react-icons/fa";

const navItems = [
  { name: "Movies", href: "/movies", icon: <FaFilm /> },
  { name: "Events", href: "/events", icon: <FaCalendarAlt /> },
  { name: "Plays", href: "/plays", icon: <FaTheaterMasks /> },
  { name: "Sports", href: "/sports", icon: <FaFutbol /> },
  { name: "Activities", href: "/activities", icon: <FaRunning /> },
  
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <nav
      className={`h-screen ${
        expanded ? "w-[180px]" : "w-[70px]"
      } bg-[#2E151B] flex flex-col pt-4 fixed left-0 top-0  transition-all duration-300`}
    >
      {/*menu button */}
      <button
        className="flex items-center justify-start text-white text-2xl mb-8 focus:outline-none pl-4 "
        onClick={() => setExpanded((prev) => !prev)}
      >
        <FaBars />
      </button>

      {/* menu items */}
      <div className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-4 text-white px-4 py-4 text-lg no-underline font-h hover:bg-[#502F4C] transition-colors duration-200 justify-start`}
          >
            <span className="text-xl">{item.icon}</span>
            {expanded && <span>{item.name}</span>}
          </Link>
        ))}
      </div>

      {/* User button */}
      <div className="flex-1 flex flex-col gap-2 ">
        <Link
            
            href="/profile"
            className={`flex items-center gap-4 text-white px-4 py-4 text-lg no-underline font-h hover:bg-[#502F4C] transition-colors duration-200 justify-start`}
          >
            <FaUserCircle className="text-xl" />
          {expanded && <span>User</span>}
          </Link>
        
      </div>
    </nav>
  );
}

