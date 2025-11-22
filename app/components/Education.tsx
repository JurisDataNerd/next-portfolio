"use client";
import { motion } from "framer-motion";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-red-600 pl-4 text-white">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, idx) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-linear-to-br from-neutral-900 to-black p-6 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-red-900/40 transition-colors">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-xs md:text-sm text-gray-500 font-mono border border-neutral-800 px-2 py-1 rounded">
                  {edu.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
              <p className="text-red-500 font-medium mb-2">{edu.degree}</p>
              <div className="text-sm text-gray-400">{edu.grade}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
