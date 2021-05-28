import './style.scss'

export default function RadioInputElement({ label, options, changeHandler }) {
    return (
        <div className="radio-input-element">
            <h3>{label}</h3>
            <div className="options">
                {options.map((option, index) => (
                    <div className="option" key={index}>
                        <input
                            type="radio"
                            name={label}
                            id={option}
                            name={label}
                            value={option}
                            onChange={changeHandler}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
