import { BiSearchAlt } from "react-icons/bi";

function Search() {
  return (
    <div className="bg-neutral-50 flex items-center p-2 rounded-lg">
      <p>
        <BiSearchAlt size={40} color="#2c2c2c" />
      </p>
      <input
        type="text"
        className="w-full h-full outline-none text-neutral-900"
      />
    </div>
  );
}

export default Search;
