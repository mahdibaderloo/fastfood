import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa6";

function SupportForm() {
  return (
    <form className="lg:w-[90%] lg:overflow-hidden lg:mt-1">
      <h3 className="text-amber-100">How can we help you?</h3>
      <div className="lg:flex lg:gap-2">
        <div className="flex items-center gap-2 lg:gap-1 bg-amber-100 p-2 rounded-lg mt-2 sm:mt-4 lg:mt-2 lg:w-[49%] lg:p-1 lg:h-10 xl:h-12">
          <BsPersonFill size={40} color="#262626" className="x l:w-10" />
          <input
            type="text"
            className="border-none outline-none text-neutral-800 text-sm lg:text-[0.8rem] xl:text-[1rem]"
            placeholder="Name"
          />
        </div>
        <div className="flex items-center gap-2 lg:gap-1 bg-amber-100 p-2 rounded-lg mt-2 lg:mt-2 lg:w-[49%] lg:p-1 lg:h-10 xl:h-12">
          <MdEmail size={40} color="#262626" className="xl:w-10" />
          <input
            type="text"
            className="border-none outline-none text-neutral-800 text-sm lg:text-[0.8rem] xl:text-[1rem]"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <div className="flex items-start gap-2 bg-amber-100 p-2 rounded-lg mt-2 h-45 lg:h-35 xl:h-40 lg:mr-0.5">
          <FaPen size={35} color="#262626" className="" />
          <textarea
            className="border-none outline-none text-neutral-800 text-sm w-full h-full"
            maxLength={200}
            placeholder="Problem ..."
          ></textarea>
        </div>
        <p className="text-amber-100 text-[0.6rem] w-full flex justify-end mt-1 mr-4">
          10 / 200
        </p>
      </div>
      <div className="xl:flex xl:justify-center xl:w-full">
        <button className="bg-amber-200 text-neutral-800 rounded-lg p-2 w-full xl:w-[40%] hover:bg-amber-300 transition-all mt-4 lg:mt-2 lg:cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SupportForm;
