import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa6";

function SupportForm() {
  return (
    <form>
      <h3 className="text-amber-100">How can we help you?</h3>
      <div className="flex items-center gap-2 bg-amber-100 p-2 rounded-lg mt-2">
        <BsPersonFill size={40} color="#262626" />
        <input
          type="text"
          className="border-none outline-none text-neutral-800 text-sm"
          placeholder="Name"
        />
      </div>
      <div className="flex items-center gap-2 bg-amber-100 p-2 rounded-lg mt-2">
        <MdEmail size={40} color="#262626" />
        <input
          type="text"
          className="border-none outline-none text-neutral-800 text-sm"
          placeholder="Email"
        />
      </div>
      <div>
        <div className="flex items-start gap-2 bg-amber-100 p-2 rounded-lg mt-2 h-45">
          <FaPen size={35} color="#262626" />
          <textarea
            className="border-none outline-none text-neutral-800 text-sm w-full h-full"
            maxLength={200}
            placeholder="Problem ..."
          ></textarea>
        </div>
        <p className="text-amber-100 text-[16px] w-full flex justify-end mt-1 mr-4">
          10 / 200
        </p>
      </div>
      <button className="bg-amber-200 text-neutral-800 rounded-lg p-2 w-full hover:bg-amber-300 transition-all delay-100 mt-4">
        Submit
      </button>
    </form>
  );
}

export default SupportForm;
