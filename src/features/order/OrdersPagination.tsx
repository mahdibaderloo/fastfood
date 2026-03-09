import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

function OrdersPagination() {
  return (
    <div className="hidden lg:flex w-full mt-2 justify-center items-center gap-2">
      <CgChevronLeft
        size={22}
        className="text-neutral-700/50 dark:text-amber-200/30 transition-all cursor-pointer"
      />
      <span className="cursor-pointer text-neutral-800 dark:text-amber-200 transition-all">
        1
      </span>
      <span className="cursor-pointer text-neutral-700/50 dark:text-amber-200/50 hover:text-neutral-800 dark:hover:text-amber-200 transition-all">
        2
      </span>
      <span className="cursor-pointer text-neutral-700/50 dark:text-amber-200/50 hover:text-neutral-800 dark:hover:text-amber-200 transition-all">
        3
      </span>
      <CgChevronRight
        size={22}
        className="text-neutral-700 dark:text-amber-200 transition-all cursor-pointer"
      />
    </div>
  );
}

export default OrdersPagination;
