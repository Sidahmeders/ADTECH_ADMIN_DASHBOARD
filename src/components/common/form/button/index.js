import './style.scss'

export default function Button({ label, clickHandler, disable }) {
    return (
        <>
            {disable ? (
                <div className="button-element disabled">
                    <button onClick={(e) => e.preventDefault()}></button>
                </div>
            ) : (
                <div className="button-element">
                    <button onClick={clickHandler}>{label}</button>
                </div>
            )}
        </>
    )
}
