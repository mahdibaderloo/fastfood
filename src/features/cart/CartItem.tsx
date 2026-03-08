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
    <li className="flex items-center bg-amber-50 rounded-xl sm:rounded-3xl p-2 shadow w-[95%] sm:w-full sm:h-24 mx-auto">
      <div className="bg-amber-200 w-19 h-14 sm:w-26 sm:h-full rounded-xl sm:rounded-2xl shadow overflow-hidden flex justify-center items-center p-0.5 lg:cursor-pointer">
        <img src={item.image} alt="product-image" className="w-full" />
      </div>
      <div className="w-full flex flex-col gap-4 sm:gap-6 justify-between items-center p-1 pl-2">
        <p className="text-neutral-900 text-[0.75rem] sm:text-[0.85rem] w-full">
          {item.productName}
        </p>

        <div className="w-full flex items-center justify-between">
          <p className="text-neutral-800 sm:text-[1rem]">${item.price}</p>
          <div className="w-18 h-fit sm:w-24 sm:h-9 p-0.5 rounded-lg sm:rounded-xl flex justify-between bg-amber-200 dark:bg-neutral-800 text-amber-800 mt-auto ml-auto">
            <button
              className="bg-amber-50 w-5 sm:w-7.5 flex justify-center items-center rounded-md sm:rounded-[0.65rem] lg:cursor-pointer"
              onClick={() => decreaseItemCount(item.id)}
            >
              -
            </button>
            <span className="text-amber-800 sm:text-lg">{item.count}</span>
            <button
              className="bg-amber-300 text-amber-800 w-5 sm:w-7.5 flex justify-center items-center rounded-md sm:rounded-[0.65rem] lg:cursor-pointer"
              onClick={() => increaseItemCount(item.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
