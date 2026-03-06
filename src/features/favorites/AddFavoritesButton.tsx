import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function AddFavoritesButton() {
  return (
    <li className="bg-amber-50 rounded-lg w-full flex flex-col justify-center items-center p-2 relative h-9 sm:h-10.5">
      <Link to="/">
        <p className="h-full flex justify-center items-center">
          <IoMdAdd size={30} color="#525252" />
          <span className="text-[0.7rem] sm:text-[0.85rem] text-neutral-600 text-shadow-sm">
            Add new favorite item
          </span>
        </p>
      </Link>
    </li>
  );
}

export default AddFavoritesButton;
