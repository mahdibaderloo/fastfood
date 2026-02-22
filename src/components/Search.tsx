import { useEffect, useRef, useState, useMemo } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const query = searchParams.get("search") || "";

  const filtered = useMemo(() => {
    if (!query.trim()) return [];

    return items.filter((item) =>
      item.productName.toLowerCase().includes(query.toLowerCase()),
    );
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleChange(value: string) {
    if (value.trim()) {
      setSearchParams({ search: value }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }

  function handleSelect(item: Food) {
    setSearchParams({ search: item.productName }, { replace: true });
    setIsOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="bg-neutral-50 flex items-center justify-between py-2 px-2 gap-3 rounded-lg border border-neutral-200">
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => query && filtered.length > 0 && setIsOpen(true)}
          placeholder="Search for..."
          className="w-full outline-none text-neutral-800 text-sm"
        />
        <BiSearchAlt size={41} className="text-neutral-600" />
      </div>

      {isOpen && query && filtered.length > 0 && (
        <ul className="absolute top-full left-0 w-full mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {filtered.map((item) => (
            <li
              key={item.id}
              onMouseDown={() => handleSelect(item)}
              className="px-3 py-2 cursor-pointer transition-colors hover:bg-neutral-100 text-neutral-700 text-sm"
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
