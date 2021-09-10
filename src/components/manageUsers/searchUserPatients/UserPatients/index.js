import './style.scss'

export default function UserPatients({ users, setUsers }) {
    return (
        <>
            {users.map((user) => {
                return <h1>{user.first_name}</h1>
            })}
        </>
    )
}
