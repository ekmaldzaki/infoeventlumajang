"use client";
import { Instagram, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#1C4C57]/90 text-white py-12 px-6 mt-20 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-2 backdrop-blur-md border border-white/20">
            <img
              src="/images/logoutama.jpg"
              alt="Logo"
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              Info Event Lumajang
            </h3>
            <p className="text-sm opacity-80 max-w-sm leading-relaxed text-justify">
              Gerakan bersama untuk membangun ruang kolaborasi, berbagi
              inspirasi, dan memperkuat jejaring komunitas Lumajang.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <a
            href="https://www.instagram.com/infoeventlumajang"
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:opacity-80 transition"
          >
            <Instagram size={16} />
            @infoeventlumajang
          </a>
          <a
            href="mailto:infoeventlumajang@gmail.com"
            className="flex items-center gap-2 hover:underline hover:opacity-80 transition"
          >
            <Mail size={16} />
            infoeventlumajang@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center text-xs md:text-sm opacity-70 mt-8 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
        <span>© 2025 InfoEventLumajang. All rights reserved.</span>
        <span className="flex items-center gap-1">
          • Crafted by <span className="font-semibold">WebnyaCakAdi</span>
        </span>
      </div>
    </footer>
  );
}
