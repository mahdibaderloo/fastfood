import { GoTrash } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";

function AddressMenuOptions() {
  return (
    <ul className="absolute right-5 top-5 bg-amber-50 shadow pl-4 pr-2 rounded-2xl flex flex-col gap-1 p-1.5">
      <li className="flex items-center justify-between gap-4 text-neutral-800">
        <span>Edit</span>
        <MdModeEditOutline />
      </li>
      <li className="flex items-center justify-between gap-4 text-red-700">
        <span>Delete</span>
        <GoTrash />
      </li>
    </ul>
  );
}

export default AddressMenuOptions;
