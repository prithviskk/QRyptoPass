"use client";
import { useState } from "react";
import Card from "@/components/Card";

const allCards = [
  {
    id: 1,
    title: "Tourist Family",
    description:
      "Join this fun-loving family as they discover cultures, face challenges, and grow closer on their travel journey",
    imageSrc: "./tourist.jpg",
    tags: ["Comedy", "Family-Entertainer"],
    language: "Tamil",
    topSelling: true,
    dateAdded: "2024-05-01",
    badgeText: "NEW",
    badgeColor: "#3E1D25",
    backgroundColor: "#3E1D25",
  },
  {
    id: 2,
    title: "Retro",
    description:
      "A relentless hero fights against all odds to protect his loved ones and uphold justice in a timeless classic tale.",
    imageSrc: "./retro.avif",
    tags: ["Love", "Action"],
    language: "Tamil",
    topSelling: false,
    dateAdded: "2023-12-15",
    badgeText: "BLAST",
    badgeColor: "#3E1D25",
    backgroundColor: "#3E1D25",
  },
  {
    id: 3,
    title: "Action Blast",
    description: "High-octane action with jaw-dropping stunts.",
    imageSrc: "./retro.avif",
    tags: ["Action", "Thriller"],
    language: "Hindi",
    topSelling: true,
    dateAdded: "2024-03-22",
    badgeText: "HOT",
    badgeColor: "#D23E3E",
    backgroundColor: "#3E1D25",
  },
];

const genres = ["Comedy", "Family-Entertainer", "Love", "Action", "Thriller"];
const languages = ["English", "Tamil", "Hindi"];
const others = ["Top Selling"];
const sortOptions = ["Relevance", "New to Old", "Old to New"];

const Page = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedOthers, setSelectedOthers] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("Relevance");

  // Responsive filter modal state
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Toggle selection helper for multi-select
  const toggleSelection = (
    item: string,
    selectedItems: string[],
    setSelectedItems: (items: string[]) => void
  ) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Filtering cards based on selected filters
  let filteredCards = allCards.filter((card) => {
    const genreMatch =
      selectedGenres.length === 0 ||
      card.tags.some((tag) => selectedGenres.includes(tag));
    const langMatch =
      selectedLanguages.length === 0 || selectedLanguages.includes(card.language);
    const othersMatch =
      selectedOthers.length === 0 ||
      (selectedOthers.includes("Top Selling") && card.topSelling);

    return genreMatch && langMatch && othersMatch;
  });

  // Sorting cards
  if (selectedSort === "New to Old") {
    filteredCards = filteredCards.sort(
      (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    );
  } else if (selectedSort === "Old to New") {
    filteredCards = filteredCards.sort(
      (a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
    );
  }
  // Relevance is default order (no sorting)

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowFiltersMobile(true)}
          className="bg-[#3E1D25] text-white px-4 py-2 rounded shadow-lg"
        >
          Filter
        </button>
      </div>

      {/* Main layout */}
      <div className="flex min-h-screen bg-gray-100 p-6">
        {/* Sidebar - desktop */}
        <aside
          className={`hidden md:block w-64 bg-white p-6 rounded shadow-md min-h-screen sticky top-0`}
        >
          <Filters
            selectedGenres={selectedGenres}
            toggleGenres={(tag) => toggleSelection(tag, selectedGenres, setSelectedGenres)}
            selectedLanguages={selectedLanguages}
            toggleLanguages={(lang) =>
              toggleSelection(lang, selectedLanguages, setSelectedLanguages)
            }
            selectedOthers={selectedOthers}
            toggleOthers={(other) => toggleSelection(other, selectedOthers, setSelectedOthers)}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        </aside>

        {/* Cards */}
       <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-0 md:ml-6 max-w-screen-lg mx-auto md:max-h-[425px] md:overflow-y-auto lg:max-h-[400px] lg:overflow-y-auto">

          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                tags={card.tags}
                badgeText={card.badgeText}
                badgeColor={card.badgeColor}
                backgroundColor={card.backgroundColor}
              />
            ))
          ) : (
            <p className="text-gray-700 col-span-full">
              No cards match the selected filters.
            </p>
          )}
        </main>
      </div>

      {/* Mobile Filter Modal */}
      {showFiltersMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-start pt-10 px-4 overflow-auto sm:max-h-[70px] overflow-y-auto">
          <div className="bg-white w-full max-w-md rounded p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Filters</h2>
              <button
                onClick={() => setShowFiltersMobile(false)}
                className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <Filters
              selectedGenres={selectedGenres}
              toggleGenres={(tag) => toggleSelection(tag, selectedGenres, setSelectedGenres)}
              selectedLanguages={selectedLanguages}
              toggleLanguages={(lang) =>
                toggleSelection(lang, selectedLanguages, setSelectedLanguages)
              }
              selectedOthers={selectedOthers}
              toggleOthers={(other) => toggleSelection(other, selectedOthers, setSelectedOthers)}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
            />

            <div className="mt-6 flex justify-end gap-2">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => {

                  setSelectedGenres([]);
                  setSelectedLanguages([]);
                  setSelectedOthers([]);
                  setSelectedSort("Relevance");
                }}
              >
                Clear All
              </button>
              <button
                className="px-4 py-2 bg-[#3E1D25] text-white rounded"
                onClick={() => setShowFiltersMobile(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

type FiltersProps = {
  selectedGenres: string[];
  toggleGenres: (tag: string) => void;
  selectedLanguages: string[];
  toggleLanguages: (lang: string) => void;
  selectedOthers: string[];
  toggleOthers: (other: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
};

const Filters = ({
  selectedGenres,
  toggleGenres,
  selectedLanguages,
  toggleLanguages,
  selectedOthers,
  toggleOthers,
  selectedSort,
  setSelectedSort,
}: FiltersProps) => (
  <div>
    {/* Genres */}
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-lg">Genre</h3>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => toggleGenres(genre)}
            className={`px-3 py-1 rounded-full border text-sm ${
              selectedGenres.includes(genre)
                ? "bg-[#3E1D25] text-white border-[#3E1D25]"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>

    {/* Languages */}
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-lg">Language</h3>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => toggleLanguages(lang)}
            className={`px-3 py-1 rounded-full border text-sm ${
              selectedLanguages.includes(lang)
                ? "bg-[#3E1D25] text-white border-[#3E1D25]"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>

    {/* Others */}
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-lg">Others</h3>
      <div className="flex flex-wrap gap-2">
        {others.map((other) => (
          <button
            key={other}
            onClick={() => toggleOthers(other)}
            className={`px-3 py-1 rounded-full border text-sm ${
              selectedOthers.includes(other)
                ? "bg-[#3E1D25] text-white border-[#3E1D25]"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {other}
          </button>
        ))}
      </div>
    </div>

    {/* Sort By */}
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-lg">Sort by</h3>
      <select
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Page;
