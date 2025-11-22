"use client";
import { motion } from "framer-motion";

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[120px]" />

      <svg className="absolute w-full h-full opacity-30">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(220, 38, 38, 0)" />
            <stop offset="50%" stopColor="rgba(220, 38, 38, 1)" />
            <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0 100 Q 400 300 800 100 T 1600 200"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0,1,0], opacity: [0,1,0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
    </div>
  );
}
