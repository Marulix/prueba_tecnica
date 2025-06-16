"use client";

import { useState, useEffect } from "react";
import { getCountries } from "@yusifaliyevpro/countries";
import type { CountryPicker } from "@yusifaliyevpro/countries/types";
import CountryCard from "@/components/CountryCard";

type CountryFields = [
  "name",
  "population",
  "region",
  "capital",
  "flags",
  "cca3"
];

export default function Home() {
  const [countries, setCountries] = useState<CountryPicker<CountryFields>[]>(
    []
  );
  const [filteredCountries, setFilteredCountries] = useState<
    CountryPicker<CountryFields>[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries({
          fields: ["name", "population", "region", "capital", "flags", "cca3"],
        });
        setCountries(data ?? []);
        setFilteredCountries(data ?? []);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    setFilteredCountries(filtered);
  }, [searchTerm, selectedRegion, countries]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRegion]);

  const regions = Array.from(
    new Set(countries.map((country) => country.region))
  );

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse h-80"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 ">
        <input
          type="text"
          placeholder="Buscar país..."
          className="px-4 py-2 w-full  bg-white shadow-md rounded-3xl text-green-900"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="
            w-[200px]
            rounded-full
            px-6
            py-3
            bg-white/80
            shadow
            border-none
            text-green-900
            font-semibold
            focus:ring-2
            focus:ring-green-700
            transition
            appearance-none
          "
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="">Filtrar por región</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {filteredCountries.length === 0 && !loading ? (
        <div className="w-full text-center py-16 text-xl text-green-900 font-semibold">
          Ningún país corresponde a su búsqueda
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {paginatedCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-full bg-green-900 text-white font-bold disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="mx-2 text-green-900 font-semibold">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-full bg-green-900 text-white font-bold disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
