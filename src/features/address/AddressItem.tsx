import { FaLocationDot } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

function AddressItem() {
  return (
    <li className="w-full bg-amber-100 p-2 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p>
          <FaLocationDot size={30} color="#2c2c2c" />
        </p>
        <p>
          <CiMenuKebab size={26} color="#2c2c2c" />
        </p>
      </div>
      <h4 className="text-neutral-900 text-sm ml-2 w-[95%]">
        Mohammad shahr, Karaj, Iran
      </h4>
      <p className="text-[16px] ml-3 text-neutral-600">
        Postal code: 123456789
      </p>
      <p className="text-[16px] ml-3 text-neutral-600">
        Receiver: Mahdi Baderloo | 09100000000
      </p>
    </li>
  );
}

export default AddressItem;
