import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  const modalRef = useRef();

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={modalRef} open={open} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
