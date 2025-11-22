"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax
  const yImage = useTransform(scrollY, [0, 400], [0, 80]);
  const yTitle = useTransform(scrollY, [0, 400], [0, 40]);
  const ySubtitle = useTransform(scrollY, [0, 400], [0, 20]);
  const opacityTitle = useTransform(scrollY, [0, 300], [1, 0.3]);

  // === GLITCH-SCAN SYMBOL ===
  const baseName = "Fauzan Arisant";
  const symbols = ["O", "Ø", "0", "{}", "<>", "§", "⚖", ";"];

  const [symbolIndex, setSymbolIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);

      setTimeout(() => {
        setSymbolIndex((prev) =>
          prev === symbols.length - 1 ? 0 : prev + 1
        );
        setGlitch(false);
      }, 150); // glitch duration
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20">

      {/* PROFILE IMAGE */}
      <motion.div
        style={{ y: yImage }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-red-600/50 shadow-[0_0_50px_rgba(220,38,38,0.4)] overflow-hidden mb-8 group relative"
      >
        <img 
          src="/fauzan.png"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>

      {/* TEXT CONTENT */}
      <motion.div
        style={{ y: yTitle, opacity: opacityTitle }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-4xl"
      >
        {/* TAGLINE */}
        <h2 className="text-red-500 font-mono uppercase tracking-widest mb-4 animate-pulse">
          Web Developer • Web3 Enthusiast • Law & Informatics Student
        </h2>

        {/* GLITCH NAME */}
        <motion.h1 
          style={{ y: ySubtitle }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-2 leading-tight"
        >
          {baseName}
          <span
            className={`text-red-500 ml-1 ${glitch ? "glitch-scan" : ""}`}
          >
            {symbols[symbolIndex]}
          </span>
        </motion.h1>

        {/* ORIGINAL HEADER */}
        <motion.h1 
          style={{ y: ySubtitle }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          The Intersection of <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-red-500 via-red-600 to-orange-600">
            Code & Law
          </span>
        </motion.h1>

        <motion.p 
          style={{ y: ySubtitle }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          <span className="text-red-400"> Junior Fullstack Developer</span> &
          <span className="text-red-400"> Law Student</span>.
           leveraging technical and analytical thinking to solve problems with clarity, structure, and intent.
        </motion.p>
      </motion.div>

      {/* SCROLL ICON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 animate-bounce text-red-600"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
