import './style.scss'

export default function DateInputElement({ label }) {
    return (
        <div className="date-input-element">
            <label htmlFor={label}>{label}</label>
            <input type="date" id={label} />
        </div>
    )
}
