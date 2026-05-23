import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function AddFavoritesButton() {
  const navigate = useNavigate();

  function handleClickAddNewFavoriteItem() {
    navigate("/");
  }

  return (
    <Button
      divStyles="rounded-lg w-full flex justify-center items-center p-2 relative h-9 sm:h-10.5 sm:w-86 lg:w-124 mx-auto lg:cursor-pointer"
      text="Add new favorite item"
      bg="bg-amber-50"
      darkBg="bg-amber-50"
      textColor="text-neutral-600"
      textDarkColor="text-neutral-600"
      onclick={handleClickAddNewFavoriteItem}
    >
      <IoMdAdd size={30} color="#525252" />
    </Button>
  );
}

export default AddFavoritesButton;
