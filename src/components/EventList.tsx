"use client";
import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";
import { EventItem } from "@/app/page";

interface Props {
  filtered: EventItem[];
  setSelectedEvent: (event: EventItem | null) => void;
}

export default function EventList({ filtered, setSelectedEvent }: Props) {
  return (
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
              onClick={() => setSelectedEvent(event)}
              className="bg-white/50 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col cursor-pointer"
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    Hubungi CP
                  </a>
                  <a
                    href={event.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-400 text-white hover:from-rose-600 hover:to-rose-500 transition flex items-center justify-center gap-1 text-sm md:text-base"
                    onClick={(e) => e.stopPropagation()}
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
  );
}
