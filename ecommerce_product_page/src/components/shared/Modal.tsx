import { createPortal } from "react-dom";
import CloseIcon from "../icons/CloseIcon";

interface IModal {
  children: React.ReactNode;
  close: () => void;
}

export default function Modal({ children, close }: IModal) {
  return (
    <div
      className="fixed w-full top-0 h-screen bg-black-overlay grid place-content-center"
      onClick={close}
    >
      <div
        className="relative max-w-[32rem]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className="absolute top-[-2rem] right-0">
          <button onClick={close}>
            <CloseIcon className="ml-1 fill-white hover:fill-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
