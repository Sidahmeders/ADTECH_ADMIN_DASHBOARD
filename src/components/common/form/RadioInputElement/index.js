import './style.scss'

export default function RadioInputElement({ label, options }) {
    return (
        <div className="radio-input-element">
            <h3>{label}</h3>
            {options.map((option, index) => (
                <div className="option" key={index}>
                    <input type="radio" name={label} id={option} />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    )
}
