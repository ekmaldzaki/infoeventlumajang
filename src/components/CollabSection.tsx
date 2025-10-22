"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function CollabSection() {
  return (
    <section className="px-6 pb-24">
      <motion.div
        className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#1C4C57] mb-4">
          Ingin Berkolaborasi atau Mengadakan Event?
        </h3>
        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed text-justify">
          Kami terbuka untuk kolaborasi, publikasi kegiatan, maupun ide yang
          dapat memperkaya ekosistem kreatif Lumajang. Hubungi kami melalui
          email di bawah ini untuk memulai!
        </p>
        <a
          href="mailto:infoeventlumajang@gmail.com"
          className="inline-block bg-gradient-to-r from-sky-600 to-sky-500 text-white px-4 sm:px-8 py-3 rounded-xl font-medium hover:from-sky-700 hover:to-sky-600 transition shadow-md text-sm sm:text-base w-full sm:w-auto"
        >
          <Mail className="inline w-5 h-5 mr-2" />
          infoeventlumajang@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
