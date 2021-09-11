import { useState } from 'react'

import SearchUserPatients from './SearchUserPatients/index'
import UserPatientsList from './UserPatientsList/index'

export default function SearchUpdateUsers() {
    const [users, setUsers] = useState([])

    const [alertMessage, setAlertMessage] = useState({
        success: '',
        pending: '',
        error: ''
    })

    return (
        <div>
            <SearchUserPatients
                setUsers={setUsers}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
            />
            <UserPatientsList users={users} />
        </div>
    )
}
