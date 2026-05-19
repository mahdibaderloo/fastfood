import { FaComments } from "react-icons/fa6";
import { Food } from "../../types/types";

interface ItemCommentsProps {
  item: Food | null;
}

export default function ItemComments({ item }: ItemCommentsProps) {
  return (
    <div className="pt-4">
      <div className="flex items-center gap-1">
        <FaComments className="text-sm text-neutral-800 dark:text-amber-200" />
        <p className="text-sm text-neutral-800 dark:text-amber-200">Comments</p>
      </div>
      <ul className="w-full pt-2 pb-4 flex items-center gap-2 overflow-x-scroll">
        {item?.comments.map((comment) => (
          <li key={item.id} className="bg-neutral-400 p-2 rounded-xl">
            <p className="text-sm text-neutral-900">owner</p>
            <span className="text-[14px] text-neutral-800">{comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
