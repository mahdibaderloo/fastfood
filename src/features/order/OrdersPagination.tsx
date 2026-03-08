import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

function OrdersPagination() {
  return (
    <div className="hidden lg:flex w-full mt-6 justify-center items-center gap-2 text-neutral-800 dark:text-amber-200">
      <CgChevronLeft
        size={22}
        className="text-neutral-700 dark:text-amber-200"
      />
      <span className="cursor-pointer">1</span>
      <span className="cursor-pointer">2</span>
      <span className="cursor-pointer">3</span>
      <CgChevronRight
        size={22}
        className="text-neutral-700 dark:text-amber-200"
      />
    </div>
  );
}

export default OrdersPagination;
