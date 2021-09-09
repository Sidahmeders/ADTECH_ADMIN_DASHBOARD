import { useState } from 'react'

import SearchUsers from './SearchUserPatients/index'
import UserPatients from './UserPatients/index'

export default function SearchUpdateUsers() {
    const [users, setUsers] = useState([])

    const [alertMessage, setAlertMessage] = useState({
        success: '',
        pending: '',
        error: ''
    })

    return (
        <div className="search-user-patients">
            <SearchUsers
                setUsers={setUsers}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
            />
            <UserPatients users={users} setUsers={setUsers} />
        </div>
    )
}
