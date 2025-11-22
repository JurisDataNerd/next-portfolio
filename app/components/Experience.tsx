"use client";
import { motion } from "framer-motion";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-neutral-900/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-red-600 pl-4 text-white">
        Experience
      </h2>

      <div className="space-y-12 relative border-l-2 border-neutral-800 ml-4 md:ml-8">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="pl-8 md:pl-12 relative"
          >
            <span className="absolute -left-[9px] top-2 w-4 h-4 bg-black border-2 border-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,1)]"></span>

            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <p className="text-lg text-red-500 mb-4 font-mono">{exp.company}</p>

            <ul className="space-y-2 text-gray-400">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
