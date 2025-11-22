"use client";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";
import useInView from "../lib/useInView";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-red-600 pl-4 text-white">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {skillsData.map((skill, idx) => {
          const Icon = skill.icon;
          const [ref, visible] = useInView(0.3); 

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center gap-4 group hover:border-red-500/50 transition-colors"
            >
              <div className="p-3 bg-black rounded-lg text-red-500 border border-red-900/30 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Icon className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white">{skill.name}</span>
                  <span className="text-xs font-mono text-red-400">{skill.level}%</span>
                </div>

                {/* progress container */}
                <div 
                  ref={ref}
                  className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden relative"
                >
                  {/* GPU OPTIMIZED BAR */}
                  <div
                    className="h-full bg-linear-to-r from-red-600 to-orange-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] origin-left transition-transform duration-1400ms ease-out"
                    style={{
                      transform: visible
                        ? `scaleX(${skill.level / 100})`
                        : "scaleX(0)",
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
