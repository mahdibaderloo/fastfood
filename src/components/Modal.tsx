import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 rounded-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex justify-between items-center p-4 border-b">
            <h2>{title}</h2>
            <button onClick={onClose}>
              <IoMdClose />
            </button>
          </div>
        )}

        <div className="p-4 h-full overflow-auto">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
