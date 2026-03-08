import { TbFilterDown } from "react-icons/tb";

function Filter() {
  return (
    <div className="bg-red-500 p-2 lg:w-8 lg:h-8 lg:p-1.5 flex justify-center items-center sm:p-[0.6rem] rounded-lg sm:rounded-full h-full lg:cursor-pointer">
      <TbFilterDown size={40} color="#fff" />
    </div>
  );
}

export default Filter;
