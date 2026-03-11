import { IoMdClose } from "react-icons/io";
import { useModalStore } from "../store/modalStore";

function Modal() {
  const { title, content, isOpen, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 lg:-top-14" onClick={close}>
      <div
        className={`bg-amber-100 rounded-2xl mx-auto shadow ${content ? "mt-20 w-[90%] sm:w-[80%] lg:w-[70%]" : "mt-50 w-[80%] sm:w-[60%] lg:w-[44%]"} p-2 font-lilita`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="rounded-[0.55rem] p-1 sm:p-2.5 shadow"
        >
          <IoMdClose />
        </button>
        <h3
          className={`w-full sm:w-[90%] sm:text-center sm:mx-auto text-center ${content ? "text-lg" : "text-sm sm:text-[0.9rem] lg:text-[1rem]"} mt-1 sm:mt-4 lg:mt-0`}
        >
          {title}
        </h3>
        {content && <div className="mt-3 lg:mt-0">{content}</div>}
        <div className="flex justify-between items-center p-4 lg:p-2 sm:mt-4 lg:mt-0">
          <button className="bg-green-700 text-amber-100 px-6 py-1 sm:px-8 sm:py-2 sm:text-[1rem] rounded-xl shadow">
            {content ? "Save" : "Yes"}
          </button>
          <button
            className="bg-red-700 text-amber-100 px-6 py-1 sm:px-8 sm:py-2 sm:text-[1rem] rounded-xl shadow"
            onClick={close}
          >
            {content ? "Cancel" : "No"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
