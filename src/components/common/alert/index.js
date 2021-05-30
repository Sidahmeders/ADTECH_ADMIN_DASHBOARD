import './style.scss'

function Success({ message }) {
    return <div className="alert success">{message}</div>
}

function Error({ message }) {
    return <div className="alert error">{message}</div>
}

export default function HandleAlertStatus({ message }) {
    return message.success ? (
        <Success message={message.success} />
    ) : message.error ? (
        <Error message={message.error} />
    ) : (
        ''
    )
}

export { Success, Error }
