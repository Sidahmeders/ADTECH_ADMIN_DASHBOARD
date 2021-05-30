export default function LoginInputElement({ label, type, name, value, changeHandler }) {
    return (
        <div className="form_inputs">
            <input name={name} type={type} value={value} onChange={changeHandler} required />
            <label>{label}</label>
        </div>
    )
}
