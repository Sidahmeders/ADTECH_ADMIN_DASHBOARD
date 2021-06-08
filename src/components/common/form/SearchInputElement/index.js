import './style.scss'

export default function SearchInputElement({ label, changeHandler }) {
    return (
        <div className="search-input-element">
            <label htmlFor={label}>{label}</label>
            <input type="search" spellCheck="false" onChange={changeHandler} />
        </div>
    )
}
