import { IoMdAdd } from "react-icons/io";

function AddFavoritesButton() {
  return (
    <li className="bg-amber-50 rounded-lg w-full flex flex-col p-2 relative h-[50px]">
      <p className="h-full flex justify-center items-center">
        <IoMdAdd size={30} color="#525252" />
        <span className="text-[0.7rem] text-neutral-600 text-shadow-sm">
          Add new favorite item
        </span>
      </p>
    </li>
  );
}

export default AddFavoritesButton;
