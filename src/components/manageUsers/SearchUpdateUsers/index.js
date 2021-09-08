import { useState } from 'react'

import SearchUsers from './SearchUsers/SearchUsers'
import UpdateUsers from './UpdateUsers/index'

export default function SearchUpdateUsers() {
    const [users, setUsers] = useState([])

    const [alertMessage, setAlertMessage] = useState({
        success: '',
        pending: '',
        error: ''
    })

    return (
        <div className="search-update-users">
            <SearchUsers
                setUsers={setUsers}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
            />
            <UpdateUsers users={users} setUsers={setUsers} />
        </div>
    )
}
