import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && <p className="text-stone-800 mb-4">
                This project does not have any tasks yet.
            </p>
            }
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map(task => (
                        <li className="flex justify-between my-4" key={task.id}>
                            <span>{task.text}</span>
                            <button
                                className="text-stone-700 hover:text-red-500"
                                onClick={() => onDelete(task.id)}
                            >Delete</button>
                        </li>
                    ))}
                </ul>
            )}

        </section>
    )
}