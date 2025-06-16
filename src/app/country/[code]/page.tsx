import { getCountries } from "@yusifaliyevpro/countries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

interface Props {
  params: {
    code: string;
  };
}

export default async function CountryDetail({ params }: Props) {
  try {
    const countries = await getCountries({
      fields: [
        "name",
        "population",
        "region",
        "capital",
        "flags",
        "currencies",
        "languages",
        "borders",
        "cca3",
        "subregion",
      ],
    });

    const country = countries?.find((c) => c.cca3 === params.code);
    if (!country) {
      notFound();
    }

    const borderCountries =
      country.borders && countries
        ? countries.filter((c) => country.borders?.includes(c.cca3))
        : [];

    return (
      <div
        className={`min-h-screen bg-green-100 flex flex-col items-center justify-center ${nunito.className} py-8`}
      >
        {/* Back Button */}
        <div className="w-full max-w-4xl mb-6">
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-green-900 text-white rounded-full font-bold shadow hover:bg-green-800 transition"
          >
            ← Volver
          </Link>
        </div>
        {/* Card */}
        <div className="bg-white rounded-[48px] shadow-xl flex flex-col md:flex-row items-center max-w-4xl w-full p-8 md:p-16 gap-8">
          {/* Flag */}
          <div className="flex-shrink-0">
            <div className="w-64 h-40 rounded-2xl overflow-hidden border-4 border-green-200 shadow flex items-center justify-center bg-white">
              <Image
                src={country.flags.png}
                alt={country.flags.alt || country.name.common}
                width={256}
                height={160}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl font-extrabold text-green-900 mb-4">
              {country.name.common}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 text-lg text-black space-y-2 md:space-y-0">
              <div className="space-y-2">
                <p>
                  <span className="font-bold">Población:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-bold">Región:</span> {country.region}
                </p>
                <p>
                  <span className="font-bold">Subregión:</span>{" "}
                  {country.subregion}
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-bold">Capital:</span>{" "}
                  {country.capital?.[0] || "N/A"}
                </p>
                <p>
                  <span className="font-bold">Monedas:</span>{" "}
                  {Object.values(country.currencies ?? {})
                    .map((c) => c.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-bold">Idiomas:</span>{" "}
                  {Object.values(country.languages ?? {}).join(", ")}
                </p>
              </div>
            </div>
            {/* Border Countries inside the card */}
            {borderCountries.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-2 text-black">
                  Países Frontera:
                </h2>
                <div className="flex flex-wrap gap-2">
                  {borderCountries.map((borderCountry) => (
                    <Link
                      key={borderCountry.cca3}
                      href={`/country/${borderCountry.cca3}`}
                      className="px-4 py-2 bg-green-100 text-green-900 rounded-full font-semibold shadow hover:bg-green-200 transition"
                    >
                      {borderCountry.name.common}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
