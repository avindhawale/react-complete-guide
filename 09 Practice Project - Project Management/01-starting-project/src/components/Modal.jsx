import { useImperativeHandle, useRef } from "react"
import Button from "./Button";

export default function Modal({ children, buttonCaption, ref }) {

    const modal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                modal.current.showModal();
            }
        }
    })
    return <dialog ref={modal} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form action="dailog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>
}