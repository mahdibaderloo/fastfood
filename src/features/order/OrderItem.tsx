import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";

import pizza from "../../data/images/loading-1.png";

function OrderItem() {
  return (
    <li className="rounded-lg">
      <Link
        to={`/orders/4738929`}
        className="bg-amber-100 rounded-lg p-3 relative flex flex-col justify-between hover:bg-amber-200/70"
      >
        <div className="flex justify-between text-neutral-800">
          <p>Order: 4738929</p>
          <p>$120</p>
        </div>
        <p className="text-sm text-neutral-600 pt-2">2025-10-10</p>
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
