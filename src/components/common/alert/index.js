import './style.scss'

function Success({ message }) {
    return <div className="alert success">{message}</div>
}

function Error({ message }) {
    return <div className="alert error">{message}</div>
}

function Pending({ message }) {
    return <div className="alert pending">{message}</div>
}

export default function AlertStatusBar({ message }) {
    return message.success ? (
        <Success message={message.success} />
    ) : message.error && !message.pending ? (
        <Error message={message.error} />
    ) : message.pending ? (
        <Pending message={message.pending} />
    ) : (
        ''
    )
}

export { Success, Error }
