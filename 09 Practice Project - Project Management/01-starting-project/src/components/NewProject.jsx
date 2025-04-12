import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleSaveData() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        //validations....
        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return <>
        <Modal ref={modal} buttonCaption="Ok">
            <h2 className="text-xl font-bold text-stone-900 my-4">Invalid input</h2>
            <p className="text-stone-900 mb-4">Oops... Looks like you forgot to enter a value</p>
            <p className="text-stone-900 mb-4">Please make sure you provide valid value for every input field. </p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950"
                        onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSaveData}>Save</button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} label="Title" />
                <Input ref={descriptionRef} label="Description" textarea />
                <Input type="date" ref={dueDateRef} label="Due date" />
            </div>
        </div>
    </>
}