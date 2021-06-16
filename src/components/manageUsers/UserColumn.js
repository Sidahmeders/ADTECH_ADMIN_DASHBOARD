export default function UserColumn({ label, value }) {
    return (
        <div className="column">
            <span>{label}:</span> {value}
        </div>
    )
}
