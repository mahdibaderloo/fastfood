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
    <li className="flex items-center bg-amber-50 rounded-xl p-2 shadow w-[95%] mx-auto">
      <div className="bg-amber-200 w-19 h-14 rounded-xl shadow overflow-hidden flex justify-center items-center p-0.5">
        <img src={item.image} alt="product-image" className="w-full" />
      </div>
      <div className="w-full flex flex-col gap-4 justify-between items-center p-1 pl-2">
        <p className="text-neutral-900 text-[0.75rem] w-full">
          {item.productName}
        </p>

        <div className="w-full flex items-center justify-between">
          <p className="text-neutral-800">${item.price}</p>
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
        </div>
      </div>
    </li>
  );
}

export default CartItem;
