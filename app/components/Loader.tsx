"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black z-9999 flex flex-col items-center justify-center">

      {/* Pulse Glow Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.9, 1, 0.9]
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-40 h-40 rounded-full border-4 border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.8)] flex items-center justify-center"
      >
        
        {/* Logo */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-2xl font-bold tracking-widest"
        >
          <span className="text-red-600">&lt;</span>DEV
          <span className="text-red-600">/</span>LAW
          <span className="text-red-600">&gt;</span>
        </motion.span>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-neutral-400 font-mono text-xs mt-6 tracking-widest uppercase"
      >
        System Booting...
      </motion.p>

    </div>
  );
}
