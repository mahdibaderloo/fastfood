import { GoHeart } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";

interface Item {
  item: {
    id: number;
    productName: string;
    price: number;
    category: string;
    description: string;
    image: string;
    comments: string[];
    score: number;
  };
}

function MenuItem({ item }: Item) {
  const { productName, price, image } = item;

  return (
    <li className="bg-amber-50 rounded-lg w-[48%] flex flex-col p-2 relative">
      <p className="self-end">
        <GoHeart size={30} color="#2c2c2c" />
        {/* <GoHeartFill color="#2c2c2c" /> */}
      </p>
      <img
        src={image}
        alt="product-image"
        className="w-full h-24 mt-2 object-cover rounded-lg"
      />
      <p className="text-[0.6rem] text-neutral-900 mt-2">{productName}</p>
      <p className="mt-2 text-neutral-800">${price}</p>
      <p className="self-end bg-amber-200 absolute right-0 bottom-0 p-2 rounded-tl-lg rounded-br-lg">
        <IoMdAdd />
      </p>
    </li>
  );
}

export default MenuItem;
