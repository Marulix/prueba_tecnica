import Image from "next/image";
import Link from "next/link";
import type { CountryPicker } from "@yusifaliyevpro/countries/types";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

type CountryFields = [
  "name",
  "population",
  "region",
  "capital",
  "flags",
  "cca3"
];

export default function CountryCard({
  country,
}: Readonly<{
  country: CountryPicker<CountryFields>;
}>) {
  return (
    <Link
      href={`/country/${country.cca3}`}
      className={`${nunito.className} flex items-center bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 group`}
      style={{ minHeight: 160 }}
    >
      <div className="flex-shrink-0 mr-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow flex items-center justify-center bg-white">
          <Image
            src={country.flags.png}
            alt={country.flags.alt || country.name.common}
            width={80}
            height={80}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-extrabold text-green-900 mb-2">
          {country.name.common}
        </h2>
        <p className="text- text-base leading-snug">
          <span className="block">
            <span className="font-semibold">Población:</span>{" "}
            {country.population.toLocaleString()}
          </span>
          <span className="block">
            <span className="font-semibold">Región:</span> {country.region}
          </span>
          <span className="block">
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </span>
        </p>
      </div>
    </Link>
  );
}
