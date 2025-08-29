import { BiSearchAlt } from "react-icons/bi";

function Search() {
  return (
    <div className="bg-neutral-50 flex items-center p-2 rounded-lg">
      <input
        type="text"
        placeholder="Search for..."
        className="w-full h-full outline-none text-neutral-900"
      />
      <p>
        <BiSearchAlt size={40} color="#2c2c2c" />
      </p>
    </div>
  );
}

export default Search;
