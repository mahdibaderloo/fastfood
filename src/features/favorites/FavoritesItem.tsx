import { GoHeartFill } from "react-icons/go";
import pizza from "../../assets/images/loading-1.png";

function FavoritesItem() {
  return (
    <li className="bg-amber-50 rounded-lg w-[48%] h-[300px] flex flex-col justify-between p-2 relative">
      <p className="self-end">
        {/* <GoHeart size={30} color="#2c2c2c" /> */}
        <GoHeartFill color="#2c2c2c" />
      </p>
      <img src={pizza} alt="product-image" className="w-full mt-2" />
      <p className="text-lg text-neutral-900">Pizza</p>
      {/* <p className="self-end bg-amber-200 absolute right-0 bottom-0 p-2 rounded-tl-lg rounded-br-lg">
        <IoMdAdd />
      </p> */}
    </li>
  );
}

export default FavoritesItem;
