import './style.scss'

function Success({ message }) {
    return <div className="alert success">{message}</div>
}

function Error({ message }) {
    return <div className="alert error">{message}</div>
}

export { Success, Error }
