"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import SearchFilter from "@/components/SearchFilter";
import EventList from "@/components/EventList";
import EventModal from "@/components/EventModal";
import CollabSection from "@/components/CollabSection";
import FooterSection from "@/components/Footer";

export interface EventItem {
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
  const [sortOption, setSortOption] = useState("oldest");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

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

      <HeroSection />
      <SearchFilter
        search={search}
        setSearch={setSearch}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <EventList filtered={filtered} setSelectedEvent={setSelectedEvent} />

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
          />
        )}
      </AnimatePresence>

      <CollabSection />
      <FooterSection />
    </main>
  );
}
