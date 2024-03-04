import { createPortal } from "react-dom";

interface IModal {
  children: React.ReactNode;
}

export default function Modal({ children }: IModal) {
  return (
    <div className="">
      <div></div>
      <div>
        <button>X</button>
      </div>
    </div>
  );
}
