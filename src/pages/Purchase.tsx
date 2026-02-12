import { FaLocationDot } from "react-icons/fa6";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Purchase() {
  return (
    <>
      <Header
        showBackButton={true}
        pContent="PURCHA$E"
        classP="text-4xl dark:text-amber-300"
      />
      <main className="p-4 pt-19 h-screen overflow-y-scroll">
        <div className="w-full bg-amber-100 p-3 rounded-2xl flex flex-col gap-2 relative">
          <div className="flex justify-between items-center">
            <p>
              <FaLocationDot size={30} color="#2c2c2c" />
            </p>
          </div>
          <h4 className="text-neutral-900 text-[0.8rem] ml-2 w-[95%] mt-1">
            Mohammad shahr, Karaj, Iran
          </h4>
          <p className="text-[14px] ml-2 text-neutral-600">
            Postal code: 123456789
          </p>
        </div>
        <Link
          to="/address"
          className="text-[0.5rem] text-blue-400 underline ml-2"
        >
          Edit address
        </Link>
      </main>
    </>
  );
}

export default Purchase;
