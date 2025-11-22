"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-red-600 pl-4 text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl overflow-hidden border border-neutral-800 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-500 group"
          >
            <div className="h-64 overflow-hidden relative bg-gray-900">
              
              <img
                src={project.mediaSrc}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-500 text-sm font-mono uppercase">{project.type}</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
              </a>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-neutral-900 text-xs text-red-400 rounded border border-red-900/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
