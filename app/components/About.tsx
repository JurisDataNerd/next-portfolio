"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-red-600 pl-4 text-white">
          About Me
        </h2>

        <div className="bg-neutral-900/60 backdrop-blur-sm p-8 rounded-2xl border-t border-l border-red-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <p className="text-gray-300 leading-relaxed text-lg font-light">
            Fauzan is an active double-degree student at Universitas Nahdlatul Ulama Yogyakarta, pursuing a Bachelor’s degree in Informatics at the Faculty of Information Technology and a Bachelor’s degree in Law at the Faculty of Law and Social Sciences. He is currently in his 5th semester of Informatics with a GPA of 3.92, and in his 7th semester of Law with a GPA of 3.48.

            Beyond his academic journey, Fauzan aspires to integrate technological literacy with legal insight to develop ethical, inclusive, and sustainable digital systems that contribute to both education and governance sectors.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
