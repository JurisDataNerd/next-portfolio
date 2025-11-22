"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-red-900/30 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tighter">
          <span className="text-red-600">&lt;</span>DEV<span className="text-red-600">/</span>LAW<span className="text-red-600">&gt;</span>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider text-gray-300">
          {["About", "Education", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    const section = document.getElementById(item.toLowerCase());
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  {item}
                </button>
              </li>
          ))}
        </ul>

        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </motion.nav>
  );
}
