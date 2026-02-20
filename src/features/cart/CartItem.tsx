import { useCartStore } from "../../store/cartStore";

interface Item {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
  count: number;
}

type ItemProp = { item: Item };

function CartItem({ item }: ItemProp) {
  const { increaseItemCount, decreaseItemCount } = useCartStore();

  return (
    <li className="flex bg-amber-50 rounded-xl p-2 shadow w-[95%] mx-auto">
      <div className="bg-amber-200 w-18 rounded-xl shadow">
        <img src={item.image} alt="product-image" className="w-full" />
      </div>
      <div className=" flex flex-col justify-between ml-3">
        <p className="text-neutral-900 text-xl">{item.productName}</p>
        <p className="text-neutral-800">${item.price}</p>
      </div>
      <div className="w-18 h-fit p-0.5 rounded-lg flex justify-between bg-amber-200 dark:bg-neutral-800 text-amber-800 mt-auto ml-auto">
        <span
          className="bg-amber-50 w-5 flex justify-center rounded-md"
          onClick={() => decreaseItemCount(item.id)}
        >
          -
        </span>
        <span className="text-amber-800">{item.count}</span>
        <span
          className="bg-amber-300 text-amber-800 w-5 flex justify-center rounded-md"
          onClick={() => increaseItemCount(item.id)}
        >
          +
        </span>
      </div>
    </li>
  );
}

export default CartItem;
