"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-red-600/30 shadow-[0_0_50px_rgba(220,38,38,0.1)]"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Initialize Connection</h2>
          <p className="text-gray-400">
            Open to collaborating on web development projects or discussing legal topics. <br />
            Communication channels are always open.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-red-500 font-mono ml-1">Input: Name</label>
              <input type="text" className="w-full bg-neutral-900/80 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-red-500 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-red-500 font-mono ml-1">Input: Email</label>
              <input type="email" className="w-full bg-neutral-900/80 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-red-500 transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-red-500 font-mono ml-1">Input: Message</label>
            <textarea rows={5} className="w-full bg-neutral-900/80 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-red-500 transition-all"></textarea>
          </div>

          <button type="button" className="w-full py-4 bg-red-700 text-white font-bold tracking-widest uppercase rounded-lg hover:bg-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all">
            Send Transmission
          </button>
        </form>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/JurisDataNerd"
              target="_blank"
              className="text-gray-500 hover:text-white hover:scale-110 transition-all">
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/fauzanarisanto/"
              target="_blank"
              className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all">
              <Linkedin size={24} />
            </a>

            <a
              href="https://wa.me/6282196091319"
              target="_blank"
              className="text-gray-500 hover:text-green-500 hover:scale-110 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.33 5.02L2 22l5.18-1.36a9.88 9.88 0 0 0 4.86 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.82 14.38c-.24.67-1.4 1.32-1.93 1.4-.49.07-1.1.1-1.77-.11-.41-.13-.94-.31-1.62-.61-2.84-1.23-4.69-4.1-4.83-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.24-.25.65-.36 1.05-.36.12 0 .23.01.33.01.29.01.44.03.63.48.24.57.82 1.97.89 2.11.07.14.11.3.02.49-.09.19-.14.3-.27.47-.14.17-.28.38-.4.51-.13.13-.27.27-.12.53.14.27.61 1 .1 1.62.51-.66.67-.88.91-.8.24.08 1.52.71 1.78.84.26.13.43.19.6.56.19.37.25.88.14 1.16z"/>
              </svg>
            </a>
          </div>
      </motion.div>
    </section>
  );
}
