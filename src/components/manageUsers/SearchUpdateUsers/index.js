import { useState } from 'react'

import SearchUsers from './SearchUsers/index'
import UpdateUsers from './UpdateUsers/index'

export default function SearchUpdateUsers() {
    const [users, setUsers] = useState([])

    const [alertMessage, setAlertMessage] = useState({
        success: '',
        pending: '',
        error: ''
    })

    return (
        <div>
            <SearchUsers
                setUsers={setUsers}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
            />
            <UpdateUsers users={users} setUsers={setUsers} />
        </div>
    )
}
