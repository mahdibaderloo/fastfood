import { FaLocationDot } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import AddressMenuOptions from "./AddressMenuOptions";
import React, { useEffect, useRef, useState } from "react";

function AddressItem() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpenOptions(false);
      }
    }

    if (isOpenOptions)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpenOptions]);

  function handleOpenOptions(e: React.MouseEvent) {
    e.stopPropagation();
    setIsOpenOptions(true);
  }

  return (
    <li
      className="w-full bg-amber-100 p-2 rounded-2xl flex flex-col gap-2 relative"
      onClick={() => setIsOpenOptions(false)}
    >
      <div className="flex justify-between items-center">
        <p>
          <FaLocationDot size={30} color="#2c2c2c" />
        </p>
        <p onClick={handleOpenOptions}>
          <CiMenuKebab size={26} color="#2c2c2c" />
        </p>
      </div>
      <h4 className="text-neutral-900 text-sm ml-2 w-[95%] mt-3">
        Mohammad shahr, Karaj, Iran
      </h4>
      <p className="text-[16px] ml-3 text-neutral-600">
        Postal code: 123456789
      </p>
      <div ref={menuRef}>
        <AddressMenuOptions isOpen={isOpenOptions} />
      </div>
    </li>
  );
}

export default AddressItem;
