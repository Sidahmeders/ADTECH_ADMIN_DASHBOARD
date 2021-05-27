import './style.scss'

export default function Button({ label }) {
    return (
        <div className="button-element">
            <button onClick={(e) => e.preventDefault()}>{label}</button>
        </div>
    )
}
