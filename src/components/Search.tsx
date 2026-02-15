// import { BiSearchAlt } from "react-icons/bi";

// function Search() {
//   return (
//     <div className="bg-neutral-50 flex items-center p-2 rounded-lg">
//       <input
//         type="text"
//         placeholder="Search for..."
//         className="w-full h-full outline-none text-neutral-900"
//       />
//       <p>
//         <BiSearchAlt size={40} color="#2c2c2c" />
//       </p>
//     </div>
//   );
// }

// export default Search;

import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface Food {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
}

type SearchProps = {
  items: Food[];
};

function Search({ items }: SearchProps) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Food[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      return;
    }

    const results = items.filter((item) =>
      item.productName.toLowerCase().includes(query.toLowerCase()),
    );

    setFiltered(results.slice(0, 6));
    setIsOpen(true);
  }, [query, items]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  function handleSelect(item: Food) {
    setIsOpen(false);
    setQuery(item.productName);
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="bg-neutral-50 flex items-center justify-between py-2 px-1 gap-1 rounded-lg border border-neutral-200">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search for..."
          className="w-full h-full outline-none text-neutral-800 text-[0.8rem]"
        />
        <BiSearchAlt size={40} className="text-neutral-700" />
      </div>

      {isOpen && filtered.length > 0 && (
        <ul className="absolute top-full left-0 w-full mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {filtered.map((item) => (
            <li
              key={item.id}
              onMouseDown={() => handleSelect(item)}
              className="px-2 py-2 cursor-pointer transition-colors text-neutral-700 text-[0.7rem]"
            >
              {item.productName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
