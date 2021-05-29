import { useEffect, useState } from 'react'
import Fetch from '../utils/fetchData'

import RecentUsers from '../components/addUsers/RecentUsers'
import CreateUserForm from '../components/addUsers/CreateUserForm'

export default function AddUsers() {
    const [alertMessage, setAlertMessage] = useState({
        success: '',
        error: ''
    })

    let [latestUsers, setLatestUsers] = useState([])
    let getUsers = async () => {
        const data = await Fetch.GET('admin/users', 12)
        if (data) {
            setLatestUsers(() => data.users)
        }
    }
    useEffect(() => {
        document.getElementById('create-user-form').reset()
        getUsers()
    }, [alertMessage.success])

    return (
        <div className="add-users">
            <CreateUserForm alertMessage={alertMessage} setAlertMessage={setAlertMessage} />
            <RecentUsers users={latestUsers} />
        </div>
    )
}
