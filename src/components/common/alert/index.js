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
    return (
        <div className="alert">
            {message.pending ? (
                <Pending message={message.pending} />
            ) : message.error && !message.pending ? (
                <Error message={message.error} />
            ) : message.success ? (
                <Success message={message.success} />
            ) : (
                ''
            )}
        </div>
    )
}

export { Success, Error }
