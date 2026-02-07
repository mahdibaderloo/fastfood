import { IoMdClose } from "react-icons/io";
import { useModalStore } from "../store/modalStore";

function Modal() {
  const { title, content, isOpen, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60" onClick={close}>
      <div
        className={`bg-amber-100 rounded-2xl mx-auto shadow ${content ? "mt-20 w-[90%]" : "mt-50 w-[80%]"} p-2 font-lilita`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="rounded-[0.55rem] p-1 shadow">
          <IoMdClose />
        </button>
        <h3
          className={`w-full text-center ${content ? "text-lg" : "text-sm"} mt-1`}
        >
          {title}
        </h3>
        {content && <div className="mt-3">{content}</div>}
        <div className="flex justify-between items-center p-4">
          <button className="bg-green-700 px-6 py-1 rounded-xl shadow">
            {content ? "Save" : "Yes"}
          </button>
          <button
            className="bg-red-700 px-6 py-1 rounded-xl shadow"
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
