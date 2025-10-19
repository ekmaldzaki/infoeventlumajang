"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MapPin, X } from "lucide-react";
import { EventItem } from "@/app/page";

interface Props {
  selectedEvent: EventItem | null;
  setSelectedEvent: (v: EventItem | null) => void;
}

export default function EventModal({ selectedEvent, setSelectedEvent }: Props) {
  // Lock scroll saat modal terbuka
  useEffect(() => {
    if (selectedEvent) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  if (!selectedEvent) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex justify-center items-center px-3 md:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedEvent(null)}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="
            relative 
            bg-white/95 backdrop-blur-xl 
            w-full max-w-[360px] md:max-w-5xl 
            md:h-auto overflow-hidden
            flex flex-col md:flex-row 
            rounded-lg md:rounded-xl shadow-2xl
            max-h-[85vh]
          "
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Tombol Close Floating di Mobile */}
          <button
            onClick={() => setSelectedEvent(null)}
            className="
              absolute top-2 right-2 z-10 
              bg-white/70 backdrop-blur-md 
              p-1.5 rounded-full shadow-sm
              text-gray-700 hover:text-black transition
              md:hidden
            "
          >
            <X className="w-4 h-4" />
          </button>

          {/* ===== MEDIA SECTION ===== */}
          <div className="flex-shrink-0 flex justify-center md:w-1/2 bg-black/5 p-2 md:p-0">
            {selectedEvent.image && (
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="
                  w-full max-w-[320px]
                  md:w-full 
                  md:h-auto object-contain 
                  rounded-md md:rounded-none 
                  aspect-square md:aspect-auto
                "
              />
            )}
            {selectedEvent.videoEmbed && (
              <div
                className="w-full aspect-square md:aspect-video rounded-md md:rounded-none overflow-hidden"
                dangerouslySetInnerHTML={{ __html: selectedEvent.videoEmbed }}
              />
            )}
          </div>

          {/* ===== CAPTION SECTION ===== */}
          <div
            className="
              flex flex-col justify-between 
              p-4 md:p-8 md:w-1/2 
              overflow-y-auto max-h-[45vh] md:max-h-[80vh]
            "
          >
            {/* Tombol Close (desktop) */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="hidden md:block absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Judul + tanggal (mobile & desktop) */}
            <div className="mb-3">
              <h3
                className="
                  text-base md:text-2xl font-semibold 
                  text-[#1C4C57] mb-1 md:mb-3
                  text-center md:text-left
                "
              >
                {selectedEvent.title}
              </h3>
              <div className="text-[11px] md:text-sm text-sky-700 font-semibold flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-sky-600" />
                {new Date(selectedEvent.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>

            {/* Caption */}
            <p
              className="
                text-gray-700 leading-relaxed 
                text-[12px] md:text-sm mb-4 
                whitespace-pre-line text-justify
              "
            >
              {selectedEvent.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-auto flex flex-col sm:flex-row gap-2 md:gap-3">
              <a
                href={selectedEvent.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 text-center py-2 md:py-3 
                  rounded-lg bg-gradient-to-r 
                  from-sky-700 to-sky-500 
                  text-white hover:from-sky-800 hover:to-sky-600 
                  text-xs md:text-base transition
                "
              >
                Hubungi CP
              </a>
              <a
                href={selectedEvent.social}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 text-center py-2 md:py-3 
                  rounded-lg bg-gradient-to-r 
                  from-rose-500 to-rose-400 
                  text-white hover:from-rose-600 hover:to-rose-500 
                  flex items-center justify-center gap-1 
                  text-xs md:text-base transition
                "
              >
                <Instagram className="w-3 h-3 md:w-4 md:h-4" /> Lihat Post
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
