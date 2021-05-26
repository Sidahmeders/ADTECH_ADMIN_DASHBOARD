export default function FileInputElement({ label }) {
    return (
        <div className="file-input-element">
            <label htmlFor={label}>{label}</label>
            <input type="file" id={label} />
        </div>
    )
}
