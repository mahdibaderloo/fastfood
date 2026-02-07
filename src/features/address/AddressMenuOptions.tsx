import { GoTrash } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import { useModalStore } from "../../store/modalStore";
import AddressForm from "./AddressForm";

type OptionsProp = { isOpen: boolean };

function AddressMenuOptions({ isOpen }: OptionsProp) {
  const { open } = useModalStore();

  function handleOpenDeleteModal() {
    open({ title: "Are you sure you want to delete the address?" });
  }

  function handleOpenEditModal() {
    open({ title: "Edit address", content: <AddressForm /> });
  }

  return (
    <ul
      className={`
        absolute right-5 top-5 bg-amber-50 shadow
        pl-4 pr-2 rounded-2xl flex flex-col gap-1 p-1.5
        transition-all duration-200 ease-out
        origin-top-right
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }
      `}
    >
      <li
        className="flex items-center justify-between gap-4 text-neutral-800 border-b-2 border-neutral-800/10 pb-1"
        onClick={handleOpenEditModal}
      >
        <span>Edit</span>
        <MdModeEditOutline />
      </li>
      <li
        className="flex items-center justify-between gap-4 text-red-700"
        onClick={handleOpenDeleteModal}
      >
        <span>Delete</span>
        <GoTrash />
      </li>
    </ul>
  );
}

export default AddressMenuOptions;
