import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PurchaseAddressBox() {
  return (
    <>
      <div className="w-full bg-amber-100 p-3 rounded-2xl flex flex-col gap-2 relative">
        <div className="flex justify-between items-center">
          <p>
            <FaLocationDot size={30} color="#2c2c2c" />
          </p>
        </div>
        <p className="text-neutral-900 text-[0.7rem] ml-2 w-[95%] text-justify">
          Mohammad shahr, Karaj, Iran
        </p>
        <p className="text-[0.5rem] ml-2 text-neutral-600">
          Postal code: 123456789
        </p>
      </div>
      <Link
        to="/address"
        className="text-[0.5rem] text-blue-400 underline ml-2"
      >
        Edit address
      </Link>
    </>
  );
}

export default PurchaseAddressBox;
