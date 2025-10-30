import { IoMdAdd } from "react-icons/io";

function AddFavoritesButton() {
  return (
    <li className="bg-amber-50 rounded-lg w-[48%] flex flex-col p-2 relative h-[300px]">
      <p className="h-full flex justify-center items-center">
        <IoMdAdd size={70} color="#2c2c2c" />
      </p>
    </li>
  );
}

export default AddFavoritesButton;
