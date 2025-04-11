export default function Input({label, textarea, ...props}){
    return <div>
        <label>{label}</label>
        {textarea ? <textarea {...props} /> : <input {...props} />}
    </div>
}