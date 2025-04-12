import { useImperativeHandle, useRef } from "react"

export default function Modal({ children, buttonCaption, ref }) {

    const modal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                modal.current.showModal();
            }
        }
    })
    return <dialog ref={modal}>
        {children}
        <form action="dailog">
            <button>{buttonCaption}</button>
        </form>
    </dialog>
}