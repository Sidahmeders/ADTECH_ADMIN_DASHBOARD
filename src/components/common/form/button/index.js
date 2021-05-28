import './style.scss'

export default function Button({ label, clickHandler }) {
    return (
        <div className="button-element">
            <button onClick={clickHandler}>{label}</button>
        </div>
    )
}
