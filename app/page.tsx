"use client";

import { useState, useEffect } from "react";

import Loader from "./components/Loader"; 
import Navbar from "./components/Navbar";
import CircuitBackground from "./components/CircuitBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Portfolio() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate page loading 1.4 sec
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen text-gray-200 font-sans selection:bg-red-600 selection:text-white">

      <Navbar />
      <CircuitBackground />

      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-neutral-600 text-xs font-mono border-t border-neutral-900">
        <p>SYSTEM STATUS: ONLINE | © {new Date().getFullYear()} PRINCE OF DARKNESS</p>
      </footer>

    </div>
  );
}
