import './style.scss'

export default function DateInputElement({ label, value, changeHandler }) {
    return (
        <div className="date-input-element">
            <label htmlFor={label}>{label}</label>
            <input type="date" name={label} value={value} onChange={changeHandler} />
        </div>
    )
}
