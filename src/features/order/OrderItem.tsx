import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";

import pizza from "../../assets/images/loading-1.png";

function OrderItem() {
  return (
    <li className="rounded-lg lg:w-50">
      <Link
        to={`/orders/4738929`}
        className="bg-amber-100 rounded-lg p-3 relative flex flex-col justify-between lg:hover:bg-amber-200 transition-all"
      >
        <div className="flex justify-between text-neutral-800">
          <p className="lg:text-sm">Order: 4738929</p>
          <p className="lg:text-sm">$120</p>
        </div>
        <p className="text-sm lg:text-[0.7rem] text-neutral-600 pt-2">
          2025-10-10
        </p>
        <div className="flex justify-between items-center pt-4">
          <div className="flex divide-x-2 divide-neutral-600">
            <img src={pizza} alt="pizza image" className="w-10 mx-1" />
            <img src={pizza} alt="pizza image" className="w-10 mx-1" />
          </div>
          <p>
            <CgChevronRight size={30} color="#525252" />
          </p>
        </div>
      </Link>
    </li>
  );
}

export default OrderItem;
