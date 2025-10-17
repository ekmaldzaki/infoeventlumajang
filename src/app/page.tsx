"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Filter } from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  description: string;
  contact: string;
  social: string;
  date: string;
  image?: string;
  videoEmbed?: string;
}

export default function Page() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then(setEvents)
      .catch((err) => console.error("Failed to load events:", err));
  }, []);

  const filtered = events
    .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <main className="font-sans text-gray-800 bg-gradient-to-b from-[#E9F3FF] via-[#F5F8FB] to-[#CFE8FF] min-h-screen relative overflow-hidden">
      {/* glowing orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-40 right-40 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl opacity-50"></div>

      {/* HERO */}
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
          Temukan kegiatan budaya, seni, dan kreativitas yang tumbuh dari
          semangat kebersamaan kita semua.
        </motion.p>
      </section>

      {/* SEARCH & FILTER */}
      <section className="py-10 px-6 backdrop-blur-xl bg-white/40 rounded-t-3xl shadow-inner">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C4C57] mb-4">
            Jelajahi Event & Kolaborasi di Lumajang
          </h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg text-justify">
            Mulai dari festival, kegiatan komunitas, hingga inisiatif
            kolaboratif, semua tersaji di sini untuk kamu yang ingin terhubung
            dan berkontribusi.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
            <input
              type="text"
              placeholder="Cari event berdasarkan nama atau kata kunci..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-2/3 p-4 rounded-2xl border border-[#1C4C57]/20 focus:outline-none focus:ring-4 focus:ring-sky-200 bg-white/70 backdrop-blur-md placeholder-gray-500 shadow-md text-sm md:text-base"
            />
            <div className="relative w-full md:w-auto">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full md:w-auto p-4 rounded-2xl border border-[#1C4C57]/20 bg-white/70 shadow-md backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-sky-200 text-gray-700 appearance-none pr-10 text-sm md:text-base"
              >
                <option value="newest">Terbaru</option>
                <option value="oldest">Terlama</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
              </select>
              <Filter className="absolute right-3 top-4 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* EVENT LIST */}
      <section className="py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1C4C57] mb-10">
          Daftar Event Terkini
        </h2>
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            Belum ada event yang cocok dengan pencarianmu.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filtered.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -5 }}
                className="bg-white/50 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col"
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                {event.videoEmbed && (
                  <div
                    className="aspect-video"
                    dangerouslySetInnerHTML={{ __html: event.videoEmbed }}
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-sky-700 font-semibold mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    {new Date(event.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#1C4C57] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="mt-auto flex gap-3 flex-col sm:flex-row">
                    <a
                      href={event.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-xl bg-gradient-to-r from-sky-700 to-sky-500 text-white hover:from-sky-800 hover:to-sky-600 transition text-sm md:text-base"
                    >
                      Hubungi CP
                    </a>
                    <a
                      href={event.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-400 text-white hover:from-rose-600 hover:to-rose-500 transition flex items-center justify-center gap-1 text-sm md:text-base"
                    >
                      <Instagram className="w-4 h-4" /> Lihat Post
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* COLLAB SECTION */}
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
            className="inline-block bg-gradient-to-r from-sky-600 to-sky-500 text-white px-8 py-3 rounded-xl font-medium hover:from-sky-700 hover:to-sky-600 transition shadow-md"
          >
            <Mail className="inline w-5 h-5 mr-2" />
            infoeventlumajang@gmail.com
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
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
    </main>
  );
}
