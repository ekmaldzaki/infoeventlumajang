"use client";
import { Filter } from "lucide-react";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  sortOption: string;
  setSortOption: (v: string) => void;
}

export default function SearchFilter({
  search,
  setSearch,
  sortOption,
  setSortOption,
}: Props) {
  return (
    <section className="py-10 px-6 backdrop-blur-xl bg-white/40 rounded-t-3xl shadow-inner">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C4C57] mb-4">
          Jelajahi Event & Kolaborasi di Lumajang
        </h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg text-justify">
          Mulai dari festival, kegiatan komunitas, hingga inisiatif kolaboratif,
          semua tersaji di sini untuk kamu yang ingin terhubung dan
          berkontribusi.
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
              <option value="oldest">Terdekat</option>
              <option value="newest">Terjauh</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
            </select>
            <Filter className="absolute right-3 top-4 w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
