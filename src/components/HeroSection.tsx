"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center z-10 px-6">
      <motion.img
        src="/images/logoutama.jpg"
        alt="Logo Info Event Lumajang"
        className="w-28 h-28 md:w-36 md:h-36 mb-8 rounded-2xl shadow-lg backdrop-blur-lg bg-white/40 p-2 border border-white/30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-[#1C4C57] drop-shadow-lg tracking-tight"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Info Event Lumajang
      </motion.h1>
      <motion.p
        className="mt-4 md:mt-5 text-lg md:text-2xl text-[#3A6D7B] font-medium max-w-2xl leading-relaxed text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Ruang berbagi, belajar, dan berkolaborasi bagi komunitas Lumajang.
        Temukan kegiatan budaya, seni, dan kreativitas yang tumbuh dari semangat
        kebersamaan kita semua.
      </motion.p>
    </section>
  );
}
