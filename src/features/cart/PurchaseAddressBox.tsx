import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PurchaseAddressBox() {
  const width = window.innerWidth;

  return (
    <>
      <div className="w-full xl:w-[90%] xl:mx-auto lg:mt-2 bg-amber-100 p-3 rounded-2xl flex flex-col gap-2 sm:gap-4 relative">
        <div className="flex justify-between items-center">
          <p>
            <FaLocationDot size={width > 640 ? 34 : 30} color="#2c2c2c" />
          </p>
        </div>
        <p className="text-neutral-900 text-[0.7rem] sm:text-[0.85rem] ml-2 w-[95%] text-justify">
          Mohammad shahr, Karaj, Iran
        </p>
        <p className="text-[0.5rem] sm:text-[0.65rem] ml-2 text-neutral-600">
          Postal code: 123456789
        </p>
      </div>
      <Link
        to="/address"
        className="text-[0.5rem] sm:text-[0.65rem] text-blue-400 underline ml-2 lg:ml-4 xl:ml-12"
      >
        Edit address
      </Link>
    </>
  );
}

export default PurchaseAddressBox;
