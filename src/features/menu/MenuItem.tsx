import { GoHeart } from "react-icons/go";
import pizza from "../../assets/images/loading-1.png";
import { IoMdAdd } from "react-icons/io";

function MenuItem() {
  return (
    <li className="bg-amber-50 rounded-lg w-[48%] flex flex-col p-2 relative">
      <p className="self-end">
        <GoHeart size={30} color="#2c2c2c" />
        {/* <GoHeartFill color="#2c2c2c" /> */}
      </p>
      <img src={pizza} alt="product-image" className="w-full mt-2" />
      <p className="text-lg text-neutral-900">Pizza</p>
      <p className="mt-2 text-neutral-800">$15</p>
      <p className="self-end bg-amber-200 absolute right-0 bottom-0 p-2 rounded-tl-lg rounded-br-lg">
        <IoMdAdd />
      </p>
    </li>
  );
}

export default MenuItem;
